export interface Zona {
  slug: string;
  name: string;
  tipo: 'barrio' | 'municipio';
  municipio: string;
  geo: { lat: number; lng: number };
  descripcionCorta: string; // 1 sentence, factual
  descripcionLarga: string; // 2-3 sentences, factual about being in Valle de Aburrá metro
}

export const zonas: Zona[] = [
  {
    slug: 'el-poblado',
    name: 'El Poblado',
    tipo: 'barrio',
    municipio: 'Medellín',
    geo: { lat: 6.2087, lng: -75.5676 },
    descripcionCorta: 'sector residencial y comercial de Medellín con alta demanda de instalaciones de gas certificadas',
    descripcionLarga: 'El Poblado es uno de los sectores con mayor densidad residencial y comercial de Medellín. La demanda de instalaciones de gas natural certificadas es constante, tanto en apartamentos como en locales comerciales, restaurantes y edificios nuevos.',
  },
  {
    slug: 'laureles',
    name: 'Laureles',
    tipo: 'barrio',
    municipio: 'Medellín',
    geo: { lat: 6.2523, lng: -75.6041 },
    descripcionCorta: 'barrio residencial tradicional de Medellín con alta demanda de mantenimiento y certificación de redes de gas',
    descripcionLarga: 'Laureles es un barrio residencial consolidado de Medellín, con gran cantidad de casas y apartamentos que requieren instalación, certificación y mantenimiento de redes de gas. Atendemos toda la zona con técnico certificado NTC 2505.',
  },
  {
    slug: 'envigado',
    name: 'Envigado',
    tipo: 'municipio',
    municipio: 'Envigado',
    geo: { lat: 6.1720, lng: -75.5910 },
    descripcionCorta: 'municipio del Valle de Aburrá con constante crecimiento residencial y alta demanda de instalaciones de gas certificadas',
    descripcionLarga: 'Envigado es un municipio del Valle de Aburrá con alta actividad residencial y comercial. Atendemos solicitudes de instalación de gas, certificación ICONTEC y revisión periódica obligatoria en todo el municipio.',
  },
  {
    slug: 'bello',
    name: 'Bello',
    tipo: 'municipio',
    municipio: 'Bello',
    geo: { lat: 6.3365, lng: -75.5578 },
    descripcionCorta: 'municipio del norte del Valle de Aburrá con amplia cobertura de servicios de gas certificados',
    descripcionLarga: 'Bello es el segundo municipio más poblado del Valle de Aburrá. Contamos con cobertura completa en Bello para instalación de redes de gas, certificación ICONTEC y RPO, con técnico certificado NTC 2505.',
  },
  {
    slug: 'itagui',
    name: 'Itagüí',
    tipo: 'municipio',
    municipio: 'Itagüí',
    geo: { lat: 6.1845, lng: -75.5994 },
    descripcionCorta: 'municipio industrial y residencial del sur del Valle de Aburrá con amplia cobertura de servicios de gas',
    descripcionLarga: 'Itagüí cuenta con zonas residenciales y comerciales que requieren instalaciones de gas certificadas bajo NTC 2505. Atendemos instalaciones, certificaciones y revisiones periódicas en todo el municipio.',
  },
  {
    slug: 'sabaneta',
    name: 'Sabaneta',
    tipo: 'municipio',
    municipio: 'Sabaneta',
    geo: { lat: 6.1514, lng: -75.6175 },
    descripcionCorta: 'municipio del sur del Valle de Aburrá con crecimiento residencial activo y alta demanda de gas certificado',
    descripcionLarga: 'Sabaneta es uno de los municipios con mayor crecimiento residencial del Valle de Aburrá. Brindamos servicios de instalación de gas, certificación ICONTEC y RPO a toda la comunidad sabaneteña.',
  },
  {
    slug: 'robledo',
    name: 'Robledo',
    tipo: 'barrio',
    municipio: 'Medellín',
    geo: { lat: 6.2837, lng: -75.6112 },
    descripcionCorta: 'barrio noroccidental de Medellín con alta demanda de instalaciones y certificaciones de gas residencial',
    descripcionLarga: 'Robledo es un sector noroccidental de Medellín con una gran base de vivienda residencial. Atendemos solicitudes de instalación de redes de gas, certificación y mantenimiento en toda la zona.',
  },
  {
    slug: 'la-estrella',
    name: 'La Estrella',
    tipo: 'municipio',
    municipio: 'La Estrella',
    geo: { lat: 6.1578, lng: -75.6436 },
    descripcionCorta: 'municipio del sur del Valle de Aburrá con cobertura completa de servicios de gas certificados',
    descripcionLarga: 'La Estrella es un municipio del sur del Valle de Aburrá con zonas residenciales en crecimiento. Ofrecemos instalación de gas, certificación ICONTEC y revisión periódica obligatoria en todo el municipio.',
  },
  {
    slug: 'copacabana',
    name: 'Copacabana',
    tipo: 'municipio',
    municipio: 'Copacabana',
    geo: { lat: 6.3533, lng: -75.5113 },
    descripcionCorta: 'municipio del norte del Valle de Aburrá con cobertura de instalación y certificación de gas',
    descripcionLarga: 'Copacabana es un municipio del norte del Valle de Aburrá con barrios residenciales activos. Prestamos servicios de instalación de redes de gas, certificación ICONTEC y RPO en todo el municipio.',
  },
  {
    slug: 'belen',
    name: 'Belén',
    tipo: 'barrio',
    municipio: 'Medellín',
    geo: { lat: 6.2281, lng: -75.6154 },
    descripcionCorta: 'barrio occidental de Medellín con alta densidad residencial y constante demanda de servicios de gas',
    descripcionLarga: 'Belén es uno de los barrios más extensos y poblados de Medellín, con una alta concentración de viviendas que requieren instalación y certificación de redes de gas. Atendemos toda la zona con técnico certificado.',
  },
];
