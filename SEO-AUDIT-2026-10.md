# Auditoría SEO + GEO + competencia — lujogas.com.co
**Fecha:** 2026-10-21 · **Fuentes:** GSC API (datos al 2026-10-19), URL Inspection API (52 URLs), crawl de producción, SERP y sitios de competidores en Medellín.

---

## 1. Estado real (GSC)

| Ventana | Clicks | Impresiones | CTR | Posición |
|---|---|---|---|---|
| 28d actual | **130** | **8.153** | 1,59% | 6,6 |
| 28d anterior | 39 | 2.349 | 1,66% | 7,4 |
| 90d actual | 199 | 11.692 | 1,70% | 6,8 |

| Mes | Impr | Clicks |
|---|---|---|
| ago | 1.925 | 40 |
| sep | 4.048 | 64 |
| oct (19 días) | **5.551** | **91** |

**Indexación:** 40/52 indexadas (en sep: 15/49). Pendientes:
- *URL desconocida (3):* `/blog/cuanto-cuesta-instalar-gas-casa-medellin`, `/blog/calentador-gas-no-enciende-causas-soluciones`, `/blog/que-revisa-tecnico-certificado-inspeccion-gas` — las 3 responden 200 y tienen 5-7 enlaces internos. Solicitar indexación manual.
- *Rastreada sin indexar (1):* `/nosotros` — página E-E-A-T. Google la leyó y la descartó → falta contenido único (ver §3).
- *Descubierta sin indexar (8):* certificacion-gas-para-arriendo, instalacion-calentador-gas, instalacion-gas-apartamento-vs-casa, instalacion-gas-residencial-comercial, mantenimiento-preventivo-gas, rpo-gas-revision-periodica-obligatoria, seguridad-instalaciones-gas, senales-red-gas-mantenimiento-urgente.

**Diagnóstico:** visibilidad ×3,5 en un mes; el cuello de botella ya no es la indexación sino el **clic** (CTR 1,6% a pos. 6,6; benchmark ~4-5%).

---

## 2. Hallazgos técnicos

| # | Hallazgo | Impacto | Fix |
|---|---|---|---|
| T1 | `robots.txt` tiene `Disallow: /_astro/` → Googlebot no puede descargar el CSS (2 hojas por página) ni JS. Google renderiza las páginas sin estilos. | Alto: evaluación móvil/layout degradada, posible señal de baja calidad | Borrar la línea en `public/robots.txt` |
| T2 | `/nosotros` "Rastreada: sin indexar" | Alto (E-E-A-T de todo el dominio) | Añadir contenido verificable único: nº de certificado de competencia laboral/SIC, organismo ONAC que respalda, fotos reales de obras, casos, años de experiencia, zonas atendidas |
| T3 | Sin `aggregateRating` ni reseñas (comentario en `src/lib/schema.ts:166`) | Alto en CTR local | Depende de Google Business Profile con reseñas reales |
| T4 | `sameAs` vacío; cero menciones de marca fuera del dominio | Alto en GEO | GBP, Facebook/Instagram, directorios locales (Páginas Amarillas, Cylex, Habitissimo) con NAP idéntico |
| T5 | Cluster "cuánto vale la revisión del gas" (26 queries, 88 impr, 1 clic) aterriza en `/blog/cuanto-cuesta-mantenimiento-gas-medellin` → intención desalineada | Medio-alto | Artículo nuevo #1 (§5) |
| T6 | `/mantenimiento-gas-medellin`: "mantenimiento de gas" 42 impr en pos. 20,3; el H1 habla de RPO/revisión/fugas | Medio | H1 y primer párrafo centrados en mantenimiento (estufa, calentador, red); RPO solo enlazada |
| T7 | Cluster fugas: 67 queries, 152 impr, **0 clics**; `/blog/como-detectar-fuga-gas-casa` CTR 0,2% | Medio | Nuevo H2 "Fuga de gas dentro de la pared" + snippet nuevo (autocomplete confirma demanda) |
| T8 | `llms.txt` no tiene la tarifa oficial EPM 2026 de RPO | Bajo-medio GEO | Añadir tabla de tarifas EPM con fuente |

### CTR — páginas con más impresiones y peor clic (90d)

