import { GlosarioTermino } from '../types';

export const GLOSARIO_TERMINOS: GlosarioTermino[] = [
  {
    id: "pcic",
    termino: "PCIC (Plan Curricular del Instituto Cervantes)",
    categoria: "marco_normativo",
    definicion: "Instrumento curricular fundamental que desarrolla y fija los niveles de referencia para el español según el MCER (A1-C2). Se organiza en tres grandes dimensiones: el alumno como agente social, como hablante intercultural y como aprendiente autónomo, desglosados en inventarios lingüísticos y culturales precisos.",
    ejemploContexto: "El inventario de gramática del PCIC establece la alternancia modal en oraciones temporales para el nivel B2.",
    fuentePCIC: "Instituto Cervantes (2006). Niveles de referencia para el español.",
    tags: ["PCIC", "Instituto Cervantes", "Curriculo", "Niveles"]
  },
  {
    id: "mcer",
    termino: "MCER (Marco Común Europeo de Referencia)",
    categoria: "marco_normativo",
    definicion: "Estándar internacional del Consejo de Europa que define las destrezas lingüísticas en una escala de 6 niveles (A1 a C2). Concibe al usuario de la lengua como un agente social que realiza tareas comunicativas contextualizadas.",
    ejemploContexto: "Los descriptores ilustrativos del MCER articulan los objetivos en términos de lo que el alumno 'es capaz de hacer'.",
    fuentePCIC: "Consejo de Europa (2001, 2020: Volumen Complementario).",
    tags: ["MCER", "CEFR", "Consejo de Europa", "Descriptores"]
  },
  {
    id: "enfoque_por_tareas",
    termino: "Enfoque por tareas (Task-Based Learning)",
    categoria: "metodologia",
    definicion: "Enfoque metodológico centrado en la acción en el que el aprendizaje se organiza alrededor de una serie de tareas o tareas finales auténticas que requieren el uso significativo de la lengua para alcanzar un objetivo no estrictamente lingüístico.",
    ejemploContexto: "La tarea final de diseñar una agenda de intercambio compartida obliga a negociar y usar la lengua para un fin real.",
    fuentePCIC: "PCIC, Marco metodológico; Nunan (1989), Zanón (1990).",
    tags: ["Enfoque por tareas", "Tarea final", "Acción", "Tarea comunicativa"]
  },
  {
    id: "gramatica_inductiva",
    termino: "Gramática inductiva",
    categoria: "metodologia",
    definicion: "Estrategia didáctica en la que el estudiante observa muestras contextualizadas de lengua (input), reflexiona sobre ellas y deduce de manera autónoma o guiada la regla gramatical subyacente, antes de realizar práctica formal.",
    ejemploContexto: "En lugar de explicar la tabla de pronombres reflexivos, los alumnos analizan el texto y descubren que 'me' y 'te' van antes del verbo.",
    fuentePCIC: "PCIC, Tratamiento de la gramática reflexiva.",
    tags: ["Gramática inductiva", "Descubrimiento", "Input", "Regla"]
  },
  {
    id: "mediacion",
    termino: "Mediación lingüística",
    categoria: "metodologia",
    definicion: "Destreza nuclear añadida y expandida en el Volumen Complementario del MCER (2020). Consiste en actuar como puente entre personas o textos para facilitar la comunicación, salvar malentendidos interculturales o traducir significados complejos.",
    ejemploContexto: "Mediar entre dos estudiantes con costumbres horarias divergentes para acordar una hora de comida consensuada.",
    fuentePCIC: "MCER Volumen Complementario (2020), Sección Mediación.",
    tags: ["Mediación", "Intercultural", "Puente", "MCER"]
  },
  {
    id: "vacio_informacion",
    termino: "Vacío de información (Information Gap)",
    categoria: "metodologia",
    definicion: "Técnica pedagógica en la que los interlocutores poseen datos complementarios y mutuamente necesarios que solo pueden obtener interactuando y cooperando en la lengua meta.",
    ejemploContexto: "El alumno A tiene los horarios de la mañana y el alumno B los de la tarde; deben preguntarse para completar el cronograma.",
    fuentePCIC: "Metodología comunicativa ELE.",
    tags: ["Vacío de información", "Interacción", "Parejas A/B"]
  },
  {
    id: "andamiaje",
    termino: "Andamiaje (Scaffolding)",
    categoria: "metodologia",
    definicion: "Apoyos temporales y estructurados (visuales, lingüísticos, modelos) que el docente o los materiales proporcionan al alumno para permitirle realizar una tarea que aún no puede resolver de manera enteramente autónoma.",
    ejemploContexto: "Proporcionar tarjetas con fórmulas de cortesía ('¿Te parecería bien si...?') antes de iniciar la negociación oral.",
    fuentePCIC: "Teoría socio-constructivista (Bruner, Vygotsky).",
    tags: ["Andamiaje", "Scaffolding", "Apoyo", "ZDP"]
  },
  {
    id: "input_comprensible",
    termino: "Input comprensible (i+1)",
    categoria: "metodologia",
    definicion: "Muestras de lengua oral o escrita que resultan comprensibles para el aprendiz pero que contienen elementos lingüísticos ligeramente por encima de su nivel actual de dominio, impulsando la adquisición natural.",
    ejemploContexto: "Un texto testimonial con apoyo visual y contexto claro donde el 85-90% del vocabulario es conocido para el nivel A2.",
    fuentePCIC: "Krashen (1985), Hipótesis del Input.",
    tags: ["Input", "Comprensible", "Krashen"]
  },
  {
    id: "colocaciones",
    termino: "Colocación léxica",
    categoria: "gramatica",
    definicion: "Combinación convencional y preferente de dos o más palabras que suelen aparecer juntas en el discurso con mayor probabilidad que por puro azar estadístico, fundamental para la naturalidad expresiva.",
    ejemploContexto: "Decir 'hacer la compra' o 'tomar una decisión' en vez de combinaciones no canónicas como *fabricar la compra.",
    fuentePCIC: "PCIC, Inventario de Nociones Específicas y Léxico.",
    tags: ["Colocación", "Léxico", "Combinatoria"]
  },
  {
    id: "voseo",
    termino: "Voseo",
    categoria: "sociolinguistica",
    definicion: "Fenómeno lingüístico panhispánico característico de la variedad rioplatense, centroamericana y de zonas andinas que consiste en el empleo del pronombre 'vos' en lugar de 'tú' para la segunda persona del singular de confianza, acompañado de morfología verbal específica.",
    ejemploContexto: "Formas como 'vos te levantás', 'vos tenés' o 'hacé esto' en presente de indicativo e imperativo.",
    fuentePCIC: "PCIC, Variedades del español; RAE / ASALE.",
    tags: ["Voseo", "Rioplatense", "Variedad", "Pronombre"]
  },
  {
    id: "descriptores_puedo",
    termino: "Descriptores 'Puedo...' (Can-Do Statements)",
    categoria: "evaluacion",
    definicion: "Enunciados positivos y conductuales del MCER que describen de forma operativa las capacidades comunicativas reales que un estudiante puede desempeñar en un nivel determinado.",
    ejemploContexto: "'Puedo formular preguntas sencillas sobre horarios y responder sobre mi rutina con frases preparadas'.",
    fuentePCIC: "MCER / Portfolio Europeo de las Lenguas.",
    tags: ["Descriptores", "Puedo", "MCER", "Autoevaluación"]
  },
  {
    id: "evaluacion_formativa",
    termino: "Evaluación formativa",
    categoria: "evaluacion",
    definicion: "Evaluación continua orientada a recoger evidencias del proceso de aprendizaje durante la propia sesión para reorientar la enseñanza y proporcionar retroalimentación orientada a la mejora, sin carácter calificador sancionador.",
    ejemploContexto: "Utilizar el 'Semáforo de Aprendizaje' y registrar la observación de la tarea colaborativa para ajustar el andamiaje.",
    fuentePCIC: "PCIC, Criterios de evaluación y aprendizaje.",
    tags: ["Evaluación", "Formativa", "Retroalimentación", "Rúbrica"]
  },
  {
    id: "practica_controlada",
    termino: "Práctica controlada",
    categoria: "metodologia",
    definicion: "Fase de la secuencia didáctica orientada a la precisión formal, donde la atención se concentra en la correcta producción mecánica o guiada de la estructura antes de pasar a situaciones de producción libre.",
    ejemploContexto: "Actividades de rellenar huecos, transformación de personas gramaticales o emparejamiento con retroalimentación inmediata.",
    fuentePCIC: "Metodología comunicativa de secuencias didácticas.",
    tags: ["Práctica controlada", "Precisión", "Forma"]
  },
  {
    id: "metacognicion",
    termino: "Metacognición y autorregulación",
    categoria: "metodologia",
    definicion: "Capacidad del estudiante para reflexionar sobre su propio proceso cognitivo de aprendizaje de la lengua, identificar errores recurrentes y seleccionar conscientemente estrategias para superarlos.",
    ejemploContexto: "La reflexión final en la que el estudiante evalúa si su estrategia de deducción gramatical funcionó adecuadamente.",
    fuentePCIC: "PCIC, El alumno como aprendiente autónomo.",
    tags: ["Metacognición", "Autorregulación", "Estrategias"]
  },
  {
    id: "fosilizacion",
    termino: "Fosilización lingüística",
    categoria: "gramatica",
    definicion: "Proceso por el cual formas, reglas o pautas erróneas de la interlengua del aprendiz quedan fijadas permanentemente a pesar de la exposición continuada a la lengua meta y a la corrección explícita.",
    ejemploContexto: "La omisión persistente del pronombre reflexivo en verbos como levantarse (*yo levanto a las 8).",
    fuentePCIC: "Selinker (1972), Interlengua; Lingüística aplicada.",
    tags: ["Fosilización", "Interlengua", "Errores"]
  },
  {
    id: "variedad_geolectal",
    termino: "Variedad geolectal / Geolecto",
    categoria: "sociolinguistica",
    definicion: "Modalidad lingüística del español asociada a un área geográfica determinada (peninsular, rioplatense, mexicana, andina, caribeña, chilena) caracterizada por rasgos fonéticos, gramaticales y léxicos compartidos y legítimos.",
    ejemploContexto: "El contraste entre 'coger el metro' (peninsular) y 'tomar el subte' (rioplatense) o 'tomar el camión' (mexicano).",
    fuentePCIC: "PCIC, Tratamiento de la norma panhispánica.",
    tags: ["Variedad", "Geolecto", "Panhispánico", "Dialecto"]
  },
  {
    id: "atencion_diversidad",
    termino: "Atención a la diversidad (DUA)",
    categoria: "metodologia",
    definicion: "Conjunto de adaptaciones curriculares, metodológicas y de materiales diseñadas para dar respuesta equitativa a los diferentes ritmos, procedencias lingüísticas (p. ej. sinohablantes) o necesidades educativas del aula.",
    ejemploContexto: "Ofrecer apoyos visuales y grafías ampliadas a estudiantes no familiarizados con el alfabeto latino.",
    fuentePCIC: "Principios de diseño universal para el aprendizaje (DUA).",
    tags: ["Diversidad", "DUA", "Inclusión", "Adaptación"]
  },
  {
    id: "mediacion_conceptos",
    termino: "Mediación de conceptos",
    categoria: "metodologia",
    definicion: "Subdimensión de la mediación del MCER que consiste en facilitar el acceso al conocimiento y a las ideas colaborando en grupo, clarificando conceptos abstractos y guiando la construcción conjunta de significado.",
    ejemploContexto: "Reformular una norma cultural sobre los horarios de la cena explicando el motivo social y climático subyacente.",
    fuentePCIC: "MCER Volumen Complementario (2020).",
    tags: ["Mediación", "Conceptos", "Construcción colaborativa"]
  }
];

