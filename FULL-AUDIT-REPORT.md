# Auditoría SEO Completa — LujoGas (lujogas.com.co)

**Fecha:** 2026-07-14 · **Alcance:** 9 páginas + 28 artículos blog + sitio en producción + código fuente
**SEO Health Score: 58/100**

| Categoría | Score | Peso |
|---|---|---|
| Technical SEO | 62/100 | 25% |
| Content Quality | 38/100 | 25% |
| On-Page SEO | 70/100 | 20% |
| Schema / Structured Data | 68/100 | 10% |
| Performance (CWV) | 65/100 | 10% |
| Imágenes | 45/100 | 5% |
| AI Search Readiness (GEO) | 40/100 | 5% |

---

## Resumen Ejecutivo

**Fortalezas confirmadas (producción):** 46/46 URLs del sitemap responden 200, HSTS + redirect 308 http→https, 404 real, JSON-LD válido en todas las páginas, H1 únicos, 41–73 links internos por página, GTM activo, TTFB ~0.3s, buen robots.txt con permisos explícitos a GPTBot/ClaudeBot/PerplexityBot.

**El problema central NO es técnico — es de contenido y de 3 errores de dominio que sabotean todo:**

### Top 5 Críticos
1. **`og:image` roto en TODO el sitio** — `https://lujogas.com.co/og-image.jpg` → 404. Ningún share de WhatsApp/Facebook muestra imagen. Gravísimo: el canal de conversión ES WhatsApp.
2. **robots.txt apunta el sitemap a dominio ajeno** — `Sitemap: https://lujogas.com/sitemap.xml` (lujogas.com NO es del proyecto, es un Apache de terceros).
3. **llms.txt entero con dominio equivocado** — 33 referencias a `lujogas.com`, 0 a `lujogas.com.co` + ~20 URLs de blog inexistentes (404). Cualquier IA (ChatGPT, Perplexity) que lo cite envía tráfico a un dominio de terceros. **Anula la estrategia GEO completa.**
4. **Blog: thin content sistémico** — 24/24 artículos con 210–430 palabras (promedio ~240). Competidores rankean con 1.200–2.000. `readingTime` declarado (5–8 min) es falso (~1–2 min real).
5. **Blog: CERO links internos en el cuerpo** — 24/24 artículos sin un solo link a money pages ni entre artículos. El blog no transfiere autoridad a las páginas de servicio.

### Top 5 Quick Wins (menos de 1 hora c/u, impacto alto)
1. Crear y subir `og-image.jpg` real (1200×630).
2. Corregir línea Sitemap en robots.txt → `https://lujogas.com.co/sitemap-index.xml`.
3. Regenerar llms.txt con dominio correcto y slugs reales del blog.
4. Redirect 301 www → non-www en Vercel.
5. Corregir error de seguridad en art-21 (dirección de cierre de llave de gas) + añadir línea emergencias EPM.

---

## 1. Technical SEO

### Crítico
- **[T1] robots.txt → sitemap dominio ajeno** (`public/robots.txt` línea 27): `https://lujogas.com/sitemap.xml`. Google puede ignorar el sitemap real.
- **[T2] `public/sitemap.xml` estático obsoleto**: solo 3 URLs y con dominio `lujogas.com`. Convive con el `sitemap-index.xml` generado por Astro (46 URLs, correcto). Eliminar el estático.
- **[T3] og:image 404 en todas las páginas** (`src/lib/schema.ts:10` y meta OG del layout).

### Alto
- **[T4] www.lujogas.com.co responde 200 sin redirect** — contenido duplicado (mitigado por canonical, pero requiere 301 en Vercel).
- **[T5] Trailing slash inconsistente**: sitemap con `/`, canonicals sin `/`, ambas variantes 200. Fijar `trailingSlash: 'never'` en `astro.config.mjs` + redirect en Vercel.
- **[T6] 404.astro sin `noindex`**.

### Medio
- **[T7] Dos archivos llms**: `llms.txt` (7.9KB) + `llms-full.txt` (12KB), ambos desactualizados y con dominio incorrecto.
- **[T8] GTM noscript comentado con placeholder GTM-XXXXXXX** (`src/layouts/BaseLayout.astro:109-110`). GA4 sí activo (G-3W417FXZJX) pero `data/site.json` tiene `ga4Id: "[PENDIENTE]"` — centralizar.

