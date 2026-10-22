import React from 'react';
import { BookOpen, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { GlosarioTexto } from './GlosarioTexto';
import { GlosarioTermino } from '../types';

interface MarcoMetodologicoProps {
  onOpenTermino: (termino: GlosarioTermino) => void;
  onOpenGlosario: () => void;
}

export const MarcoMetodologico: React.FC<MarcoMetodologicoProps> = ({
  onOpenTermino,
  onOpenGlosario
}) => {
  return (
    <div className="bg-white rounded-xl shadow-xs border border-slate-200 overflow-hidden p-6 md:p-10 max-w-4xl mx-auto space-y-8">
      
      <div className="border-b-2 border-[#9e1b32] pb-6">
        <span className="text-xs uppercase font-bold text-[#9e1b32] tracking-wider block mb-1">
          Fundamentos Científicos y Didácticos
        </span>
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900 font-editorial">
          Marco Metodológico ELE: PCIC & MCER
        </h1>
        <p className="text-sm text-slate-600 mt-2 leading-relaxed">
          Principios rectores para la planificación de unidades didácticas orientadas a la acción según las directrices del Instituto Cervantes y el Consejo de Europa.
        </p>
      </div>

      {/* Los 4 pilares */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-2">
          <div className="text-xs font-bold text-[#9e1b32] uppercase">Pilar 1</div>
          <h2 className="text-base font-bold text-slate-900">
            <GlosarioTexto texto="Enfoque por tareas y agente social" onOpenTermino={onOpenTermino} />
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            El estudiante no es un mero receptor de reglas gramaticales, sino un agente social que utiliza la lengua para resolver un problema de la vida real mediante una <strong>tarea comunicativa final auténtica</strong> con vacío de información y negociación.
          </p>
        </div>

        <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-2">
          <div className="text-xs font-bold text-[#9e1b32] uppercase">Pilar 2</div>
          <h2 className="text-base font-bold text-slate-900">
            <GlosarioTexto texto="Gramática inductiva reflexiva" onOpenTermino={onOpenTermino} />
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            La regla gramatical no se presenta de forma deductiva mediante tablas descontextualizadas. El alumno parte de un <strong>input comprensible contextualizado</strong>, observa los enunciados y formula colaborativamente la hipótesis formal guiado por el profesor.
          </p>
        </div>

        <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-2">
          <div className="text-xs font-bold text-[#9e1b32] uppercase">Pilar 3</div>
          <h2 className="text-base font-bold text-slate-900">
            <GlosarioTexto texto="Mediación lingüística e intercultural" onOpenTermino={onOpenTermino} />
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Conforme al <em>Volumen Complementario del MCER (2020)</em>, la mediación actúa como puente comunicativo para resolver divergencias de hábitos y pautas culturales entre interlocutores de procedencias diversas.
          </p>
        </div>

        <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-2">
          <div className="text-xs font-bold text-[#9e1b32] uppercase">Pilar 4</div>
          <h2 className="text-base font-bold text-slate-900">
            Rigor PCIC y Norma Panhispánica
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Respeto absoluto de las <GlosarioTexto texto="variedades geolectales" onOpenTermino={onOpenTermino} /> (con voseo, rasgos fónicos y léxicos legítimos) y aplicación de la regla de oro: <em>no inventar códigos inventariados</em>.
          </p>
        </div>

      </div>

      {/* Secuencia Canónica en 6 Fases */}
      <div className="space-y-4 pt-4 border-t border-slate-200">
        <h2 className="text-base font-bold text-slate-900 uppercase tracking-wide">
          Estructura de la Secuencia Didáctica Canónica
        </h2>
        <div className="space-y-2.5 text-xs">
          <div className="p-3 bg-white border border-slate-200 rounded-lg flex items-start gap-3">
            <span className="w-6 h-6 rounded bg-slate-100 font-bold flex items-center justify-center text-slate-700 shrink-0">1</span>
            <div>
              <strong className="text-slate-900 block font-semibold">Activación y anclaje inicial:</strong>
              <span className="text-slate-600">Conexión con el mundo vivencial del alumno y activación del léxico nuclear previo mediante estímulos visuales.</span>
            </div>
          </div>

          <div className="p-3 bg-white border border-slate-200 rounded-lg flex items-start gap-3">
            <span className="w-6 h-6 rounded bg-slate-100 font-bold flex items-center justify-center text-slate-700 shrink-0">2</span>
            <div>
              <strong className="text-slate-900 block font-semibold">Input auténtico y autodescubrimiento:</strong>
              <span className="text-slate-600">Lectura o audición contextualizada y matriz inductiva para descubrir regularidades gramaticales.</span>
            </div>
          </div>

          <div className="p-3 bg-white border border-slate-200 rounded-lg flex items-start gap-3">
            <span className="w-6 h-6 rounded bg-slate-100 font-bold flex items-center justify-center text-slate-700 shrink-0">3</span>
            <div>
              <strong className="text-slate-900 block font-semibold">Práctica controlada y automatización:</strong>
              <span className="text-slate-600">Focalización en la forma, precisión morfosintáctica y dinámicas cooperativas o gamificadas.</span>
            </div>
          </div>

          <div className="p-3 bg-white border border-slate-200 rounded-lg flex items-start gap-3">
            <span className="w-6 h-6 rounded bg-slate-100 font-bold flex items-center justify-center text-slate-700 shrink-0">4</span>
            <div>
              <strong className="text-slate-900 block font-semibold">Práctica guiada (vacío de información y mediación):</strong>
              <span className="text-slate-600">Interacción en parejas A/B con roles diferenciados para negociar significados y resolver divergencias.</span>
            </div>
          </div>

          <div className="p-3 bg-white border border-slate-200 rounded-lg flex items-start gap-3 border-l-4 border-l-[#9e1b32]">
            <span className="w-6 h-6 rounded bg-[#9e1b32] text-white font-bold flex items-center justify-center shrink-0">5</span>
            <div>
              <strong className="text-slate-900 block font-semibold">Tarea final comunicativa auténtica:</strong>
              <span className="text-slate-600">Elaboración de un producto social (agenda compartida, itinerario, decálogo) en grupos cooperativos y presentación plenaria.</span>
            </div>
          </div>

          <div className="p-3 bg-white border border-slate-200 rounded-lg flex items-start gap-3">
            <span className="w-6 h-6 rounded bg-slate-100 font-bold flex items-center justify-center text-slate-700 shrink-0">6</span>
            <div>
              <strong className="text-slate-900 block font-semibold">Cierre reflexivo, semáforo y retroalimentación:</strong>
              <span className="text-slate-600">Autoevaluación metacognitiva con descriptores «Puedo...» y devolución formativa positiva del docente.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Botón para abrir glosario */}
      <div className="p-4 bg-rose-50 border border-rose-200 rounded-lg flex items-center justify-between">
        <div>
          <h3 className="text-xs font-bold text-rose-950">Consulta el Glosario Especializado</h3>
          <p className="text-xs text-rose-800">Más de 15 términos clave definidos según el Instituto Cervantes y el Consejo de Europa.</p>
        </div>
        <button
          onClick={onOpenGlosario}
          className="px-3.5 py-1.5 bg-[#9e1b32] hover:bg-[#7d1326] text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5"
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>Ver Glosario</span>
        </button>
      </div>

    </div>
  );
};
