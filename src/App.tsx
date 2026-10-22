import React, { useState, useEffect } from 'react';
import { FormDataELE, GlosarioTermino, TareaDocente, UnidadDidactica } from './types';
import { generarUnidadELE } from './data/pcicData';
import { 
  cargarTareasGuardadas, 
  guardarTareas, 
  guardarUnidadEnColeccion 
} from './utils/exportUtils';
import { TopBar } from './components/TopBar';
import { PlanForm } from './components/PlanForm';
import { DocumentViewer } from './components/DocumentViewer';
import { TaskManager } from './components/TaskManager';
import { GlosarioModal } from './components/GlosarioModal';
import { MarcoMetodologico } from './components/MarcoMetodologico';

export default function App() {
  const [vistaPrincipal, setVistaPrincipal] = useState<'disenador' | 'tareas' | 'marco'>('disenador');
  const [isGenerating, setIsGenerating] = useState(false);
  
  // Unidad Didáctica activa (inicializada con una sesión completa canónica A2)
  const [unidadActiva, setUnidadActiva] = useState<UnidadDidactica>(() => {
    return generarUnidadELE({
      nivel: 'A2',
      duracion: 90,
      tema: 'La rutina diaria y los horarios de vida cotidiana',
      funcion: 'Describir las rutinas cotidianas, preguntar por horarios y contrastar estilos de vida',
      gramaticaUser: '',
      lexicoUser: '',
      culturalUser: '',
      variedad: 'peninsular',
      modalidad: 'presencial',
      contexto: 'Adultos, 8-12 estudiantes, motivación general/laboral en aula presencial',
      destrezas: ['Comprensión oral', 'Comprensión lectora', 'Interacción oral', 'Mediación oral'],
      gamificacion: true,
      diversidadActiva: false,
      diversidadTipo: ''
    });
  });

  // Tareas docentes (con persistencia en localStorage)
  const [tareas, setTareas] = useState<TareaDocente[]>(() => {
    const guardadas = cargarTareasGuardadas();
    if (guardadas.length > 0) return guardadas;

    // Tareas iniciales de ejemplo vinculadas al plan A2
    const hoy = new Date();
    const manana = new Date(hoy);
    manana.setDate(hoy.getDate() + 1);
    const mananaStr = manana.toISOString().split('T')[0];

    const pasadomanana = new Date(hoy);
    pasadomanana.setDate(hoy.getDate() + 3);
    const pasadomananaStr = pasadomanana.toISOString().split('T')[0];

    return [
      {
        id: 'task_init_1',
        titulo: 'Fotocopiar fichas de descubrimiento inductivo (Fase 2)',
        descripcion: 'Imprimir 12 copias del texto sobre rutinas y la matriz de pronombres reflexivos para los estudiantes.',
        fechaVencimiento: mananaStr,
        completada: false,
        prioridad: 'alta',
        categoria: 'preparacion_materiales',
        planId: 'unidad_inicial',
        planTitulo: 'La rutina diaria y los horarios de vida cotidiana'
      },
      {
        id: 'task_init_2',
        titulo: 'Recortar tarjetas de roles A y B (Vacío de información)',
        descripcion: 'Preparar los dos conjuntos de horarios complementarios para la interacción en parejas.',
        fechaVencimiento: mananaStr,
        completada: false,
        prioridad: 'alta',
        categoria: 'preparacion_materiales',
        planId: 'unidad_inicial',
        planTitulo: 'La rutina diaria y los horarios de vida cotidiana'
      },
      {
        id: 'task_init_3',
        titulo: 'Revisar rúbrica de mediación intercultural',
        descripcion: 'Ajustar los descriptores de mediación de conceptos para evaluar la negociación en la tarea final.',
        fechaVencimiento: pasadomananaStr,
        completada: true,
        fechaCompletada: new Date().toISOString(),
        prioridad: 'media',
        categoria: 'evaluacion',
        planId: 'unidad_inicial',
        planTitulo: 'La rutina diaria y los horarios de vida cotidiana'
      }
    ];
  });

  // Estado del Glosario
  const [glosarioAbierto, setGlosarioAbierto] = useState(false);
  const [terminoSeleccionado, setTerminoSeleccionado] = useState<GlosarioTermino | null>(null);

  // Guardar tareas al cambiar
  useEffect(() => {
    guardarTareas(tareas);
  }, [tareas]);

  // Manejar generación de unidad
  const handleGenerate = (formData: FormDataELE) => {
    setIsGenerating(true);
    setTimeout(() => {
      try {
        const nuevaUnidad = generarUnidadELE(formData);
        setUnidadActiva(nuevaUnidad);
        guardarUnidadEnColeccion(nuevaUnidad);
        setIsGenerating(false);
      } catch (err) {
        console.error(err);
        setIsGenerating(false);
        alert("Ocurrió un error al compilar la unidad didáctica.");
      }
    }, 450);
  };

  // Handlers para el Gestor de Tareas
  const handleAddTarea = (nueva: Omit<TareaDocente, 'id'>) => {
    const tarea: TareaDocente = {
      ...nueva,
      id: `task_${Date.now()}`
    };
    setTareas(prev => [tarea, ...prev]);
  };

  const handleToggleCompletada = (id: string) => {
    setTareas(prev => prev.map(t => {
      if (t.id === id) {
        const estado = !t.completada;
        return {
          ...t,
          completada: estado,
          fechaCompletada: estado ? new Date().toISOString() : undefined
        };
      }
      return t;
    }));
  };

  const handleDeleteTarea = (id: string) => {
    setTareas(prev => prev.filter(t => t.id !== id));
  };

  const handleImportarTareasSugeridas = (sugeridas: Omit<TareaDocente, 'id'>[]) => {
    const nuevasConId = sugeridas.map((s, idx) => ({
      ...s,
      id: `task_sug_${Date.now()}_${idx}`
    }));
    setTareas(prev => [...nuevasConId, ...prev]);
    setVistaPrincipal('tareas');
  };

  // Abrir término específico en el glosario
  const handleOpenTermino = (termino: GlosarioTermino) => {
    setTerminoSeleccionado(termino);
    setGlosarioAbierto(true);
  };

  const tareasPendientesCount = tareas.filter(t => !t.completada).length;

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans">
      
      {/* Barra de navegación superior (Contrato Top Bar) */}
      <TopBar
        vistaPrincipal={vistaPrincipal}
        onChangeVista={setVistaPrincipal}
        onOpenGlosario={() => {
          setTerminoSeleccionado(null);
          setGlosarioAbierto(true);
        }}
        onNuevaUnidad={() => {
          setVistaPrincipal('disenador');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        totalTareasPendientes={tareasPendientesCount}
      />

      {/* Contenido según vista principal */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8">
        
        {/* VISTA 1: DISEÑADOR DE UNIDADES */}
        {vistaPrincipal === 'disenador' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Panel lateral izquierdo: Formulario de configuración */}
              <div className="lg:col-span-5 no-print">
                <PlanForm
                  onGenerate={handleGenerate}
                  isLoading={isGenerating}
                  onOpenGlosario={() => {
                    setTerminoSeleccionado(null);
                    setGlosarioAbierto(true);
                  }}
                />
              </div>

              {/* Panel derecho: Visor de documento interactivo */}
              <div className="lg:col-span-7">
                <DocumentViewer
                  unidad={unidadActiva}
                  onOpenTermino={handleOpenTermino}
                  onCrearTareasDocente={() => setVistaPrincipal('tareas')}
                />
              </div>

            </div>

            {/* Acceso directo al Gestor de Tareas debajo */}
            <div className="no-print pt-4 border-t border-slate-200">
              <TaskManager
                tareas={tareas}
                onAddTarea={handleAddTarea}
                onToggleCompletada={handleToggleCompletada}
                onDeleteTarea={handleDeleteTarea}
                unidadActiva={unidadActiva}
                onImportarTareasSugeridas={handleImportarTareasSugeridas}
              />
            </div>
          </div>
        )}

        {/* VISTA 2: GESTOR DE TAREAS DEDICADO */}
        {vistaPrincipal === 'tareas' && (
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-slate-900 font-editorial">
                  Gestor de Tareas y Preparación de Clases
                </h1>
                <p className="text-xs text-slate-500 mt-1">
                  Organiza tus preparaciones, fotocopias, rúbricas y adaptaciones vinculadas a tus planes de clase ELE.
                </p>
              </div>
              <button
                onClick={() => setVistaPrincipal('disenador')}
                className="text-xs font-semibold text-[#9e1b32] hover:underline"
              >
                Volver al Diseñador &rarr;
              </button>
            </div>

            <TaskManager
              tareas={tareas}
              onAddTarea={handleAddTarea}
              onToggleCompletada={handleToggleCompletada}
              onDeleteTarea={handleDeleteTarea}
              unidadActiva={unidadActiva}
              onImportarTareasSugeridas={handleImportarTareasSugeridas}
            />
          </div>
        )}

        {/* VISTA 3: MARCO METODOLÓGICO */}
        {vistaPrincipal === 'marco' && (
          <MarcoMetodologico
            onOpenTermino={handleOpenTermino}
            onOpenGlosario={() => {
              setTerminoSeleccionado(null);
              setGlosarioAbierto(true);
            }}
          />
        )}

      </main>

      {/* Modal de Glosario Interactivo */}
      <GlosarioModal
        isOpen={glosarioAbierto}
        onClose={() => setGlosarioAbierto(false)}
        terminoSeleccionado={terminoSeleccionado}
        onSelectTermino={setTerminoSeleccionado}
      />

      {/* Pie de página tranquilo */}
      <footer className="no-print border-t border-slate-200 bg-white py-6 mt-12 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>
            Planificador ELE · Conforme al Marco Común Europeo de Referencia (MCER) y al Plan Curricular del Instituto Cervantes (PCIC).
          </div>
          <div className="text-slate-400">
            Regla de rigor: sin invención de códigos no verificados.
          </div>
        </div>
      </footer>

    </div>
  );
}
