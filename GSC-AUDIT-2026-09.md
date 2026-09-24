# Auditoría SEO + GEO — lujogas.com.co
**Fecha:** 2026-09-23 · **Fuente:** Google Search Console API (datos reales) + URL Inspection API (49 URLs) + crawl de producción
**Ventana principal:** 2026-06-23 → 2026-09-20 (90 días)

---

## 1. Estado general — los números reales

### Totales 90 días vs. 90 días anteriores

| Métrica | Actual (jun 23–sep 20) | Anterior (mar 25–jun 22) | Δ |
|---|---|---|---|
| Clicks | **76** | 27 | **+181%** |
| Impresiones | **3.928** | 436 | **+801%** |
| CTR | **1,93%** | 6,19% | **−69%** |
| Posición media | **7,1** | 6,5 | −0,6 |

### Totales 28 días vs. 28 anteriores

| Métrica | Actual | Anterior | Δ |
|---|---|---|---|
| Clicks | 38 | 27 | +41% |
| Impresiones | 2.242 | 1.179 | +90% |
| CTR | 1,69% | 2,29% | −26% |
| Posición | 7,4 | 6,8 | −0,6 |

### Impresiones por mes

| Mes | Impresiones | Clicks |
|---|---|---|
| 2026-05 | 183 | 12 |
| 2026-06 | 358 | 17 |
| 2026-07 | 452 | 9 |
| 2026-08 | **1.925** | 40 |
| 2026-09 (20 días) | 1.446 | 25 |

**Lectura:** el sitio SÍ crece. Visibilidad ×10 desde mayo. El salto de agosto es el efecto directo del fix de `cleanUrls` + reenvío de sitemap (11 ago). La caída de CTR no es un retroceso: es dilución — el sitio entró a keywords head (más impresiones, posición 5-10) donde el pack local y los anuncios se comen el clic.

**Diagnóstico de una línea:** *Google ya nos ve. No nos hace clic, y no nos indexa el 69% del sitio.*

---

## 2. Los 3 bloqueos reales para llegar a primeras posiciones

### 🔴 BLOQUEO 1 — Indexación: solo 15 de 49 URLs indexadas (31%)

Verificado URL por URL con la Inspection API:

| Estado | URLs |
|---|---|
| ✅ Enviada e indexada | **15** |
| ⚠️ Descubierta: actualmente sin indexar | **31** |
| ❌ Google no reconoce esta URL | **3** |

**Indexadas (15):** `/`, `/servicios`, `/instalacion-gas-medellin`, `/certificacion-gas-medellin`, `/mantenimiento-gas-medellin`, `/rpo-gas-medellin`, `/instalacion-gas-{medellin, envigado, itagui, laureles, sabaneta, el-poblado}`, y solo 4 artículos de blog.

**Sin indexar — lo grave:**
- **28 de 32 artículos del blog** — incluida toda la capa MOFU/BOFU que se escribió
- `/blog` (el índice del blog)
- `/nosotros` (página E-E-A-T, la que sostiene la autoridad del técnico)
- **5 páginas de zona:** `/instalacion-gas-{belen, bello, copacabana, la-estrella, robledo}`

**Nunca descubiertas (3):** `/blog/como-elegir-tecnico-gas-certificado-medellin`, `/blog/seguridad-instalaciones-gas-medellin`, `/instalacion-gas-robledo`

**Causa raíz — descartada la obvia:** no es enlazado interno. Se crawleó el grafo completo: `/blog` tiene 48 enlaces internos, `/nosotros` 48, los artículos entre 4 y 18. El enlazado está bien.

La causa es **demanda de rastreo**: "Descubierta: actualmente sin indexar" a esta escala significa que Google conoce las URLs pero considera que el dominio no tiene suficiente autoridad/señales para gastar presupuesto de indexación en 32 artículos. Dominio joven + cero backlinks externos detectados + cero señales de entidad fuera del propio dominio.

### 🔴 BLOQUEO 2 — CTR cero en las keywords comerciales que ya están en top 10

Estas keywords están en posiciones ganadoras y generan **0 clicks**:

