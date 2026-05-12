# CLAUDE.md — LujoGas Landing Page

> Archivo de contexto para Claude Code. Leer antes de cualquier tarea de desarrollo.

---

## 1. Visión del Proyecto

**LujoGas** es una landing page profesional para una empresa de instalación, mantenimiento y certificación de redes de gas en Medellín, Colombia.

**Objetivo primario:** Convertir visitas orgánicas locales en contactos vía WhatsApp (leads directos).
**Objetivo secundario — CRÍTICO:** Posicionarse en búsquedas locales de Medellín y el área metropolitana. **SEO local y GEO (Generative Engine Optimization) son prioridad absoluta** — cada cambio de contenido debe reforzar la visibilidad en Google, Google Maps, ChatGPT, Perplexity y otros motores de IA.
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
8. **Keywords locales en el contenido** — mencionar barrios (El Poblado, Laureles, Envigado...) y "Valle de Aburrá" en cada sección clave.
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
- **Lottie-react** — Alternativa para animaciones vectoriales complejas (fogón). Solo si el archivo `.json` Lottie existe.
- CSS puro (`@keyframes`) — Para micro-animaciones simples: pulso WhatsApp, fade-in suaves.

### Librerías utilitarias
- `@astrojs/react` — Integración oficial React + Astro.
- `@astrojs/sitemap` — Generación automática de sitemap.xml para SEO.
- `@astrojs/image` (o `astro:assets`) — Optimización de imágenes. Siempre usar `<Image />` de Astro, nunca `<img>` directo.
- `sharp` — Dependencia de procesamiento de imágenes.

### Fuentes
- **Google Fonts** vía `@astrojs/google-fonts` o `<link>` en `<head>`.
- Fuente display: **Montserrat** o **Raleway** (peso 700/900 para títulos).
- Fuente cuerpo: **Source Sans 3** o **DM Sans** (legible, profesional).
- Preload de fuentes críticas en `<head>`.

### Análitica / Tracking
- **Google Tag Manager** — Snippet en `<head>` y `<body>` del layout base.
- **Google Analytics 4** — Vía GTM. Evento de conversión: clic en enlace WhatsApp.

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
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   ├── images/                  # Imágenes estáticas no procesadas por Astro
│   └── lottie/                  # Archivos .json de animaciones Lottie
│
├── src/
│   ├── assets/                  # Imágenes procesadas por astro:assets
│   │   ├── hero-bg.jpg
│   │   └── ...
│   │
│   ├── components/
│   │   ├── atoms/               # Elementos UI mínimos (Button, Icon, Badge, Input...)
│   │   │   ├── Button.astro
│   │   │   ├── Icon.astro
│   │   │   ├── Badge.astro
│   │   │   └── WhatsAppButton.tsx  # React si necesita interactividad
│   │   │
│   │   ├── molecules/           # Combinación de átomos (ServiceCard, TrustBadge...)
│   │   │   ├── ServiceCard.astro
│   │   │   ├── TrustBadge.astro
│   │   │   └── NavLink.astro
│   │   │
│   │   ├── organisms/           # Secciones completas (Header, Footer, Hero...)
│   │   │   ├── Header.astro
│   │   │   ├── Footer.astro
│   │   │   ├── HeroSection.astro
│   │   │   ├── ServicesGrid.astro
│   │   │   ├── TrustSection.astro
│   │   │   ├── CoverageMap.astro
│   │   │   └── CTASection.astro
│   │   │
│   │   └── react/               # Componentes React (solo si necesitan estado/interactividad)
│   │       ├── HeroAnimation.tsx  # Animación fogón GSAP/Lottie
│   │       ├── WhatsAppCTA.tsx    # Botón flotante con pulso
│   │       └── ScrollReveal.tsx   # Wrapper de animaciones scroll
│   │
│   ├── layouts/                 # Templates (Atomic Design nivel 4)
│   │   └── BaseLayout.astro      # Layout principal: head, GTM, fuentes, SEO base
│   │
│   ├── pages/                   # Pages (Atomic Design nivel 5)
│   │   └── index.astro           # Landing page principal (única página)
│   │
│   ├── styles/
│   │   └── global.css            # Variables CSS, keyframes, estilos base
│   │
│   └── lib/
│       ├── constants.ts          # Teléfono WhatsApp, textos fijos, URLs
│       └── schema.ts             # JSON-LD LocalBusiness schema
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
**Componente:** `src/components/react/HeroAnimation.tsx` (client:load)

