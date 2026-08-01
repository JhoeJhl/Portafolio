export function Projects() {
  return `
    <section
      id="proyectos"
      class="relative py-24 border-t border-slate-200/50 dark:border-slate-800/50 overflow-hidden"
    >
      <!-- Background Ambient Blob -->
      <div class="glow-blob w-96 h-96 bg-indigo-500/15 dark:bg-indigo-500/15 bottom-10 left-10"></div>

      <div class="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <!-- Section Heading -->
        <div class="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-indigo-500/30 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-widest">
            <i class="fa-solid fa-folder-open text-xs"></i>
            <span>Portafolio Seleccionado</span>
          </div>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight">
            Proyectos <span class="gradient-text">destacados</span>
          </h2>
          <p class="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Una selección de aplicaciones web que he desarrollado combinando Laravel, Vue.js, Inteligencia Artificial y automatización.
          </p>
        </div>

        <!-- Filter Tabs -->
        <div class="flex flex-wrap items-center justify-center gap-2 mb-14" id="projectFilters">
          <button data-filter="all" class="filter-btn active px-5 py-2.5 rounded-xl text-xs font-bold transition-all bg-indigo-600 text-white shadow-md shadow-indigo-500/20">
            Todos
          </button>
          <button data-filter="laravel" class="filter-btn px-5 py-2.5 rounded-xl text-xs font-bold transition-all glass-panel text-slate-700 dark:text-slate-300 hover:text-indigo-600">
            Laravel & Vue
          </button>
          <button data-filter="ai" class="filter-btn px-5 py-2.5 rounded-xl text-xs font-bold transition-all glass-panel text-slate-700 dark:text-slate-300 hover:text-indigo-600">
            IA & Automatización
          </button>
        </div>

        <!-- Projects Grid -->
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <!-- Project Card 1 -->
          <article
            data-category="laravel ai"
            class="project-card group flex flex-col rounded-3xl glass-card border border-slate-200/80 dark:border-slate-800/80 overflow-hidden"
          >
            <!-- Card Visual Banner -->
            <div class="relative h-48 w-full bg-gradient-to-br from-indigo-600 via-purple-600 to-slate-900 p-6 flex flex-col justify-between overflow-hidden">
              <div class="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
              <div class="relative z-10 flex justify-between items-start">
                <span class="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider">
                  <i class="fa-solid fa-calendar-days mr-1"></i> Productividad
                </span>
                <span class="h-8 w-8 rounded-full bg-white/10 backdrop-blur-md text-white flex items-center justify-center text-xs group-hover:scale-110 transition-transform">
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </span>
              </div>
              <div class="relative z-10">
                <span class="text-xs font-mono text-indigo-200 uppercase tracking-widest block font-bold">App Web</span>
                <h3 class="text-xl font-bold font-heading text-white">Sistema de Agenda con IA</h3>
              </div>
            </div>

            <!-- Content Body -->
            <div class="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
              <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Sistema inteligente de planificación de tareas, reuniones y hábitos integrado con un calendario interactivo asistido por IA para optimizar la gestión del tiempo.
              </p>

              <div>
                <p class="text-[10px] font-black uppercase tracking-wider text-slate-400 mb-3">Tecnologías principales</p>
                <div class="flex flex-wrap gap-1.5">
                  <span class="px-2.5 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 text-xs font-bold border border-indigo-100 dark:border-indigo-900/40">Laravel 12</span>
                  <span class="px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 text-xs font-bold border border-emerald-100 dark:border-emerald-900/40">Vue.js</span>
                  <span class="px-2.5 py-1 rounded-lg bg-cyan-50 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 text-xs font-bold border border-cyan-100 dark:border-cyan-900/40">OpenAI API</span>
                  <span class="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold">TailwindCSS</span>
                </div>
              </div>

              <!-- Links Foot -->
              <div class="pt-4 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-between">
                <a class="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 flex items-center gap-1.5 transition-colors" href="#">
                  <span>Ver Proyecto</span>
                  <i class="fa-solid fa-chevron-right text-[10px]"></i>
                </a>
                <div class="flex items-center gap-3">
                  <a class="text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm transition-colors" href="#" title="Código fuente">
                    <i class="fa-brands fa-github"></i>
                  </a>
                  <a class="text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm transition-colors" href="#" title="Demo en vivo">
                    <i class="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                  </a>
                </div>
              </div>
            </div>
          </article>

          <!-- Project Card 2 -->
          <article
            data-category="laravel ai"
            class="project-card group flex flex-col rounded-3xl glass-card border border-slate-200/80 dark:border-slate-800/80 overflow-hidden"
          >
            <!-- Card Visual Banner -->
            <div class="relative h-48 w-full bg-gradient-to-br from-cyan-600 via-blue-600 to-indigo-900 p-6 flex flex-col justify-between overflow-hidden">
              <div class="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
              <div class="relative z-10 flex justify-between items-start">
                <span class="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider">
                  <i class="fa-solid fa-graduation-cap mr-1"></i> Educación & IA
                </span>
                <span class="h-8 w-8 rounded-full bg-white/10 backdrop-blur-md text-white flex items-center justify-center text-xs group-hover:scale-110 transition-transform">
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </span>
              </div>
              <div class="relative z-10">
                <span class="text-xs font-mono text-cyan-200 uppercase tracking-widest block font-bold">Gamificación</span>
                <h3 class="text-xl font-bold font-heading text-white">Generador Automático de Tareas</h3>
              </div>
            </div>

            <!-- Content Body -->
            <div class="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
              <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Plataforma proactiva que genera rutinas de aprendizaje y cuestionarios automáticos con quizzes interactivos, sistema de rachas de días y retroalimentación en tiempo real.
              </p>

              <div>
                <p class="text-[10px] font-black uppercase tracking-wider text-slate-400 mb-3">Tecnologías principales</p>
                <div class="flex flex-wrap gap-1.5">
                  <span class="px-2.5 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 text-xs font-bold border border-indigo-100 dark:border-indigo-900/40">Laravel 12</span>
                  <span class="px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 text-xs font-bold border border-emerald-100 dark:border-emerald-900/40">Vue.js</span>
                  <span class="px-2.5 py-1 rounded-lg bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 text-xs font-bold border border-purple-100 dark:border-purple-900/40">OpenAI API</span>
                  <span class="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold">Tailwind</span>
                </div>
              </div>

              <!-- Links Foot -->
              <div class="pt-4 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-between">
                <a class="text-xs font-bold text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 flex items-center gap-1.5 transition-colors" href="#">
                  <span>Ver Proyecto</span>
                  <i class="fa-solid fa-chevron-right text-[10px]"></i>
                </a>
                <div class="flex items-center gap-3">
                  <a class="text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm transition-colors" href="#" title="Código fuente">
                    <i class="fa-brands fa-github"></i>
                  </a>
                  <a class="text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm transition-colors" href="#" title="Demo en vivo">
                    <i class="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                  </a>
                </div>
              </div>
            </div>
          </article>

          <!-- Project Card 3 -->
          <article
            data-category="ai"
            class="project-card group flex flex-col rounded-3xl glass-card border border-slate-200/80 dark:border-slate-800/80 overflow-hidden"
          >
            <!-- Card Visual Banner -->
            <div class="relative h-48 w-full bg-gradient-to-br from-purple-600 via-indigo-700 to-slate-950 p-6 flex flex-col justify-between overflow-hidden">
              <div class="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
              <div class="relative z-10 flex justify-between items-start">
                <span class="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider">
                  <i class="fa-solid fa-diagram-project mr-1"></i> Automatización & Workflows
                </span>
                <span class="h-8 w-8 rounded-full bg-white/10 backdrop-blur-md text-white flex items-center justify-center text-xs group-hover:scale-110 transition-transform">
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </span>
              </div>
              <div class="relative z-10">
                <span class="text-xs font-mono text-purple-200 uppercase tracking-widest block font-bold">Plataforma SaaS</span>
                <h3 class="text-xl font-bold font-heading text-white">Automatización Inteligente n8n + IA</h3>
              </div>
            </div>

            <!-- Content Body -->
            <div class="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
              <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Aplicación web que permite a usuarios crear y ejecutar flujos de trabajo automatizados conectando servicios, correos, reportes y triggers mediante n8n y OpenAI.
              </p>

              <div>
                <p class="text-[10px] font-black uppercase tracking-wider text-slate-400 mb-3">Tecnologías principales</p>
                <div class="flex flex-wrap gap-1.5">
                  <span class="px-2.5 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 text-xs font-bold border border-indigo-100 dark:border-indigo-900/40">Laravel 12</span>
                  <span class="px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 text-xs font-bold border border-emerald-100 dark:border-emerald-900/40">Vue.js</span>
                  <span class="px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 text-xs font-bold border border-blue-100 dark:border-blue-900/40">PostgreSQL</span>
                  <span class="px-2.5 py-1 rounded-lg bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 text-xs font-bold border border-rose-100 dark:border-rose-900/40">n8n</span>
                </div>
              </div>

              <!-- Links Foot -->
              <div class="pt-4 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-between">
                <a class="text-xs font-bold text-purple-600 dark:text-purple-400 hover:text-purple-500 flex items-center gap-1.5 transition-colors" href="#">
                  <span>Ver Proyecto</span>
                  <i class="fa-solid fa-chevron-right text-[10px]"></i>
                </a>
                <div class="flex items-center gap-3">
                  <a class="text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm transition-colors" href="#" title="Código fuente">
                    <i class="fa-brands fa-github"></i>
                  </a>
                  <a class="text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm transition-colors" href="#" title="Demo en vivo">
                    <i class="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  `;
}