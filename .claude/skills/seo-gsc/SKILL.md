---
name: seo-gsc
description: >
  Google Search Console real-data analysis for Comfort Design (comfortdesign.com.co).
  Connects live to GSC API via service account to fetch clicks, impressions, CTR and
  position data. Use when user says "/seo-gsc", "keywords de oportunidad", "datos de
  Search Console", "qué páginas optimizo", "brief con datos reales", "cómo va el sitio
  en Google", "qué buscan los usuarios", or "rendimiento en buscadores".
metadata:
  author: comfort-design-local
  type: local
  site: comfortdesign.com.co
  property: sc-domain:comfortdesign.com.co
---

# seo-gsc — Google Search Console para Comfort Design

Skill que extrae datos reales de Google Search Console para `comfortdesign.com.co`
y los convierte en decisiones SEO accionables. Siempre trabaja con datos frescos de la API.

## Credenciales

```
SA_FILE = "/Users/bryanvillamil/Documents/comfort-design-443921-0b0d92bc2dc8.json"
PROPERTY = "sc-domain:comfortdesign.com.co"
SCOPES   = ["https://www.googleapis.com/auth/webmasters.readonly"]
```

Autenticación base reutilizable en todos los flujos:

```python
from google.oauth2 import service_account
from googleapiclient.discovery import build

creds   = service_account.Credentials.from_service_account_file(SA_FILE, scopes=SCOPES)
service = build("searchconsole", "v1", credentials=creds)
```

---

## Comandos

| Comando | Descripción |
|---|---|
| `/seo-gsc dashboard` | Métricas globales del sitio en los últimos 90 días |
| `/seo-gsc oportunidades` | Keywords en posición 5-20 con mayor potencial de mejora |
| `/seo-gsc pagina [url]` | Todas las queries reales de una URL específica |
| `/seo-gsc brief [keyword]` | Brief de contenido basado en datos reales de GSC |

---

## FLUJO 1: `/seo-gsc dashboard`

```python
from datetime import date, timedelta
import json

end   = date.today()
start = end - timedelta(days=90)

r = service.searchanalytics().query(
    siteUrl=PROPERTY,
    body={"startDate": str(start), "endDate": str(end), "dimensions": [], "rowLimit": 1}
).execute()

# Top páginas
pages = service.searchanalytics().query(
    siteUrl=PROPERTY,
    body={
        "startDate": str(start), "endDate": str(end),
        "dimensions": ["page"], "rowLimit": 10,
        "orderBy": [{"fieldName": "clicks", "sortOrder": "DESCENDING"}]
    }
).execute()

row = r.get("rows", [{}])[0]
print(json.dumps({
    "period": f"{start} → {end}",
    "totals": {
        "clicks":      row.get("clicks", 0),
        "impressions": row.get("impressions", 0),
        "ctr":         round(row.get("ctr", 0) * 100, 2),
        "position":    round(row.get("position", 0), 1)
    },
    "top_pages": [
        {"url": p["keys"][0], "clicks": p["clicks"], "impressions": p["impressions"],
         "ctr": round(p["ctr"]*100,2), "position": round(p["position"],1)}
        for p in pages.get("rows", [])
    ]
}, indent=2, ensure_ascii=False))
```

**Qué analizar y presentar:**
- Tendencia vs. período anterior (comparar últimos 90 vs. 90 anteriores)
- Páginas con mejor CTR → patrones a replicar
- Páginas con más impresiones pero bajo CTR → optimización urgente de snippet
- Posición promedio: si sube = Google mejora la autoridad

---

## FLUJO 2: `/seo-gsc oportunidades`

Aplica el framework de oportunidades: keywords posición 5-20, mínimo 5 impresiones.
Son las de mayor ROI porque Google ya las reconoce — solo necesitan empuje.

```python
from datetime import date, timedelta
import json

end   = date.today()
start = end - timedelta(days=90)

r = service.searchanalytics().query(
    siteUrl=PROPERTY,
    body={
        "startDate": str(start), "endDate": str(end),
        "dimensions": ["query", "page"], "rowLimit": 1000
    }
).execute()

rows = r.get("rows", [])

oportunidades = []
for row in rows:
    pos = row["position"]
    impr = row["impressions"]
    ctr_real = row["ctr"]

    if 4.5 <= pos <= 20 and impr >= 5:
        # CTR esperado por posición (benchmark industry)
        ctr_esperado = {5:0.065, 6:0.050, 7:0.040, 8:0.033, 9:0.027, 10:0.022}.get(
            int(pos), 0.015 if pos < 15 else 0.008
        )
        gap = round((ctr_esperado - ctr_real) * 100, 2)

        oportunidades.append({
            "keyword":      row["keys"][0],
            "url":          row["keys"][1],
            "position":     round(pos, 1),
            "impressions":  impr,
            "clicks":       row["clicks"],
            "ctr":          round(ctr_real * 100, 2),
            "ctr_esperado": round(ctr_esperado * 100, 2),
            "ctr_gap":      gap,
            "prioridad":    "🔴 URGENTE" if pos <= 10 and gap > 2 else
                            "🟡 MEDIA"   if pos <= 15 else "🟢 BAJA"
        })

oportunidades.sort(key=lambda x: x["impressions"], reverse=True)
print(json.dumps(oportunidades[:30], indent=2, ensure_ascii=False))
```

