import React, { useState } from 'react';
import { Sparkles, RotateCcw, BookOpen, Layers, Check } from 'lucide-react';
import { FormDataELE, NivelMCER, VariedadDialectal, Destreza } from '../types';
import { PLANTILLAS_PREESTABLECIDAS } from '../data/pcicData';

interface PlanFormProps {
  onGenerate: (data: FormDataELE) => void;
  isLoading: boolean;
  onOpenGlosario: () => void;
}

const DESTREZAS_DISPONIBLES: Destreza[] = [
  'Comprensión oral',
  'Comprensión lectora',
  'Interacción oral',
  'Expresión oral',
  'Expresión escrita',
  'Mediación oral',
  'Mediación escrita'
];

export const PlanForm: React.FC<PlanFormProps> = ({
  onGenerate,
  isLoading,
  onOpenGlosario
}) => {
  const [formData, setFormData] = useState<FormDataELE>({
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

  const cargarPlantilla = (id: string) => {
    const plantilla = PLANTILLAS_PREESTABLECIDAS.find(p => p.id === id);
    if (!plantilla) return;

    setFormData(prev => ({
      ...prev,
      nivel: plantilla.nivel,
      duracion: plantilla.duracion,
      tema: plantilla.tema,
      funcion: plantilla.funcion,
      gramaticaUser: plantilla.gramaticaUser,
      lexicoUser: plantilla.lexicoUser,
      culturalUser: plantilla.culturalUser,
      variedad: plantilla.variedad,
      contexto: plantilla.contexto,
      destrezas: plantilla.destrezas as Destreza[]
    }));
  };

  const handleDestrezaToggle = (destreza: Destreza) => {
    setFormData(prev => {
      const existe = prev.destrezas.includes(destreza);
      if (existe) {
        if (prev.destrezas.length === 1) return prev; // Mantener al menos una
        return { ...prev, destrezas: prev.destrezas.filter(d => d !== destreza) };
      } else {
        return { ...prev, destrezas: [...prev.destrezas, destreza] };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGenerate(formData);
  };

  const handleReset = () => {
    setFormData({
      nivel: 'A2',
      duracion: 90,
      tema: 'La rutina diaria y los horarios de vida cotidiana',
      funcion: 'Describir las rutinas cotidianas, preguntar por horarios y contrastar estilos de vida',
      gramaticaUser: '',
      lexicoUser: '',
      culturalUser: '',
      variedad: 'peninsular',
      modalidad: 'presencial',
      contexto: 'Adultos, 8-12 estudiantes, motivación general/laboral',
      destrezas: ['Comprensión oral', 'Comprensión lectora', 'Interacción oral', 'Mediación oral'],
      gamificacion: true,
      diversidadActiva: false,
      diversidadTipo: ''
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-xs border border-slate-200 overflow-hidden">
      
      {/* Cabecera del formulario */}
      <div className="p-5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
        <div>
          <h2 className="text-base font-bold text-slate-900">
            Parámetros de la Sesión ELE
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Configuración curricular con ajuste automático de inventarios
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onOpenGlosario}
            className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-md hover:bg-slate-50 transition-colors"
            title="Consultar glosario de términos PCIC y MCER"
          >
            <BookOpen className="w-3.5 h-3.5 text-[#9e1b32]" />
            <span>Glosario</span>
          </button>

          <button
            type="button"
            onClick={handleReset}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-md transition-colors"
            title="Restablecer valores por defecto"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Selector rápido de plantillas / presets */}
      <div className="px-5 py-3 bg-slate-100/70 border-b border-slate-200">
        <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
          Cargar plantilla de nivel (Presets PCIC):
        </span>
        <div className="flex flex-wrap gap-1.5">
          {PLANTILLAS_PREESTABLECIDAS.map(p => (
            <button
              key={p.id}
              type="button"
              onClick={() => cargarPlantilla(p.id)}
              className={`text-xs px-2.5 py-1 rounded border transition-colors ${
                formData.nivel === p.nivel && formData.tema === p.tema
                  ? 'bg-rose-50 text-[#9e1b32] border-rose-300 font-semibold'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
            >
              {p.nivel} · {p.tema.slice(0, 18)}...
            </button>
          ))}
        </div>
      </div>

      {/* Formulario principal */}
      <form onSubmit={handleSubmit} className="p-5 space-y-4 text-xs">
        
        {/* Nivel MCER y Duración */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block font-bold text-slate-700 mb-1">
              Nivel MCER <span className="text-[#9e1b32]">*</span>
            </label>
            <select
              value={formData.nivel}
              onChange={(e) => setFormData({ ...formData, nivel: e.target.value as NivelMCER })}
              className="w-full px-2.5 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-[#9e1b32]"
            >
              <option value="A1">A1 - Acceso (Inicial)</option>
              <option value="A2">A2 - Plataforma (Básico)</option>
              <option value="B1">B1 - Umbral (Intermedio)</option>
              <option value="B2">B2 - Avanzado</option>
              <option value="C1">C1 - Dominio operativo</option>
              <option value="C2">C2 - Maestría</option>
            </select>
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1">
              Duración (minutos) <span className="text-[#9e1b32]">*</span>
            </label>
            <input
              type="number"
              min={45}
              max={360}
              step={15}
              value={formData.duracion}
              onChange={(e) => setFormData({ ...formData, duracion: parseInt(e.target.value, 10) || 90 })}
              className="w-full px-2.5 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-[#9e1b32]"
            />
          </div>
        </div>

        {/* Tema */}
        <div>
          <label className="block font-bold text-slate-700 mb-1">
            Tema de la sesión <span className="text-[#9e1b32]">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.tema}
            onChange={(e) => setFormData({ ...formData, tema: e.target.value })}
            placeholder="Ej. La rutina diaria y los horarios de vida"
            className="w-full px-2.5 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-[#9e1b32]"
          />
        </div>

        {/* Función comunicativa */}
        <div>
          <label className="block font-bold text-slate-700 mb-1">
            Función comunicativa principal <span className="text-[#9e1b32]">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.funcion}
            onChange={(e) => setFormData({ ...formData, funcion: e.target.value })}
            placeholder="Ej. Describir las rutinas cotidianas y contrastar horarios"
            className="w-full px-2.5 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-[#9e1b32]"
          />
        </div>

        {/* Variedad y Modalidad */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block font-bold text-slate-700 mb-1">
              Variedad del español
            </label>
            <select
              value={formData.variedad}
              onChange={(e) => setFormData({ ...formData, variedad: e.target.value as VariedadDialectal })}
              className="w-full px-2.5 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-[#9e1b32]"
            >
              <option value="peninsular">Peninsular (España)</option>
              <option value="rioplatense">Rioplatense (Argentina/Uruguay)</option>
              <option value="mexicana">Mexicana</option>
              <option value="andina">Andina</option>
              <option value="caribeña">Caribeña</option>
              <option value="chilena">Chilena</option>
            </select>
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1">
              Modalidad de impartición
            </label>
            <select
              value={formData.modalidad}
              onChange={(e) => setFormData({ ...formData, modalidad: e.target.value as any })}
              className="w-full px-2.5 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-[#9e1b32]"
            >
              <option value="presencial">Presencial (Aula física)</option>
              <option value="online">En línea sincrónica</option>
            </select>
          </div>
        </div>

        {/* Contexto del grupo */}
        <div>
          <label className="block font-bold text-slate-700 mb-1">
            Contexto y perfil del grupo
          </label>
          <input
            type="text"
            value={formData.contexto}
            onChange={(e) => setFormData({ ...formData, contexto: e.target.value })}
            placeholder="Adultos, 8-12 estudiantes, motivación general/laboral"
            className="w-full px-2.5 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-[#9e1b32]"
          />
        </div>

        {/* Destrezas foco y mediación */}
        <div>
          <label className="block font-bold text-slate-700 mb-1.5">
            Destrezas foco (MCER y Mediación)
          </label>
          <div className="grid grid-cols-2 gap-1.5 p-2.5 bg-slate-50 border border-slate-200 rounded-lg max-h-36 overflow-y-auto">
            {DESTREZAS_DISPONIBLES.map(dest => {
              const checked = formData.destrezas.includes(dest);
              return (
                <label key={dest} className="flex items-center gap-1.5 cursor-pointer text-[11px] text-slate-700">
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => handleDestrezaToggle(dest)}
                    className="accent-[#9e1b32] rounded"
                  />
                  <span>{dest}</span>
                </label>
              );
            })}
          </div>
        </div>

        {/* Gramática personalizada opcional */}
        <div>
          <label className="block font-bold text-slate-700 mb-1">
            Contenidos gramaticales <span className="font-normal text-slate-400">(Opcional: PCIC)</span>
          </label>
          <input
            type="text"
            value={formData.gramaticaUser}
            onChange={(e) => setFormData({ ...formData, gramaticaUser: e.target.value })}
            placeholder="Vacío = Sugeridos según el nivel en el PCIC"
            className="w-full px-2.5 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-[#9e1b32]"
          />
        </div>

        {/* Gamificación y Diversidad */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block font-bold text-slate-700 mb-1">
              Gamificación en Fase 3
            </label>
            <select
              value={formData.gamificacion ? 'si' : 'no'}
              onChange={(e) => setFormData({ ...formData, gamificacion: e.target.value === 'si' })}
              className="w-full px-2.5 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-[#9e1b32]"
            >
              <option value="si">Sí (dinámica cooperativa)</option>
              <option value="no">No (práctica formal)</option>
            </select>
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1">
              Atención a la diversidad
            </label>
            <select
              value={formData.diversidadActiva ? 'si' : 'no'}
              onChange={(e) => setFormData({ ...formData, diversidadActiva: e.target.value === 'si' })}
              className="w-full px-2.5 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-[#9e1b32]"
            >
              <option value="no">No requerida</option>
              <option value="si">Sí (personalizar perfil)</option>
            </select>
          </div>
        </div>

        {/* Input condicional de diversidad */}
        {formData.diversidadActiva && (
          <div className="p-3 bg-sky-50 border border-sky-200 rounded-lg space-y-1">
            <label className="block font-bold text-sky-900 text-xs">
              Perfil específico / Ritmos de aprendizaje:
            </label>
            <input
              type="text"
              value={formData.diversidadTipo}
              onChange={(e) => setFormData({ ...formData, diversidadTipo: e.target.value })}
              placeholder="Ej. Alumnos sinohablantes o distintos ritmos de adquisición"
              className="w-full px-2.5 py-1.5 text-xs bg-white border border-sky-200 rounded-lg focus:outline-none focus:border-sky-600"
            />
          </div>
        )}

        {/* Botón de envío */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-2.5 px-4 bg-[#9e1b32] hover:bg-[#7d1326] text-white font-bold text-sm rounded-lg shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
          >
            {isLoading ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Compilando con el PCIC...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>Generar Unidad Didáctica</span>
              </>
            )}
          </button>
        </div>

      </form>
    </div>
  );
};
