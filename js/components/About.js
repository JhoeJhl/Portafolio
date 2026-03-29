export function About() {
  return `
    <section
      id="sobre-mi"
      class="border-t border-slate-200/50 py-24 dark:border-slate-800/50"
    >
      <div class="mx-auto max-w-6xl px-6">
        <h2 class="text-3xl font-bold tracking-tight">Sobre mí</h2>
        <p
          class="mt-6 max-w-3xl text-lg text-slate-600 dark:text-slate-400 leading-relaxed"
        >
          Soy estudiante de la carrera Ingeniería de Sistemas, soy autodidacta
          enfocado en el desarrollo web fullstack. Me gusta crear interfaces
          limpias, trabajar con buenas prácticas y mejorar cada proyecto con
          detalle.
        </p>

        <div class="mt-12 grid gap-6 md:grid-cols-3">
          <div
            class="group rounded-3xl border border-slate-200 p-8 hover:bg-white hover:shadow-xl transition-all dark:border-slate-800 dark:hover:bg-slate-900/50"
          >
            <p
              class="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400"
            >
              Fortalezas
            </p>
            <ul
              class="mt-6 space-y-3 text-sm font-medium opacity-80 group-hover:opacity-100"
            >
              <li>• Aprendizaje rápido</li>
              <li>• Orden y consistencia</li>
              <li>• Trabajo en equipo</li>
            </ul>
          </div>
          <div
            class="group rounded-3xl border border-slate-200 p-8 hover:bg-white hover:shadow-xl transition-all dark:border-slate-800 dark:hover:bg-slate-900/50"
          >
            <p
              class="text-sm font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400"
            >
              En progreso
            </p>
            <ul
              class="mt-6 space-y-3 text-sm font-medium opacity-80 group-hover:opacity-100"
            >
              <li>• Desarrollo de Software</li>
              <li>• Docker</li>
              <li>• N8N</li>
            </ul>
          </div>
          <div
            class="group rounded-3xl border border-slate-200 p-8 hover:bg-white hover:shadow-xl transition-all dark:border-slate-800 dark:hover:bg-slate-900/50"
          >
            <p
              class="text-sm font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-400"
            >
              Intereses
            </p>
            <ul
              class="mt-6 space-y-3 text-sm font-medium opacity-80 group-hover:opacity-100"
            >
              <li>• UI/UX simple</li>
              <li>• Proyectos reales</li>
              <li>• Buenas prácticas</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `;
}