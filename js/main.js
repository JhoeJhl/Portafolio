import { Header } from './components/Header.js';
import { Hero } from './components/Hero.js';
import { About } from './components/About.js';
import { Skills } from './components/Skills.js';
import { Projects } from './components/Projects.js';
import { Contact } from './components/Contact.js';
import { Footer } from './components/Footer.js';

const app = document.getElementById('app');

// 1. Inyectamos los componentes responsivos
app.innerHTML = `
  ${Header()}
  <main>
    ${Hero()}
    ${About()}
    ${Skills()}
    ${Projects()}
    ${Contact()}
  </main>
  ${Footer()}
`;

// 2. Inicializamos eventos de interfaz y animaciones GSAP avanzadas
inicializarUI();
inicializarGSAP();

function inicializarUI() {
  // Garantizar modo oscuro permanente en HTML
  document.documentElement.classList.add('dark');

  // Actualizar año en footer
  const yearElement = document.getElementById('year');
  if (yearElement) yearElement.textContent = new Date().getFullYear();

  // Menú Móvil Responsivo
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileLinks = mobileMenu?.querySelectorAll('a');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      const icon = menuBtn.querySelector('i');
      if (icon) {
        if (mobileMenu.classList.contains('hidden')) {
          icon.className = 'fa-solid fa-bars';
        } else {
          icon.className = 'fa-solid fa-xmark';
        }
      }
    });

    mobileLinks?.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        const icon = menuBtn.querySelector('i');
        if (icon) icon.className = 'fa-solid fa-bars';
      });
    });
  }

  // Modal de "Ver más proyectos"
  const openMoreProjectsBtn = document.getElementById('openMoreProjectsBtn');
  const closeMoreProjectsBtn = document.getElementById('closeMoreProjectsBtn');
  const moreProjectsModal = document.getElementById('moreProjectsModal');

  if (openMoreProjectsBtn && moreProjectsModal) {
    openMoreProjectsBtn.addEventListener('click', () => {
      moreProjectsModal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';

      // Animación GSAP al abrir el modal
      if (typeof gsap !== 'undefined') {
        gsap.fromTo(
          moreProjectsModal.querySelector('> div'),
          { y: 50, opacity: 0, scale: 0.92 },
          { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.4)' }
        );
        const modalCards = moreProjectsModal.querySelectorAll('.project-card');
        gsap.fromTo(
          modalCards,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.04, duration: 0.4, ease: 'power2.out', delay: 0.1 }
        );
      }
    });
  }

  if (closeMoreProjectsBtn && moreProjectsModal) {
    closeMoreProjectsBtn.addEventListener('click', () => {
      if (typeof gsap !== 'undefined') {
        gsap.to(moreProjectsModal.querySelector('> div'), {
          y: 30,
          opacity: 0,
          scale: 0.95,
          duration: 0.25,
          ease: 'power2.in',
          onComplete: () => {
            moreProjectsModal.classList.add('hidden');
            document.body.style.overflow = '';
          }
        });
      } else {
        moreProjectsModal.classList.add('hidden');
        document.body.style.overflow = '';
      }
    });
  }

  if (moreProjectsModal) {
    moreProjectsModal.addEventListener('click', (e) => {
      if (e.target === moreProjectsModal) {
        if (typeof gsap !== 'undefined') {
          gsap.to(moreProjectsModal.querySelector('> div'), {
            y: 30,
            opacity: 0,
            scale: 0.95,
            duration: 0.25,
            ease: 'power2.in',
            onComplete: () => {
              moreProjectsModal.classList.add('hidden');
              document.body.style.overflow = '';
            }
          });
        } else {
          moreProjectsModal.classList.add('hidden');
          document.body.style.overflow = '';
        }
      }
    });
  }

  // INTERACTIVIDAD: Filtros en la vista principal (#mainCategoryFilters)
  const mainFilters = document.querySelectorAll('#mainCategoryFilters .cat-filter-btn');
  const mainCards = document.querySelectorAll('#projectsGrid .project-card');

  mainFilters.forEach(btn => {
    btn.addEventListener('click', () => {
      mainFilters.forEach(b => {
        b.classList.remove('bg-indigo-600', 'text-white', 'shadow-lg', 'shadow-indigo-600/30', 'active');
        b.classList.add('bg-slate-800/80', 'text-slate-300', 'hover:bg-slate-700', 'border', 'border-slate-700');
      });
      btn.classList.remove('bg-slate-800/80', 'text-slate-300', 'hover:bg-slate-700', 'border', 'border-slate-700');
      btn.classList.add('bg-indigo-600', 'text-white', 'shadow-lg', 'shadow-indigo-600/30', 'active');

      const selectedCat = btn.getAttribute('data-cat');

      mainCards.forEach(card => {
        const text = card.textContent.toLowerCase();
        let isMatch = false;

        if (selectedCat === 'all') isMatch = true;
        else if (selectedCat === 'backend-laravel') isMatch = text.includes('backend laravel') || text.includes('proyecto 1') || text.includes('proyecto 2') || text.includes('proyecto 3') || text.includes('proyecto 4') || text.includes('proyecto 5');
        else if (selectedCat === 'frontend-vuejs') isMatch = text.includes('frontend vuejs') || text.includes('proyecto 6') || text.includes('proyecto 7') || text.includes('proyecto 8') || text.includes('proyecto 9') || text.includes('proyecto 10');
        else if (selectedCat === 'laravel-vue-inertia') isMatch = text.includes('laravel + vue + inertia') || text.includes('proyecto 11') || text.includes('proyecto 12') || text.includes('proyecto 13') || text.includes('proyecto 14') || text.includes('proyecto 15');
        else if (selectedCat === 'otros-proyectos') isMatch = text.includes('otros proyectos') || text.includes('proyecto 16') || text.includes('proyecto 17') || text.includes('proyecto 18') || text.includes('proyecto 19');
        else if (selectedCat === 'proyecto-grande') isMatch = text.includes('proyecto 20') || text.includes('proyecto grande') || text.includes('business intelligence');

        if (isMatch) card.style.display = '';
        else card.style.display = 'none';
      });

      if (typeof gsap !== 'undefined') {
        const visibleCards = Array.from(mainCards).filter(c => c.style.display !== 'none');
        gsap.fromTo(visibleCards, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.35, stagger: 0.05, ease: 'power2.out' });
      }
    });
  });

  // INTERACTIVIDAD: Filtros y Búsqueda en el Modal (#modalCategoryFilters y #modalSearchInput)
  const modalFilterBtns = document.querySelectorAll('#modalCategoryFilters .modal-cat-btn');
  const modalCards = document.querySelectorAll('#modalProjectsGrid .project-card');
  const modalSearchInput = document.getElementById('modalSearchInput');

  let currentModalCategory = 'all';
  let currentSearchQuery = '';

  function filterModalProjects() {
    modalCards.forEach(card => {
      const cardText = card.textContent.toLowerCase();
      const matchesSearch = !currentSearchQuery || cardText.includes(currentSearchQuery);

      let matchesCategory = true;
      if (currentModalCategory !== 'all') {
        if (currentModalCategory === 'backend-laravel') matchesCategory = cardText.includes('backend laravel') || cardText.includes('proyecto 1') || cardText.includes('proyecto 2') || cardText.includes('proyecto 3') || cardText.includes('proyecto 4') || cardText.includes('proyecto 5');
        else if (currentModalCategory === 'frontend-vuejs') matchesCategory = cardText.includes('frontend vuejs') || cardText.includes('proyecto 6') || cardText.includes('proyecto 7') || cardText.includes('proyecto 8') || cardText.includes('proyecto 9') || cardText.includes('proyecto 10');
        else if (currentModalCategory === 'laravel-vue-inertia') matchesCategory = cardText.includes('laravel + vue + inertia') || cardText.includes('proyecto 11') || cardText.includes('proyecto 12') || cardText.includes('proyecto 13') || cardText.includes('proyecto 14') || cardText.includes('proyecto 15');
        else if (currentModalCategory === 'otros-proyectos') matchesCategory = cardText.includes('otros proyectos') || cardText.includes('proyecto 16') || cardText.includes('proyecto 17') || cardText.includes('proyecto 18') || cardText.includes('proyecto 19');
        else if (currentModalCategory === 'proyecto-grande') matchesCategory = cardText.includes('proyecto 20') || cardText.includes('proyecto grande') || cardText.includes('business intelligence');
      }

      if (matchesSearch && matchesCategory) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  }

  modalFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      modalFilterBtns.forEach(b => {
        b.classList.remove('bg-indigo-600', 'text-white', 'active');
        b.classList.add('bg-slate-800', 'text-slate-300', 'hover:bg-slate-700');
      });
      btn.classList.remove('bg-slate-800', 'text-slate-300', 'hover:bg-slate-700');
      btn.classList.add('bg-indigo-600', 'text-white', 'active');

      currentModalCategory = btn.getAttribute('data-mcat');
      filterModalProjects();

      if (typeof gsap !== 'undefined') {
        const visibleModalCards = Array.from(modalCards).filter(c => c.style.display !== 'none');
        gsap.fromTo(visibleModalCards, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.35, stagger: 0.04, ease: 'power2.out' });
      }
    });
  });

  if (modalSearchInput) {
    modalSearchInput.addEventListener('input', (e) => {
      currentSearchQuery = e.target.value.toLowerCase().trim();
      filterModalProjects();
    });
  }

  // Copiar Email al Portapapeles
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      const email = 'pinto.12574531@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        showToast('¡Correo copiado al portapapeles! 📋');
      }).catch(() => {
        showToast('Correo: pinto.12574531@gmail.com');
      });
    });
  }

  // Formulario de Contacto
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('¡Gracias por tu mensaje! Me pondré en contacto muy pronto. 🚀');
      contactForm.reset();
    });
  }
}

