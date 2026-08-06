export function Projects() {
  const projectsData = [
    // BACKEND LARAVEL
    {
      id: 1,
      title: "Proyecto 1 — Sistema de Hábitos Inteligente",
      category: "backend-laravel",
      categoryName: "Backend Laravel",
      description: "Sistema backend para el seguimiento de rutinas diarias, metas personalizadas, estadísticas de progreso y notificaciones programadas.",
      techs: ["Laravel", "Blade", "Tailwind CSS", "MySQL", "Git"],
      isFeatured: true
    },
    {
      id: 2,
      title: "Proyecto 2 — Sistema de Biblioteca Digital",
      category: "backend-laravel",
      categoryName: "Backend Laravel",
      description: "Plataforma web de administración de catálogo bibliográfico, gestión de préstamos, control de inventario y reservas de libros.",
      techs: ["Laravel", "Blade", "Tailwind CSS", "PostgreSQL", "Git"],
      isFeatured: false
    },
    {
      id: 3,
      title: "Proyecto 3 — Sistema Veterinario",
      category: "backend-laravel",
      categoryName: "Backend Laravel",
      description: "Sistema de gestión médica veterinaria con expedientes clínicos de mascotas, vacunas, agenda de citas e historial de tratamientos.",
      techs: ["Laravel", "Blade", "Tailwind CSS", "MySQL", "Git"],
      isFeatured: false
    },
    {
      id: 4,
      title: "Proyecto 4 — Sistema Inmobiliario",
      category: "backend-laravel",
      categoryName: "Backend Laravel",
      description: "Plataforma de catálogo de propiedades en venta y alquiler, contratos de arrendamiento, gestión de agentes y reservas.",
      techs: ["Laravel", "Blade", "Tailwind CSS", "PostgreSQL", "Git"],
      isFeatured: false
    },
    {
      id: 5,
      title: "Proyecto 5 — Sistema Restaurante QR",
      category: "backend-laravel",
      categoryName: "Backend Laravel",
      description: "Menú digital interactivo mediante códigos QR con comandas en tiempo real a cocina, gestión de mesas y facturación.",
      techs: ["Laravel", "Blade", "Tailwind CSS", "MySQL", "Git"],
      isFeatured: false
    },

    // FRONTEND VUEJS
    {
      id: 6,
      title: "Proyecto 6 — Dashboard Empresarial",
      category: "frontend-vuejs",
      categoryName: "Frontend VueJS",
      description: "Panel de control ejecutivo SPA reactivo con gráficos dinámicos en tiempo real, consumo de APIs y análisis de KPIs empresariales.",
      techs: ["Vue 3", "Composition API", "Pinia", "Vue Router", "Tailwind"],
      isFeatured: true
    },
    {
      id: 7,
      title: "Proyecto 7 — Aplicación Financiera Personal",
      category: "frontend-vuejs",
      categoryName: "Frontend VueJS",
      description: "Gestor interactivo de finanzas personales para registro de ingresos/gastos, presupuestos mensuales y reportes gráficos.",
      techs: ["Vue 3", "Composition API", "Pinia", "Vue Router", "Tailwind"],
      isFeatured: false
    },
    {
      id: 8,
      title: "Proyecto 8 — Kanban tipo Trello",
      category: "frontend-vuejs",
      categoryName: "Frontend VueJS",
      description: "Gestor visual de proyectos en columnas interactivas, tableros personalizables, drag & drop de tarjetas y etiquetas de prioridad.",
      techs: ["Vue 3", "Composition API", "Pinia", "Vue Router", "Tailwind"],
      isFeatured: false
    },
    {
      id: 9,
      title: "Proyecto 9 — Ecommerce Frontend",
      category: "frontend-vuejs",
      categoryName: "Frontend VueJS",
      description: "Tienda online SPA con catálogo interactivo de productos, carrito de compras reactivo con Pinia, filtros en tiempo real y checkout.",
      techs: ["Vue 3", "Composition API", "Pinia", "Vue Router", "Tailwind"],
      isFeatured: false
    },
    {
      id: 10,
      title: "Proyecto 10 — Plataforma de Cursos",
      category: "frontend-vuejs",
      categoryName: "Frontend VueJS",
      description: "Interfaz de e-learning para la navegación de módulos de cursos, lecciones interactivas, reproductor multimedia y evaluaciones.",
      techs: ["Vue 3", "Composition API", "Pinia", "Vue Router", "Tailwind"],
      isFeatured: false
    },

    // LARAVEL + VUE + INERTIA
    {
      id: 11,
      title: "Proyecto 11 — Sistema RRHH",
      category: "laravel-vue-inertia",
      categoryName: "Laravel + Vue + Inertia",
      description: "Gestión integral de talento humano, control de asistencia, liquidación de nóminas, evaluaciones de desempeño e incidencias.",
      techs: ["Laravel", "Vue 3", "Inertia", "Tailwind", "PostgreSQL"],
      isFeatured: false
    },
    {
      id: 12,
      title: "Proyecto 12 — Sistema Gestión de Proyectos",
      category: "laravel-vue-inertia",
      categoryName: "Laravel + Vue + Inertia",
      description: "Plataforma colaborativa para asignación de tareas, cronogramas de hitos, seguimiento de tiempos de trabajo y gestión de equipos.",
      techs: ["Laravel", "Vue 3", "Inertia", "Tailwind", "PostgreSQL"],
      isFeatured: false
    },
    {
      id: 13,
      title: "Proyecto 13 — Sistema Clínica Médica",
      category: "laravel-vue-inertia",
      categoryName: "Laravel + Vue + Inertia",
      description: "Administración de historia clínica electrónica, agenda de doctores, recetas electrónicas, módulo de farmacia y cobros.",
      techs: ["Laravel", "Vue 3", "Inertia", "Tailwind", "PostgreSQL"],
      isFeatured: false
    },
    {
      id: 14,
      title: "Proyecto 14 — Marketplace",
      category: "laravel-vue-inertia",
      categoryName: "Laravel + Vue + Inertia",
      description: "Plataforma multivendedor con tiendas independientes, gestión de catálogo, comisiones automáticas y procesamiento de pagos.",
      techs: ["Laravel", "Vue 3", "Inertia", "Tailwind", "PostgreSQL"],
      isFeatured: true
    },
    {
      id: 15,
      title: "Proyecto 15 — ERP Empresarial",
      category: "laravel-vue-inertia",
      categoryName: "Laravel + Vue + Inertia",
      description: "Sistema de planificación de recursos empresariales para inventario multi-bodega, facturación electrónica, compras y contabilidad.",
      techs: ["Laravel", "Vue 3", "Inertia", "Tailwind", "PostgreSQL"],
      isFeatured: true
    },

    // OTROS PROYECTOS
    {
      id: 16,
      title: "Proyecto 16 — ERP + Inteligencia Artificial",
      category: "otros-proyectos",
      categoryName: "Otros Proyectos",
      description: "Sistema empresarial asistido por IA para predicción de stock, analítica de ventas en tiempo real e integración con microservicios.",
      techs: ["Laravel", "Vue", "Inertia", "APIs", "Docker", "IA", "Testing", "AWS", "WebSockets"],
      isFeatured: true
    },
    {
      id: 17,
      title: "Proyecto 17 — Plataforma SaaS Multiempresa",
      category: "otros-proyectos",
      categoryName: "Otros Proyectos",
      description: "Arquitectura SaaS multitenant para gestión de suscripciones, aislamiento estricto de datos por cliente y despliegue automatizado.",
      techs: ["Laravel", "Vue", "Inertia", "APIs", "Docker", "IA", "Testing", "AWS", "WebSockets"],
      isFeatured: false
    },
    {
      id: 18,
      title: "Proyecto 18 — Sistema Delivery con GPS",
      category: "otros-proyectos",
      categoryName: "Otros Proyectos",
      description: "Aplicación de seguimiento en vivo de repartidores con GPS, optimización de rutas mediante IA y alertas push via WebSockets.",
      techs: ["Laravel", "Vue", "Inertia", "APIs", "Docker", "IA", "Testing", "AWS", "WebSockets"],
      isFeatured: false
    },
    {
      id: 19,
      title: "Proyecto 19 — Sistema de Seguridad Empresarial",
      category: "otros-proyectos",
      categoryName: "Otros Proyectos",
      description: "Control de acceso centralizado, monitoreo de auditoría en tiempo real, detección de anomalías por IA y cifrado de datos.",
      techs: ["Laravel", "Vue", "Inertia", "APIs", "Docker", "IA", "Testing", "AWS", "WebSockets"],
      isFeatured: false
    },

    // PROYECTO GRANDE
    {
      id: 20,
      title: 'Proyecto 20 — Plataforma Profesional Final: "Business Intelligence ERP con IA"',
      category: "proyecto-grande",
      categoryName: "Proyecto Grande",
      description: "Sistema corporativo integral de Inteligencia de Negocios que unifica ERP, analítica avanzada con IA, reportes PDF automáticos, chat interno en tiempo real, colas asíncronas Redis y arquitectura en la nube AWS.",
      techs: ["Laravel", "Vue", "Inertia", "PostgreSQL", "ERP", "Dashboard avanzado", "IA", "Reportes PDF", "Exportaciones", "Chat interno", "Notificaciones", "Roles", "Docker", "Redis", "Queues", "Testing", "AWS"],
      isFeatured: true
    }
  ];

  const techBadgeConfig = {
    "Laravel": { icon: "fa-brands fa-laravel", style: "bg-red-500/10 text-red-400 border-red-500/20" },
    "Blade": { icon: "fa-solid fa-code", style: "bg-orange-500/10 text-orange-400 border-orange-500/20" },
    "Tailwind CSS": { icon: "fa-solid fa-wind", style: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20" },
    "Tailwind": { icon: "fa-solid fa-wind", style: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20" },
    "MySQL": { icon: "fa-solid fa-database", style: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
    "PostgreSQL": { icon: "fa-solid fa-database", style: "bg-sky-500/10 text-sky-400 border-sky-500/20" },
    "MySQL/PostgreSQL": { icon: "fa-solid fa-database", style: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20" },
    "Git": { icon: "fa-brands fa-git-alt", style: "bg-orange-600/10 text-orange-500 border-orange-600/20" },
    "Vue 3": { icon: "fa-brands fa-vuejs", style: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" },
    "Vue": { icon: "fa-brands fa-vuejs", style: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" },
    "Composition API": { icon: "fa-solid fa-cubes", style: "bg-emerald-600/10 text-emerald-300 border-emerald-600/20" },
    "Pinia": { icon: "fa-solid fa-box-archive", style: "bg-amber-500/10 text-amber-400 border-amber-500/20" },
    "Vue Router": { icon: "fa-solid fa-route", style: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" },
    "Inertia": { icon: "fa-solid fa-bolt", style: "bg-purple-500/10 text-purple-400 border-purple-500/20" },
    "APIs": { icon: "fa-solid fa-network-wired", style: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20" },
    "Docker": { icon: "fa-brands fa-docker", style: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
    "IA": { icon: "fa-solid fa-robot", style: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20" },
    "Testing": { icon: "fa-solid fa-vial", style: "bg-green-500/10 text-green-400 border-green-500/20" },
    "AWS": { icon: "fa-brands fa-aws", style: "bg-amber-600/10 text-amber-500 border-amber-600/20" },
    "WebSockets": { icon: "fa-solid fa-plug", style: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20" },
    "Redis": { icon: "fa-solid fa-server", style: "bg-red-600/10 text-red-500 border-red-600/20" },
    "Queues": { icon: "fa-solid fa-list-check", style: "bg-blue-600/10 text-blue-300 border-blue-600/20" },
    "ERP": { icon: "fa-solid fa-briefcase", style: "bg-indigo-600/10 text-indigo-300 border-indigo-600/20" },
    "Dashboard avanzado": { icon: "fa-solid fa-chart-line", style: "bg-purple-600/10 text-purple-300 border-purple-600/20" },
    "Reportes PDF": { icon: "fa-solid fa-file-pdf", style: "bg-rose-500/10 text-rose-400 border-rose-500/20" },
    "Exportaciones": { icon: "fa-solid fa-file-export", style: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20" },
    "Chat interno": { icon: "fa-solid fa-comments", style: "bg-cyan-600/10 text-cyan-300 border-cyan-600/20" },
    "Notificaciones": { icon: "fa-solid fa-bell", style: "bg-amber-500/10 text-amber-300 border-amber-500/20" },
    "Roles": { icon: "fa-solid fa-user-shield", style: "bg-slate-700/40 text-slate-300 border-slate-600/30" }
  };

  const renderBadge = (tech) => {
    const config = techBadgeConfig[tech] || { icon: "fa-solid fa-code", style: "bg-slate-800 text-slate-300 border-slate-700" };
    return `
      <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold border ${config.style} transition-transform hover:scale-105">
        <i class="${config.icon} text-xs"></i>
        <span>${tech}</span>
      </span>
    `;
  };

  const renderProjectCard = (project, isBig = false) => {
    return `
      <article class="project-card glass-card rounded-3xl p-6 sm:p-7 border border-slate-300 dark:border-slate-800/80 flex flex-col justify-between space-y-6 ${isBig ? 'sm:col-span-2 lg:col-span-3 bg-gradient-to-br from-indigo-950/40 via-slate-900 to-slate-950 border-indigo-500/30' : ''}">
        <div class="space-y-3">
          <div class="flex items-center justify-between gap-2">
            <span class="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-[11px] font-black uppercase tracking-wider border border-indigo-500/20">
              ${project.categoryName}
            </span>
            ${project.id === 20 ? '<span class="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-black uppercase tracking-widest border border-amber-500/30 flex items-center gap-1"><i class="fa-solid fa-star text-amber-400"></i> Proyecto Principal</span>' : ''}
          </div>
          <h3 class="text-xl ${isBig ? 'sm:text-2xl font-black gradient-text' : 'font-bold'} font-heading text-slate-900 dark:text-white">
            ${project.title}
          </h3>
          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            ${project.description}
          </p>
        </div>
        <div class="space-y-4">
          <div class="flex flex-wrap gap-1.5 pt-2">
            ${project.techs.map(renderBadge).join('')}
          </div>
          <div class="pt-4 border-t border-slate-200 dark:border-slate-800/80 flex justify-between items-center text-xs font-bold">
            <a class="text-indigo-600 dark:text-indigo-400 hover:text-indigo-300 flex items-center gap-1 transition-colors" href="#contacto">
              <span>Solicitar Demo</span>
              <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
            </a>
            <a class="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white flex items-center gap-1 transition-colors" href="https://github.com/JhoeJhl" target="_blank">
              <i class="fa-brands fa-github text-sm"></i>
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </article>
    `;
  };

  // 6 Destacados principales para el grid inicial
  const featuredProjects = projectsData.filter(p => p.isFeatured);

  return `
    <section
      id="proyectos"
      class="relative py-20 border-t border-slate-200/50 dark:border-slate-800/50 overflow-hidden"
    >
      <!-- Background Ambient Glow -->
      <div class="glow-blob w-[500px] h-[500px] bg-indigo-500/10 dark:bg-indigo-600/10 bottom-0 left-0"></div>

      <div class="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <!-- Section Title -->
        <div class="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <h2 class="text-3xl sm:text-5xl font-black font-heading tracking-tight text-slate-900 dark:text-white">
            Mis <span class="gradient-text">Proyectos</span>
          </h2>
          <p class="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Catálogo completo de proyectos construidos con Laravel, Vue.js, Inertia.js, Inteligencia Artificial y arquitecturas modernas.
          </p>
        </div>

        <!-- Grid de Proyectos Destacados -->
        <div id="projectsGrid" class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          ${featuredProjects.map(p => renderProjectCard(p, p.id === 20)).join('')}
        </div>

        <!-- Botón para ver más proyectos -->
        <div class="mt-14 text-center">
          <button
            id="openMoreProjectsBtn"
            class="px-8 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-xl shadow-indigo-600/25 hover:shadow-indigo-600/40 transition-all hover:scale-105 active:scale-95 inline-flex items-center gap-2"
          >
            <span>Ver más proyectos (20 en total)</span>
            <i class="fa-solid fa-arrow-right text-xs"></i>
          </button>
        </div>
      </div>
    </section>

    <!-- Modal Catálogo de los 20 Proyectos -->
    <div
      id="moreProjectsModal"
      class="hidden fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto"
    >
      <div class="relative w-full max-w-6xl bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl space-y-6 my-8 max-h-[90vh] overflow-y-auto">
        <!-- Modal Header -->
        <div class="flex items-center justify-between pb-6 border-b border-slate-800 sticky top-0 bg-slate-900/95 backdrop-blur-md z-10">
          <div>
            <h3 class="text-2xl sm:text-3xl font-black font-heading text-white flex items-center gap-3">
              <span>Catálogo Completo de Proyectos</span>
              <span class="text-xs px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-400 font-bold border border-indigo-500/30">20 Proyectos</span>
            </h3>
            <p class="text-xs sm:text-sm text-slate-400 mt-1">
              Todos los proyectos organizados con sus respectivas tecnologías e íconos representativos.
            </p>
          </div>
          <button
            id="closeMoreProjectsBtn"
            class="h-10 w-10 rounded-2xl bg-slate-800 text-slate-200 hover:bg-slate-700 font-bold flex items-center justify-center transition-all"
            title="Cerrar"
          >
            <i class="fa-solid fa-xmark text-lg"></i>
          </button>
        </div>

        <!-- Grid de todos los 20 Proyectos en Modal -->
        <div id="modalProjectsGrid" class="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          ${projectsData.map(p => renderProjectCard(p, p.id === 20)).join('')}
        </div>
      </div>
    </div>
  `;
}