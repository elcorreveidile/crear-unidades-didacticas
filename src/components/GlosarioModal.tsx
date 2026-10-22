import React, { useState } from 'react';
import { BookOpen, Search, X, ExternalLink, Bookmark } from 'lucide-react';
import { GLOSARIO_TERMINOS } from '../data/glossaryData';
import { GlosarioTermino } from '../types';

interface GlosarioModalProps {
  isOpen: boolean;
  onClose: () => void;
  terminoSeleccionado?: GlosarioTermino | null;
  onSelectTermino?: (termino: GlosarioTermino) => void;
}

export const GlosarioModal: React.FC<GlosarioModalProps> = ({
  isOpen,
  onClose,
  terminoSeleccionado,
  onSelectTermino
}) => {
  const [busqueda, setBusqueda] = useState('');
  const [categoriaFiltro, setCategoriaFiltro] = useState<string>('todas');
  const [activo, setActivo] = useState<GlosarioTermino | null>(terminoSeleccionado || null);

  React.useEffect(() => {
    if (terminoSeleccionado) {
      setActivo(terminoSeleccionado);
    } else if (!activo && GLOSARIO_TERMINOS.length > 0) {
      setActivo(GLOSARIO_TERMINOS[0]);
    }
  }, [terminoSeleccionado]);

  if (!isOpen) return null;

  const terminosFiltrados = GLOSARIO_TERMINOS.filter(t => {
    const coincideBusqueda = 
      t.termino.toLowerCase().includes(busqueda.toLowerCase()) ||
      t.definicion.toLowerCase().includes(busqueda.toLowerCase()) ||
      t.tags.some(tag => tag.toLowerCase().includes(busqueda.toLowerCase()));

    const coincideCategoria = 
      categoriaFiltro === 'todas' || t.categoria === categoriaFiltro;

    return coincideBusqueda && coincideCategoria;
  });

  const getCategoriaLabel = (cat: GlosarioTermino['categoria']) => {
    switch (cat) {
      case 'marco_normativo': return 'Marco normativo (MCER / PCIC)';
      case 'metodologia': return 'Metodología y enfoque';
      case 'gramatica': return 'Gramática y léxico';
      case 'evaluacion': return 'Evaluación formativa';
      case 'sociolinguistica': return 'Sociolingüística y variedades';
      default: return cat;
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="glossary-title"
    >
      <div className="relative w-full max-w-4xl bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Encabezado */}
        <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-rose-50 border border-rose-200 flex items-center justify-center text-[#9e1b32]">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 id="glossary-title" className="text-lg font-bold text-slate-900">
                Glosario Pedagógico MCER & PCIC
              </h2>
              <p className="text-xs text-slate-500">
                Conceptos clave, metodología orientada a la acción e inventarios didácticos
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-lg transition-colors"
            title="Cerrar glosario"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Buscador y Filtros */}
        <div className="px-6 py-3 bg-white border-b border-slate-200 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              placeholder="Buscar término, concepto, autor o regla..."
              className="w-full pl-9 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-[#9e1b32] focus:bg-white transition-all"
            />
          </div>
          <div className="flex items-center gap-2">
            <label className="text-xs font-medium text-slate-500 whitespace-nowrap">Categoría:</label>
            <select
              value={categoriaFiltro}
              onChange={(e) => setCategoriaFiltro(e.target.value)}
              className="text-xs bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-2 text-slate-700 focus:outline-none focus:border-[#9e1b32]"
            >
              <option value="todas">Todas las categorías</option>
              <option value="marco_normativo">Marco normativo (MCER/PCIC)</option>
              <option value="metodologia">Metodología y enfoque</option>
              <option value="gramatica">Gramática y léxico</option>
              <option value="evaluacion">Evaluación formativa</option>
              <option value="sociolinguistica">Sociolingüística y dialectos</option>
            </select>
          </div>
        </div>

        {/* Cuerpo en 2 columnas: Lista a la izquierda, Detalle a la derecha */}
        <div className="grid grid-cols-1 md:grid-cols-12 flex-1 overflow-hidden min-h-[380px]">
          
          {/* Lista de términos */}
          <div className="md:col-span-5 border-r border-slate-200 overflow-y-auto divide-y divide-slate-100 bg-slate-50/50">
            {terminosFiltrados.length === 0 ? (
              <div className="p-6 text-center text-slate-500 text-sm">
                No se encontraron términos que coincidan con «{busqueda}».
              </div>
            ) : (
              terminosFiltrados.map((termino) => {
                const isSelected = activo?.id === termino.id;
                return (
                  <button
                    key={termino.id}
                    onClick={() => {
                      setActivo(termino);
                      if (onSelectTermino) onSelectTermino(termino);
                    }}
                    className={`w-full text-left p-3.5 transition-colors flex flex-col gap-1 ${
                      isSelected 
                        ? 'bg-white border-l-4 border-l-[#9e1b32] shadow-xs' 
                        : 'hover:bg-slate-100/80 text-slate-700'
                    }`}
                  >
                    <div className="font-semibold text-sm text-slate-900 flex items-center justify-between">
                      <span>{termino.termino}</span>
                    </div>
                    <div className="text-xs text-slate-500">
                      {getCategoriaLabel(termino.categoria)}
                    </div>
                  </button>
                );
              })
            )}
          </div>

          {/* Panel de detalle del término activo */}
          <div className="md:col-span-7 p-6 overflow-y-auto bg-white flex flex-col justify-between">
            {activo ? (
              <div className="space-y-5">
                <div>
                  <div className="text-xs uppercase tracking-wider font-semibold text-[#9e1b32] mb-1">
                    {getCategoriaLabel(activo.categoria)}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {activo.termino}
                  </h3>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                    Definición Didáctica
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-3.5 rounded-lg border border-slate-200">
                    {activo.definicion}
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wide flex items-center gap-1.5">
                    <Bookmark className="w-3.5 h-3.5 text-[#9e1b32]" />
                    Ejemplo Práctico en el Aula de ELE
                  </h4>
                  <p className="text-sm text-slate-800 italic bg-amber-50/70 p-3.5 rounded-lg border border-amber-200/80">
                    «{activo.ejemploContexto}»
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="font-medium text-slate-600">Referencia oficial:</span>
                  <span className="italic">{activo.fuentePCIC}</span>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-slate-400 text-sm">
                Selecciona un término de la lista para consultar su definición.
              </div>
            )}
          </div>
        </div>

        {/* Pie */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>{GLOSARIO_TERMINOS.length} términos normalizados según el Instituto Cervantes</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-[#9e1b32] hover:bg-[#7d1326] text-white rounded-lg font-medium text-xs transition-colors"
          >
            Entendido
          </button>
        </div>

      </div>
    </div>
  );
};
