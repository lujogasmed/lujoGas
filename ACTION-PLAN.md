# Plan de Acción SEO — LujoGas → Primeras Posiciones

Objetivo: multiplicar clicks, impresiones y CTR. Orden estricto por impacto/esfuerzo.
Referencias [T/C/O/S/P/G#] → `FULL-AUDIT-REPORT.md`.

---

## FASE 0 — Desbloquear medición (día 1, requiere acción tuya)

- [x] **Re-autenticar GSC**: token vigente (validado 2026-09-03). Revisar OAuth “In production” en GCP para que no caduque cada 7 días.
- [x] Correr `lujogas-reporte.py` → baseline real de clicks/impresiones/CTR/posiciones.

## FASE 1 — Críticos (semana 1) · Impacto inmediato, esfuerzo bajo

- [x] **[T3]** og:image vía Cloudinary en layout/schema + redirect `/og-image.jpg` → Cloudinary en `vercel.json`.
- [x] **[T1]** robots.txt: `Sitemap: https://lujogas.com.co/sitemap-index.xml`.
- [x] **[T2]** Eliminar `public/sitemap.xml` estático obsoleto.
- [x] **[G1]** Regenerar `llms.txt` y `llms-full.txt`: dominio `lujogas.com.co`, slugs reales, NAP, hechos citables GEO.
- [ ] **[C4]** Corregir art-21: dirección de cierre de llave (horario/¼ vuelta perpendicular) + línea emergencias EPM (604 44 44 115) y 123.
- [x] **[T4]** Redirect 301 www→non-www en Vercel (`vercel.json` incluye `/` y `/:path*`).
- [x] **[T5]** `trailingSlash: 'never'` en astro.config + unificar sitemap/canonicals.
- [ ] **[S7]** Reemplazar placeholder NIT real en `data/site.json` (postalCode 050021 ya cargado).
- [ ] **[S3]** Sincronizar horario site.json ↔ schema ↔ Google Business Profile (site/schema ya alineados L-V 8-17 / Sáb 8-12).
- [x] **[T6]** `noindex` en 404.astro.

## FASE 2 — CTR y SERP (semana 2) · Sube CTR sin subir posición

- [ ] **[O1]** Acortar titles >60: servicios (68→), instalacion (71→ "Instalación de Gas Medellín | Técnico NTC 2505"), rpo (65→).
- [ ] **[O2]** Recortar descriptions >160 a 140–160 con CTA: nosotros, instalacion, certificacion, mantenimiento, rpo.
- [ ] **[O3]** H1 rpo → "RPO en Medellín: Revisión Periódica Obligatoria de Gas".
- [ ] **[O4]** Home title: keyword primero → "Instalación de Gas en Medellín Certificada | LujoGas".
- [ ] **[O5]** H1 explícito en /servicios.
- [ ] **[S1]** `sameAs` con perfiles reales (Facebook/Instagram/Google Business Profile).
- [ ] **[S2]** Pedir reviews a clientes en Google Business Profile → cuando existan, activar `aggregateRating` real. Estrellas en SERP = mayor palanca de CTR.
- [ ] **[S4]** Article schema: `image`, `dateModified`, `wordCount`; `og:type=article` en blog.
- [ ] **[S5]** Schema `Blog`/`CollectionPage` en /blog y pillars.
- [ ] **[S6]** FAQPage en /servicios y en artículos Q&A (07, 09, 21, 23); HowTo en 10 y 21.

## FASE 3 — Contenido: la palanca principal (semanas 3–6)

- [ ] **[C1+C2] Expandir los 6 artículos MOFU a 1.200–1.800 palabras** (prioridad: 09 precios certificación, 13 precios instalación, 22 precios mantenimiento, 15 elegir técnico, 06 natural vs GLP, 12 arriendo). Cada uno: tabla de precios/comparativa, factores, proceso, FAQ 4–6 preguntas con schema, 3–5 links internos (1 a money page con anchor exacto + 2 a artículos + 1 a landing zona).
- [ ] **[C3] Resolver canibalización RPO**: fusionar art-03+08+23 en una guía definitiva que enlace a `/rpo-gas-medellin` (301 desde los slugs viejos).
- [ ] **[C3] Diferenciar pillars**: H1/title "Guía de..." + link prominente pillar→servicio + schema CollectionPage.
- [ ] **[C5] Integrar EPM en todo el blog** + escribir los 3 artículos EPM (factura, EPM vs independiente, activación servicio).
- [ ] **[C6+C7] Citar fuentes oficiales con link externo** (Res. 90902/2013, NTC 2505, ONAC, EPM) y corregir atribución normativa art-08.
- [ ] **[C7]** `updatedDate` en schema Zod + página/bio de autor enlazable + `readingTime` calculado real.
- [ ] **[C8]** `coverImage` + `coverAlt` en los 28 artículos (fotos reales de trabajos = E-E-A-T Experience).
- [ ] **[C9]** Consolidar solapados: art-01/20/21 diferenciarlos por ángulo; art-03 vs 19 fusionar o re-enfocar.
- [ ] **[G3]** Tablas comparativas extraíbles en art-05, 06, 14, 17 + bloques definición citables (GEO).

## FASE 4 — Arquitectura y links (semanas 5–8)

- [ ] **[O6]** Homepage: sección con links directos a las 4 money pages (anchors con keyword).
- [ ] **[O7]** Landings [zona]: +300 palabras únicas por zona (sectores, casos, particularidades) + link a página madre. Si no es viable: consolidar con canonical a `/instalacion-gas-medellin`.
- [ ] **[O8]** Anchors con keyword en todos los links internos.
- [ ] Cross-linking blog↔zonas↔servicios: cada artículo ≥3 links internos contextuales.
- [ ] Related posts cross-pillar (tags, no solo pillar).

## FASE 5 — Performance y nuevos contenidos (mes 2–3)

- [ ] **[P1]** Video hero: `poster` + `preload="metadata"` (o `preload="none"` + play on visible). −2.86 MB en LCP móvil.
- [ ] **[P2]** Recortar fuentes a 2 familias / ≤5 pesos.
- [ ] **[P4]** `client:idle` en WhatsAppFloat.
- [ ] **[P3]** Migrar `<img>` a `<Image/>` donde aplique.
- [ ] Publicar artículos nuevos por gap (orden por volumen esperado): calentador no enciende, emergencia gas teléfono, conexión estufa, gasodomésticos, certificado venta vivienda, monóxido de carbono, serie zonas (Envigado/Sabaneta/Bello/Itagüí), propiedad horizontal, pipeta vs natural fincas. Ritmo: 2/semana, fechas naturales.

## FASE 6 — Medición continua

- [ ] Revisión GSC quincenal: striking distance (pos 5–20) → optimizar titles/content de esas URLs.
- [ ] Queries con impresiones altas + CTR <2% → reescribir title/description.
- [ ] Reviews GBP continuas (meta: 15+ con texto y fotos).
- [ ] Validar rich results (FAQ, estrellas, breadcrumbs) en Search Console.

---

## Impacto esperado por palanca

| Palanca | Métrica que mueve | Magnitud |
|---|---|---|
| og:image + reviews/estrellas + titles/descriptions | **CTR** | 2–5× en queries existentes |
| Sitemap/llms.txt dominio correcto | Impresiones + citas IA | Desbloquea GEO completo |
| Expansión blog 240→1.500 palabras + internal linking | **Posiciones + impresiones** | La palanca más grande — hoy el blog casi no rankea |
| Resolver canibalización | Posiciones money pages | Consolida señales dispersas |
| Artículos EPM + gaps | **Impresiones nuevas** | Keywords de alto volumen sin cubrir |
| Landings zona enriquecidas | Posiciones locales | Long-tail "gas + barrio" |
