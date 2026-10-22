import React from 'react';
import { GLOSARIO_TERMINOS, buscarTerminoGlosario } from '../data/glossaryData';
import { GlosarioTermino } from '../types';

interface GlosarioTextoProps {
  texto: string;
  onOpenTermino: (termino: GlosarioTermino) => void;
  className?: string;
}

// Regex matching common PCIC key terms
const TERMINOS_REGEX = /\b(PCIC|MCER|enfoque por tareas|gramática inductiva|mediación(?: lingüística| oral| escrita)?|vacío de información|andamiaje|input comprensible|colocación(?:es)?(?: léxicas)?|voseo|descriptores 'puedo\.\.\.'|evaluación formativa|práctica controlada|metacognición|autorregulación|fosilización(?: lingüística| fosilizables)?|variedad geolectal|atención a la diversidad)\b/gi;

export const GlosarioTexto: React.FC<GlosarioTextoProps> = ({
  texto,
  onOpenTermino,
  className = ''
}) => {
  if (!texto) return null;

  const partes: React.ReactNode[] = [];
  let ultimoIndice = 0;
  let match: RegExpExecArray | null;

  // Reset regex index
  TERMINOS_REGEX.lastIndex = 0;

  while ((match = TERMINOS_REGEX.exec(texto)) !== null) {
    const textoAntes = texto.slice(ultimoIndice, match.index);
    if (textoAntes) {
      partes.push(textoAntes);
    }

    const terminoEncontrado = match[0];
    const terminoObj = buscarTerminoGlosario(terminoEncontrado);

    if (terminoObj) {
      partes.push(
        <button
          key={`term-${match.index}`}
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onOpenTermino(terminoObj);
          }}
          className="inline font-medium text-[#9e1b32] hover:text-[#7d1326] underline decoration-dotted decoration-[#9e1b32]/50 hover:decoration-solid underline-offset-3 cursor-pointer transition-colors"
          title={`Haz clic para ver la definición oficial de "${terminoObj.termino}" en el PCIC`}
        >
          {terminoEncontrado}
        </button>
      );
    } else {
      partes.push(terminoEncontrado);
    }

    ultimoIndice = match.index + terminoEncontrado.length;
  }

  const resto = texto.slice(ultimoIndice);
  if (resto) {
    partes.push(resto);
  }

  return <span className={className}>{partes}</span>;
};