| URL | Impr | CTR | Pos |
|---|---|---|---|
| /instalacion-gas-medellin | 1.190 | 1,09% | 7,9 |
| /blog/cuanto-cuesta-mantenimiento-gas-medellin | 706 | 0,85% | 6,4 |
| /rpo-gas-medellin | 682 | 0,59% | 7,7 |
| /mantenimiento-gas-medellin | 672 | 0,89% | 8,6 |
| /blog/activar-gas-epm-vivienda-nueva-medellin | 613 | 0,82% | 6,8 |
| /blog/como-detectar-fuga-gas-casa | 511 | 0,20% | 8,0 |
| /instalacion-gas-itagui | 468 | 0,85% | 7,4 |
| /instalacion-gas-bello | 108 | 0% | 6,6 |

Modelos que funcionan: `/` (17,1%), `/instalacion-gas-envigado` (3,15%), `/blog/ntc-2505-...` (2,97%, 1.347 impr — la página nº1 del sitio).

---

## 3. Competencia en Medellín

| Competidor | Qué hace bien | Qué no tiene (nuestra ventaja) |
|---|---|---|
| **accegas.com.co** | Programático servicio × municipio (`/servicios/instalacion-redes-gas/antioquia/medellin`), H2 con keyword, FAQ, "15 años", "técnicos SENA", garantía 3 meses, cita Res. 90902/2013 | Sin precios, texto plantilla repetido, sin autor, sin blog técnico |
| **revisionperiodica.co** ("Aliados EPM") | Ataca RPO: enlace a consulta de fecha de revisión EPM, venta de reparación de **defectos críticos**, cifras de confianza (20.000 reparaciones, 15.000 clientes), sello ONAC | Sin precios, sin blog |
| **netgas.com.co** | Gasodomésticos (estufa, calentador, horno, secadora), sección monóxido de carbono, garantía 90 días, teléfono fijo | Sin contenido normativo, sin zonas |
| **oigas.co** | Organismo de inspección (RPO) | Solo revisión |
| SERP informacional (fugas, tuberías) | Dominada por sitios de España/MX (xatakahome, papernest, sensorautomotriz) | **Nadie local** — hueco para contenido Medellín/EPM |

**Qué traer:**
1. **Garantía explícita** con plazo (ellos dicen 3 meses / 90 días) en landings y snippets.
2. **Cifras de confianza** arriba del pliegue (ya tenemos 3.000+ certificaciones; sumar años y reseñas GBP).
3. **Bloque "Consulta cuándo te toca la revisión"** con enlace a la herramienta oficial de EPM — es lo que posiciona a revisionperiodica.co.
4. **Venta de corrección de defectos críticos** como servicio con nombre propio (hoy disperso en mantenimiento).
5. **Monóxido de carbono** como ángulo de seguridad de calentadores (netgas lo usa).
6. **Nada de programático tipo accegas**: ya tenemos 11 zonas con contenido único; más páginas plantilla = riesgo de índice inflado.

**Ventaja que ninguno tiene:** precios publicados, autor identificado (técnico), schema completo, blog normativo indexado, `llms.txt`. Explotarla en GEO.

---

## 4. Plan priorizado

### P0 — esta semana
1. Quitar `Disallow: /_astro/` de `public/robots.txt` (T1).
2. Solicitar indexación manual: 3 URLs desconocidas + `/nosotros` tras reforzarla (T2).
3. **Google Business Profile** verificado + pedir reseña por WhatsApp tras cada servicio (meta 10 en 60 días). Sigue siendo la palanca nº1 del CTR local.

### P1 — 2 semanas
4. Publicar los 3 artículos de §5.
5. Reescribir snippet + H2 de `/blog/como-detectar-fuga-gas-casa` (fuga en pared) y `/instalacion-gas-medellin` (garantía + precio + "certificado incluido").
6. H1 de `/mantenimiento-gas-medellin` → mantenimiento (T6).
7. Consolidar: 301 de `/blog/rpo-gas-revision-periodica-obligatoria-colombia` (no indexada) → artículo nuevo #1; evaluar fusionar `instalacion-gas-apartamento-vs-casa` + `instalacion-gas-residencial-comercial` (no indexadas) en el artículo #2.

### P2 — mes
8. Citaciones NAP en 5 directorios + `sameAs`.
9. `aggregateRating` cuando haya reseñas GBP reales.
10. `llms.txt` / `llms-full.txt` con tarifas EPM 2026 y enlaces a los 3 artículos nuevos.

---

## 5. Los 3 artículos a crear

