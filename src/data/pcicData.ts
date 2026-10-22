import { CriterioEvaluacion, FormDataELE, NivelMCER, UnidadDidactica, VariedadDialectal } from '../types';

export const NIVELES_CONFIG: Record<NivelMCER, {
  nombre: string;
  subtitulo: string;
  recursosGram: string;
  lexicoBase: string;
  pronunciacion: string;
  discurso: string;
  descriptoresObjetivos: string[];
}> = {
  A1: {
    nombre: "Acceso (A1)",
    subtitulo: "Usuario básico inicial",
    recursosGram: "Presente de indicativo de verbos regulares y reflexivos de alta frecuencia (llamarse, levantarse, acostarse), pronombres personales de sujeto, concordancia de género y número básica, interrogativos nucleares (cómo, de dónde, qué, a qué hora).",
    lexicoBase: "Identificación personal, rutinas cotidianas elementales (despertarse, desayunar, comer, dormir), días de la semana, números cardinales (0-100), partes del día (por la mañana, por la tarde, por la noche).",
    pronunciacion: "Distinción gráfica/fonética de /b/-/p/, entonación interrogativa absoluta y vocales /a, e, i, o, u/, acentuación llana regular.",
    discurso: "Enunciados breves y yuxtapuestos, conectores básicos de adición ('y', 'también') y temporales ('primero', 'después'). Mensajes orales y escritos sencillos y aislados.",
    descriptoresObjetivos: [
      "El alumno puede reconocer y utilizar expresiones cotidianas muy frecuentes para satisfacer necesidades inmediatas de tipo concreto.",
      "El alumno puede presentarse a sí mismo y a otros, pedir y dar información personal básica sobre su domicilio, sus pertenencias y las personas que conoce.",
      "El alumno puede relacionarse de forma elemental siempre que su interlocutor hable despacio y con claridad y esté dispuesto a cooperar."
    ]
  },
  A2: {
    nombre: "Plataforma (A2)",
    subtitulo: "Usuario básico autónomo",
    recursosGram: "Verbos con alternancia vocálica (e>ie, o>ue, e>i), perífrasis de obligación (tener que + inf., hay que + inf.), marcadores temporales frecuentes (todos los días, a veces, antes de + inf., después de + inf.), pronombres reflexivos en régimen personal.",
    lexicoBase: "Actividades cotidianas detalladas (ducharse, vestirse, salir del trabajo, hacer la compra, cenar), horarios de apertura, transporte público, colocaciones frecuentes: 'tomar el autobús/metro', 'hacer la compra', 'quedar con amigos'.",
    pronunciacion: "Entonación de preguntas relativas vs. absolutas, entonación de enumeración, pronunciación de la /r/ simple vs. múltiple /rr/, reducción vocálica en habla enlazada.",
    discurso: "Párrafos descriptivos sencillos, conectores de contraste habitual ('pero') y causales básicos ('porque', 'por eso'). Cohesión cronológica elemental.",
    descriptoresObjetivos: [
      "El alumno puede comprender frases y el vocabulario más habitual sobre temas de interés personal y rutinas inmediatas.",
      "El alumno puede comunicarse en tareas sencillas y habituales que requieren un intercambio simple y directo de información sobre actividades cotidianas.",
      "El alumno puede describir en términos sencillos aspectos de su pasado y su entorno, así como cuestiones relacionadas con sus necesidades inmediatas."
    ]
  },
  B1: {
    nombre: "Umbral (B1)",
    subtitulo: "Usuario independiente",
    recursosGram: "Pretéritos del indicativo (indefinido vs. imperfecto vs. pretérito perfecto) para narración de hábitos pasados frente al presente, oraciones temporales (cuando + indicativo), perífrasis de continuidad (seguir + gerundio, empezar a + inf.).",
    lexicoBase: "Biografía, anécdotas cotidianas, imprevistos y cambios de estilo de vida, expresiones de frecuencia y duración (hace... que, desde hace, durante), colocaciones: 'romper la rutina', 'llevar una vida sedentaria/activa'.",
    pronunciacion: "Distribución silábica compleja, acento de intensidad contrastivo (canto/cantó, hablo/habló) y entonación de oraciones compuestas.",
    discurso: "Narraciones cronológicas estructuradas, conectores discursivos ('mientras tanto', 'por un lado... por otro', 'sin embargo', 'al final'). Textos cohesionados y organizados.",
    descriptoresObjetivos: [
      "El alumno puede comprender los puntos principales de textos claros y en lengua estándar si tratan de cuestiones que le son conocidas.",
      "El alumno puede desenvolverse en la mayor parte de las situaciones que pueden surgir durante un viaje por zonas donde se utiliza la lengua.",
      "El alumno puede producir textos sencillos y coherentes sobre temas que le son familiares o en los que tiene un interés personal."
    ]
  },
  B2: {
    nombre: "Avanzado (B2)",
    subtitulo: "Usuario independiente avanzado",
    recursosGram: "Presente y pretérito imperfecto de subjuntivo en oraciones temporales de prospección futura (en cuanto + subjuntivo, hasta que + subjuntivo), pasiva refleja e impersonalidad con 'se', estructuras concesivas (aunque + ind./subj.).",
    lexicoBase: "Gestión del tiempo, conciliación laboral y familiar, ritmos biológicos, hiperconectividad y desconexión digital, expresiones idiomáticas y registros formales vs. informales.",
    pronunciacion: "Prosodia y curvas melódicas de matiz pragmático (ironía, duda, cortesía atenuada, énfasis argumentativo).",
    discurso: "Textos de opinión y contraste argumentativo con variedad de conectores de causa y consecuencia complejos ('dado que', 'por consiguiente', 'a pesar de que').",
    descriptoresObjetivos: [
      "El alumno puede entender las ideas principales de textos complejos que traten de temas tanto concretos como abstractos.",
      "El alumno puede relacionarse con hablantes nativos con un grado suficiente de fluidez y naturalidad de modo que la comunicación se realice sin esfuerzo.",
      "El alumno puede producir textos claros y detallados sobre temas diversos así como defender un punto de vista sobre temas generales indicando pros y contras."
    ]
  },
  C1: {
    nombre: "Dominio Operativo Eficaz (C1)",
    subtitulo: "Usuario competente",
    recursosGram: "Fórmulas complejas de subordinación adjetiva y sustantiva, alternancias modales para expresar diversos grados de aserción y distanciamiento enunciativo, construcciones absolutas de participio y gerundio.",
    lexicoBase: "Terminología sociológica, cronobiología, transformaciones de la jornada laboral, expresiones metafóricas y refranes contextualizados, colocaciones cultas y especializadas.",
    pronunciacion: "Gestión fina del ritmo, pausas discursivas y entonación enfática para la oratoria formal y el debate académico.",
    discurso: "Artículos de opinión, informes de síntesis y debates formales altamente cohesionados con conectores de nivel superior ('no obstante', 'en resumidas cuentas', 'por añadidura').",
    descriptoresObjetivos: [
      "El alumno puede comprender una amplia variedad de textos extensos y con cierto nivel de exigencia, así como reconocer en ellos sentidos implícitos.",
      "El alumno sabe expresarse de forma fluida y espontánea sin muestras muy evidentes de esfuerzo para encontrar la expresión adecuada.",
      "El alumno puede hacer un uso flexible y efectivo del idioma para fines sociales, académicos y profesionales."
    ]
  },
  C2: {
    nombre: "Maestría (C2)",
    subtitulo: "Usuario plenamente competente",
    recursosGram: "Dominio completo de la correlación de tiempos verbales, usos de infinitivos compuestos, matices elípticos, inversiones sintácticas estilísticas y recursos retóricos.",
    lexicoBase: "Riqueza polisémica, fraseología arcaica y vanguardista, tecnicismos sociolingüísticos, refranes y dobles sentidos culturales.",
    pronunciacion: "Naturalidad absoluta en entonaciones regionales, prosodia espontánea en registros cultos y populares con control de la entonación expresiva sutil.",
    discurso: "Ensayos críticos, textos de glosa y réplica dialéctica con riqueza de modalizadores epistémicos y precisión discursiva máxima.",
    descriptoresObjetivos: [
      "El alumno puede comprender con facilidad prácticamente todo lo que oye o lee.",
      "El alumno sabe reconstruir la información y los argumentos procedentes de diversas fuentes, ya sean en lengua hablada o escrita, y presentarlos de manera coherente y resumida.",
      "El alumno puede expresarse espontáneamente, con gran fluidez y con un grado de precisión que le permite diferenciar pequeños matices de significado."
    ]
  }
};

