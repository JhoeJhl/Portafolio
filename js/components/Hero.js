export function Hero() {
  return `
    <section id="inicio" class="relative mx-auto max-w-4xl px-4 sm:px-6 pt-16 pb-20 text-center flex flex-col items-center justify-center overflow-hidden">
      <!-- Background Ambient Glow -->
      <div class="glow-blob w-[500px] h-[500px] bg-indigo-500/15 dark:bg-indigo-600/15 -top-20 left-1/2 -translate-x-1/2"></div>

      <div class="relative z-10 space-y-8 max-w-3xl mx-auto">
        <!-- Main Headline -->
        <div class="space-y-4">
          <h1 class="text-4xl sm:text-6xl lg:text-7xl font-black font-heading tracking-tight text-slate-900 dark:text-white leading-tight">
            Joel Freddy <br />
            <span class="gradient-text">Pinto Cutili</span>
          </h1>
          <p class="text-xl sm:text-2xl font-bold text-indigo-600 dark:text-indigo-400">
            Desarrollador Web Fullstack & Ing. de Sistemas
          </p>
        </div>

        <!-- Bio Paragraph -->
        <p class="text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          Apasionado por el desarrollo web fullstack. Trabajo creando interfaces modernas y sistemas robustos utilizando 
          <span class="font-bold text-slate-900 dark:text-white">Laravel 12, Vue.js, PHP, JavaScript</span>, e integración de 
          <span class="font-bold text-slate-900 dark:text-white">Inteligencia Artificial</span> con bases de datos 
          <span class="font-bold text-slate-900 dark:text-white">MySQL y PostgreSQL</span>.
        </p>

        <!-- Tech Stack Badges (WITH ICONS RESTORED HERE) -->
        <div class="flex flex-wrap items-center justify-center gap-2.5 pt-2">
          <span class="px-3.5 py-2 rounded-xl glass-card text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2 border border-slate-300 dark:border-slate-800 shadow-sm">
            <i class="fa-brands fa-laravel text-red-500 text-sm"></i> Laravel
          </span>
          <span class="px-3.5 py-2 rounded-xl glass-card text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2 border border-slate-300 dark:border-slate-800 shadow-sm">
            <i class="fa-brands fa-vuejs text-emerald-500 text-sm"></i> Vue.js
          </span>
          <span class="px-3.5 py-2 rounded-xl glass-card text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2 border border-slate-300 dark:border-slate-800 shadow-sm">
            <i class="fa-brands fa-js text-amber-500 text-sm"></i> JavaScript
          </span>
          <span class="px-3.5 py-2 rounded-xl glass-card text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2 border border-slate-300 dark:border-slate-800 shadow-sm">
            <i class="fa-brands fa-php text-indigo-400 text-sm"></i> PHP
          </span>
          <span class="px-3.5 py-2 rounded-xl glass-card text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2 border border-slate-300 dark:border-slate-800 shadow-sm">
            <i class="fa-solid fa-database text-blue-500 text-sm"></i> MySQL & Postgres
          </span>
          <span class="px-3.5 py-2 rounded-xl glass-card text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2 border border-slate-300 dark:border-slate-800 shadow-sm">
            <i class="fa-solid fa-robot text-cyan-400 text-sm"></i> Integración IA
          </span>
        </div>

        <!-- Action Buttons (WITHOUT ICONS INSIDE BUTTONS as requested) -->
        <div class="flex flex-wrap items-center justify-center gap-4 pt-4">
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

        <!-- Centered Academic Summary Card -->
        <div class="pt-6 w-full max-w-2xl mx-auto">
          <div class="glass-card rounded-3xl p-6 sm:p-8 border border-slate-300 dark:border-slate-800 shadow-xl text-center space-y-4">
            <div class="grid sm:grid-cols-2 gap-4 text-left">
              <div class="p-4 rounded-2xl bg-slate-100/80 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60">
                <span class="text-[10px] font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400 block mb-1">
                  Grado Académico
                </span>
                <p class="text-xs font-bold text-slate-900 dark:text-white">
                  Ingeniería de Sistemas (9no Semestre)
                </p>
                <p class="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                  Informática y Telecomunicaciones
                </p>
              </div>

              <div class="p-4 rounded-2xl bg-slate-100/80 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60">
                <span class="text-[10px] font-black uppercase tracking-widest text-indigo-600 dark:text-indigo-400 block mb-1">
                  Titulación Técnica
                </span>
                <p class="text-xs font-bold text-slate-900 dark:text-white">
                  Técnico Medio en Sistemas Informáticos
                </p>
                <p class="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                  Desarrollador Web Fullstack
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}