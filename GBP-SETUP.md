# Google Business Profile — LujoGas

Guía para crear y verificar la ficha de Google Maps con todos los textos listos para copiar.
Fuente de los datos: `data/site.json`. El nombre, el teléfono y la dirección deben ser **idénticos** en la ficha, el sitio y `llms.txt`.

Crear en: https://business.google.com/create con la cuenta de Google que manejará el negocio (no una personal que luego se pierda).

---

## 1. Datos básicos

| Campo | Valor exacto |
|---|---|
| Nombre de la empresa | `LujoGas` |
| Categoría principal | Servicio de instalación de gas *(en inglés: Gas installation service; escribe "gas" y elige la más cercana)* |
| Categorías secundarias | Servicio de instalación de calentadores de agua · Servicio de reparación de calentadores de agua |
| ¿Los clientes van a tu dirección? | **No** → negocio de área de servicio (la dirección se oculta) |
| Dirección (privada, solo para verificar) | Calle 57 Sur # 65-94 (9708), Medellín, Antioquia, 050021 |
| Teléfono | +57 301 474 8653 |
| Sitio web | `https://lujogas.com.co/?utm_source=google&utm_medium=organic&utm_campaign=gbp` |

**No agregues palabras clave al nombre** ("LujoGas Instalación de Gas Medellín"). Google lo considera spam y es la causa número uno de suspensión de fichas.

**Dirección:** si los clientes no llegan a esa dirección (el técnico va a las casas), Google exige ocultarla. Si la muestras sin atender ahí, la ficha se puede suspender. La dirección igual se usa para verificar y para calcular cercanía.

---

## 2. Área de servicio

Agregar uno por uno:

- Medellín
- Envigado
- Sabaneta
- Itagüí
- La Estrella
- Bello
- Copacabana

---

## 3. Horario

| Día | Horario |
|---|---|
| Lunes a viernes | 8:00 a. m. – 5:00 p. m. |
| Sábado | 8:00 a. m. – 12:00 p. m. |
| Domingo | Cerrado |

Si atiendes urgencias fuera de ese horario, no lo pongas como "24 horas": Google lo verifica con reseñas y llamadas.

---

## 4. Descripción (648 de 750 caracteres)

```
LujoGas es el servicio de gas de Luis Guillermo Muñoz Vélez, técnico con certificado de competencia laboral bajo la NTC 2505 y más de 3.000 certificaciones en el Valle de Aburrá. Instalamos redes de gas natural en apartamentos, casas y negocios; hacemos la revisión periódica obligatoria (RPO), certificación de instalaciones y de línea matriz para conjuntos, mantenimiento de estufas y calentadores, y detección y reparación de fugas. El mismo técnico visita, corrige y firma el certificado, que se entrega en 24 a 48 horas hábiles. Atendemos Medellín, Envigado, Sabaneta, Itagüí, La Estrella, Bello y Copacabana. Cotización y agenda por WhatsApp.
```

Sin enlaces, sin precios y sin mayúsculas sostenidas: Google rechaza descripciones promocionales.

---

## 5. Servicios

En "Servicios", agregar cada uno con su descripción (máx. 300 caracteres) y precio "desde":

| Servicio | Precio | Descripción |
|---|---|---|
| Instalación de red de gas natural | Desde $850.000 | Instalación de red de gas en apartamento, casa o negocio con materiales certificados NTC, prueba de hermeticidad y certificado incluido. Visita diagnóstica de $50.000 descontable. |
| Revisión periódica obligatoria (RPO) | Desde $150.000 | Revisión de gas cada 5 años exigida por EPM: hermeticidad, ventilación y medición de monóxido de carbono. Certificado en 24 a 48 horas hábiles. |
| Certificación de instalación de gas | Desde $150.000 | Certificado de la instalación interna de gas para activar o mantener el servicio con EPM, con respaldo de organismo de inspección acreditado. |
| Certificación de línea matriz | Según número de apartamentos | Revisión y certificación de la tubería de gas de zonas comunes en conjuntos y edificios, con informe de hallazgos para la administración. |
| Mantenimiento preventivo de gas | Desde $80.000 | Limpieza y ajuste de estufas y calentadores, revisión de la red y recomendaciones por escrito. |
| Detección y reparación de fugas | Desde $100.000 | Prueba de hermeticidad, localización de la fuga por tramos y reparación con materiales certificados. |
| Instalación de calentadores a gas | Cotización en visita | Instalación de calentador de paso o acumulación con ducto de evacuación y ventilación según la norma. |
| Corrección de defectos de revisión | Cotización en visita | Corrección de defectos críticos y no críticos encontrados en la revisión periódica, con nueva prueba y certificado. |

---

## 6. Fotos (lo que más mueve la ficha)