export const VARIEDADES_CONFIG: Record<VariedadDialectal, {
  nombre: string;
  gentilicio: string;
  rasgosFonicos: string;
  rasgosMorfosintacticos: string;
  lexicoTipico: string;
  pautasCulturales: string;
}> = {
  peninsular: {
    nombre: "Peninsular (España)",
    gentilicio: "Español Peninsular (España centro-norte)",
    rasgosFonicos: "Distinción fonológica entre /θ/ (c ante e/i, z) y /s/; articulación ápico-alveolar de la /s/; mantenimiento de la /d/ intervocálica salvo en participios coloquiales en -ado.",
    rasgosMorfosintacticos: "Uso del pronombre 'vosotros/as' con su desinencia verbal de 2ª persona plural (p. ej. '¿a qué hora os levantáis?'); empleo del pretérito perfecto compuesto para acciones del pasado reciente conectadas al presente ('hoy me he levantado temprano'); leísmo de persona masculino admitido por la RAE.",
    lexicoTipico: "Coger el autobús, hacer la compra, ir de tapas, sobremesa, salir de cañas, piso (vivienda), ordenar el cuarto, curro (coloquial por trabajo).",
    pautasCulturales: "Horarios comerciales y laborales partidos: comida principal entre las 14:00 y las 15:30; cena tardía (21:00-22:30); la sobremesa como espacio clave de socialización; tuteo generalizado en contextos informales y comerciales."
  },
  rioplatense: {
    nombre: "Rioplatense (Argentina y Uruguay)",
    gentilicio: "Español Rioplatense (Argentina y Uruguay)",
    rasgosFonicos: "Yeísmo rehilado con articulación fricativa posalveolar sorda o sonora (/ʃ/ o /ʒ/); seseo absoluto; entonación con curvas melódicas de ascendencia italiana.",
    rasgosMorfosintacticos: "Voseo paradigmático con flexión verbal propia en presente de indicativo e imperativo ('vos te levantás', 'vos tenés', 'hacé esto'); preferencia casi exclusiva del pretérito perfecto simple sobre el compuesto; uso exclusivo de 'ustedes' para el plural.",
    lexicoTipico: "Tomar mate, laburo / laburar, colectivo (autobús), departamento (piso), che, merienda compartida con facturas o galletitas, salir a tomar algo.",
    pautasCulturales: "Cena tardía (21:30 a 23:00); el ritual compartido del mate en centros de estudio y lugares de trabajo; cultura del encuentro social de larga duración y proximidad física interpersonal."
  },
  mexicana: {
    nombre: "Mexicana",
    gentilicio: "Español Mexicano",
    rasgosFonicos: "Seseo; tensión y claridad en la pronunciación de las consonantes con frecuente debilitamiento vocálico átono; entonación circunfleja melódica característica.",
    rasgosMorfosintacticos: "Uso generalizado de 'ustedes' para la segunda persona plural; uso frecuente de diminutivos con función pragmática de cortesía o afecto (-ito, -ita: 'ahorita', 'un ratito'); uso idiomático de 'hasta que' indicando inicio.",
    lexicoTipico: "Tomar el camión/metro, checar la hora, platicar con compañeros, comer a las 14:30-15:00, desayuno sustancioso (chilaquiles, huevos), chamba (trabajo).",
    pautasCulturales: "Comida fuerte a media tarde con reunión familiar extendida; normas de cortesía muy elaboradas con atenuación; respeto en tratamientos laborales y vecinales."
  },
  andina: {
    nombre: "Andina",
    gentilicio: "Español Andino (Perú, Bolivia, Ecuador, Colombia andina)",
    rasgosFonicos: "Seseo; asibilación de /r/ y /rr/; conservación de la distinción entre /ʎ/ y /ʝ/ en ciertas zonas rurales; articulación clara de la /s/ final.",
    rasgosMorfosintacticos: "Uso exclusivo de 'ustedes'; tendencia a un mayor uso del tratamiento formal ('usted') incluso entre conocidos; uso del pretérito perfecto compuesto con matices evidenciales en algunas zonas.",
    lexicoTipico: "Tomar la combi o micro, compartir el almuerzo tradicional, charlar, laborar, expresiones de cortesía cotidiana.",
    pautasCulturales: "Jornada que inicia a primeras horas de la mañana con el aprovechamiento de la luz solar; gastronomía basada en granos y tubérculos autóctonos; fuerte sentido de reciprocidad comunitaria."
  },
  caribeña: {
    nombre: "Caribeña",
    gentilicio: "Español Caribeño (Cuba, Puerto Rico, Rep. Dominicana, costas de Colombia y Venezuela)",
    rasgosFonicos: "Aspiración o pérdida total de la /s/ implosiva en final de sílaba y palabra; lambdacismo (trueque de /r/ por /l/: 'cai-tal'); vocalización o elisión de consonantes débiles; entonación rápida y musical.",
    rasgosMorfosintacticos: "Uso generalizado de 'ustedes'; estructura no invertida en preguntas con pronombre sujeto ('¿Qué tú quieres?', '¿A qué hora tú te levantas?'); empleo redundante y frecuente de pronombres sujeto.",
    lexicoTipico: "Coger la guagua / carro público, resolver la jornada, merendar café colado, descansar bajo la sombra, rumbear los fines de semana.",
    pautasCulturales: "Ritmo de vida condicionado por las altas temperaturas; alta interacción en espacios públicos exteriores (portales, balcones, calles); calidez y cercanía afectiva en el trato cotidiano."
  },
  chilena: {
    nombre: "Chilena",
    gentilicio: "Español Chileno",
    rasgosFonicos: "Seseo; aspiración de la /s/ final; pronunciación palatalizada de /x/ ante vocales anteriores; entonación rápida y melódica ascendente.",
    rasgosMorfosintacticos: "Voseo verbal chileno en situaciones de confianza ('tú sabís', 'tú te levantái'); uso exclusivo de 'ustedes' en plural; uso del artículo ante nombres de pila en registro coloquial.",
    lexicoTipico: "Tomar once (merienda-cena tradicional chilena), tomar la micro o el metro, la pega (el trabajo), cachar (entender), pololo/a.",
    pautasCulturales: "La institución de 'tomar once' entre las 19:00 y las 20:30 (pan batido, palta, té), reemplazando a menudo a la cena formal; jornada laboral continua en las grandes ciudades."
  }
};

