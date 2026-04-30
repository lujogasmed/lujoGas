AGENT.md — LujoGas
> Instrucciones permanentes de comportamiento para Claude Code.
> Este archivo define CÓMO piensa y decide el agente en cada tarea del proyecto.
> Leer completo antes de escribir cualquier línea de código.
***🎯 Misión del proyecto
Construir una landing page para LujoGas — empresa de instalación, mantenimiento y certificación de redes de gas en Medellín, Colombia — que en 6 meses genere un flujo constante de leads orgánicos desde Google, con conversión vía WhatsApp.
El éxito se mide en una sola métrica: personas de Medellín y el Valle de Aburrá que escriben por WhatsApp después de encontrar LujoGas en Google.
***🧠 Regla de oro del agente
> Antes de escribir cualquier componente, página, texto o función, el agente debe hacerse esta pregunta:
>
> "¿Esto ayuda a que LujoGas aparezca primero en Google cuando alguien en Medellín busca servicios de gas?"
>
> Si la respuesta es no o tal vez → rediseñar antes de implementar.
> Si la respuesta es sí → documentar por qué y proceder.
***📦 Stack técnico
Capa	Tecnología
Framework	Astro 4.x (SSG)
UI interactiva	React 18 (solo donde haya interactividad real)
Estilos	Tailwind CSS 3.x (Solo usar tailwind no usar CSS)
Animaciones	GSAP + ScrollTrigger / Lottie-react
Imágenes	astro:assets (optimización automática WebP/AVIF)
Fuentes	Google Fonts — Barlow (400 / 600 / 700)
Analytics	GTM + GA4
Deployment	Vercel / Netlify (SSG estático)

Regla de componentes:
.astro → layouts, secciones estáticas, páginas SEO
.tsx → solo componentes con estado, animaciones JS, interactividad
Nunca usar React donde Astro puro es suficiente (impacta CWV)
tailwind -> solo debemos usar tailwind, nada de css nativo en <style>

***🗺️ Identidad de marca
Paleta de colores y fuentes estan ubicada en el file: lujoGas/tailwind.config.mjs


Datos de contacto
WhatsApp: 3197748313
Número con código: +573197748313
Link directo: https://wa.me/573197748313
Dirección: [PENDIENTE — completar antes de go-live]
RUT/NIT: [PENDIENTE]


***🔍 PRIORIDAD #1 — SEO Local
Filosofía SEO del proyecto
LujoGas no compite a nivel nacional. Compite en búsquedas hiperlocales como:
"instalación de gas El Poblado"
"certificación redes de gas Envigado"
"técnico de gas Medellín urgente"
"empresa de gas Laureles Medellín"
El agente debe tratar el SEO local como arquitectura, no como un feature.
No es metadata al final — es la estructura desde la que se construye todo.


