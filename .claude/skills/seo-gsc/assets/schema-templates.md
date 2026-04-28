# Schema Templates — Comfort Design

_Plantillas JSON-LD listas para el stack Astro del sitio_
_Actualizado: marzo 2026_

---

## Arquitectura actual de schemas en el codebase

El sitio ya tiene schemas implementados en `src/seo/`:

| Archivo                     | Schema                                         | Dónde se usa        |
| --------------------------- | ---------------------------------------------- | ------------------- |
| `src/seo/schemas.ts`        | `LocalBusiness`, `WebSite`, `Service` (main)   | Home page           |
| `src/seo/serviceSchemas.ts` | `Service` (por ciudad), `Service` (por página) | Páginas de servicio |
| `src/seo/article.ts`        | `BlogPosting`                                  | Blog posts          |
| `src/seo/breadcrumb.ts`     | `BreadcrumbList`                               | Todas las páginas   |
| `src/seo/interlinking.ts`   | (interlinking logic)                           | —                   |
| `src/seo/projectList.ts`    | —                                              | Proyectos           |
| `src/seo/blogList.ts`       | —                                              | Blog índice         |

**Gaps críticos identificados:**

1. `LocalBusiness` en home NO incluye `@type: FurnitureStore` (tipo más específico)
2. No existe schema `HowTo` para posts informativos (medidas closet)
3. No existe schema `FAQPage` para páginas con preguntas frecuentes
4. Schema `Service` en páginas principales no incluye precios/oferta

---

## Gap 1: Upgrade de LocalBusiness a FurnitureStore

### Situación actual en `src/seo/schemas.ts`

El schema `getLocalBusinessSchema()` usa `@type: 'LocalBusiness'` genérico.

### Schema propuesto (para agregar a schemas.ts)

```typescript
// Agregar a src/seo/schemas.ts
export function getFurnitureStoreSchema({
  phone,
  email,
  image,
}: LocalBusinessProps) {
  return cleanJsonLd({
    '@context': 'https://schema.org',
    '@type': ['FurnitureStore', 'LocalBusiness'],
    '@id': BUSINESS_ID,
    name: 'Comfort Design',
    url: BUSINESS_URL,
    telephone: normalizePhone(phone),
    email: email || undefined,
    image: image || undefined,
    logo: BUSINESS_LOGO,
    description:
      'Fabricación e instalación de muebles a medida en Medellín: cocinas, closets, muebles de baño y centros de entretenimiento.',
    priceRange: '$$',
    openingHours: 'Mo-Fr 08:00-18:00',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Medellín, Antioquia',
      addressLocality: 'Medellín',
      addressRegion: 'Antioquia',
      addressCountry: 'CO',
    },
    sameAs: ['https://www.instagram.com/comfortdesign.med/'],
    areaServed: [
      { '@type': 'City', name: 'Medellín' },
      { '@type': 'City', name: 'Envigado' },
      { '@type': 'City', name: 'Itagüí' },
      { '@type': 'City', name: 'Sabaneta' },
      { '@type': 'City', name: 'Bello' },
      { '@type': 'City', name: 'El Poblado' },
      { '@type': 'City', name: 'Laureles' },
      { '@type': 'City', name: 'La Estrella' },
    ],
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 6.2705734,
      longitude: -75.5762646,
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios de Comfort Design',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Closets a medida' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Cocinas a medida' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Muebles de baño a medida' },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Centros de entretenimiento a medida',
          },
        },
      ],
    },
  });
}
```

**Dónde usar:** Reemplazar o complementar `getLocalBusinessSchema()` en `src/pages/index.astro`

---

## Gap 2: Schema HowTo para posts informativos

### Cuándo usar

Posts con pasos numerados: medidas de closet, cómo remodellar un baño, cómo medir tu espacio.

### Función a crear en `src/seo/article.ts`

```typescript
// Agregar a src/seo/article.ts
export function getHowToSchema({
  name,
  description,
  image,
  totalTime,
  steps,
}: {
  name: string;
  description: string;
  image?: string;
  totalTime?: string; // ISO 8601: "PT30M" = 30 minutos
  steps: { name: string; text: string; image?: string }[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    image: image || undefined,
    totalTime: totalTime || undefined,
    step: steps.map((step, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: step.name,
      text: step.text,
      image: step.image || undefined,
    })),
  };
}
```

### Ejemplo de uso en `src/pages/blog/[slug].astro`

```astro
---
// En el frontmatter del blog post, detectar si tiene pasos:
const isHowTo = post.data.tags?.includes('guía') || post.data.schemaType === 'HowTo';

// Si el post tiene field howToSteps en su frontmatter:
const howToSchema = isHowTo && post.data.howToSteps
  ? getHowToSchema({
      name: post.data.title,
      description: post.data.description,
      image: post.data.coverImage,
      steps: post.data.howToSteps,
    })
  : null;
---

{howToSchema && (
  <script type="application/ld+json" set:html={JSON.stringify(howToSchema)} />
)}
```

### Datos para "Cómo medir tu espacio para un closet" (listo para copiar)

