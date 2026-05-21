export interface Zona {
  slug: string;
  name: string;
  tipo: 'barrio' | 'municipio';
  municipio: string;
  geo: { lat: number; lng: number };
  descripcionCorta: string; // 1 sentence, factual
  descripcionLarga: string; // 2-3 sentences, factual about being in Valle de Aburrá metro
  sectores: string[];       // barrios/sectores/urbanizaciones clave de la zona
}

export const zonas: Zona[] = [
  {
    slug: 'el-poblado',
    name: 'El Poblado',
    tipo: 'barrio',
    municipio: 'Medellín',
    geo: { lat: 6.2087, lng: -75.5676 },
    descripcionCorta: 'sector residencial y comercial de Medellín con alta demanda de instalaciones de gas certificadas',
    descripcionLarga:
      'El Poblado es uno de los sectores con mayor densidad residencial y comercial de Medellín. Atendemos instalaciones de gas natural y certificaciones ICONTEC en toda la zona: apartamentos, casas, restaurantes y edificios nuevos en sectores como El Tesoro, Los Balsos, Manila, La Florida, Alejandría, Patio Bonito, La Aguacatala y Astorga. Cada trabajo incluye certificado NTC 2505 vigente, requerido por Gas Natural y EPM para la activación del servicio. La visita técnica tiene un costo de $50.000 y el certificado se entrega en 24 a 48 horas hábiles.',
    sectores: ['El Tesoro', 'Los Balsos', 'Manila', 'La Florida', 'Alejandría', 'Patio Bonito', 'La Aguacatala', 'Astorga'],
  },
  {
    slug: 'laureles',
    name: 'Laureles',
    tipo: 'barrio',
    municipio: 'Medellín',
    geo: { lat: 6.2523, lng: -75.6041 },
    descripcionCorta: 'barrio residencial tradicional de Medellín con alta demanda de mantenimiento y certificación de redes de gas',
    descripcionLarga:
      'Laureles es un barrio residencial consolidado de Medellín, con gran cantidad de casas y apartamentos que requieren instalación, certificación y mantenimiento de redes de gas. Cubrimos toda la zona incluyendo Estadio, Carlos E. Restrepo, Los Conquistadores, Las Acacias, Suramericana, Cuarta Brigada y las urbanizaciones sobre la Avenida El Poblado con técnico certificado NTC 2505. Realizamos instalaciones de redes de gas natural, revisiones periódicas obligatorias (RPO) y certificaciones ICONTEC con entrega del documento en 24 a 48 horas.',
    sectores: ['Estadio', 'Carlos E. Restrepo', 'Los Conquistadores', 'Las Acacias', 'Suramericana', 'Cuarta Brigada'],
  },
  {
    slug: 'envigado',
    name: 'Envigado',
    tipo: 'municipio',
    municipio: 'Envigado',
    geo: { lat: 6.1720, lng: -75.5910 },
    descripcionCorta: 'municipio del Valle de Aburrá con constante crecimiento residencial y alta demanda de instalaciones de gas certificadas',
    descripcionLarga:
      'Envigado es un municipio del Valle de Aburrá con alta actividad residencial y comercial en sectores como El Dorado, Mesa, Los Naranjos, San Marcos, La Pradera, Loma del Atravesado, El Salado y Zuñiga. Atendemos solicitudes de instalación de gas natural, certificación ICONTEC y revisión periódica obligatoria (RPO) en todo el municipio. El técnico Luis Guillermo Muñoz Vélez, certificado bajo NTC 2505 con aval EPM y Gas Natural, realiza la visita técnica a $50.000 y entrega el certificado oficial en 24 a 48 horas.',
    sectores: ['El Dorado', 'Mesa', 'Los Naranjos', 'San Marcos', 'La Pradera', 'Loma del Atravesado', 'El Salado', 'Zuñiga'],
  },
  {
    slug: 'bello',
    name: 'Bello',
    tipo: 'municipio',
    municipio: 'Bello',
    geo: { lat: 6.3365, lng: -75.5578 },
    descripcionCorta: 'municipio del norte del Valle de Aburrá con amplia cobertura de servicios de gas certificados',
    descripcionLarga:
      'Bello es el segundo municipio más poblado del Valle de Aburrá. Contamos con cobertura completa en Bello para instalación de redes de gas, certificación ICONTEC y RPO, incluyendo los barrios Niquía, Guaduales, La Campiña, Fontidueño, Zamora, Santa Ana, Pérez y el centro del municipio. El técnico certificado NTC 2505 con aval EPM y Gas Natural atiende todo el municipio. Visita técnica a $50.000, certificado oficial entregado en 24 a 48 horas hábiles.',
    sectores: ['Niquía', 'Guaduales', 'La Campiña', 'Fontidueño', 'Zamora', 'Santa Ana', 'Pérez'],
  },
  {
    slug: 'itagui',
    name: 'Itagüí',
    tipo: 'municipio',
    municipio: 'Itagüí',
    geo: { lat: 6.1845, lng: -75.5994 },
    descripcionCorta: 'municipio industrial y residencial del sur del Valle de Aburrá con amplia cobertura de servicios de gas',
    descripcionLarga:
      'Itagüí cuenta con zonas residenciales y comerciales que requieren instalaciones de gas certificadas bajo NTC 2505, incluyendo los sectores de El Progreso, San Pablo, Los Naranjos, Sevilla, Ditaires, La Unión, El Rosario y las urbanizaciones nuevas de la autopista sur. Atendemos instalaciones de gas natural, certificaciones ICONTEC, revisiones periódicas obligatorias y detección de fugas en todo el municipio. Certificado oficial entregado en 24 a 48 horas con visita técnica desde $50.000.',
    sectores: ['El Progreso', 'San Pablo', 'Los Naranjos', 'Sevilla', 'Ditaires', 'La Unión', 'El Rosario'],
  },
  {
    slug: 'sabaneta',
    name: 'Sabaneta',
    tipo: 'municipio',
    municipio: 'Sabaneta',
    geo: { lat: 6.1514, lng: -75.6175 },
    descripcionCorta: 'municipio del sur del Valle de Aburrá con crecimiento residencial activo y alta demanda de gas certificado',
    descripcionLarga:
      'Sabaneta es uno de los municipios con mayor crecimiento residencial del Valle de Aburrá. Brindamos servicios de instalación de gas, certificación ICONTEC y RPO a toda la comunidad, con cobertura en El Carmelo, María Auxiliadora, Las Lomitas, San José, Punto Cero, La Doctora y los conjuntos residenciales de la zona. Técnico certificado NTC 2505 con aval EPM y Gas Natural. Visita diagnóstica a $50.000, certificado en 24 a 48 horas.',
    sectores: ['El Carmelo', 'María Auxiliadora', 'Las Lomitas', 'San José', 'Punto Cero', 'La Doctora'],
  },
  {
    slug: 'robledo',
    name: 'Robledo',
    tipo: 'barrio',
    municipio: 'Medellín',
    geo: { lat: 6.2837, lng: -75.6112 },
    descripcionCorta: 'barrio noroccidental de Medellín con alta demanda de instalaciones y certificaciones de gas residencial',
    descripcionLarga:
      'Robledo es un sector noroccidental de Medellín con una gran base de vivienda residencial, que incluye urbanizaciones en Altamira, El Diamante, Bello Horizonte, Aures, La Campiña, Fuente Clara y Pajarito. Atendemos solicitudes de instalación de redes de gas, certificación ICONTEC y mantenimiento en toda la zona. El técnico Luis Guillermo Muñoz Vélez, certificado bajo NTC 2505, realiza el trabajo con materiales certificados y entrega el certificado oficial en 24 a 48 horas.',
    sectores: ['Altamira', 'El Diamante', 'Bello Horizonte', 'Aures', 'La Campiña', 'Fuente Clara', 'Pajarito'],
  },
  {
    slug: 'la-estrella',
    name: 'La Estrella',
    tipo: 'municipio',
    municipio: 'La Estrella',
    geo: { lat: 6.1578, lng: -75.6436 },
    descripcionCorta: 'municipio del sur del Valle de Aburrá con cobertura completa de servicios de gas certificados',
    descripcionLarga:
      'La Estrella es un municipio del sur del Valle de Aburrá con zonas residenciales en crecimiento, incluyendo los sectores de Ancón, La Tablaza, Pueblo Viejo, El Agudelo, San Isidro y las nuevas urbanizaciones del corredor de la autopista sur. Ofrecemos instalación de gas, certificación ICONTEC y revisión periódica obligatoria en todo el municipio. Técnico certificado NTC 2505, visita desde $50.000, certificado en 24 a 48 horas hábiles.',
    sectores: ['Ancón', 'La Tablaza', 'Pueblo Viejo', 'El Agudelo', 'San Isidro'],
  },
  {
    slug: 'copacabana',
    name: 'Copacabana',
    tipo: 'municipio',
    municipio: 'Copacabana',
    geo: { lat: 6.3533, lng: -75.5113 },
    descripcionCorta: 'municipio del norte del Valle de Aburrá con cobertura de instalación y certificación de gas',
    descripcionLarga:
      'Copacabana es un municipio del norte del Valle de Aburrá con barrios residenciales activos como El Centro, La Lomita, Machado, Zafra, Peñolcito y los nuevos desarrollos urbanísticos de la vía Medellín-Bogotá. Prestamos servicios de instalación de redes de gas, certificación ICONTEC y RPO en todo el municipio con técnico certificado NTC 2505. Visita diagnóstica a $50.000, certificado oficial entregado en 24 a 48 horas.',
    sectores: ['El Centro', 'La Lomita', 'Machado', 'Zafra', 'Peñolcito'],
  },
  {
    slug: 'belen',
    name: 'Belén',
    tipo: 'barrio',
    municipio: 'Medellín',
    geo: { lat: 6.2281, lng: -75.6154 },
    descripcionCorta: 'barrio occidental de Medellín con alta densidad residencial y constante demanda de servicios de gas',
    descripcionLarga:
      'Belén es uno de los barrios más extensos y poblados de Medellín, con una alta concentración de viviendas en sectores como Los Alpes, Rosales, Rincón, La Mota, Miravalle, Rodeo Alto, Las Playas, Fátima y Altavista. Atendemos toda la zona con técnico certificado NTC 2505 para instalación de redes de gas, certificación ICONTEC, RPO y detección de fugas. Visita técnica a $50.000, certificado en 24 a 48 horas hábiles.',
    sectores: ['Los Alpes', 'Rosales', 'Rincón', 'La Mota', 'Miravalle', 'Rodeo Alto', 'Las Playas', 'Fátima'],
  },
];
