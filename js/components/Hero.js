export function Hero() {
  return `
    <section id="inicio" class="relative mx-auto max-w-6xl px-4 sm:px-6 pt-16 pb-24 lg:pt-28 lg:pb-36 overflow-hidden">
      <!-- Ambient Glow Effects -->
      <div class="glow-blob w-[450px] h-[450px] bg-indigo-500/20 dark:bg-indigo-600/20 -top-20 -left-20"></div>
      <div class="glow-blob w-[400px] h-[400px] bg-cyan-500/20 dark:bg-cyan-600/20 top-40 -right-20"></div>

      <div class="relative z-10 grid items-center gap-12 lg:grid-cols-12">
        <!-- Main Presentation Column -->
        <div class="lg:col-span-7 space-y-8 text-left">
          <!-- Title & Headline -->
          <div class="space-y-4">
            <h1 class="text-4xl sm:text-6xl lg:text-7xl font-black font-heading tracking-tight leading-[1.08] text-slate-900 dark:text-white">
              Joel Freddy <br />
              <span class="gradient-text">
                Pinto Cutili
              </span>
            </h1>
            <p class="text-xl sm:text-2xl font-bold text-indigo-600 dark:text-indigo-400">
              Desarrollador Web Fullstack & Ing. de Sistemas
            </p>
          </div>

          <!-- Description -->
          <p class="text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300 max-w-xl">
            Especializado en la creación de aplicaciones web escalables y sistemas modernos. Trabajo con 
            <span class="font-bold text-slate-900 dark:text-white">Laravel 12, Vue.js, PHP, JavaScript</span> 
            e integración de <span class="font-bold text-slate-900 dark:text-white">IA y automatización</span> con bases de datos MySQL y PostgreSQL.
          </p>

          <!-- Action Buttons (WITHOUT ICONS as explicitly requested) -->
          <div class="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#proyectos"
              class="px-8 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-xl shadow-indigo-600/25 hover:shadow-indigo-600/40 hover:scale-105 active:scale-95 transition-all text-center"
            >
              Ver proyectos
            </a>
            <a
              href="#contacto"
              class="px-8 py-4 rounded-2xl glass-card text-slate-800 dark:text-slate-200 font-bold text-sm hover:border-indigo-500/50 hover:scale-105 active:scale-95 transition-all text-center"
            >
              Contacto
            </a>
            <a
              href="CV.pdf"
              target="_blank"
              class="px-8 py-4 rounded-2xl border border-slate-300 dark:border-slate-700 bg-transparent text-slate-700 dark:text-slate-300 font-bold text-sm hover:bg-slate-200/50 dark:hover:bg-slate-800/50 hover:scale-105 active:scale-95 transition-all text-center"
            >
              Visualizar CV
            </a>
          </div>
        </div>

        <!-- Right Side Showcase Card (Drastically Redesigned Layout) -->
        <div class="lg:col-span-5 relative">
          <div class="glass-card rounded-3xl p-8 border border-slate-200/80 dark:border-slate-800 shadow-2xl space-y-6">
            <!-- Header Badge -->
            <div class="flex items-center justify-between pb-4 border-b border-slate-200/60 dark:border-slate-800">
              <span class="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                Perfil Profesional
              </span>
              <span class="inline-block h-2.5 w-2.5 rounded-full bg-indigo-500"></span>
            </div>

            <!-- Profile Overview Items -->
            <div class="space-y-4">
              <div class="p-4 rounded-2xl bg-slate-100/70 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/50">
                <span class="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-1">
                  Grado Académico
                </span>
                <p class="text-sm font-bold text-slate-900 dark:text-white">
                  Estudiante de Ingeniería de Sistemas (9no Semestre)
                </p>
                <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Mención en Informática y Telecomunicaciones
                </p>
              </div>

              <div class="p-4 rounded-2xl bg-slate-100/70 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/50">
                <span class="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-1">
                  Titulación Técnica
                </span>
                <p class="text-sm font-bold text-slate-900 dark:text-white">
                  Técnico Medio en Sistemas Informáticos
                </p>
                <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Desarrollador Web Autodidacta Fullstack
                </p>
              </div>
            </div>

            <!-- Direct Social Connections -->
            <div class="pt-2">
              <span class="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-3">
                Conectar
              </span>
              <div class="grid grid-cols-2 gap-3">
                <a
                  class="py-3 px-4 rounded-xl bg-slate-900 text-white dark:bg-slate-800 text-center text-xs font-bold hover:bg-indigo-600 dark:hover:bg-indigo-600 transition-all shadow-md"
                  href="https://github.com/JhoeJhl"
                  target="_blank"
                >
                  GitHub
                </a>
                <a
                  class="py-3 px-4 rounded-xl bg-blue-600 text-white text-center text-xs font-bold hover:bg-blue-700 transition-all shadow-md"
                  href="https://www.linkedin.com/in/joel-pinto-84219723a/"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}