import { SITE } from './constants';

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: SITE.name,
  description: SITE.description,
  telephone: SITE.phone,
  url: 'https://lujogas.com.co',
  image: 'https://res.cloudinary.com/dxcbyed7d/image/upload/w_1200,h_630,c_fill,g_auto/v1781108208/lucho_ljvjfy.jpg',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE.address,
    addressLocality: SITE.city,
    addressRegion: SITE.region,
    postalCode: SITE.postalCode,
    addressCountry: SITE.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 6.2442,
    longitude: -75.5812,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '08:00',
      closes: '12:00',
    },
  ],
  areaServed: [
    { '@type': 'City', name: 'Medellín' },
    { '@type': 'City', name: 'Envigado' },
    { '@type': 'City', name: 'Bello' },
    { '@type': 'City', name: 'Itagüí' },
    { '@type': 'City', name: 'Sabaneta' },
    { '@type': 'City', name: 'La Estrella' },
    { '@type': 'City', name: 'Caldas' },
    { '@type': 'City', name: 'Copacabana' },
    { '@type': 'City', name: 'Barbosa' },
    { '@type': 'City', name: 'Girardota' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios de gas en Medellín',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Instalación de redes de gas domiciliario',
          description: 'Diseño e instalación de redes internas de gas natural y GLP en cobre, polietileno o multicapa bajo NTC 2505.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Certificación de instalaciones de gas ICONTEC',
          description: 'Expedición de certificado oficial vigente por organismo acreditado para activar el servicio con Gas Natural o EPM.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Revisión Periódica Obligatoria (RPO)',
          description: 'RPO exigida por ley. Inspección completa de la instalación con emisión de certificado vigente y reporte técnico.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Detección y reparación de fugas de gas',
          description: 'Localización con detectores electrónicos de alta sensibilidad. Reparación inmediata en la misma visita.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Pruebas de hermeticidad de redes de gas',
          description: 'Ensayos de estanqueidad bajo presión según NTC 2505. Requisito obligatorio antes de cualquier certificación.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Inspección técnica de redes de gas',
          description: 'Diagnóstico preventivo completo del estado de la instalación con informe técnico detallado.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Instalación de gasodomésticos',
          description: 'Instalación certificada de estufas, calentadores, hornos y secadoras a gas en Medellín.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Venta e instalación de calentadores de agua a gas',
          description: 'Suministro e instalación de calentadores de paso y almacenamiento a gas natural y GLP.',
        },
      },
    ],
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: SITE.phone,
    contactType: 'customer service',
    availableLanguage: 'Spanish',
    hoursAvailable: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
  },
  hasMap: 'https://maps.google.com/?q=LujoGas,Medellín,Antioquia,Colombia',
  // sameAs: [ // TODO: add social profiles when available
  //   'https://www.facebook.com/lujogas',
  //   'https://www.instagram.com/lujogas',
  // ],
  // aggregateRating: { // TODO: add when reviews are collected
  //   '@type': 'AggregateRating',
  //   ratingValue: '4.9',
  //   reviewCount: '47',
  // },
};
