/**
 * Contenido único por zona.
 *
 * Por qué existe: las 10 páginas /instalacion-gas-* compartían ~84% de su texto
 * (medido con SequenceMatcher sobre el HTML de producción). Google indexó 5 y
 * descartó las otras 5 como casi-duplicados — Bello, Belén, Copacabana, La Estrella
 * y Robledo quedaron en "Descubierta: actualmente sin indexar".
 *
 * Cada zona aporta aquí FAQ propias, una nota real por sector y sus vecinos
 * geográficos, de modo que el texto diferenciado pese más que la plantilla común.
 *
 * Regla al editar: solo hechos verificables — tipología de vivienda, sectores reales,
 * y lo que eso implica técnicamente. Sin casos de clientes, sin cifras inventadas.
 * Precios y plazos salen de data/site.json y deben coincidir con el resto del sitio.
 */

export interface SectorDetalle {
  nombre: string;
  nota: string;
}

export interface ZonaDetalle {
  /** Slugs de zonas geográficamente contiguas — enlazado interno con sentido real. */
  vecinos: string[];
  sectoresDetalle: SectorDetalle[];
  faqLocal: { q: string; a: string }[];
}

export const zonasDetalle: Record<string, ZonaDetalle> = {
  'el-poblado': {
    vecinos: ['envigado', 'belen', 'laureles', 'sabaneta'],
    sectoresDetalle: [
      { nombre: 'El Tesoro', nota: 'Torres en propiedad horizontal sobre la loma, con red centralizada y medidor individual por apartamento.' },
      { nombre: 'Los Balsos', nota: 'Apartamentos amplios donde el trabajo frecuente es el punto nuevo para calentador de paso.' },
      { nombre: 'Manila', nota: 'Casas convertidas en restaurantes y cafés: instalación comercial con cálculo de carga superior al residencial.' },
      { nombre: 'La Florida', nota: 'Unidades cerradas de construcción reciente, normalmente entregadas con red lista pero sin certificar.' },
      { nombre: 'Alejandría', nota: 'Edificios consolidados donde la revisión periódica obligatoria es el motivo de consulta más común.' },
      { nombre: 'Patio Bonito', nota: 'Mezcla de casas antiguas y torres nuevas; conviven redes de cobre viejas y redes recién entregadas.' },
      { nombre: 'La Aguacatala', nota: 'Zona de edificios y oficinas junto al río, con accesos que exigen coordinar la visita con la administración.' },
      { nombre: 'Astorga', nota: 'Sector residencial y gastronómico; atendemos tanto apartamentos como locales con cocina a gas.' },
    ],
    faqLocal: [
      {
        q: '¿Necesito permiso de la administración para instalar gas en un apartamento de El Poblado?',
        a: 'En la mayoría de unidades cerradas de El Poblado sí. Las administraciones suelen exigir el certificado del técnico y la programación previa cuando el trabajo toca ductos o zonas comunes. Nosotros entregamos la documentación que la administración pide antes de entrar, y coordinamos el horario permitido por el reglamento de propiedad horizontal.',
      },
      {
        q: '¿Se puede instalar un calentador de paso a gas en un apartamento de El Poblado?',
        a: 'Sí, siempre que el apartamento permita evacuación de gases al exterior y ventilación reglamentaria según la NTC 2505. Es el trabajo más pedido en sectores como El Tesoro y Los Balsos. En la visita diagnóstica verificamos el ducto disponible, el caudal de la red y si el medidor soporta el consumo adicional antes de presupuestar.',
      },
      {
        q: 'Mi apartamento en El Poblado es nuevo y la constructora no dejó certificado, ¿qué hago?',
        a: 'Es una situación habitual en obra entregada de El Poblado: la red está construida pero sin el documento que EPM exige para activar el medidor. Hacemos la inspección de la red existente, la prueba de hermeticidad y, si cumple, expedimos el certificado ICONTEC en 24 a 48 horas hábiles sin necesidad de rehacer la instalación.',
      },
      {
        q: '¿Atienden restaurantes y locales comerciales en Provenza y Manila?',
        a: 'Sí. Las instalaciones comerciales de la zona gastronómica de El Poblado requieren cálculo de carga para varios equipos simultáneos, ventilación dimensionada a la cocina y certificado vigente que suele pedir también la Secretaría correspondiente. Ese trabajo lo ejecuta el mismo técnico certificado que firma el documento.',
      },
    ],
  },

  laureles: {
    vecinos: ['belen', 'robledo', 'el-poblado', 'itagui'],
    sectoresDetalle: [
      { nombre: 'Estadio', nota: 'Casas de varias décadas y apartaestudios remodelados para arriendo, con redes que se dividen por unidad.' },
      { nombre: 'Carlos E. Restrepo', nota: 'Edificios de los años setenta con red centralizada: predominan la RPO y la renovación de tramos.' },
      { nombre: 'Los Conquistadores', nota: 'Sector residencial tranquilo donde el hallazgo típico es tubería galvanizada con corrosión.' },
      { nombre: 'Las Acacias', nota: 'Casas unifamiliares amplias; trabajo frecuente de traslado de punto al remodelar la cocina.' },
      { nombre: 'Suramericana', nota: 'Apartamentos de tamaño medio con medidor individual y conexión de estufa y calentador.' },
      { nombre: 'Cuarta Brigada', nota: 'Zona mixta de vivienda y comercio sobre corredores con locales de comida a gas.' },
    ],
    faqLocal: [
      {
        q: 'Mi casa en Laureles tiene tubería de gas de hace 40 años, ¿hay que cambiarla toda?',
        a: 'No necesariamente. En la revisión evaluamos tramo por tramo: si la corrosión o las uniones deterioradas están localizadas, se reemplaza solo esa sección. Cuando el trazado completo ya no cumple la NTC 2505 vigente, conviene renovar la red. En ambos casos entregamos el presupuesto antes de intervenir, para que decidas con el costo real a la vista.',
      },
      {
        q: 'Voy a dividir mi casa de Laureles en apartaestudios, ¿cómo queda el gas?',
        a: 'Cada unidad independiente necesita su propio punto y, si va a facturar por separado, su propio medidor. Eso implica dividir la red interna, dejar cada tramo con corte independiente y certificar el conjunto. Es un trabajo frecuente en Estadio y Laureles; EPM solo activa el servicio de cada unidad con el certificado que ampara esa configuración.',
      },
      {
        q: '¿Qué encuentran más seguido en la RPO de las casas de Laureles?',
        a: 'Reguladores vencidos, ventilaciones tapadas tras una remodelación, tubería galvanizada con corrosión en tramos expuestos y trazados que pasan por espacios que la norma actual ya no permite. Casi todo es corregible en la misma visita o en una segunda; el certificado sale en 24 a 48 horas hábiles tras la corrección.',
      },
      {
        q: '¿Atienden los cafés y panaderías de la 70, la 33 y la Avenida Nutibara?',
        a: 'Sí. Los negocios de esos corredores necesitan instalación comercial con certificado vigente, y el documento se pide tanto para activar el servicio como en las verificaciones de funcionamiento del local. Trabajamos con materiales avalados y dejamos el reporte técnico junto con el certificado ICONTEC.',
      },
    ],
  },

  envigado: {
    vecinos: ['el-poblado', 'sabaneta', 'itagui', 'la-estrella'],
    sectoresDetalle: [
      { nombre: 'El Dorado', nota: 'Sector residencial consolidado con mezcla de casas y edificios de altura media.' },
      { nombre: 'Mesa', nota: 'Centro tradicional de Envigado: casas de uno y dos pisos con redes de décadas en servicio.' },
      { nombre: 'Los Naranjos', nota: 'Unidades cerradas donde el pedido habitual es conectar gasodomésticos en obra recién entregada.' },
      { nombre: 'San Marcos', nota: 'Vivienda tradicional cercana al parque; predomina la revisión periódica obligatoria.' },
      { nombre: 'La Pradera', nota: 'Conjuntos residenciales con red centralizada y medidor por apartamento.' },
      { nombre: 'Loma del Atravesado', nota: 'Crecimiento vertical reciente: torres nuevas que necesitan certificación de red entregada por constructora.' },
      { nombre: 'El Salado', nota: 'Zona alta con viviendas dispersas donde la ventilación y la evacuación exigen revisión cuidadosa.' },
      { nombre: 'Zuñiga', nota: 'Límite con El Poblado, con edificios de estrato alto y calentadores de paso frecuentes.' },
    ],
    faqLocal: [
      {
        q: '¿El certificado de gas sirve igual en Envigado que en Medellín?',
        a: 'Sí. El certificado se expide bajo la NTC 2505, que es norma nacional, y EPM distribuye el gas en todo el Valle de Aburrá con el mismo requisito documental. No hay un certificado distinto por municipio: el mismo documento es válido en Envigado, Medellín, Sabaneta o Itagüí.',
      },
      {
        q: 'Compré apartamento nuevo en la Loma del Atravesado y no tengo gas activo, ¿por qué?',
        a: 'Es el escenario más común en la zona alta de Envigado: la constructora deja la red construida pero el medidor no se activa hasta que exista certificado vigente de la instalación interna. Revisamos la red entregada, hacemos la prueba de hermeticidad, conectamos los gasodomésticos y expedimos el certificado para que la distribuidora active el servicio.',
      },
      {
        q: '¿Cuánto se demoran en ir a Envigado?',
        a: 'Envigado está dentro de la cobertura habitual y la visita se coordina por WhatsApp según disponibilidad de la agenda. La visita diagnóstica tiene un costo de $50.000, descontable si contratas el servicio, y el certificado se entrega en 24 a 48 horas hábiles una vez aprobada la instalación o la revisión.',
      },
      {
        q: 'Mi casa en el centro de Envigado es antigua, ¿pasa la revisión?',
        a: 'Depende del estado de la red, no de la edad de la casa. En Mesa y San Marcos hemos encontrado redes de muchos años en buen estado y otras que requieren renovar tramos. La revisión define exactamente qué hallazgos hay; si se corrigen, la instalación se certifica sin problema.',
      },
    ],
  },

  bello: {
    vecinos: ['copacabana', 'robledo', 'laureles', 'belen'],
    sectoresDetalle: [
      { nombre: 'Niquía', nota: 'Conjuntos residenciales sobre la autopista Norte, con red entregada por constructora pendiente de certificar.' },
      { nombre: 'Guaduales', nota: 'Vivienda en propiedad horizontal donde se pide conexión de estufa y calentador tras la entrega.' },
      { nombre: 'La Campiña', nota: 'Urbanizaciones de crecimiento reciente con medidor individual por apartamento.' },
      { nombre: 'Fontidueño', nota: 'Sector tradicional con casas de una y dos plantas y redes de más de quince años.' },
      { nombre: 'Zamora', nota: 'Vivienda consolidada donde el motivo de consulta habitual es la RPO vencida.' },
      { nombre: 'Santa Ana', nota: 'Casas tradicionales con reguladores y ventilaciones que suelen requerir corrección.' },
      { nombre: 'Pérez', nota: 'Zona residencial donde conviven redes antiguas y ampliaciones hechas sin certificar.' },
    ],
    faqLocal: [
      {
        q: 'Vivo en Niquía y la constructora dice que el gas ya está, pero no tengo servicio. ¿Qué falta?',
        a: 'Falta el certificado de la instalación interna y, casi siempre, la conexión de los gasodomésticos. La red construida no basta: EPM activa el medidor cuando existe un certificado vigente expedido por técnico certificado NTC 2505. Si la red entregada cumple, resolvemos certificado y conexión en una sola visita.',
      },
      {
        q: '¿Cómo sé si el técnico que contrato en Bello está realmente certificado?',
        a: 'Pide el certificado de competencia laboral vigente en instalaciones de gas bajo NTC 2505 y verifica que esté respaldado por un organismo de inspección acreditado ante ONAC. Un documento expedido por alguien sin esa credencial no lo acepta la distribuidora, así que el trabajo termina pagándose dos veces. En LujoGas el técnico es Luis Guillermo Muñoz Vélez, certificado bajo esa norma.',
      },
      {
        q: 'Tengo la RPO vencida en Fontidueño y EPM me avisó en la factura. ¿Me cortan el servicio?',
        a: 'La distribuidora puede suspender el servicio si la revisión periódica obligatoria no se presenta dentro del plazo notificado. Lo que corresponde es programar la revisión, corregir los hallazgos que aparezcan y radicar el certificado. Una vez expedido —24 a 48 horas hábiles tras la corrección— queda al día por los siguientes cinco años.',
      },
      {
        q: '¿Atienden todo Bello o solo el centro?',
        a: 'Atendemos el municipio completo: Niquía, Guaduales, La Campiña, Fontidueño, Zamora, Santa Ana, Pérez y el centro. Bello es el segundo municipio más poblado del Valle de Aburrá y la demanda de técnicos certificados es alta, por lo que conviene coordinar la visita con anticipación por WhatsApp.',
      },
    ],
  },

  itagui: {
    vecinos: ['sabaneta', 'la-estrella', 'belen', 'envigado'],
    sectoresDetalle: [
      { nombre: 'El Progreso', nota: 'Vivienda densa con ampliaciones sucesivas; frecuente encontrar tramos añadidos sin certificar.' },
      { nombre: 'San Pablo', nota: 'Casas tradicionales de una y dos plantas donde predomina la revisión periódica.' },
      { nombre: 'Los Naranjos', nota: 'Conjuntos residenciales con red centralizada y medidor individual.' },
      { nombre: 'Sevilla', nota: 'Sector residencial consolidado con redes que superan los quince años de servicio.' },
      { nombre: 'Ditaires', nota: 'Urbanizaciones de construcción reciente, normalmente pendientes de certificado tras la entrega.' },
      { nombre: 'La Unión', nota: 'Zona mixta de vivienda y pequeño comercio con cocinas a gas de uso continuo.' },
      { nombre: 'El Rosario', nota: 'Corredor con actividad industrial y comercial donde aplican instalaciones de mayor carga.' },
    ],
    faqLocal: [
      {
        q: 'Ampliamos la cocina en Itagüí sin avisar a nadie, ¿eso invalida el certificado?',
        a: 'Sí. Cualquier modificación del trazado, un punto nuevo o un gasodoméstico que cambie el caudal deja el certificado anterior desactualizado. Es uno de los hallazgos más comunes en El Progreso y San Pablo. La solución es revisar la ampliación, ajustar lo que la norma exija y expedir un certificado que ampare la instalación tal como quedó.',
      },
      {
        q: '¿Atienden locales y talleres en la zona industrial de Itagüí?',
        a: 'Sí. Las instalaciones de uso comercial e industrial requieren cálculo de carga para el consumo real de los equipos, ventilación dimensionada al espacio y certificado vigente. En El Rosario y los corredores industriales del municipio ese documento suele pedirse también en las verificaciones de funcionamiento del establecimiento.',
      },
      {
        q: 'Compré en Ditaires y el apartamento está sin certificar, ¿cuánto demora?',
        a: 'Si la red entregada por la constructora cumple la norma, la inspección y la prueba de hermeticidad se hacen en una visita y el certificado sale en 24 a 48 horas hábiles. Si aparecen hallazgos, primero se corrigen y luego se expide. El diagnóstico inicial cuesta $50.000 y se descuenta si contratas el servicio.',
      },
      {
        q: '¿La certificación de Itagüí la tramita el municipio o EPM?',
        a: 'Ninguno de los dos la expide. EPM distribuye el gas y exige el certificado, pero no certifica ni repara la red interna del inmueble. El documento lo expide un técnico certificado bajo NTC 2505 respaldado por un organismo de inspección acreditado ante ONAC. El municipio no interviene en ese trámite.',
      },
    ],
  },

  sabaneta: {
    vecinos: ['envigado', 'itagui', 'la-estrella', 'el-poblado'],
    sectoresDetalle: [
      { nombre: 'El Carmelo', nota: 'Torres de apartamentos de construcción reciente con red centralizada por edificio.' },
      { nombre: 'María Auxiliadora', nota: 'Sector cercano al parque con vivienda tradicional y redes de varios años.' },
      { nombre: 'Las Lomitas', nota: 'Zona alta con casas y unidades cerradas donde la ventilación requiere revisión específica.' },
      { nombre: 'San José', nota: 'Vivienda consolidada en la que predomina la revisión periódica obligatoria.' },
      { nombre: 'Punto Cero', nota: 'Corredor de alta densidad con edificios nuevos pendientes de certificar tras la entrega.' },
      { nombre: 'La Doctora', nota: 'Sector en crecimiento con urbanizaciones que se entregan con red construida sin gasodomésticos conectados.' },
    ],
    faqLocal: [
      {
        q: 'Sabaneta se llenó de torres nuevas, ¿todas necesitan certificado aparte?',
        a: 'El certificado ampara la instalación interna de cada inmueble, así que sí: cada apartamento requiere el suyo aunque la torre tenga red centralizada. Es lo que más pedimos resolver en Punto Cero y El Carmelo. Si la red entregada cumple, la inspección y el certificado se resuelven sin rehacer la instalación.',
      },
      {
        q: '¿Puedo conectar yo mismo la estufa que traje del apartamento anterior?',
        a: 'No conviene. La conexión debe hacerse con manguera certificada para gas, válvula de corte y prueba de hermeticidad posterior; además, un gasodoméstico distinto puede cambiar el caudal que la red debe soportar. Una conexión hecha sin esa verificación es causa frecuente de hallazgo en la revisión y de fugas en la unión.',
      },
      {
        q: '¿Qué pasa si vendo mi apartamento en Sabaneta y no tengo el certificado?',
        a: 'La venta no se bloquea por eso, pero el comprador o la entidad que financia suele pedir la instalación al día, y si la revisión periódica está vencida la distribuidora puede suspender el servicio. Tener el certificado vigente evita que el tema aparezca como pendiente en la negociación.',
      },
      {
        q: '¿Cubren también La Doctora y la parte alta del municipio?',
        a: 'Sí, atendemos Sabaneta completo, incluidas La Doctora y Las Lomitas. En la parte alta prestamos atención particular a la ventilación y a la evacuación de gases, porque muchas viviendas tienen espacios cerrados que la NTC 2505 exige resolver antes de certificar.',
      },
    ],
  },

  belen: {
    vecinos: ['laureles', 'el-poblado', 'itagui', 'robledo'],
    sectoresDetalle: [
      { nombre: 'Los Alpes', nota: 'Vivienda consolidada con redes de varias décadas y remodelaciones sucesivas de cocina.' },
      { nombre: 'Rosales', nota: 'Casas tradicionales donde el motivo de consulta más común es la revisión periódica.' },
      { nombre: 'Rincón', nota: 'Sector residencial denso con ampliaciones que suelen quedar fuera del certificado original.' },
      { nombre: 'La Mota', nota: 'Unidades cerradas y edificios con red centralizada y medidor individual.' },
      { nombre: 'Miravalle', nota: 'Vivienda de ladera donde la ventilación y la evacuación exigen revisión cuidadosa.' },
      { nombre: 'Rodeo Alto', nota: 'Corredor con vivienda y comercio; locales de comida con cocina a gas.' },
      { nombre: 'Las Playas', nota: 'Zona residencial cercana al aeropuerto Olaya Herrera con casas de una y dos plantas.' },
      { nombre: 'Fátima', nota: 'Barrio tradicional con redes antiguas que suelen presentar hallazgos en la RPO.' },
    ],
    faqLocal: [
      {
        q: '¿Belén entra en la cobertura o cobran desplazamiento aparte?',
        a: 'Belén está dentro de la cobertura habitual y no se cobra desplazamiento adicional. Aplica la misma visita diagnóstica de $50.000, descontable si contratas el servicio. Atendemos todo el sector: Los Alpes, Rosales, Rincón, La Mota, Miravalle, Rodeo Alto, Las Playas y Fátima.',
      },
      {
        q: 'Remodelé la cocina en Belén y moví la estufa, ¿necesito certificar de nuevo?',
        a: 'Sí. Mover el punto de gas cambia el trazado que amparaba el certificado anterior, y es exactamente el tipo de modificación que la revisión detecta. Hay que verificar el nuevo recorrido, la ventilación del espacio y la hermeticidad, y expedir un certificado que corresponda a la instalación tal como quedó.',
      },
      {
        q: 'En mi casa de Fátima la red es muy antigua, ¿la revisión va a salir mal?',
        a: 'Una red antigua no implica rechazo automático. Lo que define el resultado es el estado real: corrosión, uniones, ventilación y materiales. En barrios tradicionales de Belén encontramos de todo. Si hay hallazgos, se corrigen y luego se certifica; el presupuesto de la corrección se entrega antes de intervenir.',
      },
      {
        q: '¿Atienden los locales de comida del Rodeo Alto y la 30?',
        a: 'Sí. Un local con cocina a gas necesita instalación dimensionada al consumo de sus equipos, ventilación acorde al espacio y certificado vigente. Es un trabajo distinto al residencial porque la carga simultánea es mayor, y lo ejecuta el mismo técnico certificado que firma el documento.',
      },
    ],
  },

  robledo: {
    vecinos: ['laureles', 'belen', 'bello', 'copacabana'],
    sectoresDetalle: [
      { nombre: 'Altamira', nota: 'Vivienda de ladera con espacios reducidos donde la ventilación es el punto crítico.' },
      { nombre: 'El Diamante', nota: 'Sector residencial consolidado con redes de más de quince años.' },
      { nombre: 'Bello Horizonte', nota: 'Casas de una y dos plantas con ampliaciones hechas por etapas.' },
      { nombre: 'Aures', nota: 'Vivienda densa donde los tramos añadidos suelen quedar fuera del certificado original.' },
      { nombre: 'La Campiña', nota: 'Urbanizaciones con red centralizada y medidor individual por unidad.' },
      { nombre: 'Fuente Clara', nota: 'Zona residencial con instalaciones que requieren revisión de reguladores y ventilaciones.' },
      { nombre: 'Pajarito', nota: 'Desarrollos de vivienda nueva entregados con red construida pendiente de certificar.' },
    ],
    faqLocal: [
      {
        q: '¿Suben hasta la parte alta de Robledo?',
        a: 'Sí, atendemos Robledo completo, incluidas Altamira, Aures, Fuente Clara y Pajarito. En la zona de ladera revisamos con especial cuidado la ventilación y la evacuación de gases, porque muchas viviendas tienen cocinas en espacios cerrados que la NTC 2505 exige resolver antes de certificar.',
      },
      {
        q: 'En Pajarito entregaron el apartamento con gas instalado, ¿ya está certificado?',
        a: 'Red instalada y red certificada no son lo mismo. La constructora entrega la instalación construida, pero el certificado que EPM exige para activar el medidor corresponde al inmueble y normalmente queda pendiente. Revisamos la red entregada y, si cumple, expedimos el certificado en 24 a 48 horas hábiles.',
      },
      {
        q: 'Mi casa en Aures creció por etapas y cada una tiene su tubería, ¿eso se puede certificar?',
        a: 'Se puede, pero primero hay que verificar el conjunto: los tramos añadidos en distintos momentos suelen usar materiales diferentes o trazados que la norma vigente ya no permite. La revisión define qué corregir. Una vez unificada la instalación según la NTC 2505, se expide un certificado que la ampara completa.',
      },
      {
        q: '¿Cuánto cuesta la revisión en Robledo?',
        a: 'La visita diagnóstica cuesta $50.000 y se descuenta si contratas el servicio. La certificación o RPO parte de $150.000 y el valor final depende de los hallazgos que haya que corregir. El presupuesto se entrega después de la visita, con el detalle de lo que exige la norma, antes de intervenir nada.',
      },
    ],
  },

  'la-estrella': {
    vecinos: ['sabaneta', 'itagui', 'envigado', 'belen'],
    sectoresDetalle: [
      { nombre: 'Ancón', nota: 'Corredor sobre la vía al sur con vivienda y actividad comercial de paso.' },
      { nombre: 'La Tablaza', nota: 'Sector con vivienda tradicional y desarrollos nuevos en expansión.' },
      { nombre: 'Pueblo Viejo', nota: 'Casco tradicional con casas de una y dos plantas y redes de varios años.' },
      { nombre: 'El Agudelo', nota: 'Zona residencial de ladera donde la ventilación requiere revisión específica.' },
      { nombre: 'San Isidro', nota: 'Urbanizaciones recientes entregadas con red construida pendiente de certificado.' },
    ],
    faqLocal: [
      {
        q: '¿La Estrella queda dentro de la cobertura habitual?',
        a: 'Sí. La Estrella hace parte del Valle de Aburrá y está dentro de la zona que atendemos, incluidos Ancón, La Tablaza, Pueblo Viejo, El Agudelo y San Isidro. La visita se coordina por WhatsApp; aplica el mismo valor de diagnóstico de $50.000, descontable si contratas el servicio.',
      },
      {
        q: '¿El certificado que expiden vale para la distribuidora que atiende La Estrella?',
        a: 'Sí. El certificado se expide bajo NTC 2505, norma nacional, y por un técnico respaldado por organismo de inspección acreditado ante ONAC. Ese documento es el que la distribuidora exige en todo el Valle de Aburrá, sin diferencias por municipio.',
      },
      {
        q: 'Compré en San Isidro y necesito activar el gas, ¿por dónde empiezo?',
        a: 'Por la revisión de la red que entregó la constructora. Si cumple, se hace la prueba de hermeticidad, se conectan los gasodomésticos y se expide el certificado en 24 a 48 horas hábiles para que la distribuidora active el medidor. Si aparecen hallazgos, se corrigen antes y se presupuestan por separado.',
      },
      {
        q: 'En Pueblo Viejo la casa es vieja, ¿conviene renovar la red completa?',
        a: 'Depende de lo que encuentre la revisión. Si el deterioro es puntual, se reemplazan los tramos afectados; si el trazado completo ya no cumple la norma vigente, sale más razonable renovar. Entregamos las dos opciones con su costo para que la decisión sea tuya, no una sorpresa a mitad del trabajo.',
      },
    ],
  },

  copacabana: {
    vecinos: ['bello', 'robledo', 'laureles', 'el-poblado'],
    sectoresDetalle: [
      { nombre: 'El Centro', nota: 'Casco tradicional con vivienda de una y dos plantas y redes de décadas en servicio.' },
      { nombre: 'La Lomita', nota: 'Sector de ladera donde la ventilación y la evacuación son el punto crítico.' },
      { nombre: 'Machado', nota: 'Zona en crecimiento con urbanizaciones entregadas pendientes de certificar.' },
      { nombre: 'Zafra', nota: 'Vivienda consolidada donde predomina la revisión periódica obligatoria.' },
      { nombre: 'Peñolcito', nota: 'Sector residencial con ampliaciones hechas por etapas sobre la red original.' },
    ],
    faqLocal: [
      {
        q: '¿Atienden Copacabana o solo llegan hasta Bello?',
        a: 'Atendemos Copacabana, incluidos El Centro, La Lomita, Machado, Zafra y Peñolcito. Es parte del norte del Valle de Aburrá y está dentro de la cobertura. La visita se agenda por WhatsApp según disponibilidad; conviene coordinarla con algo de anticipación por la distancia.',
      },
      {
        q: 'EPM me notificó la revisión periódica en Copacabana, ¿es obligatoria de verdad?',
        a: 'Sí. La revisión periódica obligatoria se hace cada cinco años y la distribuidora puede suspender el servicio si no se presenta el certificado dentro del plazo notificado en la factura. No es un trámite opcional ni una venta: está exigida por la reglamentación nacional de instalaciones internas de gas.',
      },
      {
        q: 'En La Lomita la cocina es cerrada y sin ventana, ¿eso pasa la revisión?',
        a: 'Una cocina cerrada sin ventilación adecuada es un hallazgo que la NTC 2505 no permite dejar pasar, porque afecta la evacuación de gases de combustión. Casi siempre se resuelve con rejillas de ventilación reglamentarias o con el ducto de evacuación que corresponda. Una vez corregido, la instalación se certifica normalmente.',
      },
      {
        q: '¿Cuánto tarda el certificado si vivo en Copacabana?',
        a: 'El plazo de expedición es el mismo que en el resto del Valle de Aburrá: 24 a 48 horas hábiles una vez aprobada la instalación o la revisión. Lo que varía es la programación de la visita, que se coordina según la agenda del técnico y la distancia hasta el municipio.',
      },
    ],
  },
};
