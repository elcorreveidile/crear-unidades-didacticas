import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Circle, 
  Plus, 
  Trash2, 
  Calendar, 
  AlertCircle, 
  Clock, 
  Sparkles, 
  ListTodo, 
  Check, 
  Tag, 
  FileText
} from 'lucide-react';
import { TareaDocente, UnidadDidactica } from '../types';

interface TaskManagerProps {
  tareas: TareaDocente[];
  onAddTarea: (tarea: Omit<TareaDocente, 'id'>) => void;
  onToggleCompletada: (id: string) => void;
  onDeleteTarea: (id: string) => void;
  unidadActiva?: UnidadDidactica | null;
  onImportarTareasSugeridas?: (tareasSugeridas: Omit<TareaDocente, 'id'>[]) => void;
}

export const TaskManager: React.FC<TaskManagerProps> = ({
  tareas,
  onAddTarea,
  onToggleCompletada,
  onDeleteTarea,
  unidadActiva,
  onImportarTareasSugeridas
}) => {
  const [tabActiva, setTabActiva] = useState<'pendientes' | 'completadas' | 'todas'>('pendientes');
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [filtroPlan, setFiltroPlan] = useState<boolean>(false);

  // Form State
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [fechaVencimiento, setFechaVencimiento] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 2);
    return d.toISOString().split('T')[0];
  });
  const [prioridad, setPrioridad] = useState<TareaDocente['prioridad']>('media');
  const [categoria, setCategoria] = useState<TareaDocente['categoria']>('preparacion_materiales');
  const [vincularAlPlan, setVincularAlPlan] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!titulo.trim()) return;

    onAddTarea({
      titulo: titulo.trim(),
      descripcion: descripcion.trim(),
      fechaVencimiento,
      completada: false,
      prioridad,
      categoria,
      planId: vincularAlPlan && unidadActiva ? unidadActiva.id : undefined,
      planTitulo: vincularAlPlan && unidadActiva ? unidadActiva.tema : undefined
    });

    // Reset form
    setTitulo('');
    setDescripcion('');
    setMostrarFormulario(false);
  };

  const generarSugeridas = () => {
    if (!unidadActiva || !onImportarTareasSugeridas) return;

    const hoy = new Date();
    const manana = new Date(hoy);
    manana.setDate(hoy.getDate() + 1);
    const mananaStr = manana.toISOString().split('T')[0];

    const pasadomanana = new Date(hoy);
    pasadomanana.setDate(hoy.getDate() + 2);
    const pasadomananaStr = pasadomanana.toISOString().split('T')[0];

    const sugeridas: Omit<TareaDocente, 'id'>[] = [
      {
        titulo: `Imprimir fichas de descubrimiento inductivo (${unidadActiva.nivel})`,
        descripcion: `Fase 2: Imprimir la ficha del alumno con el texto auténtico sobre horarios y la tabla inductiva para ${unidadActiva.contexto}.`,
        fechaVencimiento: mananaStr,
        completada: false,
        prioridad: 'alta',
        categoria: 'preparacion_materiales',
        planId: unidadActiva.id,
        planTitulo: unidadActiva.tema
      },
      {
        titulo: `Recortar tarjetas de roles A y B (Vacío de información)`,
        descripcion: `Fase 4: Preparar los roles complementarios (horarios locales vs visitante) para la dinámica de mediación oral en parejas.`,
        fechaVencimiento: mananaStr,
        completada: false,
        prioridad: 'alta',
        categoria: 'preparacion_materiales',
        planId: unidadActiva.id,
        planTitulo: unidadActiva.tema
      },
      {
        titulo: `Adaptar rúbrica de evaluación para atención a la diversidad`,
        descripcion: unidadActiva.diversidad 
          ? `Medidas específicas: ${unidadActiva.diversidad}. Disponer de andamiajes visuales y consignas graduadas.`
          : `Revisar descriptores MCER de la unidad y preparar lista de cotejo formativa para la tarea final.`,
        fechaVencimiento: pasadomananaStr,
        completada: false,
        prioridad: 'media',
        categoria: 'evaluacion',
        planId: unidadActiva.id,
        planTitulo: unidadActiva.tema
      },
      {
        titulo: `Verificar soporte para la tarea final colaborativa`,
        descripcion: `Comprobar disponibilidad de cartulinas A3 o enlace al mural digital (Miro/Padlet) para la 'Agenda de Convivencia e Intercambio'.`,
        fechaVencimiento: pasadomananaStr,
        completada: false,
        prioridad: 'media',
        categoria: 'preparacion_materiales',
        planId: unidadActiva.id,
        planTitulo: unidadActiva.tema
      }
    ];

    onImportarTareasSugeridas(sugeridas);
  };

  // Filtrado
  const tareasFiltradas = tareas.filter(t => {
    if (tabActiva === 'pendientes' && t.completada) return false;
    if (tabActiva === 'completadas' && !t.completada) return false;
    if (filtroPlan && unidadActiva && t.planId !== unidadActiva.id) return false;
    return true;
  });

  const pendientesCount = tareas.filter(t => !t.completada).length;
  const completadasCount = tareas.filter(t => t.completada).length;

  const getCategoriaBadge = (cat: TareaDocente['categoria']) => {
    switch (cat) {
      case 'preparacion_materiales':
        return { label: 'Materiales', color: 'text-sky-700 bg-sky-50 border-sky-200' };
      case 'evaluacion':
        return { label: 'Evaluación', color: 'text-purple-700 bg-purple-50 border-purple-200' };
      case 'seguimiento_alumnos':
        return { label: 'Alumnos', color: 'text-amber-700 bg-amber-50 border-amber-200' };
      case 'coordinacion':
        return { label: 'Coordinación', color: 'text-emerald-700 bg-emerald-50 border-emerald-200' };
    }
  };

  const getPrioridadBadge = (prio: TareaDocente['prioridad']) => {
    switch (prio) {
      case 'alta':
        return { label: 'Alta', color: 'text-rose-700 bg-rose-50 border-rose-200' };
      case 'media':
        return { label: 'Media', color: 'text-amber-700 bg-amber-50 border-amber-200' };
      case 'baja':
        return { label: 'Baja', color: 'text-slate-600 bg-slate-50 border-slate-200' };
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-xs border border-slate-200 overflow-hidden">
      
      {/* Encabezado */}
      <div className="p-5 border-b border-slate-200 bg-slate-50/70 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <ListTodo className="w-5 h-5 text-[#9e1b32]" />
            <h2 className="text-lg font-bold text-slate-900">
              Gestor de Tareas Docentes
            </h2>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            Planifica la preparación de materiales, rúbricas y seguimiento de la sesión
          </p>
        </div>

        <div className="flex items-center gap-2">
          {unidadActiva && onImportarTareasSugeridas && (
            <button
              onClick={generarSugeridas}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-rose-800 bg-rose-50 border border-rose-200 rounded-lg hover:bg-rose-100 transition-colors"
              title="Añadir tareas automáticas desde la unidad didáctica abierta"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Sugerir tareas de la unidad
            </button>
          )}

          <button
            onClick={() => setMostrarFormulario(!mostrarFormulario)}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-[#9e1b32] hover:bg-[#7d1326] rounded-lg transition-colors shadow-xs"
          >
            <Plus className="w-4 h-4" />
            Nueva Tarea
          </button>
        </div>
      </div>

      {/* Formulario desplegable */}
      {mostrarFormulario && (
        <form onSubmit={handleSubmit} className="p-5 border-b border-slate-200 bg-rose-50/20 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900">
              Crear nueva tarea docente
            </h3>
            <button
              type="button"
              onClick={() => setMostrarFormulario(false)}
              className="text-xs text-slate-400 hover:text-slate-600"
            >
              Cancelar
            </button>
          </div>

          <div className="space-y-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Título de la tarea <span className="text-[#9e1b32]">*</span>
              </label>
              <input
                type="text"
                required
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                placeholder="Ej. Fotocopiar tarjetas de roles A/B o preparar audio de Lautaro"
                className="w-full px-3 py-2 text-sm bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-[#9e1b32]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Descripción / Instrucciones
              </label>
              <textarea
                rows={2}
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                placeholder="Detalles sobre materiales, cantidad de copias o aspectos metodológicos a recordar..."
                className="w-full px-3 py-2 text-sm bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-[#9e1b32]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  Fecha de vencimiento
                </label>
                <input
                  type="date"
                  required
                  value={fechaVencimiento}
                  onChange={(e) => setFechaVencimiento(e.target.value)}
                  className="w-full px-3 py-1.5 text-sm bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-[#9e1b32]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Prioridad
                </label>
                <select
                  value={prioridad}
                  onChange={(e) => setPrioridad(e.target.value as any)}
                  className="w-full px-3 py-1.5 text-sm bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-[#9e1b32]"
                >
                  <option value="alta">Alta prioridad</option>
                  <option value="media">Prioridad media</option>
                  <option value="baja">Baja prioridad</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Categoría
                </label>
                <select
                  value={categoria}
                  onChange={(e) => setCategoria(e.target.value as any)}
                  className="w-full px-3 py-1.5 text-sm bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-[#9e1b32]"
                >
                  <option value="preparacion_materiales">Preparación de materiales</option>
                  <option value="evaluacion">Evaluación y rúbricas</option>
                  <option value="seguimiento_alumnos">Atención y seguimiento</option>
                  <option value="coordinacion">Coordinación de centro</option>
                </select>
              </div>
            </div>

            {unidadActiva && (
              <div className="pt-1">
                <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-700">
                  <input
                    type="checkbox"
                    checked={vincularAlPlan}
                    onChange={(e) => setVincularAlPlan(e.target.checked)}
                    className="accent-[#9e1b32] rounded"
                  />
                  <span>
                    Vincular explícitamente a la unidad activa: <strong>{unidadActiva.tema}</strong> ({unidadActiva.nivel})
                  </span>
                </label>
              </div>
            )}
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={() => setMostrarFormulario(false)}
              className="px-3.5 py-1.5 text-xs text-slate-600 hover:bg-slate-100 rounded-lg"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-1.5 text-xs font-semibold text-white bg-[#9e1b32] hover:bg-[#7d1326] rounded-lg transition-colors"
            >
              Guardar Tarea
            </button>
          </div>
        </form>
      )}

      {/* Barra de pestañas y filtros */}
      <div className="px-5 py-3 border-b border-slate-200 bg-white flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg">
          <button
            onClick={() => setTabActiva('pendientes')}
            className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
              tabActiva === 'pendientes'
                ? 'bg-white text-slate-900 shadow-xs font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Pendientes ({pendientesCount})
          </button>
          <button
            onClick={() => setTabActiva('completadas')}
            className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
              tabActiva === 'completadas'
                ? 'bg-white text-slate-900 shadow-xs font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Completadas ({completadasCount})
          </button>
          <button
            onClick={() => setTabActiva('todas')}
            className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
              tabActiva === 'todas'
                ? 'bg-white text-slate-900 shadow-xs font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Todas ({tareas.length})
          </button>
        </div>

        {unidadActiva && (
          <label className="flex items-center gap-2 text-xs text-slate-600 cursor-pointer">
            <input
              type="checkbox"
              checked={filtroPlan}
              onChange={(e) => setFiltroPlan(e.target.checked)}
              className="accent-[#9e1b32] rounded"
            />
            <span>Solo tareas de esta unidad ({unidadActiva.nivel})</span>
          </label>
        )}
      </div>

      {/* Lista de tareas */}
      <div className="divide-y divide-slate-100 min-h-[220px]">
        {tareasFiltradas.length === 0 ? (
          <div className="p-8 text-center text-slate-400">
            <CheckCircle2 className="w-10 h-10 mx-auto text-slate-300 mb-2 stroke-1" />
            <p className="text-sm font-semibold text-slate-600">
              {tabActiva === 'completadas' 
                ? 'No hay tareas completadas todavía' 
                : '¡Todo al día! No tienes tareas pendientes.'}
            </p>
            <p className="text-xs text-slate-400 mt-1">
              {tabActiva === 'pendientes' && 'Crea una tarea nueva o genera sugerencias desde la unidad didáctica abierta.'}
            </p>
          </div>
        ) : (
          tareasFiltradas.map((tarea) => {
            const catBadge = getCategoriaBadge(tarea.categoria);
            const prioBadge = getPrioridadBadge(tarea.prioridad);
            const estaVencida = !tarea.completada && new Date(tarea.fechaVencimiento) < new Date(new Date().setHours(0,0,0,0));

            return (
              <div 
                key={tarea.id}
                className={`p-4 transition-colors flex items-start gap-3 group ${
                  tarea.completada ? 'bg-slate-50/60 opacity-80' : 'hover:bg-slate-50/50'
                }`}
              >
                {/* Botón de completar */}
                <button
                  onClick={() => onToggleCompletada(tarea.id)}
                  className="mt-0.5 text-slate-400 hover:text-[#9e1b32] transition-colors focus:outline-none"
                  title={tarea.completada ? 'Marcar como pendiente' : 'Marcar como completada'}
                >
                  {tarea.completada ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 fill-emerald-50" />
                  ) : (
                    <Circle className="w-5 h-5 text-slate-300 hover:text-slate-500" />
                  )}
                </button>

                {/* Contenido de la tarea */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span 
                      className={`text-sm font-semibold ${
                        tarea.completada ? 'line-through text-slate-500' : 'text-slate-900'
                      }`}
                    >
                      {tarea.titulo}
                    </span>

                    {/* Metadatos no-pill */}
                    <span className="text-xs text-slate-400">·</span>
                    <span className={`text-[11px] font-medium px-2 py-0.5 rounded border ${catBadge.color}`}>
                      {catBadge.label}
                    </span>
                    <span className={`text-[11px] font-medium px-2 py-0.5 rounded border ${prioBadge.color}`}>
                      {prioBadge.label}
                    </span>
                  </div>

                  {tarea.descripcion && (
                    <p className={`text-xs leading-relaxed mb-2 ${tarea.completada ? 'text-slate-400' : 'text-slate-600'}`}>
                      {tarea.descripcion}
                    </p>
                  )}

                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                    <span className={`flex items-center gap-1 ${estaVencida ? 'text-rose-600 font-medium' : ''}`}>
                      <Calendar className="w-3.5 h-3.5" />
                      Vence: {new Date(tarea.fechaVencimiento).toLocaleDateString('es-ES', { day: 'numeric', month: 'short' })}
                      {estaVencida && ' (Vencida)'}
                    </span>

                    {tarea.planTitulo && (
                      <span className="flex items-center gap-1 text-slate-600 truncate max-w-[260px]">
                        <FileText className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span className="truncate">{tarea.planTitulo}</span>
                      </span>
                    )}

                    {tarea.completada && tarea.fechaCompletada && (
                      <span className="text-emerald-700 flex items-center gap-1">
                        <Check className="w-3 h-3" /> Completada el {new Date(tarea.fechaCompletada).toLocaleDateString('es-ES')}
                      </span>
                    )}
                  </div>
                </div>

                {/* Botón de eliminar */}
                <button
                  onClick={() => onDeleteTarea(tarea.id)}
                  className="opacity-0 group-hover:opacity-100 p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-md transition-all"
                  title="Eliminar tarea"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            );
          })
        )}
      </div>

      {/* Resumen inferior */}
      <div className="px-5 py-2.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
        <span>
          {pendientesCount} pendiente{pendientesCount === 1 ? '' : 's'} · {completadasCount} finalizada{completadasCount === 1 ? '' : 's'}
        </span>
        <span className="italic text-[11px]">
          Guardado automático local
        </span>
      </div>

    </div>
  );
};