/**
 * Encuentra un término del glosario dado un texto o ID
 */
export function buscarTerminoGlosario(idOTermino: string): GlosarioTermino | undefined {
  const norm = idOTermino.toLowerCase().trim();
  return GLOSARIO_TERMINOS.find(t => 
    t.id === norm || 
    t.termino.toLowerCase().includes(norm) ||
    t.tags.some(tag => tag.toLowerCase() === norm)
  );
}

/**
 * Lista de palabras clave para detección rápida en el texto
 */
export const PALABRAS_CLAVE_GLOSARIO: Array<{ palabra: string; terminoId: string }> = [
  { palabra: "PCIC", terminoId: "pcic" },
  { palabra: "Plan Curricular", terminoId: "pcic" },
  { palabra: "MCER", terminoId: "mcer" },
  { palabra: "enfoque por tareas", terminoId: "enfoque_por_tareas" },
  { palabra: "gramática inductiva", terminoId: "gramatica_inductiva" },
  { palabra: "descubrimiento inductivo", terminoId: "gramatica_inductiva" },
  { palabra: "mediación", terminoId: "mediacion" },
  { palabra: "mediador", terminoId: "mediacion" },
  { palabra: "vacío de información", terminoId: "vacio_informacion" },
  { palabra: "andamiaje", terminoId: "andamiaje" },
  { palabra: "input", terminoId: "input_comprensible" },
  { palabra: "colocaciones", terminoId: "colocaciones" },
  { palabra: "voseo", terminoId: "voseo" },
  { palabra: "Puedo...", terminoId: "descriptores_puedo" },
  { palabra: "evaluación formativa", terminoId: "evaluacion_formativa" },
  { palabra: "práctica controlada", terminoId: "practica_controlada" },
  { palabra: "autorregulación", terminoId: "metacognicion" },
  { palabra: "fosilizables", terminoId: "fosilizacion" },
  { palabra: "fosilización", terminoId: "fosilizacion" },
  { palabra: "variedad", terminoId: "variedad_geolectal" },
  { palabra: "atención a la diversidad", terminoId: "atencion_diversidad" }
];
