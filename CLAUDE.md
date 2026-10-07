# CLAUDE.md — LujoGas Landing Page

> Archivo de contexto para Claude Code. Leer antes de cualquier tarea de desarrollo.

---

## 1. Visión del Proyecto

**LujoGas** es una landing page profesional para una empresa de instalación, mantenimiento y certificación de redes de gas en Medellín, Colombia.

**Objetivo primario:** Convertir visitas orgánicas locales en contactos vía WhatsApp (leads directos).
**Objetivo secundario:** Posicionarse en búsquedas locales de Medellín y el área metropolitana, en Google, Google Maps y motores de IA (ChatGPT, Perplexity). Los cambios de contenido se evalúan por su efecto en esa visibilidad (SEO local + GEO).
**Tono de marca:** Confianza técnica, profesionalismo certificado, cercanía local.

### Meta SEO/GEO — Norte del proyecto

**El único KPI que importa: aparecer primero cuando alguien en Medellín busca "instalación gas", "certificación gas", "técnico gas" — en Google Y en IA.**

#### Reglas SEO obligatorias en cada tarea de desarrollo
1. **Toda página tiene H1 único** con keyword principal + "Medellín" en las primeras palabras.
2. **Títulos `<title>` ≤ 60 chars**, keyword primaria al inicio.
3. **Meta descriptions 140–160 chars**, incluir keyword + CTA + "Medellín".
4. **Schema JSON-LD obligatorio** en toda página: `LocalBusiness` en layout, `BreadcrumbList` y schema específico por página.
5. **Alt text en todas las imágenes** — descriptivo + keyword cuando sea natural.
6. **Internal linking intencional** — cada página debe tener ≥ 3 links a otras páginas del sitio.
7. **NAP consistente** (Name, Address, Phone) en footer, schema y toda mención pública. Usar siempre datos de `data/site.json`.
8. **Keywords locales en el contenido** — mencionar barrios (El Poblado, Laureles, Envigado...) y "Valle de Aburrá" donde aporten contexto real; la repetición forzada cuenta como keyword stuffing.
9. **No crear contenido genérico** — cada párrafo debe tener intención de búsqueda clara.
10. **`llms.txt` en raíz** — mantener actualizado para citabilidad en IA (GEO).

#### Intención de búsqueda por página
| Página | Keyword principal | Intención |
|--------|-------------------|-----------|
| `/` | instalación gas Medellín | Comercial/transaccional |
| `/servicios` | servicios gas Medellín | Comercial |
| `/nosotros` | técnico certificado gas Medellín | Informacional/E-E-A-T |
| `/instalacion-gas-medellin` | instalación gas Medellín | Transaccional |
| `/certificacion-gas-medellin` | certificación gas Medellín | Transaccional |
| `/mantenimiento-gas-medellin` | mantenimiento gas Medellín | Transaccional |
| `/rpo-gas-medellin` | RPO gas Medellín | Transaccional |
| `/empresas-autorizadas-revision-gas-medellin` | empresas autorizadas revisión gas Medellín | Comercial/verificación |
| `/instalacion-gas-[zona]` | instalación gas {zona} | Transaccional local (datos en `src/data/zonas.ts`) |
| `/blog/*` | según frontmatter `intent`/`funnel` | Informacional (colección `src/content/blog`) |

---

## 2. Stack Tecnológico

### Framework principal
- **Astro 4.x** — Framework principal. Genera HTML estático por defecto (SSG). Ideal para SEO y performance.
- **React 18** — Usado únicamente para componentes interactivos (`client:load`, `client:visible`). No usar React donde Astro puro sea suficiente.

### Estilos
- **Tailwind CSS 3.x** — Utility-first. Configurado en `tailwind.config.mjs`.
- No usar CSS-in-JS. CSS personalizado solo en `src/styles/global.css` o scoped en componentes Astro.

