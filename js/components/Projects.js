export function Projects() {
  return `
    <section
      id="proyectos"
      class="py-24 border-t border-slate-200/50 dark:border-slate-800/50"
    >
      <div class="mx-auto max-w-6xl px-6">
        <h2 class="text-3xl font-bold tracking-tight mb-12">Proyectos</h2>

        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <article
            class="flex flex-col rounded-[2rem] border border-slate-200 bg-white p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 dark:border-slate-800 dark:bg-slate-900/50 overflow-hidden"
          >
            <h3 class="text-lg font-bold">Sistema de Agenda con IA</h3>
            <p
              class="mt-4 text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex-grow"
            >
              Sistema de planificacion como tareas, reuniones y demas un
              calendario interactivo con IA
            </p>
            <div class="mt-8 flex flex-wrap gap-2">
              <span
                class="px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-[14px] font-bold uppercase"
                >Laravel 12</span
              >
              <span
                class="px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-[14px] font-bold uppercase"
                >IA</span
              >
              <span
                class="px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-[14px] font-bold uppercase"
                >Vue.js</span
              >
              <span
                class="px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-[14px] font-bold uppercase"
                >TailwindCss</span
              >
            </div>
            <div
              class="mt-8 flex gap-4 text-xs font-bold border-t border-slate-100 dark:border-slate-800 pt-6"
            >
              <a
                class="hover:text-blue-600 underline transition-colors"
                href="#"
                >Demo</a
              >
              <a
                class="hover:text-blue-600 underline transition-colors"
                href="#"
                >Código</a
              >
            </div>
          </article>

          <article
            class="flex flex-col rounded-[2rem] border border-slate-200 bg-white p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 dark:border-slate-800 dark:bg-slate-900/50"
          >
            <h3 class="text-lg font-bold">Generador automático de tareas</h3>
            <p
              class="mt-4 text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex-grow"
            >
              Sistema que genera tareas rutinarias para ser proactivo y tambien
              con Quizz para validar lo aprendido y tambien con un sistema de
              calificacion mas racha de dias de aprendisaje.
            </p>
            <div class="mt-8 flex flex-wrap gap-2">
              <span
                class="px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-[14px] font-bold uppercase"
                >Laravel 12</span
              >
              <span
                class="px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-[14px] font-bold uppercase"
                >Vue.js</span
              >
              <span
                class="px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-[14px] font-bold uppercase"
                >Tailwind</span
              >
              <span
                class="px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-[14px] font-bold uppercase"
                >OpenAI API</span
              >
            </div>
            <div
              class="mt-8 flex gap-4 text-xs font-bold border-t border-slate-100 dark:border-slate-800 pt-6"
            >
              <a
                class="hover:text-blue-600 underline transition-colors"
                href="#"
                >Demo</a
              >
              <a
                class="hover:text-blue-600 underline transition-colors"
                href="#"
                >Código</a
              >
            </div>
          </article>

          <article
            class="flex flex-col rounded-[2rem] border border-slate-200 bg-white p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 dark:border-slate-800 dark:bg-slate-900/50"
          >
            <h3 class="text-lg font-bold">
              Plataforma de Automatización Inteligente de Tareas
            </h3>
            <p
              class="mt-4 text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex-grow"
            >
              Aplicacion Web que permite a los usuarios crear, gestionar y
              automatizar flujos de Trabajo mediante reglas personalizadas y
              asistencia de inteligencia artificial. El sistema permite conectar
              diferentes acciones (por ejemplo envio de correos, generacion de
              reportes o notificaciones) para ejecutarlas automaticamente.
            </p>
            <div class="mt-8 flex flex-wrap gap-2">
              <span
                class="px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-[10px] font-bold uppercase"
                >Laravel 12</span
              >
              <span
                class="px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-[10px] font-bold uppercase"
                >Vue.js</span
              >
              <span
                class="px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-[10px] font-bold uppercase"
                >PostgreSQL</span
              >
              <span
                class="px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-[10px] font-bold uppercase"
                >n8n</span
              >
              <span
                class="px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-[10px] font-bold uppercase"
                >OpenAi API</span
              >
            </div>
            <div
              class="mt-8 flex gap-4 text-xs font-bold border-t border-slate-100 dark:border-slate-800 pt-6"
            >
              <a
                class="hover:text-blue-600 underline transition-colors"
                href="#"
                >Ver Pagina</a
              >
            </div>
          </article>
        </div>
      </div>
    </section>
  `;
}