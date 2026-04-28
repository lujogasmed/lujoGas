# seo-gsc — Qué es y para qué sirve

Conecta directamente a Google Search Console via API y trae datos reales de `comfortdesign.com.co`: clicks, impresiones, CTR y posición. No estima — lee los datos de Google.

## Conexión

Usa una service account de Google guardada en:
```
/Users/bryanvillamil/Documents/comfort-design-443921-0b0d92bc2dc8.json
```
Sin ese archivo, el skill no funciona. No moverlo al repo.

## Comandos y resultados

| Comando | Para qué | Resultado |
|---|---|---|
| `rendimiento últimos X días` | Ver cómo va el sitio en un período | Clicks, impr, CTR, posición + comparativo vs período anterior |
| `/seo-gsc dashboard` | Panorama general 90 días | Top páginas, tendencia, patrones de CTR alto/bajo |
| `/seo-gsc oportunidades` | Encontrar qué optimizar hoy | Lista de keywords en pos 5-20 con más impr y gap de CTR — ordenadas por ROI |
| `/seo-gsc pagina /url/` | Entender qué buscan los usuarios de una página | Todas las queries reales con clicks e impr — revela intención real y canibalización |
| `/seo-gsc brief [keyword]` | Crear o mejorar contenido con datos reales | Brief con keywords detectadas, intención, estructura H1/H2 sugerida y CTA |

## A qué resultados lleva

- Saber qué páginas tienen tráfico pero no convierten → optimizar su snippet
- Encontrar keywords que Google ya posiciona en página 2 → empujarlas a página 1
- Detectar qué buscan realmente los usuarios de cada página → mejorar el contenido
- Generar briefs de contenido basados en datos reales, no suposiciones

## Assets de contexto (en `/assets/`)

| Archivo | Qué aporta |
|---|---|
| `semantic-clusters.md` | 317 keywords agrupadas con datos GSC históricos |
| `seo-priorities.md` | Baseline del sitio + roadmap de acciones por semana |
| `site-url-map.md` | URL → archivo del codebase → keyword objetivo |
| `snippet-templates.md` | Fórmulas de title/meta basadas en CTR alto real |
| `schema-templates.md` | JSON-LD listos para Astro con gaps identificados |
| `internal-linking-map.md` | Qué páginas enlazar hacia dónde y con qué anchor |
