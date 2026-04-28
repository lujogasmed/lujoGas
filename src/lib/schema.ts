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
  areaServed: ['Medellín', 'Envigado', 'Bello', 'Itagüí', 'Sabaneta'],
  serviceType: ['Instalación de gas', 'Certificación de gas', 'Mantenimiento de gas'],
};
