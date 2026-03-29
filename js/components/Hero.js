export function Hero() {
  return `
    <section id="inicio" class="mx-auto max-w-6xl px-6 py-16 lg:py-28">
      <div class="grid items-center gap-12 md:grid-cols-2">
        <div class="space-y-6">
          <h1
            class="text-4xl font-extrabold tracking-tight md:text-6xl leading-tight"
          >
            Hola, mi nombre es <br />
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-cyan-400"
            >
              Joel Freddy Pinto Cutili
            </span>
          </h1>
          <p
            class="text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-400 max-w-md"
          >
            Estudiante enfocado en desarrollo web. Trabajo con
            <span class="font-bold text-slate-900 dark:text-white"
              >HTML, TailwindCSS, JavaScript, Vuejs, PHP/Laravel</span
            >
            y bases de datos
            <span class="font-bold text-slate-900 dark:text-white"
              >MySQL, PostgreSQL</span
            >.
          </p>

          <div class="flex flex-wrap gap-4 pt-4">
            <a
              href="#proyectos"
              class="rounded-2xl bg-slate-950 px-8 py-4 text-sm font-bold text-white hover:bg-slate-800 transition-all dark:bg-slate-50 dark:text-slate-950 shadow-xl shadow-slate-200 dark:shadow-none"
            >
              Ver proyectos
            </a>
            <a
              href="#contacto"
              class="rounded-2xl border border-slate-200 bg-white px-8 py-4 text-sm font-bold hover:bg-slate-50 transition-all dark:border-slate-800 dark:bg-transparent dark:hover:bg-slate-900"
            >
              Contacto
            </a>
            <a
              href="CV.pdf"
              target="_blank"
              class="rounded-2xl border border-slate-200 bg-white px-8 py-4 text-sm font-bold hover:bg-slate-50 transition-all dark:border-slate-800 dark:bg-transparent dark:hover:bg-slate-900"
            >
              Visualizar CV
            </a>
          </div>
        </div>

        <div class="relative group">
          <div
            class="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-r from-blue-600 to-cyan-500 opacity-20 blur-xl group-hover:opacity-30 transition duration-1000"
          ></div>
          <div
            class="relative rounded-[2rem] border border-slate-200 bg-white p-8 shadow-2xl dark:border-slate-800 dark:bg-slate-900 transition-transform duration-500"
          >

            <div class="mt-8 space-y-6">
              <div
                class="rounded-2xl bg-slate-50 p-5 dark:bg-slate-950 border border-slate-100 dark:border-slate-800"
              >
                <p
                  class="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2"
                >
                  Actualmente
                </p>
                <p class="text-sm font-medium leading-relaxed">
                  Tecnico Medio en Sistemas Informaticos <br />
                  Estudiante de Ingeniería de Sistemas (9no Semestre) con
                  mención en Informática y Telecomunicaciones, Autodidacta en desarrollo de Aplicaciones Web 
                  .
                </p>
              </div>

              <div>
                <p
                  class="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3"
                >
                  Links de contacto
                </p>
                <div class="flex flex-wrap gap-3">
                  <a
                    class="text-xs font-bold px-4 py-2 rounded-lg bg-slate-900 text-white dark:bg-slate-800 hover:scale-105 transition-transform"
                    href="https://github.com/JhoeJhl"
                    target="_blank"
                    >GitHub</a
                  >
                  <a
                    class="text-xs font-bold px-4 py-2 rounded-lg bg-slate-900 text-white dark:bg-slate-800 hover:scale-105 transition-transform"
                    href="https://www.linkedin.com/in/joel-pinto-84219723a/"
                    target="_blank"
                    >LinkedIn</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}