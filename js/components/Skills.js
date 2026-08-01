export function Skills() {
  return `
    <section
      id="habilidades"
      class="relative py-24 border-t border-slate-200/50 dark:border-slate-800/50 overflow-hidden"
    >
      <!-- Subtle Glow Blob -->
      <div class="glow-blob w-96 h-96 bg-purple-500/10 dark:bg-purple-500/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

      <div class="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <!-- Section Heading -->
        <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-widest">
            <i class="fa-solid fa-layer-group text-xs"></i>
            <span>Stack Tecnológico</span>
          </div>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight">
            Mis <span class="gradient-text">habilidades</span>
          </h2>
          <p class="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Herramientas, lenguajes y tecnologías con las que construyo soluciones digitales cotidianas.
          </p>
        </div>

        <!-- Tech Categories Grid -->
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <!-- Card 1: Frontend -->
          <div class="glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-indigo-500/40">
            <div>
              <div class="flex items-center justify-between mb-6">
                <div class="h-12 w-12 rounded-2xl bg-indigo-100 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-xl font-bold">
                  <i class="fa-solid fa-code"></i>
                </div>
                <span class="text-[10px] font-black uppercase tracking-widest text-slate-400">Frontend</span>
              </div>
              <h3 class="text-lg font-bold font-heading mb-4 text-slate-900 dark:text-white">Desarrollo Web</h3>
              
              <div class="space-y-3">
                <div class="p-2.5 rounded-xl bg-slate-100/80 dark:bg-slate-800/60 flex items-center justify-between">
                  <div class="flex items-center gap-2.5">
                    <i class="fa-brands fa-html5 text-orange-500 text-lg"></i>
                    <span class="text-xs font-bold text-slate-800 dark:text-slate-200">HTML5</span>
                  </div>
                  <span class="text-[10px] font-bold text-indigo-600 dark:text-indigo-400">Avanzado</span>
                </div>
                <div class="p-2.5 rounded-xl bg-slate-100/80 dark:bg-slate-800/60 flex items-center justify-between">
                  <div class="flex items-center gap-2.5">
                    <i class="fa-brands fa-css3-alt text-blue-500 text-lg"></i>
                    <span class="text-xs font-bold text-slate-800 dark:text-slate-200">CSS3</span>
                  </div>
                  <span class="text-[10px] font-bold text-indigo-600 dark:text-indigo-400">Avanzado</span>
                </div>
                <div class="p-2.5 rounded-xl bg-slate-100/80 dark:bg-slate-800/60 flex items-center justify-between">
                  <div class="flex items-center gap-2.5">
                    <i class="fa-brands fa-js text-amber-400 text-lg"></i>
                    <span class="text-xs font-bold text-slate-800 dark:text-slate-200">JavaScript</span>
                  </div>
                  <span class="text-[10px] font-bold text-indigo-600 dark:text-indigo-400">Fluido</span>
                </div>
                <div class="p-2.5 rounded-xl bg-slate-100/80 dark:bg-slate-800/60 flex items-center justify-between">
                  <div class="flex items-center gap-2.5">
                    <i class="fa-solid fa-wind text-cyan-400 text-lg"></i>
                    <span class="text-xs font-bold text-slate-800 dark:text-slate-200">TailwindCSS</span>
                  </div>
                  <span class="text-[10px] font-bold text-indigo-600 dark:text-indigo-400">Avanzado</span>
                </div>
                <div class="p-2.5 rounded-xl bg-slate-100/80 dark:bg-slate-800/60 flex items-center justify-between">
                  <div class="flex items-center gap-2.5">
                    <i class="fa-brands fa-vuejs text-emerald-500 text-lg"></i>
                    <span class="text-xs font-bold text-slate-800 dark:text-slate-200">Vue.js</span>
                  </div>
                  <span class="text-[10px] font-bold text-indigo-600 dark:text-indigo-400">Intermedio</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Card 2: Backend & BD -->
          <div class="glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-blue-500/40">
            <div>
              <div class="flex items-center justify-between mb-6">
                <div class="h-12 w-12 rounded-2xl bg-blue-100 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xl font-bold">
                  <i class="fa-solid fa-server"></i>
                </div>
                <span class="text-[10px] font-black uppercase tracking-widest text-slate-400">Backend</span>
              </div>
              <h3 class="text-lg font-bold font-heading mb-4 text-slate-900 dark:text-white">Backend & BD</h3>
              
              <div class="space-y-3">
                <div class="p-2.5 rounded-xl bg-slate-100/80 dark:bg-slate-800/60 flex items-center justify-between">
                  <div class="flex items-center gap-2.5">
                    <i class="fa-brands fa-laravel text-red-500 text-lg"></i>
                    <span class="text-xs font-bold text-slate-800 dark:text-slate-200">Laravel 12</span>
                  </div>
                  <span class="text-[10px] font-bold text-blue-600 dark:text-blue-400">Avanzado</span>
                </div>
                <div class="p-2.5 rounded-xl bg-slate-100/80 dark:bg-slate-800/60 flex items-center justify-between">
                  <div class="flex items-center gap-2.5">
                    <i class="fa-brands fa-php text-indigo-400 text-lg"></i>
                    <span class="text-xs font-bold text-slate-800 dark:text-slate-200">PHP</span>
                  </div>
                  <span class="text-[10px] font-bold text-blue-600 dark:text-blue-400">Avanzado</span>
                </div>
                <div class="p-2.5 rounded-xl bg-slate-100/80 dark:bg-slate-800/60 flex items-center justify-between">
                  <div class="flex items-center gap-2.5">
                    <i class="fa-solid fa-database text-blue-500 text-lg"></i>
                    <span class="text-xs font-bold text-slate-800 dark:text-slate-200">MySQL</span>
                  </div>
                  <span class="text-[10px] font-bold text-blue-600 dark:text-blue-400">Fluido</span>
                </div>
                <div class="p-2.5 rounded-xl bg-slate-100/80 dark:bg-slate-800/60 flex items-center justify-between">
                  <div class="flex items-center gap-2.5">
                    <i class="fa-solid fa-database text-cyan-500 text-lg"></i>
                    <span class="text-xs font-bold text-slate-800 dark:text-slate-200">PostgreSQL</span>
                  </div>
                  <span class="text-[10px] font-bold text-blue-600 dark:text-blue-400">Fluido</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Card 3: Herramientas -->
          <div class="glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-cyan-500/40">
            <div>
              <div class="flex items-center justify-between mb-6">
                <div class="h-12 w-12 rounded-2xl bg-cyan-100 dark:bg-cyan-950/80 text-cyan-600 dark:text-cyan-400 flex items-center justify-center text-xl font-bold">
                  <i class="fa-solid fa-screwdriver-wrench"></i>
                </div>
                <span class="text-[10px] font-black uppercase tracking-widest text-slate-400">Herramientas</span>
              </div>
              <h3 class="text-lg font-bold font-heading mb-4 text-slate-900 dark:text-white">DevOps & Tools</h3>
              
              <div class="space-y-3">
                <div class="p-2.5 rounded-xl bg-slate-100/80 dark:bg-slate-800/60 flex items-center justify-between">
                  <div class="flex items-center gap-2.5">
                    <i class="fa-brands fa-git-alt text-orange-600 text-lg"></i>
                    <span class="text-xs font-bold text-slate-800 dark:text-slate-200">Git & GitHub</span>
                  </div>
                  <span class="text-[10px] font-bold text-cyan-600 dark:text-cyan-400">Control Versiones</span>
                </div>
                <div class="p-2.5 rounded-xl bg-slate-100/80 dark:bg-slate-800/60 flex items-center justify-between">
                  <div class="flex items-center gap-2.5">
                    <i class="fa-solid fa-terminal text-emerald-500 text-lg"></i>
                    <span class="text-xs font-bold text-slate-800 dark:text-slate-200">Linux / WSL</span>
                  </div>
                  <span class="text-[10px] font-bold text-cyan-600 dark:text-cyan-400">Entorno</span>
                </div>
                <div class="p-2.5 rounded-xl bg-slate-100/80 dark:bg-slate-800/60 flex items-center justify-between">
                  <div class="flex items-center gap-2.5">
                    <i class="fa-brands fa-docker text-blue-400 text-lg"></i>
                    <span class="text-xs font-bold text-slate-800 dark:text-slate-200">Docker</span>
                  </div>
                  <span class="text-[10px] font-bold text-cyan-600 dark:text-cyan-400">En proceso</span>
                </div>
                <div class="p-2.5 rounded-xl bg-slate-100/80 dark:bg-slate-800/60 flex items-center justify-between">
                  <div class="flex items-center gap-2.5">
                    <i class="fa-solid fa-gear text-indigo-400 text-lg"></i>
                    <span class="text-xs font-bold text-slate-800 dark:text-slate-200">VS Code</span>
                  </div>
                  <span class="text-[10px] font-bold text-cyan-600 dark:text-cyan-400">IDE Principal</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Card 4: Soft Skills -->
          <div class="glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-emerald-500/40">
            <div>
              <div class="flex items-center justify-between mb-6">
                <div class="h-12 w-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xl font-bold">
                  <i class="fa-solid fa-user-gear"></i>
                </div>
                <span class="text-[10px] font-black uppercase tracking-widest text-slate-400">Habilidades</span>
              </div>
              <h3 class="text-lg font-bold font-heading mb-4 text-slate-900 dark:text-white">Soft Skills</h3>
              
              <div class="space-y-3">
                <div class="p-3 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/40 flex items-center gap-3">
                  <i class="fa-solid fa-check-circle text-emerald-500 text-base"></i>
                  <div>
                    <span class="block text-xs font-bold text-slate-900 dark:text-white">Responsabilidad</span>
                    <span class="text-[10px] text-slate-500">Puntualidad y compromiso</span>
                  </div>
                </div>
                <div class="p-3 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/40 flex items-center gap-3">
                  <i class="fa-solid fa-people-group text-emerald-500 text-base"></i>
                  <div>
                    <span class="block text-xs font-bold text-slate-900 dark:text-white">Trabajo en Equipo</span>
                    <span class="text-[10px] text-slate-500">Sinergia y comunicación</span>
                  </div>
                </div>
                <div class="p-3 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/40 flex items-center gap-3">
                  <i class="fa-solid fa-lightbulb text-emerald-500 text-base"></i>
                  <div>
                    <span class="block text-xs font-bold text-slate-900 dark:text-white">Resolución Proactiva</span>
                    <span class="text-[10px] text-slate-500">Enfoque en soluciones</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}