Insertar en frontmatter de `src/content/blog/como-medir-tu-espacio-para-un-closet-a-medida.md`:

```yaml
schemaType: HowTo
howToSteps:
  - name: Reúne tus herramientas
    text: Necesitas una cinta métrica, papel cuadriculado y un lápiz para anotar las medidas.
  - name: Mide el ancho del espacio
    text: Mide de muro a muro en la parte superior, media y baja. Usa la medida menor como referencia.
  - name: Mide la altura disponible
    text: Mide desde el piso hasta el techo. Resta 1 cm para el espacio de instalación.
  - name: Mide la profundidad disponible
    text: La profundidad mínima recomendada es 55 cm para ropa colgada.
  - name: Identifica obstáculos
    text: Marca la ubicación de tomacorrientes, interruptores y cualquier saliente.
  - name: Dibuja el plano
    text: Esquematiza el espacio en papel cuadriculado con las medidas tomadas.
  - name: Comparte el plano con nosotros
    text: Envíanos tu plano por WhatsApp para cotizar tu closet a medida sin costo.
```

---

## Gap 3: Schema FAQPage

### Cuándo usar

Páginas de servicio que tengan sección de preguntas frecuentes, o la página `/faqs/`.

### Función a crear en `src/seo/schemas.ts`

```typescript
// Agregar a src/seo/schemas.ts
export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
```

### FAQs listas para Closets a Medida

```typescript
// Para usar en src/pages/servicios/[slug].astro cuando slug === 'closets-a-medida'
const closetsFAQs = [
  {
    question: '¿Cuánto cuesta un closet a medida en Medellín?',
    answer:
      'El precio varía según el tamaño, materiales y diseño. Un closet estándar en aglomerado comienza desde 3.5 millones de pesos. Ofrecemos cotización gratuita sin compromiso.',
  },
  {
    question: '¿Cuánto tiempo tarda la fabricación de un closet a medida?',
    answer:
      'El proceso completo, desde el diseño hasta la instalación, toma entre 2 y 4 semanas dependiendo de la complejidad del proyecto.',
  },
  {
    question: '¿Qué materiales usan para fabricar closets?',
    answer:
      'Usamos aglomerado de alta densidad, MDF y madera RH (resistente a humedad y plagas). Cada material se selecciona según las condiciones del espacio y el presupuesto del cliente.',
  },
  {
    question: '¿Incluyen la instalación en el precio?',
    answer:
      'Sí, todos nuestros proyectos incluyen diseño, fabricación e instalación. El precio cotizado es el precio final.',
  },
  {
    question: '¿Hacen closets para apartamentos pequeños?',
    answer:
      'Sí, especialmente. Un closet a medida es la mejor solución para espacios reducidos porque aprovecha cada centímetro del muro disponible, incluyendo alturas y esquinas.',
  },
];
```

---

## Gap 4: Schema Service mejorado para páginas de servicio

### Situación actual

`getServicePageSchema()` en `src/seo/serviceSchemas.ts` no incluye precios ni ofertas.

### Mejora propuesta para páginas de servicio principal

```typescript
// Reemplazar getServicePageSchema con versión mejorada
export function getEnhancedServiceSchema({
  name,
  slug,
  description,
  image,
  serviceType,
  cities,
}: {
  name: string;
  slug: string;
  description?: string;
  image?: string;
  serviceType: string;
  cities?: string[];
}) {
  return cleanJsonLd({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    serviceType,
    url: `https://comfortdesign.com.co/servicios/${slug}/`,
    description: description || undefined,
    image: image || undefined,
    provider: {
      '@type': 'LocalBusiness',
      '@id': 'https://comfortdesign.com.co/#business',
      name: 'Comfort Design',
    },
    areaServed: (cities || ['Medellín', 'Envigado', 'Itagüí', 'Sabaneta']).map(
      (city) => ({
        '@type': 'City',
        name: city,
      }),
    ),
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'COP',
        description: 'Precio según diseño y materiales. Cotización gratuita.',
      },
    },
  });
}
```

---

## Resumen de gaps por prioridad

| #   | Gap                              | Impacto                               | Archivo a editar                                          | Complejidad |
| --- | -------------------------------- | ------------------------------------- | --------------------------------------------------------- | ----------- |
| 1   | `FurnitureStore` en home         | Alto — mejor clasificación de negocio | `src/seo/schemas.ts` + `src/pages/index.astro`            | Baja        |
| 2   | `HowTo` en blog medidas closet   | Alto — rich result con pasos en SERP  | `src/seo/article.ts` + frontmatter blog                   | Media       |
| 3   | `FAQPage` en páginas de servicio | Medio — rich results preguntas        | `src/seo/schemas.ts` + `src/pages/servicios/[slug].astro` | Media       |
| 4   | `Service` con offers/prices      | Medio — mejor snippet de precio       | `src/seo/serviceSchemas.ts`                               | Baja        |

**Regla de implementación:** Todos los schemas se agregan como `<script type="application/ld+json">` en el `<head>`. En Astro, usar `set:html={JSON.stringify(schema)}` para evitar escapado de caracteres.