---

## 2. Datos GSC — BLOQUEADO (acción tuya requerida)

Token OAuth **revocado** (`invalid_grant`, expiró 2026-05-21). Causa probable: app OAuth en modo "Testing" → Google invalida refresh tokens a los 7 días. No hay service account (el skill asume uno que no existe).

**Para desbloquear:**
1. Corregir rutas en `/Users/bryanvillamil/Documents/lujogas-gsc/lujogas-auth.py`:
   - `CLIENT_FILE` → `/Users/bryanvillamil/Documents/lujogas-gsc/lujogas-oauth-client.json`
   - `TOKEN_FILE` → `/Users/bryanvillamil/Documents/lujogas-gsc/lujogas-gsc-token.pickle`
2. Ejecutar `python3 lujogas-auth.py` y autorizar en navegador.
3. **Fix permanente:** GCP Console → proyecto `lujogas` → OAuth consent screen → publicar "In production" (o crear service account + agregarlo como usuario en GSC).
4. Script listo en `/tmp/gsc_lujogas_report.py` para extraer todo el análisis con números reales.

Sin GSC no se puede medir el baseline de clicks/impresiones/CTR ni priorizar por striking distance. **Es el primer paso del plan.**

---

## 3. Content Quality (Blog) — el mayor freno

- **[C1] Thin content 24/24**: 210–430 palabras. Ninguno cubre la intención completa (ej: "cuánto cuesta certificación" sin tabla de precios, factores, ni FAQ).
- **[C2] 0 links internos en body 24/24**: viola regla CLAUDE.md (≥3 links/página).
- **[C3] Canibalización directa contra money pages:**
  - art-03 + art-08 + art-23 vs `/rpo-gas-medellin` (3 artículos compitiendo por "RPO gas")
  - art-09 vs `/certificacion-gas-medellin` · art-13 vs `/instalacion-gas-medellin` · art-22 vs `/mantenimiento-gas-medellin`
  - Los 4 pillars `.astro` del blog usan H1/title casi idénticos a las páginas de servicio.
- **[C4] Error factual de SEGURIDAD en art-21**: instruye cerrar la llave "en sentido contrario a las manecillas del reloj" — incorrecto (válvulas estándar cierran en sentido horario / perpendicular ¼ vuelta). Artículo de emergencia con instrucción peligrosa.
- **[C5] EPM: 0 menciones en todo el blog**. EPM es EL distribuidor de gas en Medellín ("revisión gas EPM" = búsqueda masiva). Art-21 no da la línea de emergencias de EPM.
- **[C6] Precisión normativa dudosa**: art-08 atribuye RPO a "CREG 067 de 1995" (vigente: Res. 90902/2013 Minminas). ONAC (acreditador real de organismos de inspección) no se menciona nunca.
- **[C7] E-E-A-T incompleto**: autor con bio breve ✅ pero sin página de autor, sin `dateModified`, sin `image` en Article schema, **cero enlaces externos a fuentes oficiales** (Icontec, CREG, Minminas, EPM, ONAC).
- **[C8] Sin imágenes**: `coverImage`/`coverAlt` sin usar en los 24. Cero rich results.
- **[C9] Solapamiento interno**: art-01/20/21 comparten 40–50% de sustancia; art-03 vs art-19 misma intención; art-02/04/05 repiten lista NTC 2505 tres veces.
- **[C10] Fechas en ráfaga artificial** (2/día, 27-may→7-jun) — patrón de contenido masivo detectable.

---

## 4. On-Page SEO