### Animaciones
- **GSAP (GreenSock)** — Para animaciones complejas: hero, scroll-triggered, timelines.
  - Usar `ScrollTrigger` plugin para animaciones activadas por scroll.
  - Instanciar siempre dentro de `useEffect` (React) o `<script>` en Astro con `is:inline`.
- CSS puro (`@keyframes`) — Para micro-animaciones simples: pulso WhatsApp, fade-in suaves.

### Librerías utilitarias
- `@astrojs/react` — Integración oficial React + Astro.
- `@astrojs/sitemap` — Generación automática de sitemap.xml para SEO.
- `astro:assets` — Optimización de imágenes. Usar `<Image />` de Astro para imágenes locales.
- `sharp` — Dependencia de procesamiento de imágenes.

### Fuentes
- Google Fonts vía `<link>` en `BaseLayout.astro`, con preload de las críticas.
- Familias definidas en `tailwind.config.mjs` → `fontFamily`: `display` (Bebas Neue), `body` (Plus Jakarta Sans), `mono` (Rajdhani). Ese archivo es la fuente de verdad.

### Análitica / Tracking
- **Google Analytics 4** vía `gtag.js` directo en `BaseLayout.astro` (ID en `data/site.json`). GTM aún no configurado (`gtmId: [PENDIENTE]`).
- Evento de conversión: clic en enlace WhatsApp.

### SEO
- Meta tags completos en cada página vía componente `<SEO />` o `Astro.head`.
- Open Graph + Twitter Card.
- JSON-LD Schema: `LocalBusiness` con dirección Medellín, teléfono, servicios.
- `robots.txt` y `sitemap.xml` generados en build.

---

## 3. Arquitectura de Componentes — Atomic Design

Todos los componentes siguen la metodología **Atomic Design** de Brad Frost, organizada en 5 niveles:

| Nivel | Descripción | Ejemplos |
|-------|-------------|----------|
| **Atoms** | Elementos UI mínimos e indivisibles | `Button`, `Icon`, `Badge`, `Input`, `Logo`, `Heading` |
| **Molecules** | Combinación de 2+ átomos con una función específica | `ServiceCard`, `TrustBadge`, `NavLink`, `ContactField` |
| **Organisms** | Secciones completas compuestas por moléculas/átomos | `Header`, `Footer`, `HeroSection`, `ServicesGrid`, `CoverageMap` |
| **Templates** | Layouts que definen la estructura de página sin contenido real | `BaseLayout.astro` |
| **Pages** | Instancias concretas de templates con contenido final | `index.astro` |

### Reglas de Atomic Design

1. **Los átomos NO deben depender de otros componentes propios.** Solo reciben props y renderizan UI.
2. **Las moléculas combinan átomos.** No deben acceder a contexto global ni hacer fetch de datos.
3. **Los organismos pueden componer moléculas y átomos**, y sí pueden tener lógica de layout o datos.
4. **Cada componente debe ser autocontenido y reutilizable.** Si solo sirve en un lugar, evaluar si realmente necesita ser un componente separado.
5. **Nombrar los componentes según su nivel** cuando no sea obvio. La estructura de carpetas ya lo comunica.

---

## 4. Responsive Design — Reglas Obligatorias

**Todo componente, sección y página DEBE ser 100% responsive.** Sin excepciones.

### Enfoque Mobile-First

- Escribir siempre los estilos base para **mobile (375px)** primero.
- Usar los breakpoints de Tailwind para escalar hacia arriba:
  - `sm:` → 640px
  - `md:` → 768px
  - `lg:` → 1024px
  - `xl:` → 1280px
  - `2xl:` → 1536px

### Breakpoints de validación obligatoria

Antes de dar por terminado cualquier componente, verificar que se vea correcto en:
- **375px** — iPhone SE / móviles pequeños
- **768px** — Tablets
- **1024px** — Laptops pequeñas
- **1280px** — Desktop estándar
- **1536px** — Pantallas grandes

### Reglas de Tailwind para responsive

