import { TareaDocente, UnidadDidactica } from '../types';

export function exportarAWord(unidad: UnidadDidactica, elementoRef?: HTMLElement | null): void {
  const contenidoHtml = elementoRef 
    ? elementoRef.innerHTML 
    : document.querySelector('.lesson-plan-doc')?.innerHTML;

  if (!contenidoHtml) {
    alert("No se encontró el contenido del plan de clase para exportar.");
    return;
  }

  const documentoCompleto = `
    <!DOCTYPE html>
    <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
    <head>
      <meta charset='utf-8'>
      <title>${unidad.tema} - Plan ELE ${unidad.nivel}</title>
      <style>
        body { font-family: Calibri, 'Segoe UI', Arial, sans-serif; font-size: 11pt; line-height: 1.5; color: #1e293b; }
        h1, h2, h3, h4 { color: #9e1b32; font-family: Calibri, 'Segoe UI', Arial, sans-serif; }
        h1 { font-size: 20pt; border-bottom: 2pt solid #9e1b32; padding-bottom: 6pt; }
        h2 { font-size: 15pt; border-bottom: 1pt solid #cbd5e1; padding-bottom: 4pt; margin-top: 18pt; }
        h3 { font-size: 12pt; color: #334155; margin-top: 12pt; }
        table { border-collapse: collapse; width: 100%; margin-top: 10pt; margin-bottom: 12pt; }
        th, td { border: 1pt solid #cbd5e1; padding: 6pt 8pt; text-align: left; font-size: 10pt; }
        th { background-color: #f1f5f9; color: #0f172a; font-weight: bold; }
        .badge { background: #f8fafc; border: 1pt solid #cbd5e1; padding: 2pt 6pt; font-size: 9pt; }
        .notice-box { background-color: #f0fdf4; border: 1pt solid #bbf7d0; padding: 8pt 10pt; margin: 10pt 0; color: #166534; }
        .meta-grid { background-color: #f8fafc; border: 1pt solid #e2e8f0; padding: 8pt; margin-bottom: 15pt; }
        .task-step { border: 1pt solid #e2e8f0; padding: 10pt; margin-bottom: 10pt; }
      </style>
    </head>
    <body>
      <h1>Unidad Didáctica ELE: ${unidad.tema}</h1>
      <p><strong>Nivel MCER:</strong> ${unidad.nivel} · <strong>Variedad:</strong> ${unidad.variedadNombre} · <strong>Duración:</strong> ${unidad.duracion} min · <strong>Modalidad:</strong> ${unidad.modalidad}</p>
      <hr style="border: 1px solid #9e1b32;" />
      ${contenidoHtml}
    </body>
    </html>
  `;

  const blob = new Blob(['\ufeff', documentoCompleto], {
    type: 'application/msword;charset=utf-8'
  });

  const nombreLimpio = unidad.tema
    .toLowerCase()
    .replace(/[^a-z0-9áéíóúñ]+/gi, '_')
    .slice(0, 30);
  const enlace = document.createElement('a');
  enlace.href = URL.createObjectURL(blob);
  enlace.download = `Plan_ELE_${unidad.nivel}_${nombreLimpio}.doc`;
  document.body.appendChild(enlace);
  enlace.click();
  document.body.removeChild(enlace);
  URL.revokeObjectURL(enlace.href);
}

export function imprimirPDF(): void {
  window.print();
}

export async function copiarAlPortapapeles(unidad: UnidadDidactica): Promise<boolean> {
  const elemento = document.querySelector('.lesson-plan-doc');
  const textoParaCopiar = elemento instanceof HTMLElement 
    ? elemento.innerText 
    : `${unidad.tema}\nNivel: ${unidad.nivel} (${unidad.duracion} min)\nObjetivos:\n${unidad.objetivosComunicativos.join('\n')}`;

  try {
    await navigator.clipboard.writeText(textoParaCopiar);
    return true;
  } catch (err) {
    console.error("Fallo al copiar:", err);
    return false;
  }
}

// Persistencia en LocalStorage de Tareas
const TASKS_STORAGE_KEY = 'ele_planner_tasks_v1';

export function cargarTareasGuardadas(): TareaDocente[] {
  try {
    const raw = localStorage.getItem(TASKS_STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (e) {
    console.error("Error al cargar tareas:", e);
    return [];
  }
}

export function guardarTareas(tareas: TareaDocente[]): void {
  try {
    localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tareas));
  } catch (e) {
    console.error("Error al guardar tareas:", e);
  }
}

// Persistencia de Unidades Guardadas
const UNITS_STORAGE_KEY = 'ele_planner_saved_units_v1';

export function cargarUnidadesGuardadas(): UnidadDidactica[] {
  try {
    const raw = localStorage.getItem(UNITS_STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (e) {
    console.error("Error al cargar unidades:", e);
    return [];
  }
}

export function guardarUnidadEnColeccion(unidad: UnidadDidactica): void {
  try {
    const existentes = cargarUnidadesGuardadas();
    const filtradas = existentes.filter(u => u.id !== unidad.id);
    localStorage.setItem(UNITS_STORAGE_KEY, JSON.stringify([unidad, ...filtradas]));
  } catch (e) {
    console.error("Error al guardar unidad:", e);
  }
}
