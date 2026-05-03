import { SITE } from './constants';

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: SITE.name,
  description: SITE.description,
  telephone: SITE.phone,
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
  url: 'https://lujogas.com',
  openingHours: 'Mo-Sa 07:00-19:00',
  priceRange: '$$',
  areaServed: [
    'Medellín', 'Envigado', 'Bello', 'Itagüí', 'Sabaneta',
    'La Estrella', 'Caldas', 'Copacabana', 'Barbosa', 'Girardota',
    'El Poblado', 'Laureles', 'Belén', 'Robledo', 'Castilla',
  ],
  serviceType: [
    'Instalación de gas',
    'Certificación de redes de gas',
    'Mantenimiento de gas',
    'Revisión Periódica Obligatoria RPO',
    'Detección de fugas de gas',
    'Pruebas de hermeticidad',
  ],
  hasMap: 'https://maps.google.com/?q=Medellín,Antioquia,Colombia',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+573014748653',
    contactType: 'customer service',
    availableLanguage: 'Spanish',
    contactOption: 'TollFree',
  },
};
