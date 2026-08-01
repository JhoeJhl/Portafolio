export function Projects() {
  return `
    <section
      id="proyectos"
      class="relative py-24 border-t border-slate-200/50 dark:border-slate-800/50 overflow-hidden"
    >
      <!-- Background Ambient Glow -->
      <div class="glow-blob w-[500px] h-[500px] bg-indigo-500/10 dark:bg-indigo-600/10 bottom-0 left-0"></div>

      <div class="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <!-- Section Title -->
        <div class="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <h2 class="text-3xl sm:text-5xl font-black font-heading tracking-tight text-slate-900 dark:text-white">
            Mis <span class="gradient-text">Proyectos</span>
          </h2>
          <p class="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Una colección de trabajos desarrollados con diversas tecnologías web, desde aplicaciones con una sola tecnología hasta plataformas web integradas.
          </p>
        </div>

        <!-- Filter Buttons -->
        <div class="flex flex-wrap items-center justify-center gap-2 mb-14" id="projectFilters">
          <button data-filter="all" class="filter-btn active px-5 py-2.5 rounded-xl text-xs font-bold transition-all bg-indigo-600 text-white shadow-md shadow-indigo-500/20">
            Todos
          </button>
          <button data-filter="frontend" class="filter-btn px-5 py-2.5 rounded-xl text-xs font-bold transition-all glass-panel text-slate-700 dark:text-slate-300 hover:text-indigo-600">
            HTML / CSS / JS
          </button>
          <button data-filter="php" class="filter-btn px-5 py-2.5 rounded-xl text-xs font-bold transition-all glass-panel text-slate-700 dark:text-slate-300 hover:text-indigo-600">
            PHP / MySQL
          </button>
          <button data-filter="laravel" class="filter-btn px-5 py-2.5 rounded-xl text-xs font-bold transition-all glass-panel text-slate-700 dark:text-slate-300 hover:text-indigo-600">
            Laravel & Vue
          </button>
          <button data-filter="ai" class="filter-btn px-5 py-2.5 rounded-xl text-xs font-bold transition-all glass-panel text-slate-700 dark:text-slate-300 hover:text-indigo-600">
            IA & Automatización
          </button>
        </div>

        <!-- Grid of Projects -->
        <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <!-- Project 1: HTML / CSS -->
          <article
            data-category="frontend"
            class="project-card group flex flex-col rounded-3xl glass-card overflow-hidden border border-slate-200/80 dark:border-slate-800"
          >
            <div class="h-44 w-full bg-gradient-to-br from-orange-500 to-amber-600 p-6 flex flex-col justify-between relative overflow-hidden">
              <span class="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white/20 text-white backdrop-blur-md self-start">
                Maquetación Web
              </span>
              <h3 class="text-xl font-bold font-heading text-white">Landing Page Institucional</h3>
            </div>
            <div class="p-6 flex-1 flex flex-col justify-between space-y-6">
              <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Diseño y maquetación web responsiva para presentación corporativa, optimizada para SEO, velocidad de carga y adaptabilidad en dispositivos móviles.
              </p>
              <div>
                <span class="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-2">Tecnologías</span>
                <div class="flex flex-wrap gap-1.5">
                  <span class="px-2.5 py-1 rounded-lg bg-orange-100 dark:bg-orange-950/50 text-orange-600 dark:text-orange-400 text-xs font-bold">HTML5</span>
                  <span class="px-2.5 py-1 rounded-lg bg-blue-100 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 text-xs font-bold">CSS3</span>
                </div>
              </div>
              <div class="pt-4 border-t border-slate-200/60 dark:border-slate-800 flex justify-between items-center text-xs font-bold">
                <a class="text-indigo-600 dark:text-indigo-400 hover:underline" href="#">Ver Demo</a>
                <a class="text-slate-500 hover:text-slate-900 dark:hover:text-white" href="#">Código GitHub</a>
              </div>
            </div>
          </article>

          <!-- Project 2: JavaScript -->
          <article
            data-category="frontend"
            class="project-card group flex flex-col rounded-3xl glass-card overflow-hidden border border-slate-200/80 dark:border-slate-800"
          >
            <div class="h-44 w-full bg-gradient-to-br from-amber-500 to-yellow-600 p-6 flex flex-col justify-between relative overflow-hidden">
              <span class="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white/20 text-white backdrop-blur-md self-start">
                Lógica Cliente
              </span>
              <h3 class="text-xl font-bold font-heading text-white">Calculadora Web Interactiva</h3>
            </div>
            <div class="p-6 flex-1 flex flex-col justify-between space-y-6">
              <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Aplicación interactiva desarrollada en Vanilla JS para realizar presupuestos de desarrollo web dinámicos en tiempo real con exportación de resultados.
              </p>
              <div>
                <span class="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-2">Tecnologías</span>
                <div class="flex flex-wrap gap-1.5">
                  <span class="px-2.5 py-1 rounded-lg bg-amber-100 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 text-xs font-bold">JavaScript</span>
                </div>
              </div>
              <div class="pt-4 border-t border-slate-200/60 dark:border-slate-800 flex justify-between items-center text-xs font-bold">
                <a class="text-indigo-600 dark:text-indigo-400 hover:underline" href="#">Ver Demo</a>
                <a class="text-slate-500 hover:text-slate-900 dark:hover:text-white" href="#">Código GitHub</a>
              </div>
            </div>
          </article>

          <!-- Project 3: PHP & MySQL -->
          <article
            data-category="php"
            class="project-card group flex flex-col rounded-3xl glass-card overflow-hidden border border-slate-200/80 dark:border-slate-800"
          >
            <div class="h-44 w-full bg-gradient-to-br from-blue-600 to-indigo-700 p-6 flex flex-col justify-between relative overflow-hidden">
              <span class="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white/20 text-white backdrop-blur-md self-start">
                Sistema Base de Datos
              </span>
              <h3 class="text-xl font-bold font-heading text-white">CRUD de Gestión de Usuarios</h3>
            </div>
            <div class="p-6 flex-1 flex flex-col justify-between space-y-6">
              <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Sistema backend dinámico para el registro, consulta, modificación y eliminación de usuarios con gestión de roles e integración de base de datos relacional.
              </p>
              <div>
                <span class="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-2">Tecnologías</span>
                <div class="flex flex-wrap gap-1.5">
                  <span class="px-2.5 py-1 rounded-lg bg-indigo-100 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 text-xs font-bold">PHP</span>
                  <span class="px-2.5 py-1 rounded-lg bg-blue-100 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 text-xs font-bold">MySQL</span>
                </div>
              </div>
              <div class="pt-4 border-t border-slate-200/60 dark:border-slate-800 flex justify-between items-center text-xs font-bold">
                <a class="text-indigo-600 dark:text-indigo-400 hover:underline" href="#">Ver Demo</a>
                <a class="text-slate-500 hover:text-slate-900 dark:hover:text-white" href="#">Código GitHub</a>
              </div>
            </div>
          </article>

          <!-- Project 4: Vue.js Dashboard -->
          <article
            data-category="laravel"
            class="project-card group flex flex-col rounded-3xl glass-card overflow-hidden border border-slate-200/80 dark:border-slate-800"
          >
            <div class="h-44 w-full bg-gradient-to-br from-emerald-500 to-teal-700 p-6 flex flex-col justify-between relative overflow-hidden">
              <span class="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white/20 text-white backdrop-blur-md self-start">
                Dashboard SPA
              </span>
              <h3 class="text-xl font-bold font-heading text-white">Panel Interactivo Vue</h3>
            </div>
            <div class="p-6 flex-1 flex flex-col justify-between space-y-6">
              <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Panel administrativo reactivo con interfaz fluida para la visualización de métricas en tiempo real, consumo de API REST e interfaz de componentes reutilizables.
              </p>
              <div>
                <span class="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-2">Tecnologías</span>
                <div class="flex flex-wrap gap-1.5">
                  <span class="px-2.5 py-1 rounded-lg bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 text-xs font-bold">Vue.js</span>
                  <span class="px-2.5 py-1 rounded-lg bg-amber-100 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 text-xs font-bold">JavaScript</span>
                </div>
              </div>
              <div class="pt-4 border-t border-slate-200/60 dark:border-slate-800 flex justify-between items-center text-xs font-bold">
                <a class="text-indigo-600 dark:text-indigo-400 hover:underline" href="#">Ver Demo</a>
                <a class="text-slate-500 hover:text-slate-900 dark:hover:text-white" href="#">Código GitHub</a>
              </div>
            </div>
          </article>

          <!-- Project 5: Laravel + Vue + IA -->
          <article
            data-category="laravel ai"
            class="project-card group flex flex-col rounded-3xl glass-card overflow-hidden border border-slate-200/80 dark:border-slate-800"
          >
            <div class="h-44 w-full bg-gradient-to-br from-indigo-600 via-purple-600 to-slate-900 p-6 flex flex-col justify-between relative overflow-hidden">
              <span class="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white/20 text-white backdrop-blur-md self-start">
                Productividad & IA
              </span>
              <h3 class="text-xl font-bold font-heading text-white">Sistema de Agenda con IA</h3>
            </div>
            <div class="p-6 flex-1 flex flex-col justify-between space-y-6">
              <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Sistema inteligente de planificación de tareas y reuniones integrado con un calendario interactivo asistido por inteligencia artificial para organizar hábitos.
              </p>
              <div>
                <span class="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-2">Tecnologías</span>
                <div class="flex flex-wrap gap-1.5">
                  <span class="px-2.5 py-1 rounded-lg bg-indigo-100 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 text-xs font-bold">Laravel 12</span>
                  <span class="px-2.5 py-1 rounded-lg bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 text-xs font-bold">Vue.js</span>
                  <span class="px-2.5 py-1 rounded-lg bg-cyan-100 dark:bg-cyan-950/50 text-cyan-600 dark:text-cyan-400 text-xs font-bold">OpenAI API</span>
                </div>
              </div>
              <div class="pt-4 border-t border-slate-200/60 dark:border-slate-800 flex justify-between items-center text-xs font-bold">
                <a class="text-indigo-600 dark:text-indigo-400 hover:underline" href="#">Ver Demo</a>
                <a class="text-slate-500 hover:text-slate-900 dark:hover:text-white" href="#">Código GitHub</a>
              </div>
            </div>
          </article>

          <!-- Project 6: n8n + Workflow Automation -->
          <article
            data-category="ai"
            class="project-card group flex flex-col rounded-3xl glass-card overflow-hidden border border-slate-200/80 dark:border-slate-800"
          >
            <div class="h-44 w-full bg-gradient-to-br from-purple-600 via-pink-600 to-indigo-950 p-6 flex flex-col justify-between relative overflow-hidden">
              <span class="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white/20 text-white backdrop-blur-md self-start">
                Automatización SaaS
              </span>
              <h3 class="text-xl font-bold font-heading text-white">Plataforma n8n + IA</h3>
            </div>
            <div class="p-6 flex-1 flex flex-col justify-between space-y-6">
              <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Plataforma web para orquestar y automatizar flujos de trabajo personalizados mediante reglas condicionales, generación de reportes y servicios externos.
              </p>
              <div>
                <span class="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-2">Tecnologías</span>
                <div class="flex flex-wrap gap-1.5">
                  <span class="px-2.5 py-1 rounded-lg bg-indigo-100 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 text-xs font-bold">Laravel 12</span>
                  <span class="px-2.5 py-1 rounded-lg bg-blue-100 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 text-xs font-bold">PostgreSQL</span>
                  <span class="px-2.5 py-1 rounded-lg bg-rose-100 dark:bg-rose-950/50 text-rose-600 dark:text-rose-400 text-xs font-bold">n8n</span>
                </div>
              </div>
              <div class="pt-4 border-t border-slate-200/60 dark:border-slate-800 flex justify-between items-center text-xs font-bold">
                <a class="text-indigo-600 dark:text-indigo-400 hover:underline" href="#">Ver Demo</a>
                <a class="text-slate-500 hover:text-slate-900 dark:hover:text-white" href="#">Código GitHub</a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  `;
}