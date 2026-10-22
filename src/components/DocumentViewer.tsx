import React, { useState } from 'react';
import { 
  FileText, 
  Printer, 
  Download, 
  Copy, 
  Check, 
  Info, 
  GraduationCap, 
  Clock, 
  Globe2, 
  Users, 
  Sparkles, 
  ShieldCheck, 
  ChevronRight, 
  Layers, 
  ListOrdered,
  ListTodo
} from 'lucide-react';
import { GlosarioTermino, UnidadDidactica } from '../types';
import { GlosarioTexto } from './GlosarioTexto';
import { exportarAWord, imprimirPDF, copiarAlPortapapeles } from '../utils/exportUtils';

interface DocumentViewerProps {
  unidad: UnidadDidactica;
  onOpenTermino: (termino: GlosarioTermino) => void;
  onCrearTareasDocente?: () => void;
}

export const DocumentViewer: React.FC<DocumentViewerProps> = ({
  unidad,
  onOpenTermino,
  onCrearTareasDocente
}) => {
  const [vistaActiva, setVistaActiva] = useState<'completo' | 'ficha_alumno' | 'guia_docente'>('completo');
  const [copiado, setCopiado] = useState(false);

  const handleCopiar = async () => {
    const ok = await copiarAlPortapapeles(unidad);
    if (ok) {
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-xs border border-slate-200 overflow-hidden">
      
      {/* Barra de control superior (No imprimible) */}
      <div className="no-print p-4 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
        
        {/* Selector de vistas */}
        <div className="flex items-center gap-1 p-1 bg-slate-200/70 rounded-lg">
          <button
            onClick={() => setVistaActiva('completo')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
              vistaActiva === 'completo'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Unidad Curricular
          </button>
          <button
            onClick={() => setVistaActiva('ficha_alumno')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
              vistaActiva === 'ficha_alumno'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Ficha del Alumno (Imprimible)
          </button>
          <button
            onClick={() => setVistaActiva('guia_docente')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
              vistaActiva === 'guia_docente'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Cronograma del Docente
          </button>
        </div>

        {/* Acciones de exportación */}
        <div className="flex items-center gap-2">
          {onCrearTareasDocente && (
            <button
              onClick={onCrearTareasDocente}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-rose-900 bg-rose-50 border border-rose-200 hover:bg-rose-100 rounded-lg transition-colors"
              title="Organizar tareas de preparación de esta clase"
            >
              <ListTodo className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Gestionar tareas</span>
            </button>
          )}

          <button
            onClick={handleCopiar}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 rounded-lg transition-colors"
            title="Copiar texto al portapapeles"
          >
            {copiado ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiado ? '¡Copiado!' : 'Copiar'}</span>
          </button>

          <button
            onClick={() => exportarAWord(unidad)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 rounded-lg transition-colors"
            title="Descargar documento editable compatible con Microsoft Word (.doc)"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Word (.doc)</span>
          </button>

          <button
            onClick={imprimirPDF}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-[#9e1b32] hover:bg-[#7d1326] rounded-lg transition-colors"
            title="Imprimir o guardar como PDF"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>PDF / Imprimir</span>
          </button>
        </div>
      </div>

      {/* ÁREA DE CONTENIDO */}
      <div className="p-6 md:p-10 lesson-plan-doc text-slate-800 leading-relaxed font-sans">
        
        {/* ============================================================== */}
        {/* VISTA 1: DOCUMENTO COMPLETO CURRICULAR */}
        {/* ============================================================== */}
        {vistaActiva === 'completo' && (
          <div className="space-y-8">
            
            {/* Cabecera del documento */}
            <div className="border-b-2 border-[#9e1b32] pb-6">
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-[#9e1b32] uppercase tracking-wider mb-2">
                <span>Nivel {unidad.nivel}</span>
                <span>·</span>
                <GlosarioTexto texto="MCER & PCIC Instituto Cervantes" onOpenTermino={onOpenTermino} />
                <span>·</span>
                <GlosarioTexto texto="Enfoque por tareas y gramática inductiva" onOpenTermino={onOpenTermino} />
              </div>

              <h1 className="text-2xl md:text-3xl font-bold text-slate-900 font-editorial mb-4">
                Unidad Didáctica: {unidad.tema}
              </h1>

              {/* Aviso normativo de rigor PCIC */}
              <div className="bg-emerald-50/70 border border-emerald-200 text-emerald-900 text-xs p-3.5 rounded-lg flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <strong>Alineación metodológica y curricular garantizada:</strong> Esta unidad aplica <GlosarioTexto texto="gramática inductiva" onOpenTermino={onOpenTermino} /> con descubrimiento guiado, orienta el aprendizaje hacia una tarea comunicativa auténtica, integra la <GlosarioTexto texto="mediación" onOpenTermino={onOpenTermino} /> intercultural y respeta la regla de oro: <em>ningún código inexistente ha sido inventado</em> (los contenidos sin código validado llevan la especificación canónica).
                </div>
              </div>

              {/* Ficha técnica de la sesión */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 bg-slate-50 p-4 rounded-lg border border-slate-200 mt-4 text-xs">
                <div>
                  <span className="text-slate-400 font-medium block">NIVEL</span>
                  <strong className="text-slate-900">{unidad.nivel}</strong>
                </div>
                <div>
                  <span className="text-slate-400 font-medium block">DURACIÓN</span>
                  <strong className="text-slate-900">{unidad.duracion} minutos</strong>
                </div>
                <div>
                  <span className="text-slate-400 font-medium block">VARIEDAD</span>
                  <strong className="text-slate-900">{unidad.variedadNombre}</strong>
                </div>
                <div>
                  <span className="text-slate-400 font-medium block">MODALIDAD</span>
                  <strong className="text-slate-900 capitalize">{unidad.modalidad}</strong>
                </div>
                <div className="sm:col-span-2">
                  <span className="text-slate-400 font-medium block">DESTREZAS FOCO</span>
                  <strong className="text-slate-900">{unidad.destrezas.join(', ')}</strong>
                </div>
              </div>
            </div>

            {/* 1. Objetivos Comunicativos */}
            <section className="space-y-3">
              <h2 className="text-base font-bold text-slate-900 uppercase tracking-wide border-b border-slate-200 pb-1.5 flex items-center justify-between">
                <span>1. Objetivos Comunicativos y Descriptores de Mediación</span>
                <span className="text-xs font-normal text-slate-500 lowercase">Al finalizar la sesión</span>
              </h2>
              <ul className="list-disc pl-5 space-y-1.5 text-sm text-slate-700">
                {unidad.objetivosComunicativos.map((obj, i) => (
                  <li key={i}>
                    <GlosarioTexto texto={obj} onOpenTermino={onOpenTermino} />
                  </li>
                ))}
              </ul>
              <div className="bg-slate-50 border border-slate-200 p-3 rounded-lg text-xs space-y-1 text-slate-700">
                <span className="font-bold text-slate-900 block">Indicadores observables de logro:</span>
                {unidad.indicadoresLogro.map((ind, i) => (
                  <div key={i} className="text-slate-600">
                    <GlosarioTexto texto={ind} onOpenTermino={onOpenTermino} />
                  </div>
                ))}
              </div>
            </section>

            {/* 2. Contenidos Curriculares PCIC */}
            <section className="space-y-3">
              <h2 className="text-base font-bold text-slate-900 uppercase tracking-wide border-b border-slate-200 pb-1.5">
                2. Contenidos Curriculares (Inventarios PCIC)
              </h2>
              
              <div className="space-y-2.5 text-sm text-slate-700">
                <div>
                  <strong className="text-slate-900">2.1 Función comunicativa principal:</strong>{' '}
                  <GlosarioTexto texto={unidad.funcionComunicativa} onOpenTermino={onOpenTermino} />
                </div>

                <div>
                  <strong className="text-slate-900">2.2 Contenidos léxicos y colocaciones:</strong>
                  <p className="text-xs text-slate-600 mt-0.5">
                    <GlosarioTexto texto={unidad.lexicoColocaciones} onOpenTermino={onOpenTermino} />
                  </p>
                </div>

                <div>
                  <strong className="text-slate-900">2.3 Gramática funcional:</strong>
                  <p className="text-xs text-slate-600 mt-0.5">
                    <GlosarioTexto texto={unidad.gramaticaFuncional} onOpenTermino={onOpenTermino} />
                  </p>
                </div>

                <div>
                  <strong className="text-slate-900">2.4 Fonética, prosodia y ortografía:</strong>
                  <p className="text-xs text-slate-600 mt-0.5">
                    <GlosarioTexto texto={unidad.foneticaOrtografia} onOpenTermino={onOpenTermino} />
                  </p>
                </div>

                <div>
                  <strong className="text-slate-900">2.5 Géneros discursivos y textuales:</strong>
                  <p className="text-xs text-slate-600 mt-0.5">
                    <GlosarioTexto texto={unidad.generosDiscursivos} onOpenTermino={onOpenTermino} />
                  </p>
                </div>
              </div>
            </section>

            {/* 3. Dimensión Sociocultural */}
            <section className="space-y-3">
              <h2 className="text-base font-bold text-slate-900 uppercase tracking-wide border-b border-slate-200 pb-1.5">
                3. Dimensión Sociocultural e Intercultural
              </h2>
              <p className="text-sm text-slate-700">
                <GlosarioTexto texto={unidad.hechoCultural} onOpenTermino={onOpenTermino} />
              </p>
              <div className="bg-amber-50/80 border border-amber-200 text-amber-900 text-xs p-3 rounded-lg">
                <strong>Tratamiento pedagógico integrado:</strong> {unidad.tratamientoSociocultural}
              </div>
            </section>

            {/* 4. Estrategias */}
            <section className="space-y-3">
              <h2 className="text-base font-bold text-slate-900 uppercase tracking-wide border-b border-slate-200 pb-1.5">
                4. Estrategias y Procedimientos de Aprendizaje
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg space-y-1.5">
                  <strong className="text-slate-900 block font-semibold">Comunicación</strong>
                  <ul className="list-disc pl-4 space-y-1 text-slate-600">
                    {unidad.estrategiasComunicacion.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg space-y-1.5">
                  <strong className="text-slate-900 block font-semibold">Aprendizaje</strong>
                  <ul className="list-disc pl-4 space-y-1 text-slate-600">
                    {unidad.estrategiasAprendizaje.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg space-y-1.5">
                  <strong className="text-slate-900 block font-semibold">Mediación</strong>
                  <ul className="list-disc pl-4 space-y-1 text-slate-600">
                    {unidad.estrategiasMediacion.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* 5. Secuencia Didáctica por Tareas */}
            <section className="space-y-4">
              <h2 className="text-base font-bold text-slate-900 uppercase tracking-wide border-b border-slate-200 pb-1.5 flex items-center justify-between">
                <span>5. Secuencia Didáctica por Tareas y Agrupamientos</span>
                <span className="text-xs font-normal text-slate-500 lowercase">6 fases articuladas</span>
              </h2>

              <div className="border border-slate-200 rounded-lg divide-y divide-slate-200 overflow-hidden">
                {unidad.secuencia.map((fase) => {
                  const esTareaFinal = fase.id === 'fase_5';
                  return (
                    <div 
                      key={fase.id} 
                      className={`p-4 transition-colors ${
                        esTareaFinal ? 'bg-amber-50/40 border-l-4 border-l-[#9e1b32]' : 'bg-white'
                      }`}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-[#9e1b32]">Fase {fase.orden}</span>
                          <span className="text-slate-300">·</span>
                          <h3 className="text-sm font-bold text-slate-900">{fase.titulo}</h3>
                        </div>
                        <span className="text-xs font-mono font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                          {fase.minutos} min
                        </span>
                      </div>

                      <div className="text-xs font-medium text-sky-700 mb-2">
                        Agrupamiento: {fase.agrupamiento}
                      </div>

                      <p className="text-xs text-slate-700 leading-relaxed mb-3">
                        <GlosarioTexto texto={fase.descripcion} onOpenTermino={onOpenTermino} />
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] bg-slate-50 p-2.5 rounded border border-slate-200/80">
                        <div>
                          <strong className="text-slate-700">Rol docente:</strong>{' '}
                          <span className="text-slate-600">{fase.rolDocente}</span>
                        </div>
                        <div>
                          <strong className="text-slate-700">Materiales:</strong>{' '}
                          <span className="text-slate-600">{fase.materiales}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* 6. Evaluación Formativa y Rúbrica */}
            <section className="space-y-3">
              <h2 className="text-base font-bold text-slate-900 uppercase tracking-wide border-b border-slate-200 pb-1.5">
                6. Evaluación Formativa, Instrumentos y Evidencias
              </h2>
              <div className="overflow-x-auto border border-slate-200 rounded-lg">
                <table className="w-full text-left text-xs border-collapse">
                  <thead className="bg-slate-50 border-b border-slate-200 text-slate-900 font-bold">
                    <tr>
                      <th className="p-3">Criterio MCER / PCIC</th>
                      <th className="p-3">Evidencia Observable</th>
                      <th className="p-3">Instrumento de Evaluación</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    {unidad.rubricaEvaluacion.map((rub, i) => (
                      <tr key={i} className="hover:bg-slate-50/50">
                        <td className="p-3 font-medium text-slate-900">{rub.criterio}</td>
                        <td className="p-3">{rub.evidencia}</td>
                        <td className="p-3 italic text-slate-600">{rub.instrumento}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* 7. Atención a la diversidad (si existe) */}
            {unidad.medidasDiversidad && (
              <section className="space-y-3">
                <h2 className="text-base font-bold text-slate-900 uppercase tracking-wide border-b border-slate-200 pb-1.5">
                  7. Medidas de Atención a la Diversidad
                </h2>
                <div className="bg-sky-50/70 border border-sky-200 p-4 rounded-lg text-xs space-y-2 text-sky-950">
                  <div>
                    <strong className="text-sky-900">Perfil específico diagnosticado:</strong>{' '}
                    <span>{unidad.medidasDiversidad.perfil}</span>
                  </div>
                  <ul className="list-disc pl-4 space-y-1 text-sky-900">
                    {unidad.medidasDiversidad.adecuaciones.map((ade, i) => (
                      <li key={i}>{ade}</li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {/* 8. Recursos y 9. Tarea Casa */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <section className="space-y-2 p-4 bg-slate-50 border border-slate-200 rounded-lg text-xs">
                <h2 className="font-bold text-slate-900 uppercase tracking-wide">
                  8. Recursos y Materiales Didácticos
                </h2>
                <ul className="list-disc pl-4 space-y-1 text-slate-600">
                  {unidad.recursos.map((rec, i) => (
                    <li key={i}>{rec}</li>
                  ))}
                </ul>
              </section>

              <section className="space-y-2 p-4 bg-slate-50 border border-slate-200 rounded-lg text-xs">
                <h2 className="font-bold text-slate-900 uppercase tracking-wide">
                  9. Tarea Significativa Extramuros
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  {unidad.tareaCasa}
                </p>
              </section>
            </div>

            {/* 10. Checklist de rigor */}
            <section className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-2 text-xs">
              <h2 className="font-bold text-slate-900 uppercase tracking-wide">
                10. Autoverificación Pedagógica del Marco
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-slate-700">
                <div className="flex items-center gap-1.5 text-emerald-800">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Enfoque por tareas comunicativas</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-800">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Gramática inductiva con descubrimiento</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-800">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Destreza de mediación integrada</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-800">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Variedad ({unidad.variedadNombre})</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-800">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Sin invención de códigos PCIC</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-800">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Tiempos calibrados ({unidad.duracion} min)</span>
                </div>
              </div>
            </section>

          </div>
        )}

        {/* ============================================================== */}
        {/* VISTA 2: FICHA DEL ALUMNO (MATERIAL FOTOCOPIABLE) */}
        {/* ============================================================== */}
        {vistaActiva === 'ficha_alumno' && (
          <div className="space-y-6 max-w-3xl mx-auto">
            
            {/* Encabezado del alumno */}
            <div className="border-b-2 border-slate-900 pb-4">
              <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                <span>Español Lengua Extranjera (ELE) · Nivel {unidad.nivel}</span>
                <span>Variedad: {unidad.variedadNombre}</span>
              </div>
              <h1 className="text-xl md:text-2xl font-bold text-slate-900">
                Ficha de Trabajo: {unidad.tema}
              </h1>
              
              <div className="grid grid-cols-2 gap-4 mt-4 pt-3 border-t border-slate-200 text-xs text-slate-600">
                <div>
                  <strong>Nombre del estudiante:</strong> ____________________________________
                </div>
                <div>
                  <strong>Fecha:</strong> __________________
                </div>
              </div>
            </div>

            {/* Actividad 1: Texto auténtico e input comprensible */}
            <section className="space-y-3">
              <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
                1. Testimonio cotidiano: Lee con atención
              </h2>
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 text-sm italic leading-relaxed text-slate-800">
                {unidad.fichaAlumno.textoAutentico}
              </div>

              <div className="space-y-2 mt-3">
                <span className="text-xs font-bold text-slate-700 block">
                  Preguntas de comprensión inicial:
                </span>
                <ol className="list-decimal pl-5 space-y-2 text-xs text-slate-700">
                  {unidad.fichaAlumno.preguntasComprension.map((preg, i) => (
                    <li key={i}>
                      <span>{preg}</span>
                      <div className="h-6 border-b border-dashed border-slate-300 mt-1"></div>
                    </li>
                  ))}
                </ol>
              </div>
            </section>

            {/* Actividad 2: Descubrimiento Inductivo de la Gramática */}
            <section className="space-y-3 pt-4 border-t border-slate-200">
              <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
                2. ¡Tú eres el lingüista! Descubre la regla
              </h2>
              <p className="text-xs text-slate-600">
                {unidad.fichaAlumno.tablaInductiva.instruccion}
              </p>

              <div className="overflow-x-auto border border-slate-200 rounded-lg">
                <table className="w-full text-xs border-collapse">
                  <thead className="bg-slate-100 font-bold text-slate-900">
                    <tr>
                      {unidad.fichaAlumno.tablaInductiva.columnas.map((col, i) => (
                        <th key={i} className="p-2.5 text-left border-b border-slate-200">{col}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {unidad.fichaAlumno.tablaInductiva.filas.map((fila, i) => (
                      <tr key={i}>
                        <td className="p-2.5 font-medium text-slate-900">{fila.ejemplo}</td>
                        <td className="p-2.5 text-slate-600">{fila.analisis}</td>
                        <td className="p-2.5 font-semibold text-sky-900">{fila.reglaDeducida}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-900">
                <strong>Conclusión en pareja:</strong> Los pronombres reflexivos van <strong>antes</strong> del verbo conjugado en presente.
              </div>
            </section>

            {/* Actividad 3: Interacción Oral y Mediación de Pares */}
            <section className="space-y-3 pt-4 border-t border-slate-200">
              <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
                3. Interacción en parejas: Vacío de información y mediación
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-sky-50 border border-sky-200 rounded-lg">
                  <strong className="text-sky-900 block mb-1">Tarjeta Rol A (Estudiante local)</strong>
                  <p className="text-sky-800">{unidad.fichaAlumno.actividadInteraccion.rolA}</p>
                </div>
                <div className="p-3 bg-purple-50 border border-purple-200 rounded-lg">
                  <strong className="text-purple-900 block mb-1">Tarjeta Rol B (Estudiante visitante)</strong>
                  <p className="text-purple-800">{unidad.fichaAlumno.actividadInteraccion.rolB}</p>
                </div>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-700">
                <strong>Reto de mediación:</strong> {unidad.fichaAlumno.actividadInteraccion.retoMediacion}
              </div>
            </section>

            {/* Actividad 4: Tarea Final */}
            <section className="space-y-2 pt-4 border-t border-slate-200">
              <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
                4. Tarea Final: Agenda de Convivencia e Intercambio
              </h2>
              <p className="text-xs text-slate-700 bg-rose-50/50 p-3 rounded-lg border border-rose-200/60 leading-relaxed">
                {unidad.fichaAlumno.tareaFinalConsigna}
              </p>
            </section>

            {/* Actividad 5: Semáforo de Autoevaluación */}
            <section className="space-y-2 pt-4 border-t border-slate-200">
              <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
                5. Semáforo de autoevaluación ('Puedo...')
              </h2>
              <div className="space-y-1.5 text-xs text-slate-700">
                {unidad.fichaAlumno.semaforoAutoevaluacion.map((des, i) => (
                  <div key={i} className="flex items-center justify-between p-2 bg-slate-50 rounded border border-slate-200">
                    <span className="flex-1 mr-4">{des}</span>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-emerald-700 font-semibold cursor-pointer">● Verde</span>
                      <span className="text-amber-600 font-semibold cursor-pointer">● Amarillo</span>
                      <span className="text-rose-600 font-semibold cursor-pointer">● Rojo</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </div>
        )}

        {/* ============================================================== */}
        {/* VISTA 3: GUÍA RÁPIDA Y CRONOGRAMA DEL DOCENTE */}
        {/* ============================================================== */}
        {vistaActiva === 'guia_docente' && (
          <div className="space-y-6">
            <div className="border-b border-slate-200 pb-4">
              <h1 className="text-xl font-bold text-slate-900 font-editorial mb-1">
                Guía Rápida de Aplicación en el Aula
              </h1>
              <p className="text-xs text-slate-500">
                Temporización exacta y directrices metodológicas paso a paso para el docente ({unidad.duracion} min)
              </p>
            </div>

            {/* Consejos clave */}
            <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg text-xs space-y-1.5 text-amber-950">
              <strong className="block text-amber-900 font-semibold">Consejos metodológicos esenciales:</strong>
              <p className="whitespace-pre-line leading-relaxed">{unidad.notasDocente}</p>
            </div>

            {/* Timeline de la clase */}
            <div className="space-y-3">
              <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
                Línea de tiempo de la sesión
              </h2>

              <div className="space-y-3">
                {unidad.secuencia.map((fase, i) => (
                  <div key={fase.id} className="p-3.5 border border-slate-200 rounded-lg bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#9e1b32] text-white flex items-center justify-center font-bold text-sm shrink-0">
                        {fase.orden}
                      </div>
                      <div>
                        <div className="font-bold text-sm text-slate-900">{fase.titulo}</div>
                        <div className="text-xs text-slate-500 mt-0.5">
                          {fase.agrupamiento} · Objetivo: {fase.objetivoFase}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="font-mono text-xs font-semibold px-2.5 py-1 bg-slate-100 rounded border border-slate-200 text-slate-700">
                        {fase.minutos} minutos
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Botón de acción para tareas */}
            {onCrearTareasDocente && (
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-between">
                <div>
                  <h3 className="text-xs font-bold text-slate-900">¿Quieres organizar la preparación de esta clase?</h3>
                  <p className="text-xs text-slate-500">Crea recordatorios de fotocopias, audios y rúbricas en el Gestor de Tareas.</p>
                </div>
                <button
                  onClick={onCrearTareasDocente}
                  className="px-3.5 py-1.5 bg-[#9e1b32] hover:bg-[#7d1326] text-white text-xs font-semibold rounded-lg transition-colors"
                >
                  Abrir Gestor de Tareas
                </button>
              </div>
            )}

          </div>
        )}

      </div>
    </div>
  );
};
