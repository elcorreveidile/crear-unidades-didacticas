export type NivelMCER = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

export type VariedadDialectal = 
  | 'peninsular' 
  | 'rioplatense' 
  | 'mexicana' 
  | 'andina' 
  | 'caribeña' 
  | 'chilena';

export type Modalidad = 'presencial' | 'online';

export type Destreza = 
  | 'Comprensión oral' 
  | 'Comprensión lectora' 
  | 'Interacción oral' 
  | 'Expresión oral' 
  | 'Expresión escrita' 
  | 'Mediación oral' 
  | 'Mediación escrita';

export interface FaseSecuencia {
  id: string;
  orden: string;
  titulo: string;
  minutos: number;
  agrupamiento: string;
  objetivoFase: string;
  descripcion: string;
  rolDocente: string;
  rolAlumno: string;
  materiales: string;
}

export interface CriterioEvaluacion {
  criterio: string;
  evidencia: string;
  instrumento: string;
}

export interface FichaAlumnoData {
  textoAutentico: string;
  preguntasComprension: string[];
  tablaInductiva: {
    instruccion: string;
    columnas: string[];
    filas: Array<{
      ejemplo: string;
      analisis: string;
      reglaDeducida: string;
    }>;
  };
  actividadInteraccion: {
    rolA: string;
    rolB: string;
    retoMediacion: string;
  };
  tareaFinalConsigna: string;
  semaforoAutoevaluacion: string[];
}

export interface UnidadDidactica {
  id: string;
  creadoEn: string;
  tema: string;
  nivel: NivelMCER;
  duracion: number;
  variedad: VariedadDialectal;
  variedadNombre: string;
  modalidad: Modalidad;
  contexto: string;
  destrezas: Destreza[];
  gamificacion: boolean;
  diversidad: string | null;

  // Objetivos
  objetivosComunicativos: string[];
  indicadoresLogro: string[];

  // Contenidos PCIC
  funcionComunicativa: string;
  gramaticaFuncional: string;
  lexicoColocaciones: string;
  foneticaOrtografia: string;
  generosDiscursivos: string;

  // Dimensión Sociocultural
  hechoCultural: string;
  tratamientoSociocultural: string;

  // Estrategias
  estrategiasComunicacion: string[];
  estrategiasAprendizaje: string[];
  estrategiasMediacion: string[];

  // Secuencia de tareas
  secuencia: FaseSecuencia[];

  // Evaluación
  rubricaEvaluacion: CriterioEvaluacion[];

  // Diversidad
  medidasDiversidad?: {
    perfil: string;
    adecuaciones: string[];
  };

  // Recursos y Tarea casa
  recursos: string[];
  tareaCasa: string;

  // Ficha de trabajo del estudiante (imprimible)
  fichaAlumno: FichaAlumnoData;

  // Notas del docente
  notasDocente: string;
}

export interface GlosarioTermino {
  id: string;
  termino: string;
  categoria: 'metodologia' | 'marco_normativo' | 'gramatica' | 'evaluacion' | 'sociolinguistica';
  definicion: string;
  ejemploContexto: string;
  fuentePCIC: string;
  tags: string[];
}

export interface TareaDocente {
  id: string;
  titulo: string;
  descripcion: string;
  fechaVencimiento: string; // ISO date YYYY-MM-DD
  completada: boolean;
  fechaCompletada?: string;
  planId?: string;
  planTitulo?: string;
  prioridad: 'alta' | 'media' | 'baja';
  categoria: 'preparacion_materiales' | 'evaluacion' | 'seguimiento_alumnos' | 'coordinacion';
}

export interface FormDataELE {
  nivel: NivelMCER;
  duracion: number;
  tema: string;
  funcion: string;
  gramaticaUser: string;
  lexicoUser: string;
  culturalUser: string;
  variedad: VariedadDialectal;
  modalidad: Modalidad;
  contexto: string;
  destrezas: Destreza[];
  gamificacion: boolean;
  diversidadActiva: boolean;
  diversidadTipo: string;
}