- **SIEMPRE usar clases de Tailwind** para estilos. No escribir CSS custom salvo excepciones justificadas en `global.css`.
- **No usar valores fijos en px** para anchos o alturas de contenedores. Usar `w-full`, `max-w-7xl`, `min-h-screen`, etc.
- **Grids y Flexbox:** Usar `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3` para layouts que cambian por breakpoint.
- **Tipografía responsive:** Usar clases como `text-2xl md:text-4xl lg:text-5xl` para escalar textos.
- **Espaciado responsive:** `p-4 md:p-8 lg:p-12` — siempre ajustar padding/margin por breakpoint.
- **Imágenes:** Siempre `w-full h-auto` o con `object-cover` + contenedor con aspect ratio.
- **Touch targets:** Botones y links interactivos mínimo `min-h-[44px] min-w-[44px]` en mobile.
- **Contenedores:** Usar `container mx-auto px-4 md:px-6 lg:px-8` como wrapper estándar de secciones.
- **Ocultar/mostrar:** Usar `hidden md:block` o `md:hidden` para elementos que cambian entre dispositivos.
- **No usar `!important`** en clases Tailwind salvo caso extremo documentado.

### Política de estilos — Tailwind First (Regla Obligatoria)

**Tailwind es la única fuente de estilos por defecto.** CSS nativo se permite solo en casos muy acotados.

#### Reglas duras

1. **Todo estilo nuevo se escribe con clases de Tailwind.** Sin excepciones para layout, espaciado, tipografía, colores, bordes, sombras, transiciones simples, hover/focus, responsive y estados.
2. **No se crean archivos `.css` nuevos.** No `*.module.css`, no `<style>` scoped en componentes Astro/React, no `styled-components`, no CSS-in-JS.
3. **CSS nativo permitido solo en estos casos (excepciones justificadas):**
   - Animaciones complejas con `@keyframes` que Tailwind no puede expresar de forma limpia (ej: timelines multi-step, llama del hero, pulsos compuestos).
   - Variables CSS globales de diseño (tokens en `:root`) dentro de `src/styles/global.css`.
   - Integraciones con librerías externas que requieren selectores específicos (ej: overrides puntuales de GSAP, Lottie, embeds de terceros).
   - Reglas globales ineludibles (`html`, `body`, reset, `prefers-reduced-motion` a nivel de documento).
4. **Toda excepción vive en `src/styles/global.css`.** No dispersar CSS en otros archivos.
5. **Animaciones simples → Tailwind + `tailwind.config.mjs`.** Fade, slide, scale, pulse básico, transiciones: extender `theme.extend.animation` y `theme.extend.keyframes` antes de escribir CSS suelto.
6. **Si existe una utilidad de Tailwind que resuelve el caso, se usa Tailwind.** Prohibido reinventar con CSS lo que Tailwind ya ofrece.
7. **Valores arbitrarios de Tailwind (`w-[37px]`, `bg-[#FF6B1A]`) permitidos** cuando no exista token en el `theme`, pero preferir extender el theme si el valor se repite.
8. **Migración obligatoria de CSS existente:** cuando se edite un archivo que contenga CSS custom evitable, se debe migrar a Tailwind en el mismo cambio. No dejar CSS legado conviviendo con Tailwind en el mismo componente.
9. **Revisión:** antes de commitear, si aparece un bloque `<style>` o una clase CSS nueva, justificar por qué no se pudo hacer con Tailwind (en el PR o como comentario corto en el código).

#### Checklist antes de escribir CSS nativo

- [ ] ¿Existe una clase de Tailwind que lo resuelve?
- [ ] ¿Puedo resolverlo extendiendo `tailwind.config.mjs` (`theme.extend`)?
- [ ] ¿Es una animación tan compleja que `keyframes` + `animation` utility no basta?
- [ ] ¿Es un token global o un override inevitable de una librería?

Si las primeras dos respuestas son "no" y las últimas dos "sí", entonces CSS nativo en `global.css` está justificado. En cualquier otro caso: **Tailwind**.

---