- **[O1] Titles >60 chars**: `/servicios` (68), `/instalacion-gas-medellin` (71), `/rpo-gas-medellin` (65).
- **[O2] Descriptions >160 chars** (Google trunca): nosotros (172), instalacion (169), certificacion (179), mantenimiento (166), rpo (163).
- **[O3] H1 débil en `/rpo-gas-medellin`**: "RPO en Medellín" — sin "gas" ni "revisión periódica obligatoria".
- **[O4] Home title inicia con marca** ("LujoGas — ...") en vez de keyword (regla CLAUDE.md).
- **[O5] `/servicios` sin H1 explícito**.
- **[O6] Homepage sin links directos a las 4 money pages** (instalacion/certificacion/mantenimiento/rpo) — solo anclas a `/servicios#*`.
- **[O7] Páginas [zona] (11 landings) riesgo doorway**: ~85% contenido boilerplate compartido, sin link a página madre. Necesitan ≥300 palabras únicas por zona o consolidación.
- **[O8] Anchor text genérico** en links internos ("Conoce al técnico →").

---

## 5. Schema / Structured Data

- **[S1] LocalBusiness sin `sameAs`** (social profiles comentados, `src/lib/schema.ts:128-131`).
- **[S2] Sin `aggregateRating`** (comentado) — sin estrellas en SERP; competidores con reviews ganan CTR.
- **[S3] Horario inconsistente**: site.json dice L-V 8-5 / Sáb 8-12; schema dice L-Sáb 7-18. Google Business Profile debe coincidir.
- **[S4] Article schema incompleto**: sin `image`, `wordCount`, `dateModified`; `og:type=website` en artículos (debe ser `article`).
- **[S5] `/blog` sin schema `Blog`/`CollectionPage`**; pillars con schema `Article` incorrecto.
- **[S6] Sin FAQPage en `/servicios`** ni en artículos con estructura Q&A natural (07, 09, 21, 23); art-10 y 21 son HowTo naturales.
- **[S7] NAP con placeholders**: `postalCode: "[PENDIENTE]"`, `nit: "[PENDIENTE]"` en `data/site.json`.

---

## 6. Performance

- **[P1] Video hero 2.86 MB sin `poster` ni `preload="metadata"`** — autoplay fuerza descarga completa en cada visita. Daña LCP móvil. (CLAUDE.md exige poster + preload metadata.)
- **[P2] 3 familias de fuentes, 9 pesos** (Bebas Neue + Plus Jakarta Sans×5 + Rajdhani×3) — recortable.
- **[P3] `<img>` crudo en vez de `<Image/>` de astro:assets** (Cloudinary mitiga, pero sin srcset responsivo).
- **[P4] `WhatsAppFloat client:load`** → cambiar a `client:idle`.
- **[P5] HTML 90–113 KB por página** — aceptable pero recortable.

---

## 7. AI Search Readiness (GEO)

- **[G1] llms.txt saboteado** (dominio equivocado + URLs fantasma) — ver Crítico #3.
- **[G2] Bueno**: H2 en formato pregunta, respuestas answer-first en varios artículos, robots.txt permite bots de IA.
- **[G3] Falta**: tablas comparativas extraíbles (gas natural vs GLP, tipos tubería, apto vs casa), bloques de definición citables, FAQs con schema, y profundidad suficiente para ser citado.

---

## 8. Gaps de contenido (keywords sin cubrir)

| Tema nuevo | Keyword | Intención |
|---|---|---|
| Revisión de gas en factura EPM | "revisión gas EPM factura" | Informacional alto volumen |
| Revisión EPM vs organismo independiente | "revisión gas EPM precio" | Comercial |
| Emergencias gas Medellín: a quién llamar | "emergencia gas Medellín teléfono" | Emergencia |
| Conexión estufa a gas | "conexión estufa gas Medellín" | Transaccional |
| Gasodomésticos | "instalación gasodomésticos Medellín" | Comercial |
| Certificado gas para venta vivienda | "certificado gas venta casa Medellín" | Comercial |
| Monóxido de carbono | "intoxicación monóxido carbono gas" | TOFU |
| Serie zonas (enlazando a landings [zona]) | "instalación gas Envigado/Sabaneta/Bello" | Transaccional local |
| Activación servicio post-certificación | "activar servicio gas Medellín" | Informacional |
| Calentador no enciende | "calentador de gas no enciende" | Alto volumen → correctivo |
| Gas en propiedad horizontal | "instalación gas propiedad horizontal" | Comercial |
| Pipeta vs gas natural fincas | "gas propano finca Antioquia" | Comercial |

Ver `ACTION-PLAN.md` para el plan priorizado de ejecución.
