export function Skills() {
  return `
    <section
      id="habilidades"
      class="relative py-20 border-t border-slate-200/50 dark:border-slate-800/50 overflow-hidden"
    >
      <div class="relative z-10 mx-auto max-w-5xl px-4 sm:px-6">
        <!-- Section Heading -->
        <div class="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <h2 class="text-3xl sm:text-5xl font-black font-heading tracking-tight text-slate-900 dark:text-white">
            Mis <span class="gradient-text">Habilidades</span>
          </h2>
          <p class="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Tecnologías y herramientas con las que trabajo en el desarrollo de aplicaciones web.
          </p>
        </div>

        <!-- Tech Categories Grid (3 Columns) -->
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <!-- Card 1: Frontend -->
          <div class="glass-card rounded-3xl p-6 border border-slate-300 dark:border-slate-800 space-y-4">
            <div class="flex items-center gap-3">
              <div class="h-10 w-10 rounded-xl bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-lg font-bold">
                <i class="fa-solid fa-code"></i>
              </div>
              <h3 class="text-lg font-bold font-heading text-slate-900 dark:text-white">Desarrollo Web</h3>
            </div>
            
            <div class="space-y-2.5 pt-2">
              <div class="p-3 rounded-xl bg-slate-100/80 dark:bg-slate-800/60 flex items-center gap-3 border border-slate-200/60 dark:border-slate-700/60">
                <i class="fa-brands fa-html5 text-orange-500 text-lg"></i>
                <span class="text-xs font-bold text-slate-800 dark:text-slate-200">HTML5</span>
              </div>
              <div class="p-3 rounded-xl bg-slate-100/80 dark:bg-slate-800/60 flex items-center gap-3 border border-slate-200/60 dark:border-slate-700/60">
                <i class="fa-brands fa-css3-alt text-blue-500 text-lg"></i>
                <span class="text-xs font-bold text-slate-800 dark:text-slate-200">CSS3</span>
              </div>
              <div class="p-3 rounded-xl bg-slate-100/80 dark:bg-slate-800/60 flex items-center gap-3 border border-slate-200/60 dark:border-slate-700/60">
                <i class="fa-brands fa-js text-amber-500 text-lg"></i>
                <span class="text-xs font-bold text-slate-800 dark:text-slate-200">JavaScript</span>
              </div>
              <div class="p-3 rounded-xl bg-slate-100/80 dark:bg-slate-800/60 flex items-center gap-3 border border-slate-200/60 dark:border-slate-700/60">
                <i class="fa-solid fa-wind text-cyan-400 text-lg"></i>
                <span class="text-xs font-bold text-slate-800 dark:text-slate-200">TailwindCSS</span>
              </div>
              <div class="p-3 rounded-xl bg-slate-100/80 dark:bg-slate-800/60 flex items-center gap-3 border border-slate-200/60 dark:border-slate-700/60">
                <i class="fa-brands fa-vuejs text-emerald-500 text-lg"></i>
                <span class="text-xs font-bold text-slate-800 dark:text-slate-200">Vue.js</span>
              </div>
            </div>
          </div>

          <!-- Card 2: Backend & BD -->
          <div class="glass-card rounded-3xl p-6 border border-slate-300 dark:border-slate-800 space-y-4">
            <div class="flex items-center gap-3">
              <div class="h-10 w-10 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center text-lg font-bold">
                <i class="fa-solid fa-server"></i>
              </div>
              <h3 class="text-lg font-bold font-heading text-slate-900 dark:text-white">Backend & BD</h3>
            </div>
            
            <div class="space-y-2.5 pt-2">
              <div class="p-3 rounded-xl bg-slate-100/80 dark:bg-slate-800/60 flex items-center gap-3 border border-slate-200/60 dark:border-slate-700/60">
                <i class="fa-brands fa-laravel text-red-500 text-lg"></i>
                <span class="text-xs font-bold text-slate-800 dark:text-slate-200">Laravel 12</span>
              </div>
              <div class="p-3 rounded-xl bg-slate-100/80 dark:bg-slate-800/60 flex items-center gap-3 border border-slate-200/60 dark:border-slate-700/60">
                <i class="fa-brands fa-php text-indigo-400 text-lg"></i>
                <span class="text-xs font-bold text-slate-800 dark:text-slate-200">PHP</span>
              </div>
              <div class="p-3 rounded-xl bg-slate-100/80 dark:bg-slate-800/60 flex items-center gap-3 border border-slate-200/60 dark:border-slate-700/60">
                <i class="fa-solid fa-database text-blue-500 text-lg"></i>
                <span class="text-xs font-bold text-slate-800 dark:text-slate-200">MySQL</span>
              </div>
              <div class="p-3 rounded-xl bg-slate-100/80 dark:bg-slate-800/60 flex items-center gap-3 border border-slate-200/60 dark:border-slate-700/60">
                <i class="fa-solid fa-database text-cyan-500 text-lg"></i>
                <span class="text-xs font-bold text-slate-800 dark:text-slate-200">PostgreSQL</span>
              </div>
            </div>
          </div>

          <!-- Card 3: Herramientas -->
          <div class="glass-card rounded-3xl p-6 border border-slate-300 dark:border-slate-800 space-y-4">
            <div class="flex items-center gap-3">
              <div class="h-10 w-10 rounded-xl bg-cyan-100 dark:bg-cyan-950 text-cyan-600 dark:text-cyan-400 flex items-center justify-center text-lg font-bold">
                <i class="fa-solid fa-screwdriver-wrench"></i>
              </div>
              <h3 class="text-lg font-bold font-heading text-slate-900 dark:text-white">Herramientas</h3>
            </div>
            
            <div class="space-y-2.5 pt-2">
              <div class="p-3 rounded-xl bg-slate-100/80 dark:bg-slate-800/60 flex items-center gap-3 border border-slate-200/60 dark:border-slate-700/60">
                <i class="fa-brands fa-git-alt text-orange-600 text-lg"></i>
                <span class="text-xs font-bold text-slate-800 dark:text-slate-200">Git & GitHub</span>
              </div>
              <div class="p-3 rounded-xl bg-slate-100/80 dark:bg-slate-800/60 flex items-center gap-3 border border-slate-200/60 dark:border-slate-700/60">
                <i class="fa-solid fa-terminal text-emerald-500 text-lg"></i>
                <span class="text-xs font-bold text-slate-800 dark:text-slate-200">Linux / WSL</span>
              </div>
              <div class="p-3 rounded-xl bg-slate-100/80 dark:bg-slate-800/60 flex items-center gap-3 border border-slate-200/60 dark:border-slate-700/60">
                <i class="fa-brands fa-docker text-blue-400 text-lg"></i>
                <span class="text-xs font-bold text-slate-800 dark:text-slate-200">Docker</span>
              </div>
              <div class="p-3 rounded-xl bg-slate-100/80 dark:bg-slate-800/60 flex items-center gap-3 border border-slate-200/60 dark:border-slate-700/60">
                <i class="fa-solid fa-gear text-indigo-400 text-lg"></i>
                <span class="text-xs font-bold text-slate-800 dark:text-slate-200">VS Code</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}