## 5. Estructura de Carpetas

```
lujogas/
├── data/                        # site.json (NAP, GA4, WhatsApp), services.json, coverage.json, trust.json
├── public/
│   ├── robots.txt, favicon.*, manifest.webmanifest
│   └── llms.txt, llms-full.txt  # GEO
├── scripts/gen-lastmod.mjs      # prebuild: fechas lastmod reales del sitemap
├── src/
│   ├── components/
│   │   ├── atoms/       # Button, EyebrowLabel, GeoMeta, Logo, WhatsAppIcon, WhatsAppButton.tsx
│   │   ├── molecules/   # ServiceCard, TrustBadge, StatCounter, ComunaList
│   │   ├── organisms/   # Header, Footer, HeroSection, ServicesGrid, TrustSection, CoverageSection, CTASection
│   │   └── react/       # WhatsAppFloat.tsx (único componente React con estado)
│   ├── content/         # config.ts (schema zod del blog) + blog/*.md
│   ├── data/            # zonas.ts, zonasDetalle.ts, lastmod.json (generado)
│   ├── layouts/BaseLayout.astro   # head, GA4, fuentes, SEO base, LocalBusiness
│   ├── pages/           # index, servicios, nosotros, *-gas-medellin, rpo-gas-medellin,
│   │                    # empresas-autorizadas-…, instalacion-gas-[zona], blog/, 404
│   ├── styles/global.css
│   └── lib/
│       ├── constants.ts # re-exporta data/site.json + WHATSAPP_URL
│       └── schema.ts    # generadores JSON-LD
│
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
└── CLAUDE.md                     # Este archivo
```

---

## 6. Secciones de la Landing (orden y propósito)

### 6.1 Hero — Animación Fogón Encendiendo
**Componente:** `src/components/organisms/HeroSection.astro`

**Animación decidida:** Video MP4 en autoplay silenciado de un quemador de gas encendiéndose. Fondo oscuro, llama azul/naranja. Ícono de unmute discreto. Sin sonido automático. El copy aparece cuando la llama está estable, el CTA de WhatsApp aparece al final.

- Video servido desde Cloudinary (URL en `HeroSection.astro`) + poster como fallback.
- Copy principal: **"Instalamos tu red de gas con certificación oficial"**
- Subheadline: **"Servicio técnico especializado en Medellín y área metropolitana"**
- CTA principal: botón WhatsApp → `https://wa.me/57XXXXXXXXX?text=...`
- Altura: `100vh`. Fondo oscuro con overlay para legibilidad del texto.
- El texto aparece en fade cuando la llama está estable (~60% del video).
- CTA aparece al final del video (~90%).

**Accesibilidad:** `prefers-reduced-motion` → mostrar imagen estática del fogón encendido, sin animación.

### 6.2 Servicios de Gas
**Componente:** `src/components/molecules/ServiceCard.astro` (en `organisms/ServicesGrid.astro`)

Servicios a listar (con ícono SVG):
1. Instalación de redes de gas residencial
2. Instalación de redes de gas comercial
3. Mantenimiento preventivo y correctivo
4. Certificación de instalaciones (Icontec / norma técnica)
5. Revisión de fugas y diagnóstico
6. Conexión de electrodomésticos a gas

Cada card: ícono + título + descripción breve (2 líneas) + micro-CTA "Solicitar servicio".

**Animación:** `ScrollTrigger` fade + slide-up en stagger al entrar en viewport.

### 6.3 Por Qué Elegirnos / Confianza
**Componente:** `src/components/molecules/TrustBadge.astro` (en `organisms/TrustSection.astro`)

Elementos de confianza:
- Técnicos certificados por entidades colombianas (Gas Natural, EPM, Icontec)
- +X años de experiencia en Medellín
- Garantía escrita en trabajos
- Atención en menos de 24 horas
- Materiales certificados Norma Técnica Colombiana (NTC)

Visual: badges/íconos de certificación + contador animado de clientes/proyectos.