***🗂️ PRIORIDAD #2 — SEO Programático (GEO)
Estrategia de rutas programáticas
Generar páginas estáticas con getStaticPaths() para cada combinación:
Servicios cubiertos
instalacion-gas
mantenimiento-gas
certificacion-gas
revision-redes-gas
conversion-gas-natural
instalacion-calentador-gas
Zonas geográficas cubiertas
Medellín (comunas y barrios principales)
medellin          el-poblado        laureles
belen             envigado          robledo
castilla          aranjuez          manrique
buenos-aires      la-america        san-javier
guayabal          santa-cruz        villa-hermosa
Valle de Aburrá (municipios)
envigado          bello             itaguei
sabaneta          la-estrella       caldas
copacabana        barbosa           girardota
Formato de rutas generadas
/[servicio]-[zona]
Ejemplos reales:
/instalacion-gas-medellin          ← página pilar principal
/instalacion-gas-el-poblado
/instalacion-gas-envigado
/certificacion-gas-laureles
/mantenimiento-gas-bello
/revision-redes-gas-itaguei
/instalacion-calentador-gas-sabaneta
Implementación en Astro
// src/pages/[servicio]-[zona].astro
export async function getStaticPaths() {
  const servicios = [
    { slug: 'instalacion-gas', nombre: 'Instalación de Gas' },
    { slug: 'mantenimiento-gas', nombre: 'Mantenimiento de Gas' },
    { slug: 'certificacion-gas', nombre: 'Certificación de Gas' },
    { slug: 'revision-redes-gas', nombre: 'Revisión de Redes de Gas' },
    { slug: 'conversion-gas-natural', nombre: 'Conversión a Gas Natural' },
    { slug: 'instalacion-calentador-gas', nombre: 'Instalación de Calentador' },
  ];
  const zonas = [
    { slug: 'medellin', nombre: 'Medellín', tipo: 'ciudad' },
    { slug: 'el-poblado', nombre: 'El Poblado', tipo: 'barrio' },
    { slug: 'laureles', nombre: 'Laureles', tipo: 'barrio' },
    { slug: 'belen', nombre: 'Belén', tipo: 'barrio' },
    { slug: 'envigado', nombre: 'Envigado', tipo: 'municipio' },
    { slug: 'bello', nombre: 'Bello', tipo: 'municipio' },
    { slug: 'itaguei', nombre: 'Itagüí', tipo: 'municipio' },
    { slug: 'sabaneta', nombre: 'Sabaneta', tipo: 'municipio' },
    { slug: 'la-estrella', nombre: 'La Estrella', tipo: 'municipio' },
    { slug: 'robledo', nombre: 'Robledo', tipo: 'barrio' },
    { slug: 'castilla', nombre: 'Castilla', tipo: 'barrio' },
    { slug: 'buenos-aires', nombre: 'Buenos Aires', tipo: 'barrio' },
    { slug: 'copacabana', nombre: 'Copacabana', tipo: 'municipio' },
    { slug: 'caldas', nombre: 'Caldas', tipo: 'municipio' },
  ];
  return servicios.flatMap(servicio =>
    zonas.map(zona => ({
      params: { servicio: servicio.slug, zona: zona.slug },
      props: { servicio, zona },
    }))
  );
}
***📋 Checklist SEO — Aplicar en CADA página
El agente debe verificar esta lista antes de dar por terminada cualquier página:
Metadata
<title> único: {Keyword principal} en {Zona} | LujoGas
Ejemplo: Instalación de Gas en El Poblado, Medellín | LujoGas
Máximo 60 caracteres
<meta name="description"> con keyword + CTA
Ejemplo: Instalamos redes de gas en El Poblado con técnicos certificados. Visita domiciliaria disponible. ¡Escríbenos por WhatsApp!
Entre 140-160 caracteres
<link rel="canonical"> apuntando a la URL correcta
<meta name="robots" content="index, follow">
Open Graph: og:title, og:description, og:image, og:url
Estructura de contenido
Un solo <h1> con keyword principal + zona
Ejemplo: Instalación de Gas Natural en El Poblado, Medellín
<h2> con variaciones semánticas (LSI keywords)
Ejemplos: "Técnicos certificados en El Poblado", "¿Por qué elegir LujoGas en El Poblado?"
<h3> para subsecciones de servicios y FAQs
Alt text en TODAS las imágenes: [servicio] en [zona] — LujoGas
Keyword principal en el primer párrafo visible
Mención de zona mínimo 3 veces en el contenido
Contenido mínimo: 300 palabras por página programática
Schema Markup JSON-LD (obligatorio)
LocalBusiness en todas las páginas
Service en páginas de servicio
FAQPage si hay preguntas frecuentes
BreadcrumbList en páginas programáticas
Technical SEO
URL slug limpio: solo minúsculas, guiones, sin caracteres especiales
Imágenes en WebP/AVIF vía astro:assets
Lazy loading en imágenes fuera del viewport inicial
font-display: swap en Google Fonts
No hay render-blocking resources
***🏗️ Schema Markup — Templates
LocalBusiness (va en BaseLayout.astro o en cada página)
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "LujoGas",
  "description": "Empresa especializada en instalación, mantenimiento y certificación de redes de gas residencial y comercial en Medellín y el Valle de Aburrá.",
  "telephone": "+573197748313",
  "url": "https://lujogas.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[PENDIENTE]",
    "addressLocality": "Medellín",
    "addressRegion": "Antioquia",
    "postalCode": "[PENDIENTE]",
    "addressCountry": "CO"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "6.2442",
    "longitude": "-75.5812"
  },
  "areaServed": [
    "Medellín", "Envigado", "Bello", "Itagüí",
    "Sabaneta", "La Estrella", "Caldas", "Copacabana",
    "Barbosa", "Girardota"
  ],
  "openingHours": "Mo-Sa 07:00-18:00",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "telephone": "+573197748313",
    "contactOption": "TollFree",
    "availableLanguage": "Spanish"
  },
  "sameAs": []
}
Service (por cada página de servicio)
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "{Nombre del servicio} en {Zona}",
  "provider": {
    "@type": "LocalBusiness",
    "name": "LujoGas"
  },
  "areaServed": {
    "@type": "City",
    "name": "{Zona}"
  },
  "description": "{Descripción del servicio específico para esta zona}",
  "serviceType": "{Tipo de servicio}",
  "telephone": "+573197748313"
}
FAQPage (para páginas con preguntas frecuentes)
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cuánto cuesta instalar gas natural en {zona}?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El costo varía según el tamaño del inmueble y la red existente. Ofrecemos visita diagnóstica gratuita en {zona}. Escríbenos por WhatsApp para un presupuesto sin costo."
      }
    }
  ]
}
***⚡ Core Web Vitals — Reglas no negociables
Métrica	Target	Regla de implementación
LCP	< 2.5s	Hero image/video con `fetchpriority="high"`, sin lazy load en above-the-fold
CLS	< 0.1	Siempre definir width/height en imágenes. Reservar espacio para fuentes.
INP	< 200ms	Minimizar JS en el thread principal. Defer todo lo que no sea crítico.
TTFB	< 800ms	Aprovechar SSG de Astro. No SSR a menos que sea estrictamente necesario.
FCP	< 1.8s	CSS crítico inline. Fonts con `display=swap`.
Reglas adicionales:
Nunca importar librerías completas si solo se usa una función
GSAP: solo cargar ScrollTrigger en componentes que lo necesiten
Videos: siempre muted autoplay playsinline + poster image como fallback
Imágenes: usar siempre el componente <Image> de astro:assets
***📄 Archivos técnicos SEO (generar desde el inicio)
sitemap.xml
Astro genera sitemap automáticamente con @astrojs/sitemap.
Configurar en astro.config.mjs:
import sitemap from '@astrojs/sitemap';
export default defineConfig({
  site: 'https://lujogas.com',
  integrations: [sitemap()],
});
Todas las páginas programáticas quedan incluidas automáticamente.
robots.txt
User-agent: *
Allow: /
Sitemap: https://lujogas.com/sitemap-index.xml
Archivos a generar desde día 1
public/
├── robots.txt
├── sitemap.xml          ← auto-generado por Astro
├── favicon.ico
├── favicon.svg
├── apple-touch-icon.png
└── og-image.jpg         ← imagen 1200x630 para Open Graph
***🏠 Estructura de la landing principal (/)
Secciones en orden
1. Hero              → Animación fogón + H1 + CTA WhatsApp
2. Servicios         → Cards de los 6 servicios principales
3. Confianza         → Certificaciones, años de experiencia, números
4. Cobertura         → Mapa/lista visual de zonas atendidas
5. Testimonios       → (cuando estén disponibles)
6. FAQ               → Con schema FAQPage
7. CTA Final         → Bloque de conversión WhatsApp
8. Footer            → NAP completo + links programáticos + zonas
Footer SEO (crítico para linkbuilding interno)
El footer debe incluir links a las páginas programáticas principales:
Servicios en Medellín:
Instalación de Gas | Mantenimiento | Certificación | Revisión
Zonas que cubrimos:
El Poblado | Laureles | Belén | Envigado | Bello | Itagüí |
Sabaneta | La Estrella | Robledo | Copacabana
***🔗 Estrategia de internal linking
Regla: Cada página programática debe enlazar hacia:
La página principal del servicio (/instalacion-gas-medellin)
Zonas adyacentes (El Poblado → Envigado, Laureles → Belén)
Otros servicios en la misma zona
Implementar con un componente <RelatedPages> en cada página programática.
***📱 Mobile-first — Reglas de diseño
Breakpoint base: 375px (iPhone SE — el mínimo)
Diseñar primero para móvil, luego escalar a desktop
CTAs de WhatsApp: mínimo 48x48px de área táctil
El botón flotante de WhatsApp siempre visible en mobile
Fuente mínima: 16px (evita zoom automático en iOS)
Evitar hover-only interactions — deben funcionar en touch
***💬 WhatsApp — Mensajes pre-cargados por página
Cada CTA de WhatsApp debe abrir un mensaje pre-escrito según el contexto:
const mensajes = {
  default: 'Hola LujoGas, me interesa información sobre sus servicios de gas en Medellín.',
  instalacion: 'Hola LujoGas, necesito instalar una red de gas en mi inmueble. ¿Pueden darme información?',
  mantenimiento: 'Hola LujoGas, necesito mantenimiento de mi red de gas. ¿Cuándo tienen disponibilidad?',
  certificacion: 'Hola LujoGas, necesito certificar mi red de gas. ¿Qué documentos necesito?',
  zona: (zona: string) => `Hola LujoGas, los contacto desde ${zona}. ¿Tienen cobertura en mi zona?`,
};
// URL generada:
// https://wa.me/573197748313?text={encodeURIComponent(mensaje)}
***🗃️ Estructura de carpetas del proyecto
lujogas/
├── AGENT.md                    ← este archivo
├── CLAUDE.md                   ← contexto técnico del proyecto
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── public/
│   ├── robots.txt
│   ├── favicon.svg
│   ├── og-image.jpg
│   └── videos/
│       └── hero-fogon.mp4
├── src/
│   ├── components/
│   │   ├── astro/              ← componentes estáticos
│   │   │   ├── Header.astro
│   │   │   ├── Footer.astro
│   │   │   ├── ServiceCard.astro
│   │   │   ├── ZonaCard.astro
│   │   │   ├── FAQSection.astro
│   │   │   ├── SchemaLocalBusiness.astro
│   │   │   └── RelatedPages.astro
│   │   └── react/              ← solo componentes interactivos
│   │       ├── HeroAnimation.tsx
│   │       ├── WhatsAppButton.tsx
│   │       └── ScrollAnimations.tsx
│   ├── layouts/
│   │   └── BaseLayout.astro    ← head SEO, schema global, fonts
│   ├── pages/
│   │   ├── index.astro         ← landing principal
│   │   └── [servicio]-[zona].astro  ← rutas programáticas
│   ├── data/
│   │   ├── servicios.ts        ← lista de servicios con metadata SEO
│   │   ├── zonas.ts            ← lista de zonas con metadata geo
│   │   └── faqs.ts             ← preguntas frecuentes por servicio
│   ├── styles/
│   │   └── variables.css       ← CSS custom properties
│   └── utils/
│       ├── whatsapp.ts         ← helpers de WhatsApp links
│       ├── seo.ts              ← helpers de metadata SEO
│       └── schema.ts           ← generadores de JSON-LD
***🧪 Keywords objetivo (research base)
Cluster 1 — Instalación (mayor volumen)
instalacion de gas medellin
instalacion gas natural medellin
instalar gas en apartamento medellin
empresa instalacion gas medellin
tecnico de gas medellin
Cluster 2 — Certificación (alta intención comercial)
certificacion de gas medellin
certificar red de gas medellin
certificado de gas residencial medellin
quien certifica redes de gas en medellin
Cluster 3 — Mantenimiento / Urgencias
mantenimiento red de gas medellin
revision de gas medellin
fuga de gas medellin
tecnico de gas urgente medellin
Cluster 4 — Por zona (long tail, menos competencia)
instalacion gas el poblado
tecnico gas laureles medellin
certificacion gas envigado
empresa gas bello antioquia
revision gas itaguei
Regla de contenido: Cada página programática debe estar optimizada para el cluster 4 de su zona específica, mientras la landing principal ataca los clusters 1, 2 y 3.
***✅ Definition of Done (DoD) — Por tarea
Una tarea de código está terminada cuando:
Funciona — el componente/página se renderiza sin errores
Es SEO-válido — tiene toda la metadata, schema y estructura de headings correcta
Es rápido — no introduce regresiones en CWV (revisar con Lighthouse)
Es mobile-first — se ve y funciona correctamente en 375px
Tiene CTA — incluye o refuerza el camino al WhatsApp
Está documentado — comentarios en código donde la lógica SEO no sea obvia
***🚫 Lo que el agente NUNCA debe hacer
Crear páginas sin <title> y <meta description> únicos
Usar imágenes sin alt text
Agregar JS pesado en el critical path
Crear rutas sin incluirlas en el sitemap
Poner el mismo contenido en múltiples páginas programáticas (duplicate content)
Olvidar el CTA de WhatsApp en cualquier sección
Diseñar primero para desktop
Usar <h1> más de una vez por página
Implementar animaciones que bloqueen el scroll o aumenten el CLS
***Última actualización: inicio del proyecto
Versión: 1.0
Proyecto: LujoGas — Medellín, Colombia