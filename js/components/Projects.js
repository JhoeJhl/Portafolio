export function Projects() {
  return `
    <section
      id="proyectos"
      class="relative py-20 border-t border-slate-200/50 dark:border-slate-800/50 overflow-hidden"
    >
      <!-- Background Ambient Glow -->
      <div class="glow-blob w-[500px] h-[500px] bg-indigo-500/10 dark:bg-indigo-600/10 bottom-0 left-0"></div>

      <div class="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <!-- Section Title -->
        <div class="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <h2 class="text-3xl sm:text-5xl font-black font-heading tracking-tight text-slate-900 dark:text-white">
            Proyectos <span class="gradient-text">Destacados</span>
          </h2>
          <p class="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Proyectos desarrollados con Laravel, Vue.js, Inertia.js, Inteligencia Artificial y bases de datos relacionales.
          </p>
        </div>

        <!-- Contenedor vacante para nuevos proyectos -->
        <div id="projectsGrid" class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        </div>

        <!-- Botón para ver más proyectos -->
        <div class="mt-14 text-center">
          <button
            id="openMoreProjectsBtn"
            class="px-8 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-xl shadow-indigo-600/25 hover:shadow-indigo-600/40 transition-all hover:scale-105 active:scale-95 inline-flex items-center gap-2"
          >
            <span>Ver más proyectos</span>
            <i class="fa-solid fa-arrow-right text-xs"></i>
          </button>
        </div>
      </div>
    </section>

    <!-- Modal para proyectos adicionales -->
    <div
      id="moreProjectsModal"
      class="hidden fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto"
    >
      <div class="relative w-full max-w-5xl bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-300 dark:border-slate-800 shadow-2xl space-y-6 my-8 max-h-[90vh] overflow-y-auto">
        <div class="flex items-center justify-between pb-6 border-b border-slate-200 dark:border-slate-800 sticky top-0 bg-white dark:bg-slate-900 z-10">
          <div>
            <h3 class="text-2xl font-black font-heading text-slate-900 dark:text-white">
              Catálogo de Proyectos
            </h3>
            <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Explora el listado completo de soluciones web y aplicaciones desarrolladas.
            </p>
          </div>
          <button
            id="closeMoreProjectsBtn"
            class="h-10 w-10 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 font-bold flex items-center justify-center transition-all"
            title="Cerrar"
          >
            <i class="fa-solid fa-xmark text-lg"></i>
          </button>
        </div>

        <div id="modalProjectsGrid" class="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
        </div>
      </div>
    </div>
  `;
}