### 6.4 Cobertura en Medellín
**Componente:** `src/components/organisms/CoverageSection.astro`

- Mapa estático o embed Google Maps centrado en Medellín.
- Lista de comunas/barrios cubiertos: El Poblado, Laureles, Envigado, Bello, Itagüí, Sabaneta, etc.
- Texto SEO: "Instalación de gas en [barrio]" repetido estratégicamente.

### 6.5 CTA / Contacto WhatsApp
Sección dedicada pre-footer:
- Headline de urgencia/beneficio
- Botón WhatsApp grande con número visible
- Horario de atención

### 6.6 Footer con SEO local
- Logo + nombre empresa
- Dirección Medellín (para SEO local)
- Teléfono en texto (indexable)
- Links internos (si hay más páginas en el futuro)
- Copyright + RUT/NIT empresa
- Schema JSON-LD `LocalBusiness`

---

## 7. Paleta de Colores

Tokens de color en `tailwind.config.mjs` → `theme.extend.colors` (`primary`, `secondary`, `tertiary`, `background`, `whatsapp`, `hero-*`, `flame.*`…). Usar esos nombres; no hardcodear hex.

---

## 8. WhatsApp CTA — Especificaciones

`src/lib/constants.ts` exporta `WHATSAPP_NUMBER`, `WHATSAPP_MESSAGE` y `WHATSAPP_URL` leyendo `data/site.json`. Importar de ahí; nunca escribir el número en componentes. Cada CTA puede abrir un mensaje prellenado acorde al contexto (instalación, mantenimiento, certificación, zona).

**Botón flotante** (sticky, bottom-right):
- Ícono WhatsApp SVG oficial verde
- Animación: `pulse` CSS suave cada 3s
- `z-index: 9999`
- En mobile: tamaño mínimo 56x56px (touch target)
- Tracking GA4: evento `whatsapp_click` con label de sección origen

---

## 9. SEO Local — Reglas

### Keywords objetivo
- "instalación gas Medellín"
- "certificación redes gas Medellín"
- "técnico gas Medellín"
- "instalación gas El Poblado / Laureles / Envigado"
- "mantenimiento gas residencial Medellín"

### Clusters de keywords (research base)
- **Instalación:** instalacion de gas medellin · instalar gas en apartamento medellin · tecnico de gas medellin
- **Certificación:** certificacion de gas medellin · quien certifica redes de gas en medellin
- **Mantenimiento / urgencias:** mantenimiento red de gas medellin · fuga de gas medellin · tecnico de gas urgente medellin
- **Por zona (long tail):** instalacion gas el poblado · certificacion gas envigado · revision gas itagui

Las landings `/instalacion-gas-[zona]` atacan el cluster por zona; la home y las landings `*-medellin`, los demás.

### Implementación técnica
- `<title>`: "Instalación y Certificación de Gas en Medellín | LujoGas"
- `<meta name="description">`: Incluir "Medellín", servicio principal, diferenciador.
- H1 único: Debe incluir keyword principal.
- H2/H3: Incluir variaciones de keywords locales.
- Alt text en imágenes: descriptivo + keyword cuando sea natural.
- URL canónica: `https://lujogas.com.co/...` sin slash final (`site` + `trailingSlash: 'never'` en `astro.config.mjs`).

### JSON-LD
Generadores en `src/lib/schema.ts`; `LocalBusiness` se inyecta en `BaseLayout.astro` con NAP de `data/site.json`.

---

## 10. Performance — Reglas

- **Core Web Vitals objetivo:** LCP < 2.5s, CLS < 0.1, INP < 200ms.
- Imágenes: siempre `<Image />` de `astro:assets`. Formato WebP/AVIF automático.
- Video hero: preload `metadata` únicamente. No autoload completo.
- Fonts: `font-display: swap`. Preload de los 2 pesos críticos.
- GSAP: importar solo los módulos necesarios (`gsap/ScrollTrigger`, no bundle completo).
- React components: usar `client:visible` cuando sea posible (lazy hydration).
- Sin librerías de UI pesadas (no MUI, no Chakra). Solo Tailwind + componentes propios.