**Animación decidida:** Video MP4 en autoplay silenciado de un quemador de gas encendiéndose. Fondo oscuro, llama azul/naranja. Ícono de unmute discreto. Sin sonido automático. El copy aparece cuando la llama está estable, el CTA de WhatsApp aparece al final.

- Video en `public/videos/hero-flame.mp4` + poster JPG de primer frame.
- Timeline GSAP sincronizado al progreso del video (`timeupdate`).
- Copy principal: **"Instalamos tu red de gas con certificación oficial"**
- Subheadline: **"Servicio técnico especializado en Medellín y área metropolitana"**
- CTA principal: botón WhatsApp → `https://wa.me/57XXXXXXXXX?text=...`
- Altura: `100vh`. Fondo oscuro con overlay para legibilidad del texto.
- El texto aparece en fade cuando la llama está estable (~60% del video).
- CTA aparece al final del video (~90%).

**Accesibilidad:** `prefers-reduced-motion` → mostrar imagen estática del fogón encendido, sin animación.

### 6.2 Servicios de Gas
**Componente:** `src/components/astro/ServiceCard.astro`

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
**Componente:** `src/components/astro/TrustBadge.astro`

Elementos de confianza:
- Técnicos certificados por entidades colombianas (Gas Natural, EPM, Icontec)
- +X años de experiencia en Medellín
- Garantía escrita en trabajos
- Atención en menos de 24 horas
- Materiales certificados Norma Técnica Colombiana (NTC)

Visual: badges/íconos de certificación + contador animado de clientes/proyectos.

### 6.4 Cobertura en Medellín
**Componente:** `src/components/astro/CoverageMap.astro`

- Mapa estático o embed Google Maps centrado en Medellín.
- Lista de comunas/barrios cubiertos: El Poblado, Laureles, Envigado, Bello, Itagüí, Sabaneta, etc.
- Texto SEO: "Instalación de gas en [barrio]" repetido estratégicamente.

### 6.5 CTA / Contacto WhatsApp
Sección dedicada pre-footer:
- Headline de urgencia/beneficio
- Botón WhatsApp grande con número visible
- Horario de atención
- Opcionalmente: formulario de nombre + teléfono (Netlify Forms o similar)

### 6.6 Footer con SEO local
- Logo + nombre empresa
- Dirección Medellín (para SEO local)
- Teléfono en texto (indexable)
- Links internos (si hay más páginas en el futuro)
- Copyright + RUT/NIT empresa
- Schema JSON-LD `LocalBusiness`

---

## 7. Paleta de Colores

```css
/* src/styles/global.css */
:root {
  --color-flame-blue: #1E90FF;      /* Llama azul gas */
  --color-flame-orange: #FF6B1A;    /* Llama naranja/fuego */
  --color-dark: #0D0D0D;            /* Fondo hero oscuro */
  --color-dark-surface: #1A1A2E;    /* Cards en fondo oscuro */
  --color-steel: #2C3E50;           /* Gris acero técnico */
  --color-steel-light: #ECF0F1;     /* Fondo secciones claras */
  --color-white: #FFFFFF;
  --color-text: #1A1A1A;
  --color-text-muted: #6B7280;
  --color-success: #27AE60;         /* Badges de certificación */
  --color-whatsapp: #25D366;        /* Verde WhatsApp oficial */
  --color-whatsapp-dark: #1DA851;   /* Hover WhatsApp */
}
```

