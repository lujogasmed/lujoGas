# Internal Linking Map — Comfort Design
*Estrategia de enlazado interno para distribuir autoridad hacia páginas de conversión*
*Actualizado: marzo 2026*

---

## Principio de autoridad en el sitio

Basado en datos GSC (impr/clicks), las páginas con más visibilidad son:

| Página | Impr/mes | Autoridad actual |
|---|---|---|
| Home `/` | ~6,700 | 🟢 Máxima — 1,421 impr solo en "diseño de interiores" |
| Blog "medidas closet" | ~3,800 | 🟢 Alta — tráfico informacional real |
| Blog "tendencias 2026" | ~300 | 🟡 Media — subiendo |
| Blog "madera para cocinas" | ~100 | 🟡 Media |
| Servicios (closets, cocinas, baño, TV) | ~60 | 🔴 Baja — las más importantes, las menos enlazadas desde el contenido |

**Problema crítico:** Las páginas de servicio (`/servicios/closets-a-medida/`) reciben poca autoridad interna porque el blog informacional (alta visibilidad) no enlaza hacia ellas de forma estratégica.

---

## Enlace faltante más crítico: Blog closet → Servicio closet

### Situación
- `blog/como-medir-tu-espacio-para-un-closet-a-medida` → ~3,800 impr/mes, CTR 0.3%
- `/servicios/closets-a-medida/` → 21 impr, 0 clicks en keyword comercial

### Enlace a agregar
**Archivo:** `src/content/blog/como-medir-tu-espacio-para-un-closet-a-medida.md`
**Dónde:** Al final del artículo (paso 7 o sección "¿Listo para tu closet?")
**Anchor text:** `closets a medida en Medellín`
**Destino:** `/servicios/closets-a-medida/`

```markdown
## ¿Ya tienes las medidas? Es hora de cotizar

Con estas medidas en mano, estás listo para fabricar tu [closet a medida en Medellín](/servicios/closets-a-medida/).
En Comfort Design diseñamos y fabricamos closets personalizados desde el plano hasta la instalación.

**[Solicita tu cotización gratis →](/contacto/)**
```

**ROI esperado:** Mover la autoridad de 3,800 impr/mes hacia la página comercial que más necesita posicionar.

---

## Mapa completo de enlaces por cluster

---

### Cluster Closets — flujo de autoridad

```
Blog medidas closet (3,800 impr) ──────────→ /servicios/closets-a-medida/
Blog closet a medida medellín (nuevo)  ────→ /servicios/closets-a-medida/
                                              └──→ /servicios/closets-a-medida/itagui/
                                              └──→ /servicios/closets-a-medida/medellin/
Home  ──────────────────────────────────────→ /servicios/closets-a-medida/
```

**Acciones concretas:**

| Archivo fuente | Anchor text | URL destino | Estado |
|---|---|---|---|
| `blog/como-medir-tu-espacio-para-un-closet-a-medida.md` | `closets a medida en Medellín` | `/servicios/closets-a-medida/` | 🔴 FALTA |
| `blog/como-medir-tu-espacio-para-un-closet-a-medida.md` | `cotiza tu closet a medida` | `/contacto/` | 🔴 FALTA |
| `blog/closet-a-medida-medellin.md` | `closets a medida en Itagüí` | `/servicios/closets-a-medida/itagui/` | verificar |
| `blog/closet-a-medida-medellin.md` | `closets a medida en Envigado` | `/servicios/closets-a-medida/envigado/` | verificar |
| `src/content/services/closets-a-medida.md` (citiesBlock) | Enlace a 8 ciudades | `/servicios/closets-a-medida/{ciudad}/` | ✅ Existe via componente |

---

### Cluster Cocinas — flujo de autoridad

```
Blog cocinas con isla (verificar impr) ──→ /servicios/cocinas-a-medida/
Blog mejor madera cocinas (14 impr) ─────→ /servicios/cocinas-a-medida/
Blog madera para cocinas medellín ───────→ /servicios/cocinas-a-medida/
Home  ───────────────────────────────────→ /servicios/cocinas-a-medida/
```

**Acciones concretas:**

| Archivo fuente | Anchor text | URL destino | Estado |
|---|---|---|---|
| `blog/cual-es-la-mejor-madera-para-clima-medellin.md` | `cocinas a medida en Medellín` | `/servicios/cocinas-a-medida/` | 🔴 verificar si existe |
| `blog/mejor-madera-para-cocinas-medellin.md` | `cocinas a medida en Medellín` | `/servicios/cocinas-a-medida/` | 🔴 verificar si existe |
| `blog/cocinas-con-isla-en-medellin.md` | `diseño de cocinas a medida` | `/servicios/cocinas-a-medida/` | 🔴 verificar si existe |
| `blog/cocinas-con-isla-en-medellin.md` | `cocinas a medida en Itagüí` | `/servicios/cocinas-a-medida/itagui/` | 🔴 FALTA |

---

### Cluster Baños — flujo de autoridad

```
Blog ideas baños pequeños ────────────────→ /servicios/muebles-de-bano/
Home  ───────────────────────────────────→ /servicios/muebles-de-bano/
```