| Keyword | Posición | Impresiones | Clicks | URL |
|---|---|---|---|---|
| certificación gas natural | 4,6 | 7 | **0** | /certificacion-gas-medellin |
| certificado de gas | 4,5 | 4 | **0** | /certificacion-gas-medellin |
| certificado del gas | 4,8 | 4 | **0** | /certificacion-gas-medellin |
| certificacion de gas | 5,1 | 7 | **0** | /certificacion-gas-medellin |
| certificación de gas domiciliario | 3,7 | 3 | **0** | /certificacion-gas-medellin |
| empresa certificadora de gas | 6,2 | 4 | **0** | /certificacion-gas-medellin |
| instalación de gas natural | 6,0 | 3 | **0** | /instalacion-gas-medellin |
| solicitar instalación de gas natural | 6,0 | 3 | **0** | /instalacion-gas-medellin |
| mantenimiento gas | 8,3 | 6 | **0** | /mantenimiento-gas-medellin |
| mantenimiento de gas natural | 7,5 | 6 | **0** | /mantenimiento-gas-medellin |
| gas itagui | 7,8 | 17 | **0** | /instalacion-gas-itagui |

En búsqueda local con intención de servicio, las posiciones 4-10 orgánicas quedan **debajo del pack local de Google Maps y los anuncios**. Sin ficha en Google Business Profile, esas posiciones valen casi cero. Este es el patrón que explica el CTR de 1,93% con posición media 7,1 (el benchmark para pos. 7 es ~3,5-4%).

### 🔴 BLOQUEO 3 — Páginas con volumen y CTR en el suelo