Subir mínimo 10 al crearla y 2 o 3 nuevas cada mes. **Solo fotos reales**, tomadas con el celular, sin filtros ni imágenes de internet.

| Tipo | Cuántas | Ejemplos |
|---|---|---|
| Logo | 1 | El logo de LujoGas en fondo claro |
| Portada | 1 | Luis trabajando en una instalación |
| Equipo | 2–3 | Luis con la herramienta, con el manómetro, con el uniforme |
| Trabajos | 6+ | Red de cobre terminada, calentador con ducto, medidor y regulador, prueba de hermeticidad con manómetro, rejillas instaladas |
| Antes / después | 2+ | Tubería corroída vs. tramo nuevo; calentador mal instalado vs. corregido |

Al guardar las fotos en el celular, ponles nombre descriptivo antes de subirlas (ej. `instalacion-gas-envigado-cobre.jpg`). Nunca muestres datos de clientes ni números de casa.

Esas mismas fotos sirven para la galería de obras de `/nosotros` (`src/data/tecnico.ts → obras`).

---

## 7. Verificación

Google hoy verifica casi siempre con **video**. Prepárate antes de darle clic:

1. Graba en un solo plano continuo, sin cortes.
2. Empieza afuera: muestra la calle o una referencia de la zona.
3. Muestra algo que pruebe el negocio: la herramienta, el vehículo o la camisa con logo, material de trabajo.
4. Muestra que manejas el negocio: un recibo o documento con el nombre LujoGas, o el celular con el WhatsApp del número registrado.

La revisión tarda de unos días a un par de semanas. No edites el nombre, la categoría ni la dirección mientras está en revisión: reinicia el proceso.

---

## 8. Reseñas — meta: 10 en 60 días

Cuando la ficha esté verificada: Inicio de la ficha → **Pedir reseñas** → copiar el enlace corto (`g.page/r/...`).

Mensaje para enviar por WhatsApp al terminar cada trabajo (personalízalo con el nombre del cliente y el servicio):

```
Hola [nombre], gracias por confiar en LujoGas para [la revisión / la instalación] de tu gas. Si quedaste a gusto, me ayudarías mucho con una reseña en Google, toma un minuto: [enlace]
Si algo no quedó como esperabas, escríbeme aquí primero y lo resuelvo.
```

Reglas:

- Pídela el mismo día del trabajo: después de una semana casi nadie la deja.
- **Responde todas las reseñas** en 24–48 horas, buenas y malas, con el nombre del servicio y la zona cuando sea natural ("Gracias, Ana. Fue un gusto hacer la revisión de su apartamento en Laureles.").
- **Prohibido:** ofrecer descuentos a cambio, pedir solo a clientes contentos de forma selectiva masiva, reseñas de familiares o desde el mismo celular/red. Google las borra y puede suspender la ficha.

---

## 9. Publicaciones (1 por semana el primer mes)

Ideas listas, cada una con botón "Más información" hacia la página correspondiente:

1. **¿Te llegó el aviso de revisión periódica en la factura de EPM?** Tienes desde 5 meses antes para hacerla sin riesgo de suspensión. → `https://lujogas.com.co/rpo-gas-medellin`
2. **Calentador con llama amarilla o hollín:** señales de monóxido de carbono y qué hacer. → `https://lujogas.com.co/blog/monoxido-carbono-calentador-gas`
3. **Instalación de gas en apartamento:** qué pide la administración y cuánto tarda. → `https://lujogas.com.co/blog/instalacion-red-gas-domiciliaria`
4. **Foto de un trabajo terminado** con zona y tipo de servicio (sin datos del cliente). → `https://lujogas.com.co/instalacion-gas-medellin`

---

## 10. Después de verificar: pasar estos datos para el sitio

Enviar a quien mantiene el sitio:

- La URL de la ficha en Google Maps (Compartir → Copiar enlace).
- El enlace corto de reseñas (`g.page/r/...`).

Con eso se actualiza en el código:

- `src/lib/schema.ts` → `hasMap` y `sameAs` con la URL real de la ficha.
- Botón "Ver reseñas en Google" en el footer y en `/nosotros`.
- `aggregateRating` en el schema **solo** cuando haya reseñas reales, con los valores de la ficha.

---

## Errores que suspenden fichas

| Error | Por qué |
|---|---|
| Palabras clave en el nombre | Spam de nombre |
| Mostrar la dirección sin atender clientes ahí | Incumple la política de negocios de área de servicio |
| Usar un número distinto al del sitio | Inconsistencia de NAP |
| Crear una segunda ficha "para Envigado" | Fichas duplicadas |
| Cambiar datos clave durante la verificación | Reinicia o bloquea la verificación |
| Reseñas compradas o incentivadas | Eliminación de reseñas y suspensión |
