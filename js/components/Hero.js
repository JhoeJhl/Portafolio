export function Hero() {
  return `
    <section id="inicio" class="relative mx-auto max-w-6xl px-4 sm:px-6 pt-12 pb-20 lg:pt-20 lg:pb-32 overflow-hidden">
      <!-- Background Ambient Glow Blobs -->
      <div class="glow-blob w-96 h-96 bg-indigo-500/20 dark:bg-indigo-500/15 top-10 -left-20"></div>
      <div class="glow-blob w-96 h-96 bg-cyan-500/20 dark:bg-cyan-500/15 bottom-0 -right-20"></div>

      <div class="relative z-10 grid items-center gap-12 lg:grid-cols-12">
        <!-- Text & Intro Column -->
        <div class="lg:col-span-7 space-y-8 text-left">
          <!-- Availability Badge -->
          <div class="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-bold shadow-sm">
            <span class="relative flex h-2.5 w-2.5">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span>Disponible para proyectos & oportunidades</span>
          </div>

          <!-- Main Heading -->
          <div class="space-y-3">
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight leading-[1.1]">
              Hola, me llamo <br />
              <span class="gradient-text drop-shadow-sm">
                Joel Freddy Pinto
              </span>
            </h1>
            <p class="text-xl sm:text-2xl font-bold text-slate-700 dark:text-slate-300">
              Desarrollador Web Fullstack & Estudiante de Ing. de Sistemas
            </p>
          </div>

          <!-- Description -->
          <p class="text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-400 max-w-2xl">
            Especializado en construir aplicaciones web modernas, funcionales e inteligentes. Trabajo con 
            <span class="font-semibold text-indigo-600 dark:text-indigo-400">Laravel, Vue.js, JavaScript</span>, 
            e integración de <span class="font-semibold text-cyan-600 dark:text-cyan-400">Inteligencia Artificial</span> y bases de datos 
            <span class="font-semibold text-slate-900 dark:text-slate-200">PostgreSQL y MySQL</span>.
          </p>

          <!-- Tech Stack Quick Badges -->
          <div class="flex flex-wrap gap-2 pt-1">
            <span class="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
              <i class="fa-brands fa-laravel text-red-500 text-sm"></i> Laravel 12
            </span>
            <span class="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
              <i class="fa-brands fa-vuejs text-emerald-500 text-sm"></i> Vue.js
            </span>
            <span class="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
              <i class="fa-brands fa-js text-amber-500 text-sm"></i> JavaScript
            </span>
            <span class="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
              <i class="fa-brands fa-php text-indigo-400 text-sm"></i> PHP
            </span>
            <span class="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
              <i class="fa-solid fa-robot text-cyan-400 text-sm"></i> Integración IA
            </span>
          </div>

          <!-- CTAs & Social Links -->
          <div class="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#proyectos"
              class="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-indigo-600 via-indigo-700 to-blue-600 text-sm font-bold text-white shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
            >
              <i class="fa-solid fa-rocket"></i>
              <span>Ver proyectos</span>
            </a>
            <a
              href="#contacto"
              class="px-7 py-3.5 rounded-2xl glass-card text-sm font-bold text-slate-800 dark:text-slate-200 hover:border-indigo-500/40 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
            >
              <i class="fa-solid fa-comments text-indigo-500"></i>
              <span>Contacto</span>
            </a>
            <a
              href="CV.pdf"
              target="_blank"
              class="px-6 py-3.5 rounded-2xl border border-slate-300 dark:border-slate-700 bg-transparent text-sm font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
            >
              <i class="fa-solid fa-file-pdf text-rose-500"></i>
              <span>Visualizar CV</span>
            </a>
          </div>
        </div>

        <!-- Hero Card / Developer Graphic Side -->
        <div class="lg:col-span-5 relative">
          <div class="relative rounded-3xl glass-card p-6 sm:p-8 shadow-2xl border border-white/40 dark:border-slate-800">
            <!-- IDE Header Dots -->
            <div class="flex items-center justify-between pb-6 border-b border-slate-200/60 dark:border-slate-800">
              <div class="flex items-center gap-2">
                <span class="h-3 w-3 rounded-full bg-rose-500 inline-block"></span>
                <span class="h-3 w-3 rounded-full bg-amber-500 inline-block"></span>
                <span class="h-3 w-3 rounded-full bg-emerald-500 inline-block"></span>
              </div>
              <span class="text-xs font-mono text-slate-400 font-semibold flex items-center gap-1">
                <i class="fa-solid fa-code text-indigo-500 text-[10px]"></i> DeveloperProfile.js
              </span>
            </div>

            <!-- Profile Info Cards -->
            <div class="mt-6 space-y-4">
              <div class="p-4 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/40">
                <div class="flex items-center justify-between mb-1.5">
                  <span class="text-[11px] font-black uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                    Formación Actual
                  </span>
                  <i class="fa-solid fa-graduation-cap text-indigo-500 text-sm"></i>
                </div>
                <p class="text-xs font-bold text-slate-800 dark:text-slate-200">
                  Ingeniería de Sistemas (9no Semestre)
                </p>
                <p class="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                  Mención en Informática y Telecomunicaciones
                </p>
              </div>

              <div class="p-4 rounded-2xl bg-cyan-50/50 dark:bg-cyan-950/30 border border-cyan-100 dark:border-cyan-900/40">
                <div class="flex items-center justify-between mb-1.5">
                  <span class="text-[11px] font-black uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                    Título Técnico
                  </span>
                  <i class="fa-solid fa-award text-cyan-500 text-sm"></i>
                </div>
                <p class="text-xs font-bold text-slate-800 dark:text-slate-200">
                  Técnico Medio en Sistemas Informáticos
                </p>
                <p class="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                  Autodidacta en Desarrollo Web Fullstack
                </p>
              </div>

              <!-- Social Links Box -->
              <div class="pt-2">
                <p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">
                  Redes & Contacto Directo
                </p>
                <div class="grid grid-cols-2 gap-3">
                  <a
                    class="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-slate-900 text-white dark:bg-slate-800 hover:bg-indigo-600 dark:hover:bg-indigo-600 transition-all text-xs font-bold shadow-md hover:scale-[1.03]"
                    href="https://github.com/JhoeJhl"
                    target="_blank"
                  >
                    <i class="fa-brands fa-github text-base"></i>
                    <span>GitHub</span>
                  </a>
                  <a
                    class="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-all text-xs font-bold shadow-md hover:scale-[1.03]"
                    href="https://www.linkedin.com/in/joel-pinto-84219723a/"
                    target="_blank"
                  >
                    <i class="fa-brands fa-linkedin text-base"></i>
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}