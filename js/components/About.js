export function About() {
  return `
    <section
      id="sobre-mi"
      class="relative py-24 border-t border-slate-200/50 dark:border-slate-800/50 overflow-hidden"
    >
      <div class="mx-auto max-w-6xl px-4 sm:px-6">
        <!-- Section Heading -->
        <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-indigo-500/30 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-widest">
            <i class="fa-solid fa-address-card text-xs"></i>
            <span>Conóceme más</span>
          </div>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight">
            Sobre <span class="gradient-text">mí</span>
          </h2>
          <p class="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Soy estudiante de Ingeniería de Sistemas y desarrollador autodidacta enfocado en construir software elegante, eficiente e impulsado por la innovación.
          </p>
        </div>

        <!-- Bento Grid Layout -->
        <div class="grid gap-6 md:grid-cols-3 lg:grid-cols-12">
          <!-- Main Bio Card (Span 8) -->
          <div class="lg:col-span-8 glass-card rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between">
            <div class="space-y-4">
              <div class="flex items-center gap-3 text-indigo-600 dark:text-indigo-400 font-bold text-xs uppercase tracking-wider">
                <i class="fa-solid fa-compass text-base"></i>
                <span>Mi Enfoque</span>
              </div>
              <h3 class="text-2xl font-bold font-heading text-slate-900 dark:text-white">
                Pasión por la arquitectura de software y experiencias web fluidas
              </h3>
              <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                Me apasiona el aprendizaje continuo y la resolución creativa de problemas. Mi meta es transformar ideas complejas en productos digitales simples, escalables e intuitivos, combinando lógica sólida en backend con interfaces de usuario atractivas.
              </p>
            </div>

            <!-- Mini Stats Bar -->
            <div class="mt-8 pt-6 border-t border-slate-200/70 dark:border-slate-800 grid grid-cols-3 gap-4 text-center">
              <div>
                <span class="block text-2xl sm:text-3xl font-black font-heading text-indigo-600 dark:text-indigo-400">9º</span>
                <span class="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Semestre Ing. Sistemas</span>
              </div>
              <div>
                <span class="block text-2xl sm:text-3xl font-black font-heading text-cyan-600 dark:text-cyan-400">100%</span>
                <span class="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Compromiso Autodidacta</span>
              </div>
              <div>
                <span class="block text-2xl sm:text-3xl font-black font-heading text-purple-600 dark:text-purple-400">+3</span>
                <span class="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Proyectos Destacados</span>
              </div>
            </div>
          </div>

          <!-- Card 1: Fortalezas (Span 4) -->
          <div class="lg:col-span-4 glass-card rounded-3xl p-8 flex flex-col justify-between">
            <div>
              <div class="flex items-center gap-3 text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-wider mb-4">
                <i class="fa-solid fa-bolt text-base"></i>
                <span>Fortalezas</span>
              </div>
              <ul class="space-y-4">
                <li class="flex items-start gap-3">
                  <div class="h-6 w-6 rounded-lg bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xs shrink-0 mt-0.5">
                    <i class="fa-solid fa-brain"></i>
                  </div>
                  <div>
                    <h4 class="text-sm font-bold text-slate-900 dark:text-white">Aprendizaje Rápido</h4>
                    <p class="text-xs text-slate-500 dark:text-slate-400">Capacidad de dominar nuevas tecnologías y frameworks en tiempo récord.</p>
                  </div>
                </li>
                <li class="flex items-start gap-3">
                  <div class="h-6 w-6 rounded-lg bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xs shrink-0 mt-0.5">
                    <i class="fa-solid fa-list-check"></i>
                  </div>
                  <div>
                    <h4 class="text-sm font-bold text-slate-900 dark:text-white">Orden y Consistencia</h4>
                    <p class="text-xs text-slate-500 dark:text-slate-400">Estructura limpia en código y documentación precisa.</p>
                  </div>
                </li>
                <li class="flex items-start gap-3">
                  <div class="h-6 w-6 rounded-lg bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xs shrink-0 mt-0.5">
                    <i class="fa-solid fa-users"></i>
                  </div>
                  <div>
                    <h4 class="text-sm font-bold text-slate-900 dark:text-white">Trabajo en Equipo</h4>
                    <p class="text-xs text-slate-500 dark:text-slate-400">Comunicación asertiva y colaboración proactiva.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <!-- Card 2: En Aprendizaje (Span 6) -->
          <div class="lg:col-span-6 glass-card rounded-3xl p-8">
            <div class="flex items-center gap-3 text-purple-600 dark:text-purple-400 font-bold text-xs uppercase tracking-wider mb-4">
              <i class="fa-solid fa-chart-line text-base"></i>
              <span>En Crecimiento & Especialización</span>
            </div>
            <div class="grid sm:grid-cols-3 gap-4">
              <div class="p-4 rounded-2xl bg-purple-50/50 dark:bg-purple-950/30 border border-purple-100 dark:border-purple-900/40 text-center">
                <i class="fa-brands fa-docker text-2xl text-blue-500 mb-2"></i>
                <h4 class="text-xs font-bold text-slate-900 dark:text-white">Docker</h4>
                <span class="text-[10px] text-slate-500">Contenedores</span>
              </div>
              <div class="p-4 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/40 text-center">
                <i class="fa-solid fa-diagram-project text-2xl text-indigo-500 mb-2"></i>
                <h4 class="text-xs font-bold text-slate-900 dark:text-white">N8N</h4>
                <span class="text-[10px] text-slate-500">Automatización</span>
              </div>
              <div class="p-4 rounded-2xl bg-cyan-50/50 dark:bg-cyan-950/30 border border-cyan-100 dark:border-cyan-900/40 text-center">
                <i class="fa-solid fa-cubes text-2xl text-cyan-500 mb-2"></i>
                <h4 class="text-xs font-bold text-slate-900 dark:text-white">Desarrollo Web</h4>
                <span class="text-[10px] text-slate-500">Arquitectura</span>
              </div>
            </div>
          </div>

          <!-- Card 3: Intereses (Span 6) -->
          <div class="lg:col-span-6 glass-card rounded-3xl p-8">
            <div class="flex items-center gap-3 text-cyan-600 dark:text-cyan-400 font-bold text-xs uppercase tracking-wider mb-4">
              <i class="fa-solid fa-heart text-base"></i>
              <span>Intereses & Filosofía</span>
            </div>
            <div class="flex flex-wrap gap-2.5">
              <span class="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                <i class="fa-solid fa-wand-magic-sparkles text-indigo-500"></i> UI/UX Limpio & Intuitivo
              </span>
              <span class="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                <i class="fa-solid fa-laptop-code text-cyan-500"></i> Proyectos de Impacto Real
              </span>
              <span class="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                <i class="fa-solid fa-shield-halved text-emerald-500"></i> Buenas Prácticas & Clean Code
              </span>
              <span class="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                <i class="fa-solid fa-brain text-purple-500"></i> Integración de IA en Web
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}