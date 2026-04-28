# Site URL Map — Comfort Design
*Diccionario completo: URL producción → archivo fuente → keywords objetivo → estado GSC*
*Actualizado: marzo 2026*

---

## Cómo usar este archivo

Para cada URL del sitio, este mapa indica:
- **Archivo fuente**: qué archivo editar en el codebase
- **Campo SEO**: qué campo del frontmatter contiene el title/meta
- **Keywords objetivo**: keywords del cluster semántico que debe posicionar
- **Estado GSC**: datos reales de rendimiento
- **Gap**: qué falta para mejorar

---

## HOME

| Campo | Valor |
|---|---|
| **URL** | `https://comfortdesign.com.co/` |
| **Archivo fuente** | `src/pages/index.astro` |
| **Campo title** | Props del layout SEO (buscar en componente Head/SEO) |
| **Keywords objetivo** | diseño de interiores medellín, muebles a medida medellín, decoradores de interiores medellín |
| **GSC** | 1,421 impr, CTR 2.2%, pos ~9.8 |
| **Gap** | CTR bajo — snippet no convierte. Faltan: "interiorismo", "decoradores", "diseñadores de interiores" en H1/H2 |

---

## PÁGINAS DE SERVICIO (4)

### Closets a Medida

| Campo | Valor |
|---|---|
| **URL** | `https://comfortdesign.com.co/servicios/closets-a-medida/` |
| **Archivo fuente** | `src/content/services/closets-a-medida.md` |
| **Campo title** | `seo.metaTitle` (línea 8) |
| **Campo meta** | `seo.metaDescription` (línea 9) |
| **Title actual** | `Closets a medida | Diseño y fabricación personalizada | Comfort Design` |
| **Meta actual** | Diseño y fabricación de closets a medida y vestier personalizados... |
| **Keywords objetivo** | closet a medida medellín, fabricación de closet a medida, cotizar closet a medida, closets a medida precio |
| **GSC** | `closet a medida` → 21 impr, 0 clicks, pos 9.4 |
| **Gap** | Title no incluye "Medellín" ni precio — keyword comercial sin ciudad ni CTA |

### Cocinas a Medida

| Campo | Valor |
|---|---|
| **URL** | `https://comfortdesign.com.co/servicios/cocinas-a-medida/` |
| **Archivo fuente** | `src/content/services/cocinas-a-medida.md` |
| **Campo title** | `seo.metaTitle` |
| **Campo meta** | `seo.metaDescription` |
| **Title actual** | `Cocinas a medida | Diseño, fabricación e instalación | Comfort Design` |
| **Keywords objetivo** | cocinas a medida medellín, remodelación de cocinas medellín, cocinas personalizadas medellín |
| **GSC** | `cocinas a medida medellin` → 5 impr, 1 click, 20% CTR, pos 9.6 |
| **Gap** | Title no incluye "Medellín" — perder local intent. `cocinas personalizadas` tiene CTR 13.3% en pos 32 |

### Muebles de Baño

| Campo | Valor |
|---|---|
| **URL** | `https://comfortdesign.com.co/servicios/muebles-de-bano/` |
| **Archivo fuente** | `src/content/services/muebles-de-bano.md` |
| **Campo title** | `seo.metaTitle` |
| **Campo meta** | `seo.metaDescription` |
| **Keywords objetivo** | muebles de baño a medida medellín, mueble baño personalizado medellín |
| **GSC** | `muebles para baño a medida` → 5 impr, 1 click, 20% CTR, pos 5.0. `mueble baño personalizado` → 33.3% CTR |
| **Gap** | Mejor CTR del sitio (33%) — maximizar impr con link building y title con ciudad |

### Centros de TV

| Campo | Valor |
|---|---|
| **URL** | `https://comfortdesign.com.co/servicios/centros-de-tv/` |
| **Archivo fuente** | `src/content/services/centros-de-tv.md` |
| **Campo title** | `seo.metaTitle` |
| **Campo meta** | `seo.metaDescription` |
| **Keywords objetivo** | centros de entretenimiento medellín, diseño centro de entretenimiento, muebles para TV a medida |
| **GSC** | pos ~10.5, CTR 9.5% (segundo CTR más alto del sitio) |
| **Gap** | Replicar patrón de title de `/cocinas-a-medida-itagui/` que tiene CTR 9.6% |

---

## PÁGINAS SERVICE-CITY (32)

*Patrón de archivos: `src/content/service-city/{servicio}-{ciudad}.md`*
*Campos SEO: `meta.metaTitle` y `meta.metaDescription`*
*Página generada por: `src/pages/servicios/[service]/[city].astro`*

### Closets — 8 páginas