// SISTEMA GSAP & SCROLLTRIGGER AVANZADO Y FLUIDO PARA CADA SECCIÓN
function inicializarGSAP() {
  if (typeof gsap === 'undefined') return;

  // Registrar ScrollTrigger si está disponible
  if (typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  // 1. Animación del Header (Navbar)
  gsap.from('header', {
    y: -50,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
  });

  // 2. Animaciones de la Sección HERO (#inicio)
  const heroTimeline = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.8 } });

  heroTimeline
    .fromTo('#inicio h1', { y: 40, opacity: 0 }, { y: 0, opacity: 1, clearProps: 'transform,opacity' })
    .fromTo('#inicio p:first-of-type', { y: 30, opacity: 0 }, { y: 0, opacity: 1, clearProps: 'transform,opacity' }, '-=0.5')
    .fromTo('.hero-tech-badge', { y: 20, opacity: 0, scale: 0.9 }, { y: 0, opacity: 1, scale: 1, stagger: 0.08, clearProps: 'transform,opacity' }, '-=0.4')
    .fromTo('#inicio a', { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, stagger: 0.1, clearProps: 'transform,opacity' }, '-=0.3')
    .fromTo('#inicio .glass-card', { y: 30, opacity: 0, scale: 0.98 }, { y: 0, opacity: 1, scale: 1, clearProps: 'transform,opacity' }, '-=0.3');

  // 3. Animación de la Sección SOBRE MÍ (#sobre-mi)
  const sobreMiEl = document.querySelector('#sobre-mi');
  if (sobreMiEl) {
    const title = sobreMiEl.querySelector('h2');
    const cards = sobreMiEl.querySelectorAll('.glass-card');

    gsap.fromTo(
      title,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power2.out',
        clearProps: 'transform,opacity',
        scrollTrigger: {
          trigger: '#sobre-mi',
          start: 'top 85%'
        }
      }
    );

    gsap.fromTo(
      cards,
      { y: 40, opacity: 0, scale: 0.96 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power2.out',
        clearProps: 'transform,opacity',
        scrollTrigger: {
          trigger: '#sobre-mi',
          start: 'top 80%'
        }
      }
    );
  }

  // 4. Animación de la Sección HABILIDADES (#habilidades)
  const habilidadesEl = document.querySelector('#habilidades');
  if (habilidadesEl) {
    const title = habilidadesEl.querySelector('h2');
    const skillCards = habilidadesEl.querySelectorAll('.glass-card');

    gsap.fromTo(
      title,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power2.out',
        clearProps: 'transform,opacity',
        scrollTrigger: {
          trigger: '#habilidades',
          start: 'top 85%'
        }
      }
    );

    gsap.fromTo(
      skillCards,
      { y: 45, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.7,
        stagger: 0.15,
        ease: 'back.out(1.2)',
        clearProps: 'transform,opacity',
        scrollTrigger: {
          trigger: '#habilidades',
          start: 'top 80%'
        }
      }
    );
  }

  // 5. Animación de la Sección PROYECTOS (#proyectos)
  const proyectosEl = document.querySelector('#proyectos');
  if (proyectosEl) {
    const title = proyectosEl.querySelector('h2');
    const projectCards = proyectosEl.querySelectorAll('.project-card');

    gsap.fromTo(
      title,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power2.out',
        clearProps: 'transform,opacity',
        scrollTrigger: {
          trigger: '#proyectos',
          start: 'top 85%'
        }
      }
    );

    gsap.fromTo(
      projectCards,
      { y: 50, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power2.out',
        clearProps: 'transform,opacity',
        scrollTrigger: {
          trigger: '#projectsGrid',
          start: 'top 85%'
        }
      }
    );
  }

  // 6. Animación de la Sección CONTACTO (#contacto)
  const contactoEl = document.querySelector('#contacto');
  if (contactoEl) {
    const leftCol = contactoEl.querySelector('.lg\\:col-span-5');
    const rightCol = contactoEl.querySelector('.lg\\:col-span-7');

    if (leftCol) {
      gsap.fromTo(
        leftCol,
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          clearProps: 'transform,opacity',
          scrollTrigger: {
            trigger: '#contacto',
            start: 'top 80%'
          }
        }
      );
    }

    if (rightCol) {
      gsap.fromTo(
        rightCol,
        { x: 40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          delay: 0.15,
          clearProps: 'transform,opacity',
          scrollTrigger: {
            trigger: '#contacto',
            start: 'top 80%'
          }
        }
      );
    }
  }
}

// Toast Notification Helper
function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMsg');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}