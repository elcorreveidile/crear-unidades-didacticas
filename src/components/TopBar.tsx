import React from 'react';
import { BookOpen, ListTodo, FileText, Sparkles, HelpCircle } from 'lucide-react';

interface TopBarProps {
  vistaPrincipal: 'disenador' | 'tareas' | 'marco';
  onChangeVista: (vista: 'disenador' | 'tareas' | 'marco') => void;
  onOpenGlosario: () => void;
  onNuevaUnidad: () => void;
  totalTareasPendientes: number;
}

export const TopBar: React.FC<TopBarProps> = ({
  vistaPrincipal,
  onChangeVista,
  onOpenGlosario,
  onNuevaUnidad,
  totalTareasPendientes
}) => {
  return (
    <header className="no-print bg-white border-b border-slate-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single text element wordmark */}
        <div className="flex items-center gap-3 whitespace-nowrap shrink-0">
          <div className="w-8 h-8 rounded-lg bg-[#9e1b32] text-white flex items-center justify-center font-bold text-sm shadow-xs">
            ELE
          </div>
          <button 
            onClick={() => onChangeVista('disenador')}
            className="text-left font-bold text-base text-slate-900 tracking-tight hover:text-[#9e1b32] transition-colors"
          >
            Planificador ELE
          </button>
        </div>

        {/* Zone 2: 4 single-line nav links with whitespace-nowrap */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          <button
            onClick={() => onChangeVista('disenador')}
            className={`whitespace-nowrap shrink-0 hover:text-slate-900 transition-colors py-1 ${
              vistaPrincipal === 'disenador' 
                ? 'text-[#9e1b32] font-semibold border-b-2 border-[#9e1b32]' 
                : ''
            }`}
          >
            Diseñador de Unidades
          </button>

          <button
            onClick={() => onChangeVista('tareas')}
            className={`whitespace-nowrap shrink-0 hover:text-slate-900 transition-colors py-1 flex items-center gap-1.5 ${
              vistaPrincipal === 'tareas' 
                ? 'text-[#9e1b32] font-semibold border-b-2 border-[#9e1b32]' 
                : ''
            }`}
          >
            <span>Gestor de Tareas</span>
            {totalTareasPendientes > 0 && (
              <span className="text-[10px] font-bold px-1.5 py-0.2 rounded-full bg-rose-100 text-[#9e1b32]">
                {totalTareasPendientes}
              </span>
            )}
          </button>

          <button
            onClick={onOpenGlosario}
            className="whitespace-nowrap shrink-0 hover:text-slate-900 transition-colors py-1 flex items-center gap-1"
          >
            <BookOpen className="w-3.5 h-3.5 text-[#9e1b32]" />
            <span>Glosario PCIC</span>
          </button>

          <button
            onClick={() => onChangeVista('marco')}
            className={`whitespace-nowrap shrink-0 hover:text-slate-900 transition-colors py-1 ${
              vistaPrincipal === 'marco' 
                ? 'text-[#9e1b32] font-semibold border-b-2 border-[#9e1b32]' 
                : ''
            }`}
          >
            Marco Metodológico
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onNuevaUnidad}
            className="px-3.5 py-1.5 text-xs font-semibold text-white bg-[#9e1b32] hover:bg-[#7d1326] rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-xs flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Nueva Unidad</span>
          </button>
        </div>

      </div>
    </header>
  );
};
