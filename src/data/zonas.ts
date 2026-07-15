export interface Zona {
  slug: string;
  name: string;
  tipo: 'barrio' | 'municipio';
  municipio: string;
  geo: { lat: number; lng: number };
  descripcionCorta: string; // 1 sentence, factual
  descripcionLarga: string; // 2-3 sentences, factual about being in Valle de Aburrá metro
  sectores: string[];       // barrios/sectores/urbanizaciones clave de la zona
  contenidoLocal: string[]; // 3 párrafos únicos (~300 palabras) sobre particularidades de la zona
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
    contenidoLocal: [
      'En El Poblado la mayoría de los trabajos que realizamos son en apartamentos dentro de edificios y unidades cerradas de propiedad horizontal. Esto tiene implicaciones técnicas concretas: muchas torres cuentan con redes centralizadas de gas natural que llegan hasta un medidor individual por apartamento, y cualquier modificación interna —trasladar la estufa, agregar un calentador de paso o conectar una secadora a gas— exige mantener la presión y el diámetro de tubería según la NTC 2505. Además, las administraciones suelen pedir el certificado vigente antes de autorizar trabajos en zonas comunes o ductos compartidos.',
      'Un caso muy frecuente en sectores como El Tesoro, Los Balsos y La Calera son los calentadores de paso a gas en apartamentos de estratos altos. Por la altura de la zona y la temperatura del agua, es común que los propietarios cambien calentadores eléctricos por calentadores de paso, lo que requiere punto de gas nuevo, ducto de evacuación de gases y rejillas de ventilación reglamentarias. También atendemos restaurantes y locales gastronómicos en Manila, Provenza y Astorga, donde las instalaciones comerciales exigen cálculos de carga superiores a los residenciales.',
      'Si tu apartamento en El Poblado es nuevo y la constructora entregó la red sin certificar, o si EPM suspendió el servicio por una revisión periódica vencida, coordinamos la visita, corregimos lo que la norma exija y entregamos el certificado en 24 a 48 horas para que la empresa distribuidora reactive el servicio sin trámites adicionales de tu parte.',
    ],
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
    contenidoLocal: [
      'Laureles es un barrio con muchas casas construidas hace 40, 50 o más años, y eso define gran parte de nuestro trabajo en la zona: redes internas antiguas en tubería galvanizada o cobre con décadas de uso, que en la revisión periódica obligatoria suelen presentar hallazgos por corrosión, uniones deterioradas o trazados que ya no cumplen la NTC 2505 vigente. En estos casos evaluamos si conviene reparar tramos puntuales o renovar la red completa, siempre con presupuesto claro antes de intervenir.',
      'Otro escenario típico en Laureles y Estadio son las remodelaciones: casas que se convierten en apartaestudios para arriendo, cocinas que se integran al salón o segundos pisos que se independizan. Cada uno de esos cambios implica mover puntos de gas, instalar medidores adicionales o dividir la red, y todo debe quedar certificado para que EPM active el servicio de cada unidad por separado. También conectamos estufas y calentadores en los edificios de Carlos E. Restrepo y Suramericana, donde predominan apartamentos de tamaño medio con red centralizada.',
      'Por la actividad comercial de la Avenida Nutibara, la 70 y la 33, atendemos además cafés, panaderías y restaurantes que necesitan instalación comercial con certificación al día. Si tu negocio o casa en Laureles tiene la revisión vencida o EPM dejó observaciones tras una inspección, corregimos los hallazgos y entregamos el certificado ICONTEC en 24 a 48 horas.',
    ],
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
    contenidoLocal: [
      'Envigado combina dos realidades muy distintas para el trabajo con gas: el centro tradicional —Mesa, San Marcos, La Magnolia— con casas de uno y dos pisos y redes que llevan décadas en servicio, y las lomas —El Esmeraldal, Loma del Atravesado, El Escobero— donde el crecimiento vertical de los últimos años ha multiplicado los edificios nuevos. En el centro, el trabajo más común es la revisión periódica obligatoria y la renovación de tramos antiguos; en las lomas, la certificación de redes nuevas entregadas por constructora y la instalación de calentadores de paso.',
      'Un detalle propio de Envigado: muchos apartamentos nuevos en la zona alta se entregan con la red de gas construida pero sin gasodomésticos conectados. Conectar la estufa de inducción mixta, el calentador o el horno requiere verificación de presiones, prueba de hermeticidad y acta técnica para que la distribuidora active el medidor. Hacemos ese proceso completo en una sola visita cuando la red está en buen estado.',
      'También atendemos los corredores comerciales de la calle 37 Sur y la zona de Ziruma, donde restaurantes y locales gastronómicos requieren instalaciones comerciales con mayor capacidad. Si estás en Envigado y necesitas instalar, certificar o poner al día la RPO de tu red de gas, coordinamos la visita diagnóstica y entregamos el certificado oficial en 24 a 48 horas hábiles.',
    ],
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
    contenidoLocal: [
      'En Bello gran parte de nuestro trabajo se concentra en los conjuntos residenciales de Niquía, Ciudadela del Norte y los desarrollos recientes sobre la autopista Norte. Son torres de apartamentos entregados por constructora donde el escenario típico es este: la red de gas está construida, pero el propietario necesita el certificado vigente y la conexión de sus gasodomésticos para que EPM active el medidor. Resolvemos ambas cosas en una sola visita cuando la red cumple la norma.',
      'En el centro de Bello, Zamora, Santa Ana y Pérez predominan casas tradicionales de una y dos plantas, muchas con redes que superan los 15 o 20 años. Ahí el trabajo frecuente es la revisión periódica obligatoria con corrección de hallazgos: reguladores vencidos, ventilaciones insuficientes o tramos de tubería que la norma actual ya no permite. Antes de intervenir entregamos presupuesto detallado, y el certificado ICONTEC queda listo en 24 a 48 horas tras la corrección.',
      'Bello es el segundo municipio más poblado del Valle de Aburrá y la demanda de técnicos certificados supera la oferta local, por lo que muchos vecinos terminan contratando personas sin certificación NTC 2505 —un riesgo real de seguridad y un problema al momento de activar el servicio. Todo trabajo de LujoGas en Bello lo ejecuta directamente el técnico certificado, con materiales avalados y documento oficial que la distribuidora acepta sin objeciones.',
    ],
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
    contenidoLocal: [
      'Itagüí tiene un perfil mixto que se refleja directamente en el tipo de instalaciones que atendemos: zonas residenciales consolidadas como Ditaires, San Pablo y El Rosario conviven con corredores comerciales e industriales donde funcionan restaurantes, panaderías, lavanderías y talleres que usan gas en sus procesos. Las instalaciones comerciales requieren cálculo de carga, tubería de mayor diámetro y certificación específica — un trabajo distinto al residencial que realizamos con la misma norma NTC 2505.',
      'En el sector residencial, las urbanizaciones nuevas del corredor de la autopista Sur y la zona de Suramérica concentran la mayor demanda de certificaciones de redes entregadas por constructora y conexión de gasodomésticos. En los barrios tradicionales del centro de Itagüí, en cambio, el trabajo más frecuente es la revisión periódica obligatoria en casas con redes antiguas, donde solemos encontrar reguladores fuera de vida útil y ventilaciones que ya no cumplen la norma vigente.',
      'Un caso recurrente en Itagüí: locales comerciales que cambian de arrendatario y necesitan certificado de gas actualizado para abrir —requisito habitual de las administraciones y de la distribuidora al cambiar la titularidad del servicio. Coordinamos la revisión, corregimos hallazgos si los hay y entregamos el certificado oficial en 24 a 48 horas hábiles para que el negocio abra a tiempo.',
    ],
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
    contenidoLocal: [
      'Sabaneta es el municipio con mayor crecimiento vertical del sur del Valle de Aburrá, y eso marca el trabajo que más realizamos aquí: certificación de redes de gas en apartamentos nuevos. Muchas torres en Las Lomitas, La Doctora y el corredor de la avenida Las Vegas se entregan en obra gris o con la red construida pero sin certificar a nombre del propietario, y sin ese documento EPM no activa el medidor. Hacemos la verificación, la prueba de hermeticidad y entregamos el certificado en 24 a 48 horas.',
      'El segundo escenario más común en Sabaneta es la conexión de gasodomésticos en apartamentos recién entregados: estufa, horno, calentador de paso y secadora. Cada conexión requiere manguera certificada, válvula de corte independiente y verificación de ventilaciones — detalles que las constructoras dejan por fuera de la entrega y que el propietario debe resolver antes de habitar. Lo resolvemos en una sola visita junto con la certificación cuando aplica.',
      'En el parque principal y los barrios tradicionales como San José y María Auxiliadora también atendemos casas de una y dos plantas con redes antiguas que requieren revisión periódica obligatoria, además de los restaurantes y cafés de la zona gastronómica del parque, que manejan instalaciones comerciales. Toda intervención en Sabaneta la ejecuta el técnico certificado NTC 2505 con materiales avalados por ICONTEC.',
    ],
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
    contenidoLocal: [
      'Robledo es una de las zonas más extensas del noroccidente de Medellín y concentra dos tipos de trabajo muy distintos. Por un lado, los barrios consolidados —Altamira, El Diamante, Bello Horizonte, Aures— con casas familiares de una y dos plantas donde el servicio más solicitado es la revisión periódica obligatoria y la reparación de redes con años de uso. Por otro, Pajarito y la Ciudadela Nuevo Occidente, con torres de apartamentos donde la demanda principal es la certificación de redes nuevas y la conexión de gasodomésticos.',
      'En las casas tradicionales de Robledo es habitual encontrar ampliaciones hechas con el tiempo: un segundo piso que se independizó, una cocina que se trasladó o un local que se abrió en el primer piso. Cada modificación de ese tipo altera la red de gas original y debe regularizarse ante la norma para evitar hallazgos en la RPO o suspensiones del servicio. Evaluamos el estado real de la red, corregimos lo necesario y dejamos la instalación certificada.',
      'En las torres de Pajarito y Nuevo Occidente el escenario típico es el apartamento entregado con red construida pero medidor sin activar: la distribuidora exige certificado vigente y gasodomésticos conectados correctamente. Realizamos ambas cosas en una visita, con prueba de hermeticidad incluida y entrega del certificado ICONTEC en 24 a 48 horas hábiles.',
    ],
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
    contenidoLocal: [
      'La Estrella ha vivido un crecimiento residencial notable sobre el corredor de la autopista Sur y la variante de Caldas: conjuntos y torres nuevas en sectores como Ancón y La Tablaza que se suman al casco tradicional del municipio. En los proyectos nuevos, el trabajo más frecuente es la certificación de la red entregada por constructora y la conexión de estufas y calentadores para la activación del medidor ante la distribuidora.',
      'En el centro de La Estrella y en sectores como Pueblo Viejo y San Isidro predominan casas de una y dos plantas, varias con redes de gas que superan los 15 años de servicio. Ahí realizamos revisiones periódicas obligatorias, renovación de tramos antiguos y reubicación de puntos de gas en remodelaciones. Un detalle práctico de la zona: por la topografía de laderas, algunas viviendas presentan trazados de tubería exteriores expuestos a la intemperie que requieren protección y anclajes según la norma — lo verificamos en cada visita.',
      'Aunque La Estrella queda en el extremo sur del Valle de Aburrá, el desplazamiento no cambia nuestras condiciones: visita diagnóstica a $50.000, presupuesto claro antes de intervenir y certificado oficial ICONTEC en 24 a 48 horas hábiles, con el mismo técnico certificado NTC 2505 que atiende todo el Valle de Aburrá.',
    ],
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
    contenidoLocal: [
      'Copacabana conserva un casco urbano tradicional —El Centro, La Lomita, Zafra— donde predominan casas familiares de una y dos plantas con redes de gas que en muchos casos llevan más de una década en servicio. El trabajo que más realizamos en el municipio es la revisión periódica obligatoria: verificación de hermeticidad, estado de reguladores, ventilaciones y evacuación de gases, con corrección de hallazgos en la misma visita cuando es posible.',
      'Sobre la vía Machado y el corredor Medellín–Bogotá han aparecido desarrollos residenciales nuevos que traen el escenario opuesto: redes recién construidas que necesitan certificación inicial y conexión de gasodomésticos para que la distribuidora active el servicio. También es común en Copacabana la conexión de estufas y calentadores en viviendas que pasan de pipeta de GLP a gas natural cuando la red domiciliaria llega a su sector — un cambio que exige adecuación de puntos y verificación completa de la instalación.',
      'Al ser un municipio del norte del Valle de Aburrá con menos técnicos certificados disponibles que Medellín, muchos habitantes de Copacabana aplazan la RPO hasta recibir la notificación de suspensión. No esperes a ese punto: coordinamos la visita diagnóstica a $50.000, ponemos la red al día según la NTC 2505 y entregamos el certificado oficial en 24 a 48 horas hábiles.',
    ],
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
    contenidoLocal: [
      'Belén es uno de los barrios más grandes y densos de Medellín, y su parque de vivienda es muy variado: casas tradicionales de dos y tres pisos en Rosales, Fátima y Las Playas, torres de apartamentos en La Mota y Loma de los Bernal, y vivienda en ladera en Rincón, Miravalle y Rodeo Alto. Esa variedad define nuestro trabajo diario en la zona, desde certificaciones de redes nuevas hasta renovación de instalaciones con décadas de uso.',
      'Un caso muy repetido en Belén son las casas multifamiliares: propiedades donde cada piso funciona como vivienda independiente pero la red de gas original era una sola. Para que EPM facture cada unidad por separado hay que dividir la red, instalar medidores independientes y certificar cada instalación resultante — un trabajo que hacemos con frecuencia en Rosales, Fátima y el sector de la 76. También reubicamos puntos de gas en remodelaciones de cocina, muy comunes en las casas tradicionales del barrio.',
      'En La Mota y Loma de los Bernal, donde predominan unidades cerradas recientes, la demanda principal es la conexión certificada de gasodomésticos y los calentadores de paso. Cualquiera sea tu caso en Belén, la visita diagnóstica cuesta $50.000, el presupuesto se entrega antes de intervenir y el certificado ICONTEC queda en tus manos en 24 a 48 horas hábiles.',
    ],
  },
];