| URL | Impresiones | CTR | Posición |
|---|---|---|---|
| /rpo-gas-medellin | 447 | **0,45%** | 8,0 |
| /blog/telefonos-emergencia-gas-medellin-epm | 422 | **0,47%** | 6,8 |
| /mantenimiento-gas-medellin | 346 | **0,58%** | 7,4 |
| /instalacion-gas-itagui | 315 | **0,63%** | 7,6 |
| /instalacion-gas-medellin | 456 | 2,19% | 8,9 |
| /certificacion-gas-medellin | 508 | 1,97% | 5,9 |
| **/instalacion-gas-envigado** | 517 | **3,29%** | 6,3 |
| **/** (home) | 115 | **11,30%** | 6,5 |

`/instalacion-gas-envigado` es la página modelo: 3,29% de CTR a posición 6,3. Su patrón de snippet es el que hay que replicar en las demás.

`/blog/telefonos-emergencia-...` (422 impresiones, 0,47%) es tráfico informacional puro — la gente busca el número de EPM y Google se lo muestra en el propio SERP. No es reparable ni valioso comercialmente. Ignorarlo en las métricas de CTR.

---

## 3. Hallazgos secundarios

### Canibalización confirmada

| Query | URLs compitiendo | Impresiones | Mejor pos. |
|---|---|---|---|
| **ntc 2505** | 4 (`/instalacion-gas-medellin`, `/el-poblado`, `/envigado`, `/laureles`) | 81 | 9,0 |
| **ntc2505** | 4 | 13 | 8,5 |
| norma ntc 2505 | 2 | 6 | 14,0 |
| empresas autorizadas para revisión gas natural medellín | 2 (`/rpo`, `/mantenimiento`) | 21 | 10,9 |
| lujogas (marca) | **10** | ~29 | 3,4 |

"ntc 2505" es la keyword de mayor volumen individual del sitio (81+13+6 = 100 impresiones) y está repartida entre 4 landings de zona. El artículo que debería capturarla, `/blog/ntc-2505-norma-colombiana-instalaciones-gas`, **no está indexado**.

La marca "lujogas" se reparte entre 10 URLs y solo alcanza posición 3,4 — además compite con `lujogas.com` (distribuidor de herramientas para gas, empresa distinta). Riesgo de confusión de entidad.

### Demanda detectada sin página dedicada

| Query | Impresiones | Posición | Estado |
|---|---|---|---|
| empresas autorizadas para revisión gas natural medellín | 21 | 10,9 | canibalizada, sin página propia |
| instalacion red de gas | 11 | **46,6** | sin cobertura real |
| instalacion de gas | 8 | **27,2** | sin cobertura real |
| red de gas | 6 | 15,7 | cae en un artículo de blog |
| instaladores de gas certificados | 3 | 8,0 | disperso |
| rpo medellin | 5 | 10,8 | /rpo-gas-medellin |

### Distribución de posiciones (102 queries con datos)

| Rango | Queries | Impresiones |
|---|---|---|
| 1-3 | 21 | 22 |
| **4-10** | **50** | **268** |
| 11-20 | 23 | 85 |
| 21-50 | 7 | 25 |
| 50+ | 1 | 1 |

El 70% de las keywords ya está en top 10. El problema no es ranking: **es clic e indexación**.

### Otros datos

- **Mobile = 74%** de las impresiones (2.904 de 3.928). Cualquier optimización de snippet y velocidad es prioridad móvil.
- **Colombia = 96,7%** del tráfico. Geo-targeting correcto.
- Solo **102 queries únicas** con datos; el 90% de las impresiones (3.527 de 3.928) viene de long-tail anonimizado por Google. Buena señal: cobertura semántica amplia.
- **Imágenes: 42 impresiones, posición 43,3.** Búsqueda de imágenes prácticamente sin explotar.
- `sitemap-index.xml` enviado y descargado sin errores (último: 2026-09-20). 49 URLs enviadas, 0 errores, 0 advertencias.

### Estado GEO (Generative Engine Optimization)

**Lo que está bien:**
- `llms.txt` publicado, completo, con NAP, precios, hechos citables y fecha de actualización
- `robots.txt` permite explícitamente GPTBot, ClaudeBot, PerplexityBot, GoogleOther
- Schema JSON-LD completo y correcto en todas las páginas indexadas: `LocalBusiness`, `Service`, `Offer`, `FAQPage`, `BreadcrumbList`, `OpeningHoursSpecification`, `GeoCoordinates`
- Títulos ≤63 chars, meta descriptions 147-166 chars, H1 único con keyword + geo en todas las páginas verificadas

**Lo que falta:**
- **Cero menciones de la marca fuera del propio dominio.** Los LLM citan entidades que aparecen en múltiples fuentes independientes. Hoy la única fuente sobre LujoGas es lujogas.com.co.
- 28 artículos con contenido citable (precios, normas, procedimientos) **no indexados** = invisibles también para los crawlers de IA que usan el índice de Google.

---

## 4. Plan de acción — priorizado por impacto real

### P0 · Semana 1-2 — desbloquear el clic y la indexación

**1. Google Business Profile (ficha de Google Maps)** ⬅ *acción de mayor ROI del plan*
Es la causa directa del CTR cero en las keywords comerciales top-10. Crear y verificar ficha con:
- NAP idéntico a `data/site.json` y `llms.txt`: Calle 57 Sur # 65-94 (9708), Medellín, 050021 · +57 301 474 8653
- Categoría principal: *Servicio de instalación de gas*
- Área de servicio: Medellín, Envigado, Itagüí, Sabaneta, Bello, La Estrella, Copacabana
- Horario: L-V 8:00-17:00 · Sáb 8:00-12:00
- Fotos reales de trabajos + del técnico
- Objetivo: **10 reseñas en 60 días** (pedirlas por WhatsApp al cerrar cada servicio)

*Esto es trabajo fuera del repositorio — requiere acción del cliente.*

**2. Forzar indexación de las 8 URLs de mayor valor**
Solicitar indexación manual en GSC, en este orden:
1. `/nosotros` — sostiene el E-E-A-T de todo el dominio
2. `/blog/ntc-2505-norma-colombiana-instalaciones-gas` — 100 impresiones esperando dueño
3. `/instalacion-gas-bello` — 14 enlaces internos, zona con demanda
4. `/blog` — índice del blog
5. `/blog/cuanto-cuesta-certificacion-gas-medellin`
6. `/blog/rpo-gas-revision-periodica-obligatoria-colombia`
7. `/instalacion-gas-belen`
8. `/instalacion-gas-la-estrella`

**3. Recuperar las 3 URLs que Google no reconoce**
`/blog/como-elegir-tecnico-gas-certificado-medellin`, `/blog/seguridad-instalaciones-gas-medellin`, `/instalacion-gas-robledo` están en el sitemap pero nunca fueron descubiertas. Verificar que resuelven 200, que el sitemap las lista con `lastmod` reciente, y solicitar indexación manual una por una.

**4. Reducir la huella de índice**
32 artículos en un dominio sin autoridad externa compiten entre sí por presupuesto de rastreo. Consolidar o despriorizar los 8-10 artículos más débiles (los de menor enlazado interno: `activar-gas-epm-vivienda-nueva` con 2 inlinks, `guia-cuidado-red-gas-hogar` con 4, `instalacion-calentador-gas-tipos-precio` con 5). Opciones: fusionarlos en guías más fuertes o marcarlos `noindex` temporalmente hasta que el dominio gane autoridad.

### P1 · Semana 3-4 — recuperar CTR

**5. Reescribir snippets de las 4 páginas con volumen y CTR bajo**
Replicar el patrón de `/instalacion-gas-envigado` (3,29%): precio concreto + plazo + diferenciador + CTA.

| URL | CTR actual | Cambio propuesto |
|---|---|---|
| `/rpo-gas-medellin` | 0,45% | Title con "desde $120.000" al frente + "Evita suspensión EPM" en description |
| `/mantenimiento-gas-medellin` | 0,58% | Precio visita $50.000 descontable + "mismo técnico que firma" |
| `/instalacion-gas-itagui` | 0,63% | Geo al inicio del title + precio desde $850.000 |
| `/instalacion-gas-medellin` | 2,19% | Acortar title (63 chars, al límite) y subir "NTC 2505" al frente |

**6. Resolver la canibalización de "ntc 2505"**
Una vez indexado `/blog/ntc-2505-norma-colombiana-instalaciones-gas`, convertirlo en la URL canónica del tema: reducir los H2 dedicados a NTC 2505 en las 4 landings de zona a una mención + enlace interno hacia el artículo.

**7. Página nueva para demanda detectada**
`/empresas-autorizadas-revision-gas-medellin` — 21 impresiones a posición 10,9 repartidas entre dos URLs que no responden exactamente a esa intención. Es una query de comparación/verificación con intención comercial alta.

### P2 · Mes 2 — expandir cobertura

**8. Las 5 páginas de zona sin indexar valen ~1.500 impresiones/90d**
Benchmark real del propio sitio: Envigado 517, Itagüí 315, Sabaneta 303, El Poblado 158, Laureles 99 impresiones por trimestre. Indexar Bello, Belén, Copacabana, La Estrella y Robledo debería sumar entre 1.000 y 1.500 impresiones trimestrales. Requisito: contenido local único y verificable en cada una (no plantilla rellenada), porque la falta de diferenciación es parte de por qué no se indexan.

**9. Búsqueda de imágenes: 42 impresiones a posición 43**
Renombrar archivos con keyword + geo, alt text descriptivo, y `ImageObject` schema en las fotos de trabajos reales. Canal barato y hoy en cero.

### P3 · Mes 2-3 — autoridad y GEO

**10. Señales de entidad fuera del dominio** — lo único que destraba los 31 URLs "descubiertas sin indexar":
- Directorios locales colombianos (Páginas Amarillas, Cylex, directorios de Antioquia)
- Perfil en directorios de técnicos certificados / ONAC
- Menciones en foros y grupos de propiedad horizontal de Medellín
- Reseñas en Google (también alimentan las citas de IA)

---

## 5. Metas verificables a 90 días (medición: 2026-12-22)

| Métrica | Hoy | Meta | Cómo se mide |
|---|---|---|---|
| URLs indexadas | 15/49 (31%) | **42/49 (86%)** | URL Inspection API |
| Impresiones/90d | 3.928 | **12.000** | GSC totals |
| Clicks/90d | 76 | **400** | GSC totals |
| CTR | 1,93% | **3,3%** | GSC totals |
| Posición media | 7,1 | **5,0** | GSC totals |
| Keywords en top 3 | 21 | **45** | buckets de posición |
| Páginas con >10 clicks/90d | 1 | **6** | GSC pages |
| Ficha Google Business | no existe | verificada + 10 reseñas | manual |

**Hito intermedio (30 días, 2026-10-23):** indexación ≥30/49, CTR ≥2,5%, ficha GBP verificada.

---

## Anexo — reproducibilidad

Scripts usados (scratchpad de la sesión):
- `gsc_audit.py` — totales, tendencia mensual, páginas, queries, buckets, oportunidades, canibalización, dispositivos, países
- `gsc2.py` — tipos de búsqueda (web/image/news), serie diaria, estado de sitemaps
- `insp.py` — URL Inspection API sobre las 49 URLs del sitemap → `index_status.json`

Propiedad GSC: `sc-domain:lujogas.com.co` · Token: `/Users/bryanvillamil/Documents/lujogas-gsc/lujogas-gsc-token.pickle`
