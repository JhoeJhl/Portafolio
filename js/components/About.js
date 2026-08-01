export function About() {
  return `
    <section
      id="sobre-mi"
      class="relative py-20 border-t border-slate-200/50 dark:border-slate-800/50 overflow-hidden"
    >
      <div class="mx-auto max-w-5xl px-4 sm:px-6">
        <!-- Section Heading -->
        <div class="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <h2 class="text-3xl sm:text-5xl font-black font-heading tracking-tight text-slate-900 dark:text-white">
            Sobre <span class="gradient-text">mí</span>
          </h2>
          <p class="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Estudiante de Ingeniería de Sistemas y desarrollador autodidacta enfocado en construir soluciones web eficientes.
          </p>
        </div>

        <!-- Grid Layout -->
        <div class="grid gap-6 md:grid-cols-12">
          <!-- Bio / Mi Enfoque Card (Full Width) -->
          <div class="md:col-span-12 glass-card rounded-3xl p-8 border border-slate-300 dark:border-slate-800 space-y-4">
            <div class="flex items-center gap-3 text-indigo-600 dark:text-indigo-400 font-bold text-xs uppercase tracking-wider">
              <i class="fa-solid fa-compass text-base"></i>
              <span>Mi Enfoque</span>
            </div>
            <h3 class="text-2xl font-bold font-heading text-slate-900 dark:text-white">
              Pasión por la arquitectura de software y experiencias web fluidas
            </h3>
            <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              Me apasiona el aprendizaje continuo y la resolución creativa de problemas. Mi meta es transformar ideas en productos digitales simples, escalables e intuitivos, combinando lógica sólida en backend con interfaces de usuario atractivas.
            </p>
          </div>

          <!-- Card 1: En Aprendizaje (Span 6) -->
          <div class="md:col-span-6 glass-card rounded-3xl p-8 border border-slate-300 dark:border-slate-800 space-y-4">
            <div class="flex items-center gap-3 text-purple-600 dark:text-purple-400 font-bold text-xs uppercase tracking-wider">
              <i class="fa-solid fa-chart-line text-base"></i>
              <span>En Crecimiento</span>
            </div>
            <div class="grid sm:grid-cols-3 gap-3">
              <div class="p-3.5 rounded-2xl bg-purple-50/70 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-900/40 text-center">
                <i class="fa-brands fa-docker text-xl text-blue-500 mb-1"></i>
                <h4 class="text-xs font-bold text-slate-900 dark:text-white">Docker</h4>
              </div>
              <div class="p-3.5 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-900/40 text-center">
                <i class="fa-solid fa-diagram-project text-xl text-indigo-500 mb-1"></i>
                <h4 class="text-xs font-bold text-slate-900 dark:text-white">N8N</h4>
              </div>
              <div class="p-3.5 rounded-2xl bg-cyan-50/70 dark:bg-cyan-950/30 border border-cyan-200 dark:border-cyan-900/40 text-center">
                <i class="fa-solid fa-cubes text-xl text-cyan-500 mb-1"></i>
                <h4 class="text-xs font-bold text-slate-900 dark:text-white">Desarrollo</h4>
              </div>
            </div>
          </div>

          <!-- Card 2: Intereses (Span 6) -->
          <div class="md:col-span-6 glass-card rounded-3xl p-8 border border-slate-300 dark:border-slate-800 space-y-4">
            <div class="flex items-center gap-3 text-cyan-600 dark:text-cyan-400 font-bold text-xs uppercase tracking-wider">
              <i class="fa-solid fa-heart text-base"></i>
              <span>Intereses</span>
            </div>
            <div class="flex flex-wrap gap-2">
              <span class="px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2 border border-slate-200 dark:border-slate-700">
                <i class="fa-solid fa-wand-magic-sparkles text-indigo-500"></i> UI/UX Limpio
              </span>
              <span class="px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2 border border-slate-200 dark:border-slate-700">
                <i class="fa-solid fa-laptop-code text-cyan-500"></i> Proyectos Reales
              </span>
              <span class="px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2 border border-slate-200 dark:border-slate-700">
                <i class="fa-solid fa-shield-halved text-emerald-500"></i> Buenas Prácticas
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}