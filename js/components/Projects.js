export function Projects() {
  return `
    <section
      id="proyectos"
      class="relative py-20 border-t border-slate-200/50 dark:border-slate-800/50 overflow-hidden"
    >
      <!-- Background Ambient Glow -->
      <div class="glow-blob w-[500px] h-[500px] bg-indigo-500/10 dark:bg-indigo-600/10 bottom-0 left-0"></div>

      <div class="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <!-- Section Title -->
        <div class="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <h2 class="text-3xl sm:text-5xl font-black font-heading tracking-tight text-slate-900 dark:text-white">
            Proyectos <span class="gradient-text">Destacados</span>
          </h2>
          <p class="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Una selección de mis trabajos principales enfocados en desarrollo web fullstack, integración de Inteligencia Artificial y bases de datos.
          </p>
        </div>

        <!-- Grid of 6 Featured Projects (NO header banners like "MAQUETACION WEB") -->
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <!-- Featured Project 1 -->
          <article class="glass-card rounded-3xl p-6 sm:p-7 border border-slate-300 dark:border-slate-800 flex flex-col justify-between space-y-6">
            <div class="space-y-3">
              <h3 class="text-xl font-bold font-heading text-slate-900 dark:text-white">
                Plataforma de Gestión de Cursos Online
              </h3>
              <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Sistema de e-learning completo con panel de administración, gestión de módulos, lecciones en video y seguimiento de estudiantes.
              </p>
            </div>
            <div class="space-y-4">
              <div class="flex flex-wrap gap-1.5">
                <span class="px-2.5 py-1 rounded-lg bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 text-xs font-bold border border-indigo-200 dark:border-indigo-900/40">Laravel 12</span>
                <span class="px-2.5 py-1 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-xs font-bold border border-emerald-200 dark:border-emerald-900/40">Vue.js</span>
                <span class="px-2.5 py-1 rounded-lg bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-xs font-bold border border-blue-200 dark:border-blue-900/40">MySQL</span>
              </div>
              <div class="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center text-xs font-bold">
                <a class="text-indigo-600 dark:text-indigo-400 hover:underline" href="#">Ver Demo</a>
                <a class="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white" href="#">Código GitHub</a>
              </div>
            </div>
          </article>

          <!-- Featured Project 2 -->
          <article class="glass-card rounded-3xl p-6 sm:p-7 border border-slate-300 dark:border-slate-800 flex flex-col justify-between space-y-6">
            <div class="space-y-3">
              <h3 class="text-xl font-bold font-heading text-slate-900 dark:text-white">
                Sistema de Agenda e Inteligencia Artificial
              </h3>
              <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Planificador inteligente de tareas y reuniones integrado con un calendario dinámico asistido por IA para optimizar la productividad.
              </p>
            </div>
            <div class="space-y-4">
              <div class="flex flex-wrap gap-1.5">
                <span class="px-2.5 py-1 rounded-lg bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 text-xs font-bold border border-indigo-200 dark:border-indigo-900/40">Laravel 12</span>
                <span class="px-2.5 py-1 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-xs font-bold border border-emerald-200 dark:border-emerald-900/40">Vue.js</span>
                <span class="px-2.5 py-1 rounded-lg bg-cyan-100 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300 text-xs font-bold border border-cyan-200 dark:border-cyan-900/40">OpenAI API</span>
              </div>
              <div class="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center text-xs font-bold">
                <a class="text-indigo-600 dark:text-indigo-400 hover:underline" href="#">Ver Demo</a>
                <a class="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white" href="#">Código GitHub</a>
              </div>
            </div>
          </article>

          <!-- Featured Project 3 -->
          <article class="glass-card rounded-3xl p-6 sm:p-7 border border-slate-300 dark:border-slate-800 flex flex-col justify-between space-y-6">
            <div class="space-y-3">
              <h3 class="text-xl font-bold font-heading text-slate-900 dark:text-white">
                Generador Automático de Cuestionarios
              </h3>
              <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Sistema dinámico que genera rutinas de aprendizaje y cuestionarios automáticos con evaluaciones y retroalimentación inteligente.
              </p>
            </div>
            <div class="space-y-4">
              <div class="flex flex-wrap gap-1.5">
                <span class="px-2.5 py-1 rounded-lg bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 text-xs font-bold border border-indigo-200 dark:border-indigo-900/40">Laravel 12</span>
                <span class="px-2.5 py-1 rounded-lg bg-cyan-100 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300 text-xs font-bold border border-cyan-200 dark:border-cyan-900/40">OpenAI API</span>
                <span class="px-2.5 py-1 rounded-lg bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-xs font-bold border border-blue-200 dark:border-blue-900/40">MySQL</span>
              </div>
              <div class="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center text-xs font-bold">
                <a class="text-indigo-600 dark:text-indigo-400 hover:underline" href="#">Ver Demo</a>
                <a class="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white" href="#">Código GitHub</a>
              </div>
            </div>
          </article>

          <!-- Featured Project 4 -->
          <article class="glass-card rounded-3xl p-6 sm:p-7 border border-slate-300 dark:border-slate-800 flex flex-col justify-between space-y-6">
            <div class="space-y-3">
              <h3 class="text-xl font-bold font-heading text-slate-900 dark:text-white">
                Dashboard Administrativo Analítico
              </h3>
              <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Panel SPA interactivo con gráficos en tiempo real, consumo de servicios web e interfaz responsiva basada en componentes.
              </p>
            </div>
            <div class="space-y-4">
              <div class="flex flex-wrap gap-1.5">
                <span class="px-2.5 py-1 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-xs font-bold border border-emerald-200 dark:border-emerald-900/40">Vue.js</span>
                <span class="px-2.5 py-1 rounded-lg bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 text-xs font-bold border border-amber-200 dark:border-amber-900/40">JavaScript</span>
                <span class="px-2.5 py-1 rounded-lg bg-sky-100 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 text-xs font-bold border border-sky-200 dark:border-sky-900/40">TailwindCSS</span>
              </div>
              <div class="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center text-xs font-bold">
                <a class="text-indigo-600 dark:text-indigo-400 hover:underline" href="#">Ver Demo</a>
                <a class="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white" href="#">Código GitHub</a>
              </div>
            </div>
          </article>

          <!-- Featured Project 5 -->
          <article class="glass-card rounded-3xl p-6 sm:p-7 border border-slate-300 dark:border-slate-800 flex flex-col justify-between space-y-6">
            <div class="space-y-3">
              <h3 class="text-xl font-bold font-heading text-slate-900 dark:text-white">
                Sistema CRUD de Control de Usuarios
              </h3>
              <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Aplicación web backend para autenticación, asignación de permisos, roles y gestión de bases de datos relacionales.
              </p>
            </div>
            <div class="space-y-4">
              <div class="flex flex-wrap gap-1.5">
                <span class="px-2.5 py-1 rounded-lg bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 text-xs font-bold border border-indigo-200 dark:border-indigo-900/40">PHP</span>
                <span class="px-2.5 py-1 rounded-lg bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-xs font-bold border border-blue-200 dark:border-blue-900/40">MySQL</span>
                <span class="px-2.5 py-1 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-bold">HTML5 / CSS3</span>
              </div>
              <div class="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center text-xs font-bold">
                <a class="text-indigo-600 dark:text-indigo-400 hover:underline" href="#">Ver Demo</a>
                <a class="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white" href="#">Código GitHub</a>
              </div>
            </div>
          </article>

          <!-- Featured Project 6 -->
          <article class="glass-card rounded-3xl p-6 sm:p-7 border border-slate-300 dark:border-slate-800 flex flex-col justify-between space-y-6">
            <div class="space-y-3">
              <h3 class="text-xl font-bold font-heading text-slate-900 dark:text-white">
                Cotizador Web Interactivo
              </h3>
              <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Herramienta cliente interactiva en JavaScript para el cálculo dinámico de presupuestos de desarrollo de software.
              </p>
            </div>
            <div class="space-y-4">
              <div class="flex flex-wrap gap-1.5">
                <span class="px-2.5 py-1 rounded-lg bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 text-xs font-bold border border-amber-200 dark:border-amber-900/40">JavaScript</span>
                <span class="px-2.5 py-1 rounded-lg bg-orange-100 dark:bg-orange-950/60 text-orange-700 dark:text-orange-300 text-xs font-bold border border-orange-200 dark:border-orange-900/40">HTML5</span>
                <span class="px-2.5 py-1 rounded-lg bg-sky-100 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 text-xs font-bold border border-sky-200 dark:border-sky-900/40">CSS3</span>
              </div>
              <div class="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center text-xs font-bold">
                <a class="text-indigo-600 dark:text-indigo-400 hover:underline" href="#">Ver Demo</a>
                <a class="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white" href="#">Código GitHub</a>
              </div>
            </div>
          </article>
        </div>

        <!-- Button to open More Projects Modal -->
        <div class="mt-14 text-center">
          <button
            id="openMoreProjectsBtn"
            class="px-8 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-xl shadow-indigo-600/25 hover:shadow-indigo-600/40 transition-all hover:scale-105 active:scale-95 inline-flex items-center gap-2"
          >
            <span>Ver más proyectos</span>
            <i class="fa-solid fa-arrow-right text-xs"></i>
          </button>
        </div>
      </div>
    </section>

    <!-- Modal for 10 Additional Projects (Ranging from Basic to Advanced) -->
    <div
      id="moreProjectsModal"
      class="hidden fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto"
    >
      <div class="relative w-full max-w-5xl bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-300 dark:border-slate-800 shadow-2xl space-y-6 my-8 max-h-[90vh] overflow-y-auto">
        <!-- Modal Header -->
        <div class="flex items-center justify-between pb-6 border-b border-slate-200 dark:border-slate-800 sticky top-0 bg-white dark:bg-slate-900 z-10">
          <div>
            <h3 class="text-2xl font-black font-heading text-slate-900 dark:text-white">
              Catálogo de Proyectos
            </h3>
            <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Proyectos desde desarrollo web básico hasta plataformas completas combinando distintas tecnologías.
            </p>
          </div>
          <button
            id="closeMoreProjectsBtn"
            class="h-10 w-10 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 font-bold flex items-center justify-center transition-all"
            title="Cerrar"
          >
            <i class="fa-solid fa-xmark text-lg"></i>
          </button>
        </div>

        <!-- Grid of 10 Additional Projects -->
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          <!-- Additional Project 1 -->
          <div class="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 space-y-3">
            <h4 class="text-base font-bold text-slate-900 dark:text-white">1. Landing Page Corporativa Responsiva</h4>
            <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Sitio web institucional optimizado para la presentación de empresas con diseño responsivo y animaciones en CSS.
            </p>
            <div class="flex flex-wrap gap-1.5 pt-1">
              <span class="px-2 py-0.5 rounded-md bg-orange-100 dark:bg-orange-950/60 text-orange-700 dark:text-orange-300 text-[11px] font-bold">HTML5</span>
              <span class="px-2 py-0.5 rounded-md bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-[11px] font-bold">CSS3</span>
            </div>
          </div>

          <!-- Additional Project 2 -->
          <div class="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 space-y-3">
            <h4 class="text-base font-bold text-slate-900 dark:text-white">2. Calculadora Interactivas de Tarifas</h4>
            <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Herramienta cliente desarrollada en Vanilla JS para realizar cálculos inmediatos con manipulación del DOM.
            </p>
            <div class="flex flex-wrap gap-1.5 pt-1">
              <span class="px-2 py-0.5 rounded-md bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 text-[11px] font-bold">JavaScript</span>
              <span class="px-2 py-0.5 rounded-md bg-orange-100 dark:bg-orange-950/60 text-orange-700 dark:text-orange-300 text-[11px] font-bold">HTML5</span>
            </div>
          </div>

          <!-- Additional Project 3 -->
          <div class="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 space-y-3">
            <h4 class="text-base font-bold text-slate-900 dark:text-white">3. Sistema de Autenticación & API REST</h4>
            <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              API backend en PHP para el registro de usuarios, login con tokens JWT y consultas a base de datos MySQL.
            </p>
            <div class="flex flex-wrap gap-1.5 pt-1">
              <span class="px-2 py-0.5 rounded-md bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 text-[11px] font-bold">PHP</span>
              <span class="px-2 py-0.5 rounded-md bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-[11px] font-bold">MySQL</span>
            </div>
          </div>

          <!-- Additional Project 4 -->
          <div class="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 space-y-3">
            <h4 class="text-base font-bold text-slate-900 dark:text-white">4. Buscador y Filtrador de Empleos TI</h4>
            <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Aplicación web en Vue.js con búsqueda reactiva en tiempo real, filtros dinámicos por tecnología y ubicaciones.
            </p>
            <div class="flex flex-wrap gap-1.5 pt-1">
              <span class="px-2 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-[11px] font-bold">Vue.js</span>
              <span class="px-2 py-0.5 rounded-md bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 text-[11px] font-bold">JavaScript</span>
            </div>
          </div>

          <!-- Additional Project 5 -->
          <div class="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 space-y-3">
            <h4 class="text-base font-bold text-slate-900 dark:text-white">5. Portafolio Web Interactivo</h4>
            <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Sitio web interactivo con cambio de tema claro/oscuro, componentes dinámicos e integración de notificaciones.
            </p>
            <div class="flex flex-wrap gap-1.5 pt-1">
              <span class="px-2 py-0.5 rounded-md bg-sky-100 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 text-[11px] font-bold">TailwindCSS</span>
              <span class="px-2 py-0.5 rounded-md bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 text-[11px] font-bold">JavaScript</span>
            </div>
          </div>

          <!-- Additional Project 6 -->
          <div class="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 space-y-3">
            <h4 class="text-base font-bold text-slate-900 dark:text-white">6. Sistema de Reservas y Citas Médicas</h4>
            <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Plataforma backend en Laravel para la programación de citas, calendario de disponibilidad y alertas.
            </p>
            <div class="flex flex-wrap gap-1.5 pt-1">
              <span class="px-2 py-0.5 rounded-md bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 text-[11px] font-bold">Laravel 12</span>
              <span class="px-2 py-0.5 rounded-md bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-[11px] font-bold">MySQL</span>
            </div>
          </div>

          <!-- Additional Project 7 -->
          <div class="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 space-y-3">
            <h4 class="text-base font-bold text-slate-900 dark:text-white">7. Asistente Virtual de Resumen de Textos</h4>
            <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Herramienta de procesamiento de texto en tiempo real que se conecta a la API de OpenAI para extraer puntos clave.
            </p>
            <div class="flex flex-wrap gap-1.5 pt-1">
              <span class="px-2 py-0.5 rounded-md bg-cyan-100 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300 text-[11px] font-bold">OpenAI API</span>
              <span class="px-2 py-0.5 rounded-md bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 text-[11px] font-bold">JavaScript</span>
            </div>
          </div>

          <!-- Additional Project 8 -->
          <div class="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 space-y-3">
            <h4 class="text-base font-bold text-slate-900 dark:text-white">8. Gestor de Tareas y Hábitos Diarios</h4>
            <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Aplicación de productividad personal con almacenamiento local, estadísticas de cumplimiento y filtros.
            </p>
            <div class="flex flex-wrap gap-1.5 pt-1">
              <span class="px-2 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-[11px] font-bold">Vue.js</span>
              <span class="px-2 py-0.5 rounded-md bg-orange-100 dark:bg-orange-950/60 text-orange-700 dark:text-orange-300 text-[11px] font-bold">HTML5</span>
            </div>
          </div>

          <!-- Additional Project 9 -->
          <div class="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 space-y-3">
            <h4 class="text-base font-bold text-slate-900 dark:text-white">9. Plataforma de Catálogo & Comercio Electrónico</h4>
            <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Catálogo de productos con carrito de compras cliente/servidor, filtro de categorías y gestión de stock.
            </p>
            <div class="flex flex-wrap gap-1.5 pt-1">
              <span class="px-2 py-0.5 rounded-md bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 text-[11px] font-bold">PHP</span>
              <span class="px-2 py-0.5 rounded-md bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-[11px] font-bold">MySQL</span>
            </div>
          </div>

          <!-- Additional Project 10 -->
          <div class="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 space-y-3">
            <h4 class="text-base font-bold text-slate-900 dark:text-white">10. Plataforma Integrada de Cursos & Inteligencia Artificial</h4>
            <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Sistema avanzado Fullstack que combina gestión de cursos, evaluaciones automatizadas con IA y base de datos relacional.
            </p>
            <div class="flex flex-wrap gap-1.5 pt-1">
              <span class="px-2 py-0.5 rounded-md bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 text-[11px] font-bold">Laravel 12</span>
              <span class="px-2 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-[11px] font-bold">Vue.js</span>
              <span class="px-2 py-0.5 rounded-md bg-cyan-100 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300 text-[11px] font-bold">OpenAI API</span>
              <span class="px-2 py-0.5 rounded-md bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-[11px] font-bold">PostgreSQL</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}