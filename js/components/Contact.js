export function Contact() {
  return `
    <section
      id="contacto"
      class="py-24 border-t border-slate-200/50 dark:border-slate-800/50 bg-slate-950 text-white"
    >
      <div class="mx-auto max-w-6xl px-6">
        <div class="grid gap-16 md:grid-cols-2 items-center">
          <div>
            <h2 class="text-4xl font-extrabold tracking-tight">
              Construyamos algo juntos
            </h2>
            <p class="mt-6 text-slate-400 text-lg leading-relaxed">
              ¿Tienes una idea o un proyecto en mente? Estoy disponible para
              charlar y ver cómo puedo ayudarte.
            </p>

            <div class="mt-12 space-y-8">
              <div>
                <p
                  class="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400 mb-2"
                >
                  Email
                </p>
                <p class="text-xl font-medium">pinto.12574531@gmail.com</p>
              </div>
              <div
                class="flex gap-8 font-bold text-xs uppercase tracking-widest text-slate-500"
              >
                <a class="hover:text-white transition-colors" href="#"
                  >GitHub</a
                >
                <a class="hover:text-white transition-colors" href="#"
                  >LinkedIn</a
                >
              </div>
            </div>
          </div>

          <div
            class="rounded-[2.5rem] bg-white/5 border border-white/10 p-10 backdrop-blur-xl"
          >
            <h3 class="text-xl font-bold mb-8">Mensaje rápido</h3>
            <form class="space-y-4">
              <input
                class="w-full rounded-2xl bg-white/10 border-transparent px-6 py-4 text-sm outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                type="text"
                placeholder="Tu nombre"
                required
              />
              <input
                class="w-full rounded-2xl bg-white/10 border-transparent px-6 py-4 text-sm outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                type="email"
                placeholder="Tu correo"
                required
              />
              <textarea
                class="h-32 w-full rounded-2xl bg-white/10 border-transparent px-6 py-4 text-sm outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                placeholder="Tu mensaje..."
                required
              ></textarea>
              <button
                class="w-full rounded-2xl bg-blue-600 py-4 text-sm font-bold hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/20"
                type="submit"
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `;
}