export const PLANTILLAS_PREESTABLECIDAS: Array<{
  id: string;
  titulo: string;
  nivel: NivelMCER;
  variedad: VariedadDialectal;
  tema: string;
  funcion: string;
  gramaticaUser: string;
  lexicoUser: string;
  culturalUser: string;
  contexto: string;
  destrezas: any[];
  duracion: number;
}> = [
  {
    id: "a1_presentaciones",
    titulo: "A1 · Primer encuentro: saludos, datos personales y procedencia",
    nivel: "A1",
    variedad: "peninsular",
    tema: "Primer contacto en el curso de español y redes de intercambio",
    funcion: "Presentarse, dar el nombre, la nacionalidad, la profesión y pedir información básica de contacto",
    gramaticaUser: "Presente de verbos regulares (-ar, -er, -ir) y ser/llamarse/tener; pronombres interrogativos (cómo, de dónde, cuál)",
    lexicoUser: "Saludos y despedidas (hola, buenos días, hasta luego), países y gentilicios, números de teléfono y profesiones comunes",
    culturalUser: "Pautas de saludo interpersonal en España (los dos besos, el apretón de manos, el espacio interpersonal físico)",
    contexto: "Grupo de 10 estudiantes universitarios Erasmus principiantes absolutos en Madrid",
    destrezas: ["Comprensión oral", "Interacción oral", "Comprensión lectora", "Mediación oral"],
    duracion: 90
  },
  {
    id: "a2_rutina",
    titulo: "A2 · La rutina diaria y el choque de horarios internacionales",
    nivel: "A2",
    variedad: "peninsular",
    tema: "La rutina diaria y los horarios de vida cotidiana",
    funcion: "Describir las rutinas cotidianas, preguntar por horarios y contrastar estilos de vida",
    gramaticaUser: "",
    lexicoUser: "",
    culturalUser: "",
    contexto: "Adultos, 8-12 estudiantes, motivación general/laboral en aula presencial",
    destrezas: ["Comprensión oral", "Comprensión lectora", "Interacción oral", "Mediación oral"],
    duracion: 90
  },
  {
    id: "b1_viajes",
    titulo: "B1 · Anécdotas de viaje y resolución de imprevistos pasados",
    nivel: "B1",
    variedad: "rioplatense",
    tema: "Viajes, imprevistos en el transporte y resolución de malentendidos",
    funcion: "Narrar sucesos pasados en cadena cronológica, describir circunstancias y justificar decisiones",
    gramaticaUser: "Contraste de pretérito indefinido y pretérito imperfecto; marcadores temporales (de repente, mientras, al principio)",
    lexicoUser: "Viajes, aeropuertos, cancelaciones, equipaje extraviado, alojamientos compartidos y reclamaciones formales",
    culturalUser: "Costumbres viajeras y hospitalidad en el Cono Sur; formas de reclamo y mediación ante imprevistos turísticos",
    contexto: "Jóvenes profesionales en curso semi-intensivo que viajan habitualmente a Sudamérica",
    destrezas: ["Comprensión lectora", "Interacción oral", "Expresión escrita", "Mediación oral"],
    duracion: 90
  },
  {
    id: "b2_medioambiente",
    titulo: "B2 · Ciudades sostenibles, consumo responsable y argumentación",
    nivel: "B2",
    variedad: "mexicana",
    tema: "El debate sobre la movilidad urbana y la reducción de residuos",
    funcion: "Expresar hipótesis, valorar propuestas cívicas y argumentar concesiones en debates formales",
    gramaticaUser: "Oraciones concesivas (aunque + subjuntivo), estructuras de valoración impersonal (es urgente que + presente de subjuntivo)",
    lexicoUser: "Ecología urbana, transporte público sostenible, reciclaje, huella hídrica y colocaciones de nivel medio-alto",
    culturalUser: "El desafío ambiental en megaciudades latinoamericanas como Ciudad de México y programas ciudadanos de movilidad",
    contexto: "Estudiantes universitarios de ciencias sociales con nivel B2 consolidando destrezas académicas",
    destrezas: ["Comprensión oral", "Interacción oral", "Expresión escrita", "Mediación escrita"],
    duracion: 90
  },
  {
    id: "c1_trabajo_ia",
    titulo: "C1 · El futuro del trabajo, la inteligencia artificial y la ética",
    nivel: "C1",
    variedad: "peninsular",
    tema: "Transformación tecnológica, automatización laboral y dilemas éticos",
    funcion: "Sintetizar posturas divergentes, matizar opiniones controvertidas y redactar conclusiones analíticas",
    gramaticaUser: "Subordinadas sustantivas y adjetivas con matices de indeterminación modal, nominalización discursiva y atenuación pragmática",
    lexicoUser: "Léxico especializado laboral, tecnoética, algoritmos, competencias blandas, expresiones cultas e idiomáticas",
    culturalUser: "El debate laboral en el marco hispánico e internacional sobre la reducción de la jornada y el bienestar digital",
    contexto: "Profesionales de diversas ramas preparándose para certificaciones DELE C1 / SIELE",
    destrezas: ["Comprensión lectora", "Interacción oral", "Expresión escrita", "Mediación oral"],
    duracion: 120
  },
  {
    id: "c2_opinion_retorica",
    titulo: "C2 · Columnas de opinión, ironía y maestría retórica",
    nivel: "C2",
    variedad: "rioplatense",
    tema: "La sátira social y la columna periodística en la prensa hispana",
    funcion: "Interpretar sentidos figurados, ironía, alusiones intertextuales y producir una crónica o réplica de autor",
    gramaticaUser: "Inversión sintáctica enfática, construcciones absolutas de gerundio/participio, correlación de tiempos compleja",
    lexicoUser: "Fraseología compleja, metáforas culturales consolidadas, léxico de la crítica literaria y del ensayo sociológico",
    culturalUser: "La tradición de la columna periodística y el ensayo de humor ácido en la prensa rioplatense y panhispánica",
    contexto: "Docentes o traductores en formación que perfeccionan el registro formal y la sensibilidad estilística",
    destrezas: ["Comprensión lectora", "Expresión escrita", "Interacción oral", "Mediación escrita"],
    duracion: 120
  }
];