---

## 11. Convenciones de Código

### Naming
- Componentes Astro: `PascalCase.astro`
- Componentes React: `PascalCase.tsx`
- Utilidades/lib: `camelCase.ts`
- Estilos: clases Tailwind en JSX/Astro, sin CSS modules salvo excepción justificada.

### TypeScript
- Strict mode activado (`tsconfig.json`).
- Props de componentes React: siempre tipadas con `interface` o `type`.
- No usar `any`. Usar `unknown` si el tipo es incierto.

### Commits (si aplica)
- `feat:` nueva funcionalidad
- `fix:` corrección de bug
- `perf:` mejora de performance
- `seo:` cambios orientados a SEO
- `style:` cambios visuales sin lógica

---

## 12. Variables de Entorno

El código no usa `import.meta.env`: WhatsApp, GA4 y GTM salen de `data/site.json`. Si se agrega una variable de entorno, documentarla aquí con su consumidor (`.env` nunca se commitea).

---

## 13. Comandos de Desarrollo

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev          # http://localhost:4321

# Build producción
npm run build        # prebuild genera src/data/lastmod.json; output en /dist

# Preview build
npm run preview

# Type check
npm run check        # astro check (requiere instalar @astrojs/check; hoy no está en devDependencies)
```

El script `lint` existe en `package.json`, pero eslint no está instalado ni configurado.

---

## 14. Decisiones de Arquitectura Tomadas

| Decisión | Elegida | Alternativa descartada | Razón |
|----------|---------|----------------------|-------|
| Animación hero | Video MP4 autoplay silenciado | SVG GSAP / Lottie | Mayor impacto visual, más fácil de producir |
| Framework | Astro SSG | Next.js | SEO nativo, sin JS innecesario |
| Estilos | Tailwind CSS | CSS Modules | Velocidad de desarrollo, consistencia |
| Animaciones scroll | GSAP ScrollTrigger | Intersection Observer manual | API más rica, mejor control de timeline |
| Mapa cobertura | Google Maps embed estático | Leaflet interactivo | Sin dependencia JS extra, suficiente para el caso |
| Formulario contacto | Solo WhatsApp (CTA directo) | Formulario web | Fricción mínima, conversión más alta |
| Arquitectura componentes | Atomic Design (atoms/molecules/organisms) | Carpetas planas o por feature | Escalabilidad, reutilización, separación clara de responsabilidades |
| Responsive | Mobile-first con Tailwind breakpoints | Desktop-first o media queries CSS | Mejor UX móvil, consistente con utility-first approach |

---

## 15. Notas Importantes para Claude Code

1. **No inventar teléfonos, direcciones ni NIT.** El NAP real vive en `data/site.json`; lo que siga `[PENDIENTE]` ahí (NIT, GTM) se deja como placeholder con `// TODO: reemplazar con dato real`.
2. **El video del hero** se sirve desde Cloudinary; mantener poster/fallback estático por si la URL falla.
3. **GSAP** es gratuito también para uso comercial desde la v3.13 (plugins incluidos); no requiere licencia.
4. **Accesibilidad mínima requerida:** contraste WCAG AA, navegación por teclado en CTA, `alt` en todas las imágenes, `aria-label` en botones de ícono.
5. **Mobile-first siempre.** Diseñar primero para 375px, luego escalar a desktop.
6. **No usar `document` ni `window` en nivel de módulo** en componentes Astro (SSR/SSG). Solo dentro de `<script>` o `useEffect`.

---

## 16. Definition of Done

Una tarea está terminada cuando: compila (`npm run build`), cumple las reglas SEO de §1 (title, meta, H1, schema), no empeora Core Web Vitals, funciona a 375px y mantiene el camino a WhatsApp.

*Mantener este archivo actualizado con cada decisión arquitectónica relevante.*