---

## 8. WhatsApp CTA — Especificaciones

```typescript
// src/lib/constants.ts
export const WHATSAPP_NUMBER = "573XXXXXXXXX"; // Reemplazar con número real
export const WHATSAPP_MESSAGE = "Hola LujoGas, quiero solicitar información sobre instalación de gas en Medellín";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
```

**Botón flotante** (sticky, bottom-right):
- Ícono WhatsApp SVG oficial verde
- Animación: `pulse` CSS suave cada 3s
- `z-index: 9999`
- En mobile: tamaño mínimo 56x56px (touch target)
- Tracking GTM: evento `whatsapp_click` con label de sección origen

---

## 9. SEO Local — Reglas

### Keywords objetivo
- "instalación gas Medellín"
- "certificación redes gas Medellín"
- "técnico gas Medellín"
- "instalación gas El Poblado / Laureles / Envigado"
- "mantenimiento gas residencial Medellín"

### Implementación técnica
- `<title>`: "Instalación y Certificación de Gas en Medellín | LujoGas"
- `<meta name="description">`: Incluir "Medellín", servicio principal, diferenciador.
- H1 único: Debe incluir keyword principal.
- H2/H3: Incluir variaciones de keywords locales.
- Alt text en imágenes: descriptivo + keyword cuando sea natural.
- URL canónica: `https://lujogas.com/` (o dominio real).

### JSON-LD LocalBusiness (en BaseLayout.astro)
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "LujoGas",
  "description": "Instalación, mantenimiento y certificación de redes de gas en Medellín",
  "telephone": "+57-3XX-XXX-XXXX",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[Dirección]",
    "addressLocality": "Medellín",
    "addressRegion": "Antioquia",
    "postalCode": "[CP]",
    "addressCountry": "CO"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 6.2442,
    "longitude": -75.5812
  },
  "areaServed": ["Medellín", "Envigado", "Bello", "Itagüí", "Sabaneta"],
  "serviceType": ["Instalación de gas", "Certificación de gas", "Mantenimiento de gas"]
}
```

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

```bash
# .env (nunca commitear)
PUBLIC_WHATSAPP_NUMBER=573XXXXXXXXX
PUBLIC_GTM_ID=GTM-XXXXXXX
PUBLIC_GA4_ID=G-XXXXXXXXXX
PUBLIC_MAPS_EMBED_URL=https://maps.google.com/...
```

Acceso en Astro: `import.meta.env.PUBLIC_*`

---

## 13. Comandos de Desarrollo

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev          # http://localhost:4321

# Build producción
npm run build        # Output en /dist

# Preview build
npm run preview

# Type check
npm run check        # astro check + tsc

# Lint
npm run lint         # eslint src/
```

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

1. **No inventar teléfonos, direcciones ni RUT.** Usar placeholders `[PENDIENTE]` y comentar `// TODO: reemplazar con dato real`.
2. **El video del hero** (`public/videos/hero-flame.mp4`) puede no existir aún. El componente debe tener fallback con imagen estática.
3. **GSAP requiere licencia** para uso en producción comercial. Verificar con el cliente si tienen licencia o usar GSAP Club Free (gratuito para proyectos no comerciales). Alternativa libre: Motion One o CSS puro.
4. **Accesibilidad mínima requerida:** contraste WCAG AA, navegación por teclado en CTA, `alt` en todas las imágenes, `aria-label` en botones de ícono.
5. **Mobile-first siempre.** Diseñar primero para 375px, luego escalar a desktop.
6. **No usar `document` ni `window` en nivel de módulo** en componentes Astro (SSR/SSG). Solo dentro de `<script>` o `useEffect`.

---

*Última actualización: inicio del proyecto | Mantener este archivo actualizado con cada decisión arquitectónica relevante.*