/**
 * Generador didáctico que construye el documento formal conforme al PCIC y MCER
 */
export function generarUnidadELE(d: FormDataELE): UnidadDidactica {
  const pcicNivel = NIVELES_CONFIG[d.nivel];
  const pcicVar = VARIEDADES_CONFIG[d.variedad];

  // Cálculo proporcional de tiempos según duración total
  const factor = d.duracion / 90;
  const t1 = Math.max(8, Math.round(10 * factor));
  const t2 = Math.max(15, Math.round(20 * factor));
  const t3 = Math.max(12, Math.round(15 * factor));
  const t4 = Math.max(12, Math.round(15 * factor));
  const t5 = Math.max(18, Math.round(20 * factor));
  const t6 = d.duracion - (t1 + t2 + t3 + t4 + t5); // Ajuste exacto

  // Selección de contenidos léxicos
  const lexicoContenido = d.lexicoUser.trim() || 
    `Campos léxicos nucleares de ${d.nivel}: actividades cotidianas (levantarse, desayunar, entrar a trabajar/estudiar, almorzar/comer, cenar, acostarse); expresiones temporales y marcadores de frecuencia (siempre, a menudo, los fines de semana, de... a...). Colocaciones léxicas frecuentes: 'tomar un café', 'coger/tomar el transporte', 'hacer la compra' (sin código localizado en el material adjunto).`;

  // Gramática funcional
  let gramaticaContenido = d.gramaticaUser.trim();
  if (!gramaticaContenido) {
    if (d.variedad === 'rioplatense') {
      gramaticaContenido = `${pcicNivel.recursosGram} Adaptado a la variedad rioplatense: flexión con voseo para la segunda persona (vos te levantás, vos almorzás, vos vas) (sin código localizado en el material adjunto).`;
    } else if (d.variedad === 'peninsular') {
      gramaticaContenido = `${pcicNivel.recursosGram} Uso de 'vosotros/as' (os levantáis, cenáis) y contraste con 'ustedes' según el registro formal/informal (sin código localizado en el material adjunto).`;
    } else {
      gramaticaContenido = `${pcicNivel.recursosGram} Paradigmática de 'ustedes' para el plural sin distinción morfológica de 'vosotros' (sin código localizado en el material adjunto).`;
    }
  }

  // Hecho cultural
  let culturalContenido = d.culturalUser.trim();
  if (!culturalContenido) {
    if (d.variedad === 'peninsular') {
      culturalContenido = `Los horarios cotidianos y comerciales en España frente a otros países: la comida tardía (14:00-15:30), la cena (21:30) y el concepto de la 'sobremesa' y el tapeo después de la jornada. Integrado orgánicamente en la tarea final mediante la negociación de un horario de intercambio cultural.`;
    } else if (d.variedad === 'rioplatense') {
      culturalContenido = `El ritual cotidiano del mate durante la jornada laboral o estudiantil, los horarios de cena (21:30-22:30) y la merienda compartida. Los alumnos negocian un itinerario de convivencia respetando estas dinámicas.`;
    } else {
      culturalContenido = `Pautas temporales de la vida cotidiana, pausas para la comida principal familiar y formas de cortesía comunitaria en la variedad ${pcicVar.gentilicio}. Integrado en la toma de acuerdos de la tarea final.`;
    }
  }

  // Tarea comunicativa auténtica
  const tareaFinalDescripcion = `Los estudiantes, organizados en equipos colaborativos de 3 o 4 personas, asumen el rol de un comité internacional que diseña la 'Agenda de Convivencia e Intercambio' para un grupo de jóvenes hispanohablantes que visitará su comunidad. Deben negociar, contrastar sus hábitos personales y consensuar un cronograma realista de 24 horas que resuelva el choque horario cultural y permita convivir armónicamente.`;

  // Construcción de la Ficha del Alumno (Handout para imprimir)
  const fichaAlumnoData = {
    textoAutentico: d.variedad === 'rioplatense' 
      ? `«Hola, me llamo Lautaro y vivo en Buenos Aires. De lunes a viernes me levanto a las 7:30. Primero me preparo unos mates bien calientes y me ducho rápido. A las 8:30 salgo para el laburo; me tomo el colectivo en la esquina de mi casa. Trabajo de 9:00 a 17:00. Al mediodía no almuerzo pesado: una empanada o un sándwich con los chicos de la oficina. A las 18:00 vuelvo a casa, me cambio de ropa y voy a entrenar. A la noche ceno tarde, alrededor de las 21:45, con mi familia. Mi amigo alemán que vino de intercambio no lo entendía: ¡él a las 19:00 ya quería cenar e irse a dormir!»`
      : `«Hola, me llamo Lucía y vivo en Madrid. Entre semana suelo levantarme a las 7:15. Primero me ducho, me visto y desayuno un café con leche y una tostada con aceite. A las 8:00 salgo de casa y cojo el metro para ir a la oficina. Trabajo de 9:00 a 14:00, y a las dos y media paramos para comer: solemos hacer una hora de sobremesa charlando con los compañeros. Por la tarde trabajo hasta las 18:30. Al salir, a veces quedo con amigos a tomar una caña. Cenamos sobre las 21:30 o 22:00 y me acuesto a las 23:30. Para un extranjero, nuestros horarios de cena siempre son una sorpresa.»`,
    preguntasComprension: [
      "¿A qué hora se despierta y qué hace antes de salir de casa?",
      "¿Qué medio de transporte utiliza para desplazarse?",
      "¿Qué diferencia cultural horaria menciona con respecto a las costumbres del extranjero?"
    ],
    tablaInductiva: {
      instruccion: "Observa los verbos subrayados en el texto y completa la tabla con tu compañero para deducir la regla del reflexivo:",
      columnas: ["Frase en el texto", "Pronombre", "Verbo conjugado", "¿Dónde va el pronombre en presente?"],
      filas: [
        { ejemplo: "yo me levanto a las 7:15", analisis: "Pronombre: 'me'", reglaDeducida: "Delante del verbo conjugado" },
        { ejemplo: d.variedad === 'rioplatense' ? "vos te levantás temprano" : "tú te duchas rápido", analisis: "Pronombre: 'te'", reglaDeducida: "Delante del verbo conjugado" },
        { ejemplo: "él / ella se acuesta a las 23:30", analisis: "Pronombre: 'se'", reglaDeducida: "Delante del verbo conjugado" }
      ]
    },
    actividadInteraccion: {
      rolA: "Eres un estudiante local. Tu horario: te despiertas a las 07:00, comes a las 14:30, meriendas a las 18:00 y cenas a las 22:00.",
      rolB: "Eres un estudiante de intercambio visitante. Tu horario habitual: te despiertas a las 06:30, comes a las 12:00 y cenas a las 18:30.",
      retoMediacion: "Pregúntale a tu compañero por sus horarios, anótalos y negociad 2 puntos de encuentro donde ambos podáis compartir el almuerzo o una actividad deportiva sin que ninguno se sienta incómodo."
    },
    tareaFinalConsigna: tareaFinalDescripcion,
    semaforoAutoevaluacion: [
      "Puedo describir mi rutina diaria en español con claridad utilizando conectores temporales.",
      "Puedo conjugar correctamente los verbos reflexivos de alta frecuencia en presente.",
      "Puedo hacer preguntas a otra persona sobre sus horarios y comparar nuestras costumbres.",
      "Puedo mediar y proponer soluciones respetuosas ante divergencias de horarios culturales."
    ]
  };

  // Secuencia didáctica formal de 6 fases
  const secuencia: UnidadDidactica['secuencia'] = [
    {
      id: "fase_1",
      orden: "1",
      titulo: "Activación de conocimientos previos y contextualización",
      minutos: t1,
      agrupamiento: "Plenaria → Parejas",
      objetivoFase: "Activar esquemas mentales, léxico previo y conectar con la experiencia vivencial del alumno.",
      descripcion: `El docente proyecta un collage visual con tres relojes marcando horas clave de la variedad ${pcicVar.gentilicio} (07:30, 14:30, 21:45) e imágenes de personas en distintas acciones del día. En parejas, los estudiantes emparejan imágenes con tarjetas de acciones sin formalizar la gramática y comentan cuál es su momento predilecto de la jornada.`,
      rolDocente: "Facilitador: modera la puesta en común inicial y anota en la pizarra palabras clave que surjan espontáneamente.",
      rolAlumno: "Activo: conecta imágenes con experiencias personales y formula hipótesis en pareja.",
      materiales: "Imágenes de hábitos cotidianos y reloj pedagógico o proyección digital."
    },
    {
      id: "fase_2",
      orden: "2",
      titulo: "Input textual auténtico y descubrimiento inductivo de la regla",
      minutos: t2,
      agrupamiento: "Individual → Parejas → Puesta en común guiada",
      objetivoFase: "Procesar el input comprensible y deducir colaborativamente el patrón morfosintáctico.",
      descripcion: `Los estudiantes leen/escuchan el testimonio auténtico en la variedad ${pcicVar.gentilicio}. Realizan una lectura global para verificar la comprensión del contraste horario. A continuación, mediante una ficha de descubrimiento inductivo, localizan los verbos reflexivos (levantarse, ducharse, acostarse) y completan una tabla donde descubren por sí mismos la concordancia del pronombre (me, te, se) y su posición preverbal. El docente interviene solo como guía para validar sus conclusiones.`,
      rolDocente: "Guía socrático: plantea preguntas de descubrimiento sin adelantar la explicación teórica.",
      rolAlumno: "Investigador: analiza muestras de lengua en contexto y extrae la regla gramatical.",
      materiales: "Ficha del alumno con texto contextualizado y matriz de deducción gramatical."
    },
    {
      id: "fase_3",
      orden: "3",
      titulo: "Práctica controlada (focalización en la forma y precisión)",
      minutos: t3,
      agrupamiento: d.gamificacion ? "Parejas (dinámica cooperativa con tablero lúdico)" : "Parejas",
      objetivoFase: "Automatizar la flexión morfológica, la pronunciación correcta y la colocación pronominal.",
      descripcion: d.gamificacion 
        ? "Dinámica 'Desafío del Tablero Horario': por parejas, los alumnos tiran un dado virtual o físico que combina una persona gramatical (yo, tú/vos, él, nosotros) con una casilla de hora (08:00, mediodía, 22:00). Disponen de 15 segundos para enunciar una oración con reflexivo y marcador temporal gramaticalmente precisa para ganar puntos de equipo."
        : "Actividad de emparejamiento y reconstrucción sintáctica: los alumnos ordenan tarjetas desordenadas formando frases coherentes con marcadores de frecuencia (siempre, a veces, los martes) y conjugan los verbos según la persona indicada, corrigiéndose mutuamente con pauta de control.",
      rolDocente: "Monitor itinerante: atiende dudas fonéticas y corrige al vuelo fallos de concordancia.",
      rolAlumno: "Practicante reflexivo: consolida la precisión lingüística y comprueba la corrección formal.",
      materiales: d.gamificacion ? "Fichas de tablero horario, dado de pronombres y hoja de puntuación." : "Tarjetas de elementos sintácticos para reconstrucción."
    },
    {
      id: "fase_4",
      orden: "4",
      titulo: "Práctica guiada (vacío de información y mediación de pares)",
      minutos: t4,
      agrupamiento: "Parejas A / B (Interacción Oral y Mediación)",
      objetivoFase: "Negociar el significado mediante vacío de información y ejercitar la mediación interpersonal.",
      descripcion: `Dinámica de roles cruzados A/B: el estudiante A tiene la agenda horaria de una persona local de la variedad ${pcicVar.gentilicio} con franjas vacías, y el estudiante B posee la agenda de un visitante internacional. Mediante preguntas y respuestas orales exclusivas en español, completan los horarios mutuos. Una vez completado, deben identificar dos puntos de fricción temporal (incompatibilidad de comidas o reuniones) y formular conjuntamente una solución intermedia cordial.`,
      rolDocente: "Observador silencioso: toma notas cualitativas de errores fosilizables para el cierre sin interrumpir la interacción.",
      rolAlumno: "Interlocutor y mediador: gestiona el intercambio de datos y busca consensos prácticos.",
      materiales: "Tarjetas de roles A y B con agendas complementarias."
    },
    {
      id: "fase_5",
      orden: "5",
      titulo: "Tarea final comunicativa auténtica (Enfoque por tareas)",
      minutos: t5,
      agrupamiento: "Pequeño grupo (3-4 estudiantes) → Plenaria",
      objetivoFase: "Transferir todas las destrezas adquiridas a un producto comunicativo real y significativo.",
      descripcion: `${tareaFinalDescripcion} Cada grupo redacta su 'Decálogo y Cronograma de Convivencia' en un soporte visible (papelógrafo o pizarra digital colaborativa). Posteriormente, un portavoz de cada equipo expone en 2 minutos su propuesta ante la clase, justificando cómo armonizaron las diferencias culturales.`,
      rolDocente: "Moderador de la sesión de presentación plenaria y evaluador formativo.",
      rolAlumno: "Creador y presentador: debate, negocia y defiende su propuesta colaborativa.",
      materiales: "Plantilla de la 'Agenda de Convivencia e Intercambio' (soporte A3 o muro digital)."
    },
    {
      id: "fase_6",
      orden: "6",
      titulo: "Cierre, autorregulación, retroalimentación y síntesis",
      minutos: t6,
      agrupamiento: "Individual y Plenaria",
      objetivoFase: "Fomentar la metacognición, el balance de lo aprendido y la retroalimentación positiva.",
      descripcion: `Cada estudiante completa la rúbrica de 'Semáforo de Aprendizaje' con los descriptores 'Puedo...' del MCER. En la plenaria, el profesor realiza una devolución formativa anónima escribiendo en la pizarra 3 oraciones con errores comunes detectados en las tareas anteriores para que la clase los reformule positivamente. Se concluye con una ronda de una sola palabra sobre lo más valioso de la sesión.`,
      rolDocente: "Guía reflexivo: aporta retroalimentación formativa y motiva el progreso.",
      rolAlumno: "Autoevaluador crítico: reflexiona sobre su propio proceso de adquisición.",
      materiales: "Rúbrica de semáforo de autoevaluación (impresa o digital)."
    }
  ];

  // Rúbrica formativa
  const rubricaEvaluacion: CriterioEvaluacion[] = [
    {
      criterio: `Eficacia comunicativa (${d.nivel}): Capacidad para expresar rutinas habituales y contrastar horarios cotidianos con inteligibilidad inmediata.`,
      evidencia: "Intervenciones espontáneas en la práctica guiada y exposición de la agenda grupal.",
      instrumento: "Escala descriptiva MCER (Excelente / Adecuado / En progreso)"
    },
    {
      criterio: `Corrección lingüística formal: Conjugación adecuada de verbos en presente y colocación precisa del reflexivo según el nivel ${d.nivel}.`,
      evidencia: "Oraciones producidas en la fase inductiva, tablero de juego y cartel final.",
      instrumento: "Rúbrica analítica docente con foco en precisión morfosintáctica"
    },
    {
      criterio: `Competencia intercultural y mediación: Muestra empatía ante pautas horarias distintas y propone consensos razonables sin juzgar las costumbres.`,
      evidencia: "Formulación de acuerdos durante la negociación del vacío de información y la tarea final.",
      instrumento: "Registro de observación directa de destrezas de mediación"
    }
  ];

  // Medidas de atención a la diversidad si procede
  const medidasDiversidad = d.diversidadActiva && d.diversidadTipo.trim() ? {
    perfil: d.diversidadTipo.trim(),
    adecuaciones: [
      "Andamiaje visual y reforzado: provisión de tarjetas de apoyo léxico con apoyos pictográficos para fases de producción libre.",
      "Gradación multinivel de consignas: actividades de ampliación ('Para terminar antes') para alumnos con ritmo de aprendizaje más rápido y apoyos guiados para consolidación.",
      "Agrupamientos heterogéneos cooperativos: emparejamiento estratégico que garantice la mediación solidaria entre pares sin generar frustración.",
      "Flexibilidad en el tiempo de procesamiento y posibilidad de formular respuestas por escrito antes de la interacción oral."
    ]
  } : undefined;

  return {
    id: `unidad_${Date.now()}`,
    creadoEn: new Date().toLocaleDateString('es-ES', { day: '2-digit', month: 'long', year: 'numeric' }),
    tema: d.tema,
    nivel: d.nivel,
    duracion: d.duracion,
    variedad: d.variedad,
    variedadNombre: pcicVar.gentilicio,
    modalidad: d.modalidad,
    contexto: d.contexto,
    destrezas: d.destrezas,
    gamificacion: d.gamificacion,
    diversidad: d.diversidadActiva ? d.diversidadTipo : null,

    // Objetivos
    objetivosComunicativos: [
      `El alumno puede describir de manera comprensible su rutina habitual y sus horarios regulares, haciendo uso de verbos reflexivos y marcadores temporales propios del nivel ${d.nivel}.`,
      `El alumno puede formular preguntas a un interlocutor sobre sus costumbres cotidianas y comparar semejanzas y divergencias temporales en el marco de la variedad ${pcicVar.gentilicio}.`,
      `El alumno puede actuar como mediador básico facilitando el entendimiento entre dos personas con hábitos culturales diferentes sobre horarios de comida y descanso, proponiendo puntos medios de acuerdo.`
    ],
    indicadoresLogro: [
      `1. Emplea correctamente en la interacción al menos 4 verbos reflexivos o de rutina en presente con precisión morfosintáctica acorde a ${d.nivel}.`,
      `2. Negocia y registra por escrito al menos 2 acuerdos de horarios en la agenda compartida respetando el contexto cultural estudiado.`
    ],

    // Contenidos PCIC
    funcionComunicativa: `${d.funcion} (sin código localizado en el material adjunto).`,
    gramaticaFuncional: gramaticaContenido,
    lexicoColocaciones: lexicoContenido,
    foneticaOrtografia: `${pcicNivel.pronunciacion} Peculiaridades fonéticas de la variedad: ${pcicVar.rasgosFonicos} (sin código localizado en el material adjunto).`,
    generosDiscursivos: `${pcicNivel.discurso} Género vehicular de la sesión: infografía de agenda diaria compartida y diálogo semiestructurado de mediación interpersonal.`,

    // Dimensión Sociocultural
    hechoCultural: culturalContenido,
    tratamientoSociocultural: `El hecho cultural no se expone como dato enciclopédico aislado; constituye el eje central de conflicto y negociación que los estudiantes resuelven en la tarea comunicativa final.`,

    // Estrategias
    estrategiasComunicacion: [
      "Petición de aclaración ('¿A qué hora dices que...?', '¿Puedes repetirlo, por favor?')",
      "Circunloquio elemental y reformulación con apoyos no verbales",
      "Confirmación de la comprensión mutua ('¿Estamos de acuerdo?')"
    ],
    estrategiasAprendizaje: [
      "Observación inductiva guiada e inferencia de regularidades a partir del texto auténtico",
      "Comparación reflexiva entre la propia lengua de origen y la lengua meta",
      "Toma de notas visuales y organización en esquemas temporales"
    ],
    estrategiasMediacion: [
      "Facilitación del diálogo intercultural en situaciones de desencuentro de hábitos",
      "Síntesis de opiniones divergentes para alcanzar un pacto práctico",
      "Simplificación y reformulación del propio mensaje para favorecer la comprensión mutua"
    ],

    // Secuencia
    secuencia,

    // Evaluación
    rubricaEvaluacion,

    // Diversidad
    medidasDiversidad,

    // Recursos
    recursos: [
      "Ficha de descubrimiento inductivo con el texto auténtico contextualizado y tablas analíticas.",
      "Tarjetas de roles A y B para la actividad de vacío de información y mediación.",
      "Plantilla en blanco de la 'Agenda de Convivencia e Intercambio' (formato A3 o pizarra digital compartida).",
      "Reloj pedagógico manipulable o soporte visual multimedia para la activación inicial."
    ],
    tareaCasa: `Grabar un mensaje de audio breve (máximo 90 segundos mediante nota de voz o plataforma del aula) dirigido a un compañero de clase o a un amigo hispanohablante, contándole cómo es su sábado o domingo perfecto y contrastando sus horarios de ocio y descanso con los que aprendieron en clase sobre la variedad ${pcicVar.gentilicio}.`,

    // Ficha del Alumno
    fichaAlumno: fichaAlumnoData,

    notasDocente: `Consejos pedagógicos clave:
- Evitar explicar la regla gramatical antes de la fase 2; permitir que el estudiante deduzca la posición del reflexivo por sí mismo.
- Si el grupo muestra cansancio en la fase 3, dinamizar con el modo gamificado en parejas.
- En la fase 4, asegurar que los alumnos no se enseñen sus hojas de rol; la comunicación debe ser puramente oral en español.`
  };
}
