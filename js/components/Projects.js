export function Projects() {
  const projectsData = [
    // 1. BACKEND LARAVEL
    {
      id: 1,
      title: "Proyecto 1 — Sistema de Hábitos Inteligente",
      category: "backend-laravel",
      categoryName: "Backend Laravel",
      categoryIcon: "fa-brands fa-laravel text-red-500",
      description: "Sistema backend para el seguimiento de rutinas diarias, metas personalizadas, estadísticas de progreso y notificaciones programadas.",
      techs: ["Laravel", "Blade", "Tailwind CSS", "MySQL", "Git"],
      isFeatured: true
    },
    {
      id: 2,
      title: "Proyecto 2 — Sistema de Biblioteca Digital",
      category: "backend-laravel",
      categoryName: "Backend Laravel",
      categoryIcon: "fa-brands fa-laravel text-red-500",
      description: "Plataforma web de administración de catálogo bibliográfico, gestión de préstamos, control de inventario y reservas de libros.",
      techs: ["Laravel", "Blade", "Tailwind CSS", "PostgreSQL", "Git"],
      isFeatured: false
    },
    {
      id: 3,
      title: "Proyecto 3 — Sistema Veterinario",
      category: "backend-laravel",
      categoryName: "Backend Laravel",
      categoryIcon: "fa-brands fa-laravel text-red-500",
      description: "Sistema de gestión médica veterinaria con expedientes clínicos de mascotas, vacunas, agenda de citas e historial de tratamientos.",
      techs: ["Laravel", "Blade", "Tailwind CSS", "MySQL", "Git"],
      isFeatured: false
    },
    {
      id: 4,
      title: "Proyecto 4 — Sistema Inmobiliario",
      category: "backend-laravel",
      categoryName: "Backend Laravel",
      categoryIcon: "fa-brands fa-laravel text-red-500",
      description: "Plataforma de catálogo de propiedades en venta y alquiler, contratos de arrendamiento, gestión de agentes y reservas.",
      techs: ["Laravel", "Blade", "Tailwind CSS", "PostgreSQL", "Git"],
      isFeatured: false
    },
    {
      id: 5,
      title: "Proyecto 5 — Sistema Restaurante QR",
      category: "backend-laravel",
      categoryName: "Backend Laravel",
      categoryIcon: "fa-brands fa-laravel text-red-500",
      description: "Menú digital interactivo mediante códigos QR con comandas en tiempo real a cocina, gestión de mesas y facturación.",
      techs: ["Laravel", "Blade", "Tailwind CSS", "MySQL", "Git"],
      isFeatured: false
    },

    // 2. FRONTEND VUEJS
    {
      id: 6,
      title: "Proyecto 6 — Dashboard Empresarial",
      category: "frontend-vuejs",
      categoryName: "Frontend VueJS",
      categoryIcon: "fa-brands fa-vuejs text-emerald-500",
      description: "Panel de control ejecutivo SPA reactivo con gráficos dinámicos en tiempo real, consumo de APIs y análisis de KPIs empresariales.",
      techs: ["Vue 3", "Composition API", "Pinia", "Vue Router", "Tailwind"],
      isFeatured: true
    },
    {
      id: 7,
      title: "Proyecto 7 — Aplicación Financiera Personal",
      category: "frontend-vuejs",
      categoryName: "Frontend VueJS",
      categoryIcon: "fa-brands fa-vuejs text-emerald-500",
      description: "Gestor interactivo de finanzas personales para registro de ingresos/gastos, presupuestos mensuales y reportes gráficos.",
      techs: ["Vue 3", "Composition API", "Pinia", "Vue Router", "Tailwind"],
      isFeatured: false
    },
    {
      id: 8,
      title: "Proyecto 8 — Kanban tipo Trello",
      category: "frontend-vuejs",
      categoryName: "Frontend VueJS",
      categoryIcon: "fa-brands fa-vuejs text-emerald-500",
      description: "Gestor visual de proyectos en columnas interactivas, tableros personalizables, drag & drop de tarjetas y etiquetas de prioridad.",
      techs: ["Vue 3", "Composition API", "Pinia", "Vue Router", "Tailwind"],
      isFeatured: false
    },
    {
      id: 9,
      title: "Proyecto 9 — Ecommerce Frontend",
      category: "frontend-vuejs",
      categoryName: "Frontend VueJS",
      categoryIcon: "fa-brands fa-vuejs text-emerald-500",
      description: "Tienda online SPA con catálogo interactivo de productos, carrito de compras reactivo con Pinia, filtros en tiempo real y checkout.",
      techs: ["Vue 3", "Composition API", "Pinia", "Vue Router", "Tailwind"],
      isFeatured: false
    },
    {
      id: 10,
      title: "Proyecto 10 — Plataforma de Cursos",
      category: "frontend-vuejs",
      categoryName: "Frontend VueJS",
      categoryIcon: "fa-brands fa-vuejs text-emerald-500",
      description: "Interfaz de e-learning para la navegación de módulos de cursos, lecciones interactivas, reproductor multimedia y evaluaciones.",
      techs: ["Vue 3", "Composition API", "Pinia", "Vue Router", "Tailwind"],
      isFeatured: false
    },

    // 3. LARAVEL + VUE + INERTIA
    {
      id: 11,
      title: "Proyecto 11 — Sistema RRHH",
      category: "laravel-vue-inertia",
      categoryName: "Laravel + Vue + Inertia",
      categoryIcon: "fa-solid fa-layer-group text-purple-400",
      description: "Gestión integral de talento humano, control de asistencia, liquidación de nóminas, evaluaciones de desempeño e incidencias.",
      techs: ["Laravel", "Vue 3", "Inertia", "Tailwind", "PostgreSQL"],
      isFeatured: false
    },
    {
      id: 12,
      title: "Proyecto 12 — Sistema Gestión de Proyectos",
      category: "laravel-vue-inertia",
      categoryName: "Laravel + Vue + Inertia",
      categoryIcon: "fa-solid fa-layer-group text-purple-400",
      description: "Plataforma colaborativa para asignación de tareas, cronogramas de hitos, seguimiento de tiempos de trabajo y gestión de equipos.",
      techs: ["Laravel", "Vue 3", "Inertia", "Tailwind", "PostgreSQL"],
      isFeatured: false
    },
    {
      id: 13,
      title: "Proyecto 13 — Sistema Clínica Médica",
      category: "laravel-vue-inertia",
      categoryName: "Laravel + Vue + Inertia",
      categoryIcon: "fa-solid fa-layer-group text-purple-400",
      description: "Administración de historia clínica electrónica, agenda de doctores, recetas electrónicas, módulo de farmacia y cobros.",
      techs: ["Laravel", "Vue 3", "Inertia", "Tailwind", "PostgreSQL"],
      isFeatured: false
    },
    {
      id: 14,
      title: "Proyecto 14 — Marketplace",
      category: "laravel-vue-inertia",
      categoryName: "Laravel + Vue + Inertia",
      categoryIcon: "fa-solid fa-layer-group text-purple-400",
      description: "Plataforma multivendedor con tiendas independientes, gestión de catálogo, comisiones automáticas y procesamiento de pagos.",
      techs: ["Laravel", "Vue 3", "Inertia", "Tailwind", "PostgreSQL"],
      isFeatured: true
    },
    {
      id: 15,
      title: "Proyecto 15 — ERP Empresarial",
      category: "laravel-vue-inertia",
      categoryName: "Laravel + Vue + Inertia",
      categoryIcon: "fa-solid fa-layer-group text-purple-400",
      description: "Sistema de planificación de recursos empresariales para inventario multi-bodega, facturación electrónica, compras y contabilidad.",
      techs: ["Laravel", "Vue 3", "Inertia", "Tailwind", "PostgreSQL"],
      isFeatured: true
    },

    // 4. OTROS PROYECTOS
    {
      id: 16,
      title: "Proyecto 16 — ERP + Inteligencia Artificial",
      category: "otros-proyectos",
      categoryName: "Otros Proyectos",
      categoryIcon: "fa-solid fa-cubes text-cyan-400",
      description: "Sistema empresarial asistido por IA para predicción de stock, analítica de ventas en tiempo real e integración con microservicios.",
      techs: ["Laravel", "Vue", "Inertia", "APIs", "Docker", "IA", "Testing", "AWS", "WebSockets"],
      isFeatured: true
    },
    {
      id: 17,
      title: "Proyecto 17 — Plataforma SaaS Multiempresa",
      category: "otros-proyectos",
      categoryName: "Otros Proyectos",
      categoryIcon: "fa-solid fa-cubes text-cyan-400",
      description: "Arquitectura SaaS multitenant para gestión de suscripciones, aislamiento estricto de datos por cliente y despliegue automatizado.",
      techs: ["Laravel", "Vue", "Inertia", "APIs", "Docker", "IA", "Testing", "AWS", "WebSockets"],
      isFeatured: false
    },
    {
      id: 18,
      title: "Proyecto 18 — Sistema Delivery con GPS",
      category: "otros-proyectos",
      categoryName: "Otros Proyectos",
      categoryIcon: "fa-solid fa-cubes text-cyan-400",
      description: "Aplicación de seguimiento en vivo de repartidores con GPS, optimización de rutas mediante IA y alertas push via WebSockets.",
      techs: ["Laravel", "Vue", "Inertia", "APIs", "Docker", "IA", "Testing", "AWS", "WebSockets"],
      isFeatured: false
    },
    {
      id: 19,
      title: "Proyecto 19 — Sistema de Seguridad Empresarial",
      category: "otros-proyectos",
      categoryName: "Otros Proyectos",
      categoryIcon: "fa-solid fa-cubes text-cyan-400",
      description: "Control de acceso centralizado, monitoreo de auditoría en tiempo real, detección de anomalías por IA y cifrado de datos.",
      techs: ["Laravel", "Vue", "Inertia", "APIs", "Docker", "IA", "Testing", "AWS", "WebSockets"],
      isFeatured: false
    },

    // 5. PROYECTO GRANDE
    {
      id: 20,
      title: 'Proyecto 20 — Business Intelligence ERP con IA',
      category: "proyecto-grande",
      categoryName: "Proyecto Grande (Flagship)",
      categoryIcon: "fa-solid fa-crown text-amber-400",
      description: "Sistema corporativo completo e integral de Inteligencia de Negocios que unifica ERP, Dashboard avanzado, IA predictiva, reportes PDF automatizados, exportaciones, chat interno en tiempo real, notificaciones, roles, Docker, Redis, Queues, Testing y despliegue en AWS.",
      techs: ["Laravel", "Vue", "Inertia", "PostgreSQL", "ERP", "Dashboard avanzado", "IA", "Reportes PDF", "Exportaciones", "Chat interno", "Notificaciones", "Roles", "Docker", "Redis", "Queues", "Testing", "AWS"],
      isFeatured: true,
      features: [
        "ERP Completo e Integrado",
        "Dashboard Analítico Avanzado",
        "Inteligencia Artificial Predictiva",
        "Generador de Reportes PDF",
        "Exportaciones de Datos Multi-Formato",
        "Chat Interno en Tiempo Real (WebSockets)",
        "Notificaciones Push y Alertas",
        "Gestión de Roles y Permisos Granulares"
      ]
    }
  ];

  const techBadgeConfig = {
    "Laravel": { icon: "fa-brands fa-laravel", style: "bg-red-500/10 text-red-400 border-red-500/30 hover:bg-red-500/20" },
    "Blade": { icon: "fa-solid fa-code", style: "bg-orange-500/10 text-orange-400 border-orange-500/30 hover:bg-orange-500/20" },
    "Tailwind CSS": { icon: "fa-solid fa-wind", style: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30 hover:bg-cyan-500/20" },
    "Tailwind": { icon: "fa-solid fa-wind", style: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30 hover:bg-cyan-500/20" },
    "MySQL": { icon: "fa-solid fa-database", style: "bg-blue-500/10 text-blue-400 border-blue-500/30 hover:bg-blue-500/20" },
    "PostgreSQL": { icon: "fa-solid fa-database", style: "bg-sky-500/10 text-sky-400 border-sky-500/30 hover:bg-sky-500/20" },
    "MySQL/PostgreSQL": { icon: "fa-solid fa-database", style: "bg-indigo-500/10 text-indigo-400 border-indigo-500/30 hover:bg-indigo-500/20" },
    "Git": { icon: "fa-brands fa-git-alt", style: "bg-orange-600/10 text-orange-500 border-orange-600/30 hover:bg-orange-600/20" },
    "Vue 3": { icon: "fa-brands fa-vuejs", style: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/20" },
    "Vue": { icon: "fa-brands fa-vuejs", style: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/20" },
    "Composition API": { icon: "fa-solid fa-cubes", style: "bg-emerald-600/10 text-emerald-300 border-emerald-600/30 hover:bg-emerald-600/20" },
    "Pinia": { icon: "fa-solid fa-box-archive", style: "bg-amber-500/10 text-amber-400 border-amber-500/30 hover:bg-amber-500/20" },
    "Vue Router": { icon: "fa-solid fa-route", style: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/20" },
    "Inertia": { icon: "fa-solid fa-bolt", style: "bg-purple-500/10 text-purple-400 border-purple-500/30 hover:bg-purple-500/20" },
    "APIs": { icon: "fa-solid fa-network-wired", style: "bg-indigo-500/10 text-indigo-400 border-indigo-500/30 hover:bg-indigo-500/20" },
    "Docker": { icon: "fa-brands fa-docker", style: "bg-blue-500/10 text-blue-400 border-blue-500/30 hover:bg-blue-500/20" },
    "IA": { icon: "fa-solid fa-robot", style: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30 hover:bg-cyan-500/20" },
    "Testing": { icon: "fa-solid fa-vial", style: "bg-green-500/10 text-green-400 border-green-500/30 hover:bg-green-500/20" },
    "AWS": { icon: "fa-brands fa-aws", style: "bg-amber-600/10 text-amber-500 border-amber-600/30 hover:bg-amber-600/20" },
    "WebSockets": { icon: "fa-solid fa-plug", style: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30 hover:bg-yellow-500/20" },
    "Redis": { icon: "fa-solid fa-server", style: "bg-red-600/10 text-red-500 border-red-600/30 hover:bg-red-600/20" },
    "Queues": { icon: "fa-solid fa-list-check", style: "bg-blue-600/10 text-blue-300 border-blue-600/30 hover:bg-blue-600/20" },
    "ERP": { icon: "fa-solid fa-briefcase", style: "bg-indigo-600/10 text-indigo-300 border-indigo-600/30 hover:bg-indigo-600/20" },
    "Dashboard avanzado": { icon: "fa-solid fa-chart-line", style: "bg-purple-600/10 text-purple-300 border-purple-600/30 hover:bg-purple-600/20" },
    "Reportes PDF": { icon: "fa-solid fa-file-pdf", style: "bg-rose-500/10 text-rose-400 border-rose-500/30 hover:bg-rose-500/20" },
    "Exportaciones": { icon: "fa-solid fa-file-export", style: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30 hover:bg-emerald-500/20" },
    "Chat interno": { icon: "fa-solid fa-comments", style: "bg-cyan-600/10 text-cyan-300 border-cyan-600/30 hover:bg-cyan-600/20" },
    "Notificaciones": { icon: "fa-solid fa-bell", style: "bg-amber-500/10 text-amber-300 border-amber-500/30 hover:bg-amber-500/20" },
    "Roles": { icon: "fa-solid fa-user-shield", style: "bg-slate-700/40 text-slate-300 border-slate-600/30 hover:bg-slate-700/60" }
  };

  const renderBadge = (tech) => {
    const config = techBadgeConfig[tech] || { icon: "fa-solid fa-code", style: "bg-slate-800 text-slate-300 border-slate-700" };
    return `
      <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold border ${config.style} transition-all hover:scale-105 shadow-sm">
        <i class="${config.icon} text-xs"></i>
        <span>${tech}</span>
      </span>
    `;
  };

  const renderProjectCard = (project) => {
    const isFlagship = project.id === 20;

    if (isFlagship) {
      return `
        <article class="project-card glass-card rounded-3xl p-7 sm:p-9 border-2 border-amber-500/40 bg-gradient-to-br from-amber-950/20 via-slate-900 to-indigo-950/40 shadow-2xl relative overflow-hidden group col-span-full">
          <!-- Background Glow Effect -->
          <div class="absolute -right-20 -bottom-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-amber-500/20 transition-all duration-500"></div>

          <div class="relative z-10 space-y-6">
            <!-- Header Badges -->
            <div class="flex flex-wrap items-center justify-between gap-3">
              <span class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 text-amber-300 text-xs font-black uppercase tracking-widest border border-amber-500/40 shadow-inner">
                <i class="fa-solid fa-crown text-amber-400"></i>
                <span>Proyecto Principal & Unificado</span>
              </span>
              <span class="text-xs font-mono font-bold text-slate-400 bg-slate-800/80 px-3 py-1 rounded-lg border border-slate-700">
                PROYECTO #20
              </span>
            </div>

            <!-- Title & Description -->
            <div class="space-y-3">
              <h3 class="text-2xl sm:text-4xl font-black font-heading text-white tracking-tight">
                <span class="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100 bg-clip-text text-transparent">
                  ${project.title}
                </span>
              </h3>
              <p class="text-sm sm:text-base text-slate-300 leading-relaxed max-w-4xl">
                ${project.description}
              </p>
            </div>

            <!-- Key Features Grid -->
            <div class="space-y-2 pt-2">
              <h4 class="text-xs font-black uppercase tracking-wider text-amber-400/90 flex items-center gap-2">
                <i class="fa-solid fa-list-check text-xs"></i> Funcionalidades Clave del Sistema:
              </h4>
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                ${project.features.map(f => `
                  <div class="flex items-center gap-2 p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/60 text-xs font-bold text-slate-200">
                    <i class="fa-solid fa-circle-check text-amber-400 text-xs shrink-0"></i>
                    <span>${f}</span>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- Tech Badges -->
            <div class="space-y-2 pt-2">
              <h4 class="text-xs font-black uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <i class="fa-solid fa-microchip text-xs"></i> Stack Tecnológico Completo:
              </h4>
              <div class="flex flex-wrap gap-2">
                ${project.techs.map(renderBadge).join('')}
              </div>
            </div>

            <!-- Card Footer Links -->
            <div class="pt-6 border-t border-amber-500/20 flex flex-wrap items-center justify-between gap-4">
              <a class="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 transition-all hover:scale-105 inline-flex items-center gap-2" href="#contacto">
                <span>Solicitar Demo de la Plataforma</span>
                <i class="fa-solid fa-arrow-right text-xs"></i>
              </a>
              <a class="text-slate-400 hover:text-white text-xs font-bold flex items-center gap-2 transition-colors" href="https://github.com/JhoeJhl" target="_blank">
                <i class="fa-brands fa-github text-base"></i>
                <span>Ver Código en GitHub</span>
              </a>
            </div>
          </div>
        </article>
      `;
    }

    return `
      <article class="project-card glass-card rounded-3xl p-6 sm:p-7 border border-slate-800/80 flex flex-col justify-between space-y-6 hover:border-indigo-500/40 transition-all duration-300 group">
        <div class="space-y-3">
          <div class="flex items-center justify-between gap-2">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/90 text-indigo-300 text-[11px] font-bold border border-slate-700">
              <i class="${project.categoryIcon} text-xs"></i>
              <span>${project.categoryName}</span>
            </span>
            <span class="text-[11px] font-mono text-slate-500 font-bold">#0${project.id}</span>
          </div>

          <h3 class="text-lg sm:text-xl font-bold font-heading text-white group-hover:text-indigo-400 transition-colors">
            ${project.title}
          </h3>

          <p class="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
            ${project.description}
          </p>
        </div>

        <div class="space-y-4">
          <div class="flex flex-wrap gap-1.5 pt-2">
            ${project.techs.map(renderBadge).join('')}
          </div>

          <div class="pt-4 border-t border-slate-800/80 flex justify-between items-center text-xs font-bold">
            <a class="text-indigo-400 hover:text-indigo-300 flex items-center gap-1.5 transition-colors" href="#contacto">
              <span>Solicitar Demo</span>
              <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
            </a>
            <a class="text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors" href="https://github.com/JhoeJhl" target="_blank">
              <i class="fa-brands fa-github text-sm"></i>
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </article>
    `;
  };

  const featuredProjects = projectsData.filter(p => p.isFeatured);

  return `
    <section
      id="proyectos"
      class="relative py-20 border-t border-slate-800/50 overflow-hidden"
    >
      <!-- Background Ambient Glow -->
      <div class="glow-blob w-[500px] h-[500px] bg-indigo-600/10 bottom-0 left-0"></div>

      <div class="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <!-- Section Title -->
        <div class="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-indigo-500/30 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-2">
            <i class="fa-solid fa-code-fork text-xs"></i>
            <span>Portafolio de Soluciones</span>
          </div>
          <h2 class="text-3xl sm:text-5xl font-black font-heading tracking-tight text-white">
            Mis <span class="gradient-text">Proyectos</span>
          </h2>
          <p class="text-base sm:text-lg text-slate-300">
            Explora una muestra destacada de los 20 proyectos desarrollados con Laravel, Vue.js, Inertia.js e Inteligencia Artificial.
          </p>
        </div>

        <!-- Category Tabs Filter (Main Page) -->
        <div class="flex flex-wrap items-center justify-center gap-2 mb-10" id="mainCategoryFilters">
          <button data-cat="all" class="cat-filter-btn active px-4 py-2 rounded-xl text-xs font-bold transition-all bg-indigo-600 text-white shadow-lg shadow-indigo-600/30">
            ✨ Todos los Destacados
          </button>
          <button data-cat="backend-laravel" class="cat-filter-btn px-4 py-2 rounded-xl text-xs font-bold transition-all bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700">
            <i class="fa-brands fa-laravel text-red-500 mr-1.5"></i> Backend Laravel
          </button>
          <button data-cat="frontend-vuejs" class="cat-filter-btn px-4 py-2 rounded-xl text-xs font-bold transition-all bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700">
            <i class="fa-brands fa-vuejs text-emerald-500 mr-1.5"></i> Frontend VueJS
          </button>
          <button data-cat="laravel-vue-inertia" class="cat-filter-btn px-4 py-2 rounded-xl text-xs font-bold transition-all bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700">
            <i class="fa-solid fa-layer-group text-purple-400 mr-1.5"></i> Laravel + Vue + Inertia
          </button>
          <button data-cat="otros-proyectos" class="cat-filter-btn px-4 py-2 rounded-xl text-xs font-bold transition-all bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700">
            <i class="fa-solid fa-cubes text-cyan-400 mr-1.5"></i> Otros Proyectos
          </button>
          <button data-cat="proyecto-grande" class="cat-filter-btn px-4 py-2 rounded-xl text-xs font-bold transition-all bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700">
            <i class="fa-solid fa-crown text-amber-400 mr-1.5"></i> Proyecto Grande
          </button>
        </div>

        <!-- Grid de Proyectos Destacados -->
        <div id="projectsGrid" class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          ${featuredProjects.map(renderProjectCard).join('')}
        </div>

        <!-- Botón para ver más proyectos -->
        <div class="mt-14 text-center space-y-3">
          <button
            id="openMoreProjectsBtn"
            class="px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-indigo-700 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-bold text-sm shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 transition-all hover:scale-105 active:scale-95 inline-flex items-center gap-3 group"
          >
            <i class="fa-solid fa-grid-2 text-base group-hover:rotate-12 transition-transform"></i>
            <span>Ver Catálogo Completo (20 Proyectos)</span>
            <i class="fa-solid fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
          </button>
          <p class="text-xs text-slate-400">
            Accede al listado organizado con barra de búsqueda y filtros interactivos por tecnología.
          </p>
        </div>
      </div>
    </section>

    <!-- Modal Catálogo de los 20 Proyectos -->
    <div
      id="moreProjectsModal"
      class="hidden fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto"
    >
      <div class="relative w-full max-w-6xl bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl space-y-6 my-6 max-h-[92vh] flex flex-col overflow-hidden">
        
        <!-- Modal Sticky Header with Tabs & Search -->
        <div class="p-6 sm:p-8 pb-4 border-b border-slate-800 bg-slate-900/95 sticky top-0 z-20 space-y-4">
          <div class="flex items-center justify-between gap-4">
            <div>
              <div class="flex items-center gap-3">
                <h3 class="text-2xl sm:text-3xl font-black font-heading text-white tracking-tight">
                  Catálogo de Proyectos
                </h3>
                <span class="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-400 font-bold text-xs border border-indigo-500/30">
                  20 Soluciones
                </span>
              </div>
              <p class="text-xs sm:text-sm text-slate-400 mt-1">
                Explora cada proyecto filtrando por categoría o buscando tecnologías específicas.
              </p>
            </div>
            <button
              id="closeMoreProjectsBtn"
              class="h-11 w-11 rounded-2xl bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white font-bold flex items-center justify-center transition-all shrink-0"
              title="Cerrar"
            >
              <i class="fa-solid fa-xmark text-xl"></i>
            </button>
          </div>

          <!-- Controls Bar: Search + Category Filters -->
          <div class="grid md:grid-cols-12 gap-3 pt-2">
            <!-- Search Bar -->
            <div class="md:col-span-4 relative">
              <span class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <i class="fa-solid fa-magnifying-glass text-xs"></i>
              </span>
              <input
                id="modalSearchInput"
                type="text"
                placeholder="Buscar por título o tecnología..."
                class="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
              />
            </div>

            <!-- Modal Category Filter Buttons -->
            <div class="md:col-span-8 flex flex-wrap items-center gap-1.5 overflow-x-auto pb-1" id="modalCategoryFilters">
              <button data-mcat="all" class="modal-cat-btn active px-3 py-2 rounded-xl text-[11px] font-bold transition-all bg-indigo-600 text-white">
                Todos (20)
              </button>
              <button data-mcat="backend-laravel" class="modal-cat-btn px-3 py-2 rounded-xl text-[11px] font-bold transition-all bg-slate-800 text-slate-300 hover:bg-slate-700">
                <i class="fa-brands fa-laravel text-red-500 mr-1"></i> Backend (5)
              </button>
              <button data-mcat="frontend-vuejs" class="modal-cat-btn px-3 py-2 rounded-xl text-[11px] font-bold transition-all bg-slate-800 text-slate-300 hover:bg-slate-700">
                <i class="fa-brands fa-vuejs text-emerald-500 mr-1"></i> Frontend (5)
              </button>
              <button data-mcat="laravel-vue-inertia" class="modal-cat-btn px-3 py-2 rounded-xl text-[11px] font-bold transition-all bg-slate-800 text-slate-300 hover:bg-slate-700">
                <i class="fa-solid fa-layer-group text-purple-400 mr-1"></i> Fullstack (5)
              </button>
              <button data-mcat="otros-proyectos" class="modal-cat-btn px-3 py-2 rounded-xl text-[11px] font-bold transition-all bg-slate-800 text-slate-300 hover:bg-slate-700">
                <i class="fa-solid fa-cubes text-cyan-400 mr-1"></i> Otros (4)
              </button>
              <button data-mcat="proyecto-grande" class="modal-cat-btn px-3 py-2 rounded-xl text-[11px] font-bold transition-all bg-slate-800 text-slate-300 hover:bg-slate-700">
                <i class="fa-solid fa-crown text-amber-400 mr-1"></i> ERP IA (1)
              </button>
            </div>
          </div>
        </div>

        <!-- Scrollable Modal Content -->
        <div class="px-6 sm:px-8 pb-8 overflow-y-auto flex-1 space-y-6">
          <div id="modalProjectsGrid" class="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            ${projectsData.map(renderProjectCard).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
}