Elegidos por: demanda real en GSC/autocomplete sin página que la atienda bien, cercanía a un servicio que vende (lead), y datos únicos citables por IA.

### #1 — Revisión de gas EPM 2026: cuánto vale, plazos y qué pasa si no la haces
- **Slug:** `/blog/revision-gas-epm-precio-2026`
- **Keyword:** cuánto vale la revisión del gas EPM 2026 · variantes: revisión gas EPM, cuánto vale la revisión del gas cada 5 años, la revisión periódica tiene costo, valor revisión periódica gas natural
- **Demanda probada:** 26 queries / 88 impr en 90d hoy mal atendidas (pos 5-9, 1 clic) + autocomplete "revision gas epm", "cuanto vale la revisión del gas epm 2026".
- **Datos citables (fuente EPM):** residencial $127.392 + IVA = **$151.596**; no residencial **$239.363**; industria pequeña/mediana/grande $1.092.102 / $1.638.152 / $2.457.232; línea matriz $18.112 por usuario; suspensión $67.000 + reconexión $67.000; reconexión no autorizada $532.000; aviso 5 meses antes; plazo mínimo/máximo; defecto crítico = suspensión inmediata y la reparación la hace personal con competencia laboral.
- **Estructura:** tabla de tarifas → qué incluye → cronograma (aviso, plazo mínimo, máximo) → defecto crítico vs no crítico → cuánto cuesta corregir (precios LujoGas) → cómo agendar (EPM 604 444 4115 / WhatsApp 302 300 0115 / organismo ONAC) → FAQ.
- **Funnel/intent:** bofu / comercial · CTA a `/rpo-gas-medellin`.
- **Canibalización:** la landing `/rpo-gas-medellin` vende; este artículo responde precio/procedimiento. Absorbe la RPO informacional de art-08 (301).

### #2 — Instalación de red de gas domiciliaria: proceso, planos, materiales y aprobación EPM
- **Slug:** `/blog/instalacion-red-gas-domiciliaria-proceso`
- **Keyword:** instalación red de gas domiciliaria · variantes: instalación red de gas, instalación red de gas EPM, instalación de red de gas natural, plano instalación red de gas domiciliaria Colombia, redes de gas
- **Demanda probada:** cluster "instalación/red de gas" 17 queries / 85 impr, 0 clics, con "instalacion red de gas" en pos **44** — Google no encuentra una página de proceso; la landing transaccional no le sirve.
- **Estructura:** 8 pasos (visita → diseño/plano isométrico → materiales NTC → trazado → prueba de hermeticidad → ventilación → certificación → habilitación EPM) con tiempos; tabla de materiales; apartamento vs casa; subsidio "Unidos por el Gas" (estratos 1-3) y financiación EPM; errores que reprueban la certificación; FAQ.
- **Funnel/intent:** mofu / educativa · CTA a `/instalacion-gas-medellin`.
- **Consolidación:** absorbe `instalacion-gas-apartamento-vs-casa` y `instalacion-gas-residencial-comercial` (ambas sin indexar) vía 301.

### #3 — Monóxido de carbono por calentador a gas: síntomas, causas y ventilación según NTC 3631
- **Slug:** `/blog/monoxido-carbono-calentador-gas`
- **Keyword:** calentador de gas monóxido de carbono · variantes: monóxido de carbono calentadores, calentador de gas en el baño, qué calentadores producen monóxido, síntomas intoxicación gas
- **Demanda:** autocomplete confirma; SERP sin contenido colombiano. Tema YMYL de seguridad → señal E-E-A-T fuerte con autor técnico. Muy citable por IA (síntomas, umbrales, checklist).
- **Estructura:** qué es y por qué el calentador lo genera → síntomas por nivel → prohibición calentador en baño/dormitorio → ventilación NTC 3631 (rejillas, volumen del recinto) → tiro natural vs forzado vs estanco → señales (llama amarilla, hollín) → detector de CO → qué hacer en intoxicación (123) → FAQ.
- **Funnel/intent:** mofu / informacional + seguridad · CTA a mantenimiento y a `/blog/instalacion-calentador-gas-tipos-precio`.

Cada artículo: ≥1.800 palabras, FAQ en frontmatter, tabla con datos, ≥5 enlaces internos, autor Luis Guillermo Muñoz Vélez, fuentes oficiales enlazadas (EPM, CREG, ICONTEC), mensaje de WhatsApp prellenado según intención.