**Qué hacer con los resultados (ver `assets/kw-methodology.md`):**
- 🔴 URGENTE + URL existe → optimizar title, H1, meta description de esa URL
- 🔴 URGENTE + no hay URL clara → crear landing page o artículo dedicado
- 🟡 MEDIA + CTR gap alto → reescribir snippet con diferenciador comercial
- 🟢 BAJA → backlog para calendario editorial

---

## FLUJO 3: `/seo-gsc pagina [url]`

Extrae todas las queries reales de una URL. Revela la intención real de los usuarios
y descubre keywords secundarias que el contenido no cubre todavía.

```python
from datetime import date, timedelta
import json, sys

PAGE = sys.argv[1] if len(sys.argv) > 1 else input("URL (ej: /blog/closet-a-medida-medellin/): ")
end   = date.today()
start = end - timedelta(days=90)

r = service.searchanalytics().query(
    siteUrl=PROPERTY,
    body={
        "startDate": str(start), "endDate": str(end),
        "dimensions": ["query"],
        "dimensionFilterGroups": [{
            "filters": [{"dimension": "page", "operator": "contains", "expression": PAGE}]
        }],
        "rowLimit": 100
    }
).execute()

rows = r.get("rows", [])
queries = [
    {
        "query":       row["keys"][0],
        "clicks":      row["clicks"],
        "impressions": row["impressions"],
        "ctr":         round(row["ctr"] * 100, 2),
        "position":    round(row["position"], 1)
    }
    for row in rows
]
queries.sort(key=lambda x: x["impressions"], reverse=True)
print(json.dumps({"page": PAGE, "total_queries": len(queries), "queries": queries}, indent=2, ensure_ascii=False))
```

**Análisis a hacer:**
- Query #1 → ¿es la keyword objetivo del artículo? Si no, el H1 está desalineado
- Queries con 0 clicks pero muchas impresiones → snippet no responde a esa intención
- Queries que no están cubiertas en el contenido → agregar nuevos H2s
- Queries inesperadas → revelan qué percibe Google de esa página (puede ser canibalización)

**Integrar con:** `seo-page` pasando la URL para análisis on-page completo con contexto de datos reales.

---

## FLUJO 4: `/seo-gsc brief [keyword]`

Genera un brief accionable para crear o mejorar contenido, basado en cómo Google
ya percibe el sitio para esa keyword y sus variantes.

```python
from datetime import date, timedelta
import json, sys

TARGET = " ".join(sys.argv[1:]) if len(sys.argv) > 1 else input("Keyword objetivo: ")
terms  = TARGET.lower().split()
end    = date.today()
start  = end - timedelta(days=90)

r = service.searchanalytics().query(
    siteUrl=PROPERTY,
    body={
        "startDate": str(start), "endDate": str(end),
        "dimensions": ["query", "page"], "rowLimit": 1000
    }
).execute()

rows = r.get("rows", [])

# Queries relacionadas semánticamente con el target
related = [
    {
        "query":       row["keys"][0],
        "url":         row["keys"][1],
        "impressions": row["impressions"],
        "clicks":      row["clicks"],
        "ctr":         round(row["ctr"] * 100, 2),
        "position":    round(row["position"], 1)
    }
    for row in rows
    if any(t in row["keys"][0].lower() for t in terms) and row["impressions"] >= 2
]
related.sort(key=lambda x: x["impressions"], reverse=True)
print(json.dumps({"target": TARGET, "related": related[:25]}, indent=2, ensure_ascii=False))
```

**Con los datos obtenidos, generar brief con esta estructura:**

```
## Brief: [keyword]

### Contexto GSC
- Impresiones actuales: X (período: últimos 90 días)
- Posición actual: X | CTR: X%
- URL que posiciona hoy: [si existe]
- Queries relacionadas detectadas: [lista top 5]

### Intención de búsqueda detectada
[Comercial / Informacional / Mixta — basado en las queries del GSC]

### Keywords a cubrir en el contenido
- Principal: [keyword]
- Variantes detectadas en GSC: [lista con impr]
- Preguntas detectadas: [queries en forma de pregunta]

### Estructura sugerida
- H1: [propuesta]
- H2: [uno por variante o pregunta significativa]
- FAQ: [preguntas reales de GSC]

### CTA recomendado
[Según intención: cotizar / WhatsApp / formulario / descargar]

### URL objetivo
[/servicios/... para intención comercial | /blog/... para informacional]

### Notas técnicas
- Longitud mínima recomendada: [800 MOFU / 1200 BOFU]
- Incluir precio si aplica (aumenta CTR en keywords comerciales locales)
- Geo-targeting: mencionar Medellín, Itagüí, Envigado en primeros 100 palabras
```

---

## Integración con otros skills del proyecto

```
/seo-gsc oportunidades  →  seo-content   : optimización on-page de páginas existentes
/seo-gsc pagina [url]   →  seo-page      : análisis profundo con datos reales de contexto
/seo-gsc brief [kw]     →  seo-plan      : planificación editorial basada en datos
/seo-gsc dashboard      →  seo-technical : correlacionar drops de métricas con cambios técnicos
```

**Flujo recomendado mensual:**
1. `/seo-gsc dashboard` → ver tendencia general
2. `/seo-gsc oportunidades` → identificar qué optimizar este mes
3. `/seo-gsc pagina [top-url]` → profundizar en las mejores páginas
4. `/seo-gsc brief [kw-oportunidad]` → generar contenido para las gaps detectadas