| URL | Archivo | Keyword objetivo | GSC conocido |
|---|---|---|---|
| `/servicios/closets-a-medida/itagui/` | `service-city/closets-a-medida-itagui.md` | closets a medida itagüí | ⭐ Modelo: CTR 9.6% |
| `/servicios/closets-a-medida/medellin/` | `service-city/closets-a-medida-medellin.md` | closet a medida medellín | sin datos GSC |
| `/servicios/closets-a-medida/envigado/` | `service-city/closets-a-medida-envigado.md` | closets a medida envigado | sin datos GSC |
| `/servicios/closets-a-medida/bello/` | `service-city/closets-a-medida-bello.md` | closets a medida bello | sin datos GSC |
| `/servicios/closets-a-medida/sabaneta/` | `service-city/closets-a-medida-sabaneta.md` | closets a medida sabaneta | sin datos GSC |
| `/servicios/closets-a-medida/laureles/` | `service-city/closets-a-medida-laureles.md` | closets a medida laureles | sin datos GSC |
| `/servicios/closets-a-medida/poblado/` | `service-city/closets-a-medida-poblado.md` | closets a medida el poblado | sin datos GSC |
| `/servicios/closets-a-medida/la-estrella/` | `service-city/closets-a-medida-la-estrella.md` | closets a medida la estrella | sin datos GSC |

### Cocinas — 8 páginas

| URL | Archivo | Keyword objetivo | GSC conocido |
|---|---|---|---|
| `/servicios/cocinas-a-medida/itagui/` | `service-city/cocinas-a-medida-itagui.md` | cocinas a medida itagüí | sin datos GSC |
| `/servicios/cocinas-a-medida/medellin/` | `service-city/cocinas-a-medida-medellin.md` | cocinas a medida medellín | sin datos GSC |
| `/servicios/cocinas-a-medida/envigado/` | `service-city/cocinas-a-medida-envigado.md` | cocinas a medida envigado | sin datos GSC |
| `/servicios/cocinas-a-medida/bello/` | `service-city/cocinas-a-medida-bello.md` | cocinas a medida bello | sin datos GSC |
| `/servicios/cocinas-a-medida/sabaneta/` | `service-city/cocinas-a-medida-sabaneta.md` | cocinas a medida sabaneta | sin datos GSC |
| `/servicios/cocinas-a-medida/laureles/` | `service-city/cocinas-a-medida-laureles.md` | cocinas a medida laureles | sin datos GSC |
| `/servicios/cocinas-a-medida/poblado/` | `service-city/cocinas-a-medida-poblado.md` | cocinas a medida el poblado | sin datos GSC |
| `/servicios/cocinas-a-medida/la-estrella/` | `service-city/cocinas-a-medida-la-estrella.md` | cocinas a medida la estrella | sin datos GSC |

### Muebles de Baño — 8 páginas

| URL | Archivo | Keyword objetivo | GSC conocido |
|---|---|---|---|
| `/servicios/muebles-de-bano/medellin/` | `service-city/muebles-de-bano-medellin.md` | muebles de baño a medida medellín | sin datos GSC |
| `/servicios/muebles-de-bano/itagui/` | `service-city/muebles-de-bano-itagui.md` | muebles de baño itagüí | sin datos GSC |
| `/servicios/muebles-de-bano/envigado/` | `service-city/muebles-de-bano-envigado.md` | muebles de baño envigado | sin datos GSC |
| `/servicios/muebles-de-bano/bello/` | `service-city/muebles-de-bano-bello.md` | muebles de baño bello | sin datos GSC |
| `/servicios/muebles-de-bano/sabaneta/` | `service-city/muebles-de-bano-sabaneta.md` | muebles de baño sabaneta | sin datos GSC |
| `/servicios/muebles-de-bano/laureles/` | `service-city/muebles-de-bano-laureles.md` | muebles de baño laureles | sin datos GSC |
| `/servicios/muebles-de-bano/poblado/` | `service-city/muebles-de-bano-poblado.md` | muebles de baño el poblado | sin datos GSC |
| `/servicios/muebles-de-bano/la-estrella/` | `service-city/muebles-de-bano-la-estrella.md` | muebles de baño la estrella | sin datos GSC |

### Centros de TV — 8 páginas

| URL | Archivo | Keyword objetivo | GSC conocido |
|---|---|---|---|
| `/servicios/centros-de-tv/medellin/` | `service-city/centros-de-tv-medellin.md` | centro de entretenimiento medellín | sin datos GSC |
| `/servicios/centros-de-tv/itagui/` | `service-city/centros-de-tv-itagui.md` | centro de entretenimiento itagüí | sin datos GSC |
| `/servicios/centros-de-tv/envigado/` | `service-city/centros-de-tv-envigado.md` | centro de entretenimiento envigado | sin datos GSC |
| `/servicios/centros-de-tv/bello/` | `service-city/centros-de-tv-bello.md` | centro de entretenimiento bello | sin datos GSC |
| `/servicios/centros-de-tv/sabaneta/` | `service-city/centros-de-tv-sabaneta.md` | centro de entretenimiento sabaneta | sin datos GSC |
| `/servicios/centros-de-tv/laureles/` | `service-city/centros-de-tv-laureles.md` | centro de entretenimiento laureles | sin datos GSC |
| `/servicios/centros-de-tv/poblado/` | `service-city/centros-de-tv-poblado.md` | centro de entretenimiento el poblado | sin datos GSC |
| `/servicios/centros-de-tv/la-estrella/` | `service-city/centros-de-tv-la-estrella.md` | centro de entretenimiento la estrella | sin datos GSC |

