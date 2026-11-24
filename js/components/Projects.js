export function Projects() {
  const projects = [
    {
      id: 1,
      title: 'ERP Empresarial con Inteligencia Artificial',
      category: 'Fullstack · Proyecto Principal',
      categoryIcon: 'fa-solid fa-crown text-amber-500 dark:text-amber-400',
      status: 'En desarrollo',
      description:
        'Sistema de planificación de recursos empresariales que unifica inventario multi-bodega, facturación, compras, contabilidad y un dashboard analítico con predicciones asistidas por IA.',
      features: [
        'Inventario multi-bodega y control de stock',
        'Facturación, compras y contabilidad integradas',
        'Dashboard con KPIs y predicciones por IA',
        'Roles y permisos granulares por usuario'
      ],
      techs: ['Laravel', 'Vue 3', 'Inertia', 'PostgreSQL', 'Redis', 'Docker', 'IA'],
      featured: true
    },
    {
      id: 2,
      title: 'SaaS Multiempresa de Gestión de Proyectos',
      category: 'SaaS · Fullstack',
      categoryIcon: 'fa-solid fa-layer-group text-indigo-500 dark:text-indigo-400',
      status: 'En desarrollo',
      description:
        'Plataforma multitenant para equipos de trabajo con tableros Kanban, seguimiento de tareas, cronogramas y suscripciones, aislando los datos de cada empresa.',
      features: [
        'Arquitectura multitenant con aislamiento de datos',
        'Tableros Kanban y seguimiento de tareas',
        'Suscripciones y planes por empresa',
        'Notificaciones y actividad en tiempo real'
      ],
      techs: ['Laravel', 'Vue 3', 'Inertia', 'PostgreSQL', 'Redis', 'Stripe', 'Docker']
    },
    {
      id: 3,
      title: 'E-commerce Fullstack con Pagos en Línea',
      category: 'E-commerce · Fullstack',
      categoryIcon: 'fa-solid fa-cart-shopping text-emerald-500 dark:text-emerald-400',
      status: 'En desarrollo',
      description:
        'Tienda en línea completa con catálogo de productos, carrito persistente, cupones, checkout y panel administrativo para pedidos, clientes e inventario.',
      features: [
        'Catálogo con filtros y búsqueda avanzada',
        'Carrito persistente y proceso de checkout',
        'Integración con pasarela de pagos',
        'Panel de pedidos, clientes e inventario'
      ],
      techs: ['Laravel', 'Vue 3', 'Inertia', 'MySQL', 'Stripe', 'Tailwind', 'Git']
    },
    {
      id: 4,
      title: 'Plataforma de Cursos Online',
      category: 'E-learning · Fullstack',
      categoryIcon: 'fa-solid fa-graduation-cap text-purple-500 dark:text-purple-400',
      status: 'En desarrollo',
      description:
        'Sistema de educación virtual con módulos y lecciones en video, seguimiento de progreso, evaluaciones, certificados y gestión de instructores.',
      features: [
        'Cursos con módulos y lecciones en video',
        'Seguimiento de progreso por estudiante',
        'Evaluaciones y generación de certificados',
        'Panel para instructores y administradores'
      ],
      techs: ['Laravel', 'Vue 3', 'Inertia', 'PostgreSQL', 'Tailwind', 'AWS', 'Testing']
    },
    {
      id: 5,
      title: 'Sistema de Gestión Clínica',
      category: 'Salud · Fullstack',
      categoryIcon: 'fa-solid fa-stethoscope text-sky-500 dark:text-sky-400',
      status: 'En desarrollo',
      description:
        'Plataforma para clínicas y consultorios con historia clínica electrónica, agenda de citas, recetas, tratamientos y facturación de servicios médicos.',
      features: [
        'Historia clínica electrónica de pacientes',
        'Agenda de citas y recordatorios',
        'Recetas y seguimiento de tratamientos',
        'Facturación de consultas y servicios'
      ],
      techs: ['Laravel', 'Vue 3', 'Inertia', 'PostgreSQL', 'Tailwind', 'Docker']
    },
    {
      id: 6,
      title: 'Dashboard Analítico con API de IA',
      category: 'Data · Backend + IA',
      categoryIcon: 'fa-solid fa-chart-line text-cyan-500 dark:text-cyan-400',
      status: 'En desarrollo',
      description:
        'API REST y panel analítico que consume datos de negocio para generar reportes, exportaciones y recomendaciones automáticas mediante modelos de IA.',
      features: [
        'API REST documentada y autenticada',
        'Reportes y exportaciones en PDF y Excel',
        'Gráficos interactivos de KPIs',
        'Recomendaciones automáticas con IA'
      ],
      techs: ['Laravel', 'REST API', 'Sanctum', 'PostgreSQL', 'Vue 3', 'IA', 'Testing']
    },
    {
      id: 7,
      title: 'Sistema de Delivery en Tiempo Real',
      category: 'Tiempo real · Fullstack',
      categoryIcon: 'fa-solid fa-motorcycle text-orange-500 dark:text-orange-400',
      status: 'En desarrollo',
      description:
        'Aplicación de pedidos y reparto con seguimiento de repartidores en vivo, notificaciones push, asignación de rutas y actualización de estados sin recargar la página.',
      features: [
        'Seguimiento de pedidos en tiempo real',
        'Notificaciones push y alertas de estado',
        'Asignación y control de repartidores',
        'Panel de pedidos y reportes de entrega'
      ],
      techs: ['Laravel', 'Vue 3', 'Inertia', 'MySQL', 'Redis', 'WebSockets', 'Docker']
    }
  ];

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
            Una selección de proyectos fullstack pensados para resolver problemas reales con Laravel, Vue.js, Inertia, PostgreSQL e Inteligencia Artificial.
          </p>
        </div>

        <div id="projectsGrid" class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          ${projects.map(renderProjectCard).join('')}
        </div>

        <div class="mt-14 text-center space-y-3">
          <a
            href="https://github.com/JhoeJhl"
            target="_blank"
            rel="noopener noreferrer"
            class="px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-indigo-700 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-bold text-sm shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 transition-all hover:scale-105 active:scale-95 inline-flex items-center gap-3 group"
          >
            <i class="fa-brands fa-github text-base"></i>
            <span>Ver todos los repositorios en GitHub</span>
            <i class="fa-solid fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
          </a>
          <p class="text-xs text-slate-500 dark:text-slate-400">
            Cada proyecto se publicará en GitHub a medida que avance su desarrollo.
          </p>
        </div>
      </div>
    </section>
  `;
}
