export function Projects() {
  /*
   * ============================================================
   * CÓMO AÑADIR UN PROYECTO
   * ============================================================
   *
   * 1. Copia el objeto de ejemplo que está comentado dentro del
   *    array "projects" y quita los comentarios (//).
   * 2. Cambia los valores por los de tu proyecto.
   * 3. Guarda el archivo: la tarjeta se mostrará automáticamente.
   *
   * Campos disponibles:
   * - id:          Número único del proyecto (1, 2, 3...).
   * - title:       Nombre del proyecto.
   * - category:    Categoría visible (ej. "Fullstack", "Backend", "IA").
   * - categoryIcon: Clases del icono de FontAwesome y su color.
   * - status:      Estado visible (ej. "En desarrollo", "Completado").
   * - description: Descripción breve del proyecto.
   * - features:    Lista de funcionalidades principales (array de textos).
   * - techs:       Tecnologías usadas (array de textos). Deben coincidir
   *                con las claves de "techBadgeConfig" para tener color
   *                e icono; si no coinciden, se usa un badge genérico.
   * - featured:    true = tarjeta grande de ancho completo (destacado).
   *                false u omitido = tarjeta normal.
   *
   * Para agregar un nuevo icono/tecnología con su color, añade una
   * entrada en "techBadgeConfig" siguiendo el mismo formato.
   * ============================================================
   */
  const projects = [
    // {
    //   id: 1,
    //   title: 'Nombre de tu proyecto',
    //   category: 'Fullstack',
    //   categoryIcon: 'fa-solid fa-layer-group text-indigo-500 dark:text-indigo-400',
    //   status: 'En desarrollo',
    //   description: 'Descripción breve de qué hace el proyecto y qué problema resuelve.',
    //   features: [
    //     'Primera funcionalidad principal',
    //     'Segunda funcionalidad principal',
    //     'Tercera funcionalidad principal'
    //   ],
    //   techs: ['Laravel', 'Vue 3', 'Inertia', 'PostgreSQL'],
    //   featured: false
    // }
  ];

  /*
   * Iconos y colores para los badges de tecnologías.
   * Puedes agregar más tecnologías aquí.
   */
  const techBadgeConfig = {
    Laravel: { icon: 'fa-brands fa-laravel', style: 'bg-red-500/10 text-red-600 border-red-500/30 hover:bg-red-500/20 dark:text-red-400' },
    'Vue 3': { icon: 'fa-brands fa-vuejs', style: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/30 hover:bg-emerald-500/20 dark:text-emerald-400' },
    Inertia: { icon: 'fa-solid fa-bolt', style: 'bg-purple-500/10 text-purple-600 border-purple-500/30 hover:bg-purple-500/20 dark:text-purple-400' },
    PostgreSQL: { icon: 'fa-solid fa-database', style: 'bg-sky-500/10 text-sky-600 border-sky-500/30 hover:bg-sky-500/20 dark:text-sky-400' },
    MySQL: { icon: 'fa-solid fa-database', style: 'bg-blue-500/10 text-blue-600 border-blue-500/30 hover:bg-blue-500/20 dark:text-blue-400' },
    Tailwind: { icon: 'fa-solid fa-wind', style: 'bg-cyan-500/10 text-cyan-600 border-cyan-500/30 hover:bg-cyan-500/20 dark:text-cyan-400' },
    Redis: { icon: 'fa-solid fa-server', style: 'bg-red-600/10 text-red-600 border-red-600/30 hover:bg-red-600/20 dark:text-red-500' },
    Docker: { icon: 'fa-brands fa-docker', style: 'bg-blue-500/10 text-blue-600 border-blue-500/30 hover:bg-blue-500/20 dark:text-blue-400' },
    AWS: { icon: 'fa-brands fa-aws', style: 'bg-amber-600/10 text-amber-600 border-amber-600/30 hover:bg-amber-600/20 dark:text-amber-500' },
    IA: { icon: 'fa-solid fa-robot', style: 'bg-cyan-500/10 text-cyan-700 border-cyan-500/30 hover:bg-cyan-500/20 dark:text-cyan-300' },
    Stripe: { icon: 'fa-brands fa-stripe-s', style: 'bg-indigo-500/10 text-indigo-600 border-indigo-500/30 hover:bg-indigo-500/20 dark:text-indigo-400' },
    Git: { icon: 'fa-brands fa-git-alt', style: 'bg-orange-600/10 text-orange-600 border-orange-600/30 hover:bg-orange-600/20 dark:text-orange-500' },
    Testing: { icon: 'fa-solid fa-vial', style: 'bg-green-500/10 text-green-600 border-green-500/30 hover:bg-green-500/20 dark:text-green-400' },
    WebSockets: { icon: 'fa-solid fa-plug', style: 'bg-yellow-500/10 text-yellow-700 border-yellow-500/30 hover:bg-yellow-500/20 dark:text-yellow-400' },
    Sanctum: { icon: 'fa-solid fa-shield-halved', style: 'bg-slate-500/10 text-slate-600 border-slate-500/30 hover:bg-slate-500/20 dark:bg-slate-700/40 dark:text-slate-300 dark:border-slate-600/30' },
    'REST API': { icon: 'fa-solid fa-network-wired', style: 'bg-indigo-500/10 text-indigo-600 border-indigo-500/30 hover:bg-indigo-500/20 dark:text-indigo-400' }
  };

  const renderBadge = (tech) => {
    const config = techBadgeConfig[tech] || {
      icon: 'fa-solid fa-code',
      style: 'bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700'
    };

    return `
      <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold border ${config.style} transition-all hover:scale-105 shadow-sm">
        <i class="${config.icon} text-xs"></i>
        <span>${tech}</span>
      </span>
    `;
  };

  const renderProjectCard = (project) => {
    if (project.featured) {
      return `
        <article class="project-card glass-card rounded-3xl p-7 sm:p-9 border-2 border-amber-500/40 bg-gradient-to-br from-amber-50 via-white to-indigo-50 dark:from-amber-950/20 dark:via-slate-900 dark:to-indigo-950/40 shadow-2xl relative overflow-hidden group col-span-full">
          <div class="absolute -right-20 -bottom-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-amber-500/20 transition-all duration-500"></div>

          <div class="relative z-10 space-y-6">
            <div class="flex flex-wrap items-center justify-between gap-3">
              <span class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-700 text-xs font-black uppercase tracking-widest border border-amber-300 shadow-inner dark:bg-amber-500/20 dark:text-amber-300 dark:border-amber-500/40">
                <i class="${project.categoryIcon}"></i>
                <span>${project.category}</span>
              </span>
              <span class="text-xs font-bold text-amber-700 bg-amber-100/80 px-3 py-1 rounded-lg border border-amber-200 dark:text-amber-300 dark:bg-amber-500/10 dark:border-amber-500/30">
                <i class="fa-solid fa-hammer text-[10px] mr-1"></i> ${project.status}
              </span>
            </div>

            <div class="space-y-3">
              <h3 class="text-2xl sm:text-4xl font-black font-heading text-slate-900 dark:text-white tracking-tight">
                <span class="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700 bg-clip-text text-transparent dark:from-amber-200 dark:via-amber-400 dark:to-amber-100">
                  ${project.title}
                </span>
              </h3>
              <p class="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-4xl">
                ${project.description}
              </p>
            </div>

            <div class="space-y-2 pt-2">
              <h4 class="text-xs font-black uppercase tracking-wider text-amber-600 flex items-center gap-2 dark:text-amber-400/90">
                <i class="fa-solid fa-list-check text-xs"></i> Funcionalidades principales
              </h4>
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                ${project.features.map(feature => `
                  <div class="flex items-center gap-2 p-2.5 rounded-xl bg-white/70 border border-slate-200 text-xs font-bold text-slate-700 dark:bg-slate-800/60 dark:border-slate-700/60 dark:text-slate-200">
                    <i class="fa-solid fa-circle-check text-amber-500 text-xs shrink-0 dark:text-amber-400"></i>
                    <span>${feature}</span>
                  </div>
                `).join('')}
              </div>
            </div>

            <div class="space-y-2 pt-2">
              <h4 class="text-xs font-black uppercase tracking-wider text-slate-500 flex items-center gap-2 dark:text-slate-400">
                <i class="fa-solid fa-microchip text-xs"></i> Stack tecnológico
              </h4>
              <div class="flex flex-wrap gap-2">
                ${project.techs.map(renderBadge).join('')}
              </div>
            </div>

            <div class="pt-6 border-t border-amber-500/20 flex flex-wrap items-center justify-between gap-4">
              <a class="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-all hover:scale-105 inline-flex items-center gap-2 dark:bg-white dark:hover:bg-slate-100 dark:text-slate-900" href="https://github.com/JhoeJhl" target="_blank" rel="noopener noreferrer">
                <i class="fa-brands fa-github text-base"></i>
                <span>Ver repositorio en GitHub</span>
              </a>
              <span class="text-xs font-bold text-slate-500 dark:text-slate-400">
                <i class="fa-solid fa-code-branch mr-1"></i> Repositorio en construcción
              </span>
            </div>
          </div>
        </article>
      `;
    }

    return `
      <article class="project-card glass-card rounded-3xl p-6 sm:p-7 border border-slate-200 flex flex-col justify-between space-y-6 hover:border-indigo-500/40 transition-all duration-300 group dark:border-slate-800/80">
        <div class="space-y-4">
          <div class="flex items-start justify-between gap-2">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-indigo-600 text-[11px] font-bold border border-slate-200 dark:bg-slate-800/90 dark:text-indigo-300 dark:border-slate-700">
              <i class="${project.categoryIcon} text-xs"></i>
              <span>${project.category}</span>
            </span>
            <span class="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full border border-emerald-200 shrink-0 dark:text-emerald-300 dark:bg-emerald-500/10 dark:border-emerald-500/30">
              ${project.status}
            </span>
          </div>

          <div class="space-y-2">
            <h3 class="text-lg sm:text-xl font-bold font-heading text-slate-900 group-hover:text-indigo-600 transition-colors dark:text-white dark:group-hover:text-indigo-400">
              ${project.title}
            </h3>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed dark:text-slate-300">
              ${project.description}
            </p>
          </div>

          <ul class="space-y-1.5">
            ${project.features.map(feature => `
              <li class="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                <i class="fa-solid fa-circle-check text-emerald-500 text-[10px] mt-0.5 shrink-0 dark:text-emerald-400"></i>
                <span>${feature}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <div class="space-y-4">
          <div class="flex flex-wrap gap-1.5 pt-2">
            ${project.techs.map(renderBadge).join('')}
          </div>

          <div class="pt-4 border-t border-slate-200 flex justify-between items-center text-xs font-bold dark:border-slate-800/80">
            <a class="text-slate-600 hover:text-slate-900 flex items-center gap-1.5 transition-colors dark:text-slate-300 dark:hover:text-white" href="https://github.com/JhoeJhl" target="_blank" rel="noopener noreferrer">
              <i class="fa-brands fa-github text-base"></i>
              <span>Ver en GitHub</span>
            </a>
            <span class="text-[10px] font-bold text-slate-400 dark:text-slate-500">
              <i class="fa-solid fa-code-branch mr-1"></i> En construcción
            </span>
          </div>
        </div>
      </article>
    `;
  };

  /*
   * Estado visual cuando todavía no hay proyectos.
   * Se muestra automáticamente mientras el array "projects" esté vacío.
   */
  const renderEmptyState = () => `
    <div class="project-card glass-card col-span-full rounded-3xl border border-dashed border-slate-300 p-10 sm:p-14 text-center dark:border-slate-700">
      <div class="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600 text-2xl dark:bg-indigo-950/60 dark:text-indigo-400">
        <i class="fa-solid fa-diagram-project"></i>
      </div>

      <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-[11px] font-black uppercase tracking-widest border border-amber-200 dark:bg-amber-500/10 dark:text-amber-300 dark:border-amber-500/30">
        <span class="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse"></span>
        En desarrollo
      </span>

      <h3 class="mt-4 text-xl sm:text-2xl font-black font-heading text-slate-900 dark:text-white">
        Proyectos en preparación
      </h3>
      <p class="mx-auto mt-2 max-w-xl text-sm text-slate-600 dark:text-slate-400">
        Estoy construyendo y documentando nuevos proyectos fullstack. Muy pronto estarán disponibles aquí y en mi GitHub.
      </p>

      <a
        href="https://github.com/JhoeJhl"
        target="_blank"
        rel="noopener noreferrer"
        class="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all hover:scale-105 dark:bg-white dark:hover:bg-slate-100 dark:text-slate-900"
      >
        <i class="fa-brands fa-github text-base"></i>
        <span>Visitar mi GitHub</span>
      </a>
    </div>
  `;

  return `
    <section
      id="proyectos"
      class="relative py-20 border-t border-slate-200/60 dark:border-slate-800/50 overflow-hidden"
    >
      <div class="glow-blob w-[500px] h-[500px] bg-indigo-500/10 dark:bg-indigo-600/10 bottom-0 left-0"></div>

      <div class="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div class="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-indigo-500/30 text-indigo-600 text-xs font-bold uppercase tracking-widest mb-2 dark:text-indigo-400">
            <i class="fa-solid fa-code-fork text-xs"></i>
            <span>Portafolio de Soluciones</span>
          </div>
          <h2 class="text-3xl sm:text-5xl font-black font-heading tracking-tight text-slate-900 dark:text-white">
            Proyectos <span class="gradient-text">Destacados</span>
          </h2>
          <p class="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Pronto estaré publicando aquí los proyectos fullstack en los que estoy trabajando con Laravel, Vue.js, Inertia, PostgreSQL e Inteligencia Artificial.
          </p>
        </div>

        <div id="projectsGrid" class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          ${projects.length ? projects.map(renderProjectCard).join('') : renderEmptyState()}
        </div>
      </div>
    </section>
  `;
}