---

## BLOG POSTS (14)

*Patrón de archivos: `src/content/blog/{slug}.md`*
*Campos SEO: `metaTitle` y `description` en frontmatter*
*Página generada por: `src/pages/blog/[slug].astro`*

| URL | Archivo | Keywords objetivo | GSC / Notas |
|---|---|---|---|
| `/blog/como-medir-tu-espacio-para-un-closet-a-medida/` | `blog/como-medir-tu-espacio-para-un-closet-a-medida.md` | medidas de un closet, profundidad de un closet, ancho de un closet | ~3,800 impr/mes, CTR 0.3% — tráfico real sin conversión. **Prioridad máxima** |
| `/blog/closet-a-medida-medellin/` | `blog/closet-a-medida-medellin.md` | closet a medida medellín, cotizar closet a medida | reciente (mar 2026), keyword comercial |
| `/blog/cual-es-la-mejor-madera-para-clima-medellin/` | `blog/cual-es-la-mejor-madera-para-clima-medellin.md` | cual es la mejor madera para cocinas, madera para cocina resistente al agua | 14 impr, 7.1% CTR — funciona |
| `/blog/mejor-madera-para-cocinas-medellin/` | `blog/mejor-madera-para-cocinas-medellin.md` | madera para cocinas medellín, madera rh para cocinas | verificar impr GSC |
| `/blog/tendencias-muebles-2026-medellin/` | `blog/tendencias-muebles-2026-medellin.md` | muebles tendencia 2026, tendencia muebles 2026 | 39+30+14 impr en grupo 2026 |
| `/blog/tendencias-en-diseño-para-hogares-en-medellin-2025/` | `blog/tendencias-en-diseño-para-hogares-en-medellin-2025.md` | tendencias diseño interiores medellín | revisar duplicado con versión 2026 |
| `/blog/cocinas-con-isla-en-medellin/` | `blog/cocinas-con-isla-en-medellin.md` | cocinas con isla medellín, cocina con isla a medida | verificar GSC |
| `/blog/centro-entretenimiento-medellin/` | `blog/centro-entretenimiento-medellin.md` | centro de entretenimiento medellín, muebles para TV | verificar GSC |
| `/blog/ideas-para-remodelar-banos-pequenos/` | `blog/ideas-para-remodelar-banos-pequenos.md` | remodelar baños pequeños, ideas baño pequeño | verificar GSC |
| `/blog/beneficios-muebles-a-medida-vs-muebles-prefabricados-medellin/` | `blog/beneficios-muebles-a-medida-vs-muebles-prefabricados-medellin.md` | muebles a medida vs prefabricados | verificar GSC |
| `/blog/ideas-para-transformar-tu-sala-iluminacion-y-madera/` | `blog/ideas-para-transformar-tu-sala-iluminacion-y-madera.md` | ideas decoración sala, iluminación madera | verificar GSC |
| `/blog/mantener-cuidar-muebles-de-madera/` | `blog/mantener-cuidar-muebles-de-madera.md` | cómo cuidar muebles de madera, mantenimiento madera | verificar GSC |
| `/blog/la-clave-para-captar-mas-clientes-inmobiliarios/` | `blog/la-clave-para-captar-mas-clientes-inmobiliarios.md` | clientes inmobiliarios, staging inmobiliario | audiencia B2B — verificar GSC |
| `/blog/cabanas-de-lujo-en-madera/` | `blog/cabanas-de-lujo-en-madera.md` | cabañas de madera, cabañas de lujo | audiencia diferente — baja prioridad SEO |

---

## OTRAS PÁGINAS

| URL | Archivo | Notas |
|---|---|---|
| `/contacto/` | `src/pages/contacto.astro` | Página de conversión — sin necesidad SEO urgente |
| `/tienda/` | `src/pages/tienda/index.astro` | Tienda de productos — verificar GSC |
| `/proyectos/` | `src/pages/proyectos/index.astro` | Portfolio — optimizar para "proyectos de cocinas medellín" |
| `/blog/` | `src/pages/blog/index.astro` | Índice blog |
| `/servicios/` | `src/pages/servicios/index.astro` | Hub de servicios |

---

## Resumen de prioridades por archivo

### Archivos a editar en Semanas 1-2

1. `src/content/services/closets-a-medida.md` → campo `seo.metaTitle` — añadir "Medellín"
2. `src/content/services/cocinas-a-medida.md` → campo `seo.metaTitle` — añadir "Medellín"
3. `src/content/blog/como-medir-tu-espacio-para-un-closet-a-medida.md` → añadir CTA en body
4. `src/pages/index.astro` → title/meta del home — añadir "interiorismo", "decoradores"

### Archivos a editar en Semanas 3-6

5. Todos los `service-city/closets-a-medida-*.md` → revisar `meta.metaTitle` vs template ganador de Itagüí
6. Todos los `service-city/cocinas-a-medida-*.md` → aplicar fórmula CTR alto

---

*Ver `snippet-templates.md` para las fórmulas exactas de title/meta a usar en cada tipo de página.*
*Ver `internal-linking-map.md` para los enlaces internos a añadir en cada archivo.*
