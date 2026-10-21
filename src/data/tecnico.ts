/**
 * Datos verificables del técnico responsable de LujoGas.
 * Fuente única para /nosotros, autor del blog y schema Person.
 *
 * Regla: NO inventar números de certificado, organismos ni fotos de obra.
 * Un campo en `null` no se renderiza; la página muestra en su lugar cómo
 * pedir y verificar el documento. Al llenarlo, aparece solo (texto + schema).
 */

export interface Credencial {
  /** Nombre del documento tal como figura en el carné/certificado */
  nombre: string;
  /** Entidad que lo expide (ej. SENA, ICONTEC) */
  emisor: string | null;
  // TODO: reemplazar con dato real
  numero: string | null;
  /** Fecha de vencimiento en formato AAAA-MM-DD */
  vigenteHasta: string | null;
  /** URL pública de verificación del emisor, si existe */
  urlVerificacion: string | null;
}

export interface OrganismoInspeccion {
  // TODO: reemplazar con dato real
  nombre: string | null;
  /** Código de acreditación ONAC (ej. 15-OIN-xxx) */
  codigoOnac: string | null;
}

export interface FotoObra {
  src: string;
  alt: string;
  /** Pie de foto: tipo de trabajo + zona. Solo trabajos reales. */
  caption: string;
}

export const TECNICO = {
  id: 'https://lujogas.com.co/nosotros#tecnico',
  nombre: 'Luis Guillermo Muñoz Vélez',
  cargo: 'Técnico certificado en redes de gas — NTC 2505',
  url: 'https://lujogas.com.co/nosotros',
  foto: 'https://res.cloudinary.com/dxcbyed7d/image/upload/v1781108208/servigas-full-calidad_vormpn.webp',
  fotoSchema:
    'https://res.cloudinary.com/dxcbyed7d/image/upload/w_1200,h_630,c_fill,g_auto/v1781108208/lucho_ljvjfy.jpg',
  inicioEnGas: 2023,
  anioCertificacion: 2024,
  certificaciones: 3000,
  instalaciones: 500,
  /** Fecha de la última revisión de los datos de esta página */
  actualizado: '2026-10-21',

  credencial: {
    nombre: 'Certificado de competencia laboral en instalaciones de gas (NTC 2505)',
    emisor: null,
    numero: null,
    vigenteHasta: null,
    urlVerificacion: null,
  } satisfies Credencial,

  organismo: {
    nombre: null,
    codigoOnac: null,
  } satisfies OrganismoInspeccion,

  /** Fotos de trabajos reales en Cloudinary. Vacío = no se muestra la galería de obras. */
  obras: [] as FotoObra[],
};

/** Retratos de estudio del técnico ya publicados (no son fotos de obra) */
export const FOTO_CERTIFICADO = {
  src: 'https://res.cloudinary.com/dxcbyed7d/image/upload/v1781108208/lujogas3_ezview.webp',
  alt: 'Luis Guillermo Muñoz Vélez, técnico de gas en Medellín, revisando un formato de certificación',
};
