export function Contact() {
  return `
    <section
      id="contacto"
      class="relative py-24 border-t border-slate-200/50 dark:border-slate-800/50 overflow-hidden"
    >
      <!-- Background Ambient Glow -->
      <div class="glow-blob w-[500px] h-[500px] bg-indigo-500/10 dark:bg-indigo-500/15 top-10 right-0"></div>

      <div class="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div class="grid gap-12 lg:grid-cols-12 items-center">
          <!-- Contact Info Side (Span 5) -->
          <div class="lg:col-span-5 space-y-8">
            <div class="space-y-4">
              <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-widest">
                <i class="fa-solid fa-paper-plane text-xs"></i>
                <span>Hablemos</span>
              </div>
              <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight">
                Construyamos algo <span class="gradient-text">extraordinario</span>
              </h2>
              <p class="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                ¿Tienes una propuesta, un proyecto en mente o buscas un desarrollador apasionado para tu equipo? Mi bandeja de entrada siempre está abierta.
              </p>
            </div>

            <!-- Interactive Contact Info Cards -->
            <div class="space-y-4">
              <!-- Email Card -->
              <div 
                id="copyEmailBtn"
                class="glass-card rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800 flex items-center justify-between group cursor-pointer hover:border-indigo-500/50 transition-all"
                title="Hacer clic para copiar el correo"
              >
                <div class="flex items-center gap-4">
                  <div class="h-12 w-12 rounded-xl bg-indigo-100 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-lg">
                    <i class="fa-solid fa-envelope"></i>
                  </div>
                  <div>
                    <span class="text-[10px] font-black uppercase tracking-wider text-slate-400">Email directo</span>
                    <p class="text-sm font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      pinto.12574531@gmail.com
                    </p>
                  </div>
                </div>
                <span class="h-9 w-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 flex items-center justify-center text-xs group-hover:scale-110 transition-transform">
                  <i class="fa-regular fa-copy"></i>
                </span>
              </div>

              <!-- Location / Status Card -->
              <div class="glass-card rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800 flex items-center gap-4">
                <div class="h-12 w-12 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-lg">
                  <i class="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <span class="text-[10px] font-black uppercase tracking-wider text-slate-400">Ubicación & Modalidad</span>
                  <p class="text-sm font-bold text-slate-900 dark:text-white">
                    Bolivia (Disponible Remoto & Presencial)
                  </p>
                </div>
              </div>
            </div>

            <!-- Social Links Grid -->
            <div>
              <p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">Redes profesionales</p>
              <div class="flex gap-3">
                <a
                  class="flex-1 px-4 py-3 rounded-xl glass-card text-center text-xs font-bold text-slate-800 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center justify-center gap-2 transition-all"
                  href="https://github.com/JhoeJhl"
                  target="_blank"
                >
                  <i class="fa-brands fa-github text-base"></i>
                  <span>GitHub</span>
                </a>
                <a
                  class="flex-1 px-4 py-3 rounded-xl glass-card text-center text-xs font-bold text-slate-800 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center justify-center gap-2 transition-all"
                  href="https://www.linkedin.com/in/joel-pinto-84219723a/"
                  target="_blank"
                >
                  <i class="fa-brands fa-linkedin text-base text-blue-500"></i>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          <!-- Contact Form Side (Span 7) -->
          <div class="lg:col-span-7">
            <div class="glass-card rounded-3xl p-8 sm:p-10 border border-slate-200/80 dark:border-slate-800/80 shadow-2xl relative">
              <h3 class="text-xl font-bold font-heading mb-6 text-slate-900 dark:text-white flex items-center gap-2">
                <i class="fa-solid fa-paper-plane text-indigo-500 text-base"></i>
                <span>Enviarme un mensaje</span>
              </h3>

              <form id="contactForm" class="space-y-5">
                <div>
                  <label class="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">Nombre completo</label>
                  <div class="relative">
                    <span class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                      <i class="fa-regular fa-user text-sm"></i>
                    </span>
                    <input
                      class="w-full rounded-2xl bg-slate-100/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 pl-11 pr-4 py-3.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none"
                      type="text"
                      placeholder="Ej. María García"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label class="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">Correo electrónico</label>
                  <div class="relative">
                    <span class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                      <i class="fa-regular fa-envelope text-sm"></i>
                    </span>
                    <input
                      class="w-full rounded-2xl bg-slate-100/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 pl-11 pr-4 py-3.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none"
                      type="email"
                      placeholder="tu@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label class="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">Tu mensaje</label>
                  <div class="relative">
                    <span class="absolute top-4 left-0 pl-4 pointer-events-none text-slate-400">
                      <i class="fa-regular fa-comment-dots text-sm"></i>
                    </span>
                    <textarea
                      class="h-32 w-full rounded-2xl bg-slate-100/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 pl-11 pr-4 py-3.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none resize-none"
                      placeholder="Cuéntame sobre tu proyecto o consulta..."
                      required
                    ></textarea>
                  </div>
                </div>

                <button
                  class="w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-indigo-700 to-blue-600 text-sm font-bold text-white shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                  type="submit"
                >
                  <i class="fa-solid fa-paper-plane text-xs"></i>
                  <span>Enviar Mensaje</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}