**Acciones concretas:**

| Archivo fuente | Anchor text | URL destino | Estado |
|---|---|---|---|
| `blog/ideas-para-remodelar-banos-pequenos.md` | `muebles de baño a medida en Medellín` | `/servicios/muebles-de-bano/` | 🔴 verificar |
| `blog/ideas-para-remodelar-banos-pequenos.md` | `muebles de baño personalizados` | `/servicios/muebles-de-bano/medellin/` | 🔴 FALTA |

---

### Cluster Centros de TV — flujo de autoridad

```
Blog centro entretenimiento medellín ────→ /servicios/centros-de-tv/
Blog ideas sala iluminación madera ──────→ /servicios/centros-de-tv/
Home  ───────────────────────────────────→ /servicios/centros-de-tv/
```

**Acciones concretas:**

| Archivo fuente | Anchor text | URL destino | Estado |
|---|---|---|---|
| `blog/centro-entretenimiento-medellin.md` | `centros de entretenimiento a medida` | `/servicios/centros-de-tv/` | 🔴 verificar |
| `blog/ideas-para-transformar-tu-sala-iluminacion-y-madera.md` | `muebles para TV a medida en Medellín` | `/servicios/centros-de-tv/` | 🔴 verificar |

---

### Cluster Madera/Materiales — flujo hacia blogs de expertise

```
Servicio cocinas ─────→ blog madera para cocinas (señal de expertise)
Servicio closets ─────→ blog medir espacio closet (señal de utilidad)
Blog tendencias 2026 ─→ blog madera medellín (relacionados)
```

**Acciones concretas:**

| Archivo fuente | Anchor text | URL destino | Propósito |
|---|---|---|---|
| `services/cocinas-a-medida.md` (sección materiales) | `mejor madera para cocinas en Medellín` | `/blog/cual-es-la-mejor-madera-para-clima-medellin/` | E-E-A-T: mostrar expertise |
| `services/closets-a-medida.md` (sección intro) | `cómo medir tu espacio para un closet` | `/blog/como-medir-tu-espacio-para-un-closet-a-medida/` | UX + autoridad bidireccional |
| `blog/tendencias-muebles-2026-medellin.md` | `madera para cocinas en Medellín` | `/blog/cual-es-la-mejor-madera-para-clima-medellin/` | Enlace entre posts del mismo cluster |

---

## Reglas de enlazado interno

### 1. Anchor text — qué usar

| Tipo de enlace | Anchor text ideal | Evitar |
|---|---|---|
| Blog → Servicio | keyword comercial: "closets a medida en Medellín" | "clic aquí", "ver más", "aquí" |
| Servicio → Blog | keyword informacional: "cómo medir tu espacio" | Anchor genérico |
| Servicio → Servicio ciudad | nombre de ciudad: "closets en Itagüí" | URL cruda |
| Blog → Contacto | CTA: "cotiza tu closet a medida" | "contáctanos" genérico |

### 2. Posición en la página

- **CTAs de conversión** (servicio, cotización): al final del artículo o en sección dedicada
- **Anclas de credibilidad** (otros posts, expertise): dentro del cuerpo del texto, primer o segundo párrafo
- **Navegación de ciudades**: en componentes de ciudad (`citiesBlock`) — ya existe en servicios

### 3. Cantidad de enlaces por página

- Blog posts: máximo 3-4 enlaces internos salientes (no saturar)
- Páginas de servicio: sin límite para ciudades (son navegación esperada)
- El mismo destino no debe aparecer más de 2 veces en la misma página

---

## Diagnóstico de páginas huérfanas

Páginas que probablemente no reciben enlaces internos desde el contenido:

| Página huérfana | Riesgo | Solución |
|---|---|---|
| `/servicios/muebles-de-bano/` | Alto — el servicio con mejor CTR (33%) no recibe autoridad blog | Agregar enlace desde blog de baños |
| `/servicios/centros-de-tv/` | Medio — existe blog específico pero puede no enlazar | Verificar blog centros entretenimiento |
| `/servicios/closets-a-medida/itagui/` (y otras ciudades) | Medio — páginas de ciudad difíciles de enlazar naturalmente | Incluir en blogs cuando se mencionen proyectos locales |

---

## Quick wins de enlazado (implementar en semana 1-2)

1. **`blog/como-medir-tu-espacio-para-un-closet-a-medida.md`**
   → Añadir CTA al final: "¿Listo para cotizar tu closet? [Solicita cotización gratuita aquí](/contacto/)"
   → Añadir enlace contextual: "...fabricar tu [closet a medida en Medellín](/servicios/closets-a-medida/)"

2. **`blog/cual-es-la-mejor-madera-para-clima-medellin.md`**
   → Añadir al final: "Usamos estos materiales en todas nuestras [cocinas a medida en Medellín](/servicios/cocinas-a-medida/)"

3. **`blog/ideas-para-remodelar-banos-pequenos.md`**
   → Añadir al final: "Diseñamos [muebles de baño a medida](/servicios/muebles-de-bano/) para aprovechar espacios reducidos"

Estos 3 cambios son ediciones simples al cuerpo del markdown de cada post, sin tocar código.
