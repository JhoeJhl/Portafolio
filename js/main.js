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

// 2. Inicializamos eventos de interfaz y animaciones GSAP
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
          { y: 40, opacity: 0, scale: 0.95 },
          { y: 0, opacity: 1, scale: 1, duration: 0.4, ease: 'back.out(1.2)' }
        );
      }
    });
  }

  if (closeMoreProjectsBtn && moreProjectsModal) {
    closeMoreProjectsBtn.addEventListener('click', () => {
      moreProjectsModal.classList.add('hidden');
      document.body.style.overflow = '';
    });
  }

  if (moreProjectsModal) {
    moreProjectsModal.addEventListener('click', (e) => {
      if (e.target === moreProjectsModal) {
        moreProjectsModal.classList.add('hidden');
        document.body.style.overflow = '';
      }
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

// INTEGRA GSAP & SCROLLTRIGGER ROBUSTO (CORRIGIENDO BUG DE DESAPARICIÓN DE BADGES)
function inicializarGSAP() {
  if (typeof gsap === 'undefined') return;

  // Registrar ScrollTrigger si está disponible
  if (typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  // 1. Animación de entrada de la sección Hero con clearProps para evitar desaparición de elementos
  const heroTimeline = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.8 } });

  heroTimeline
    .fromTo('#inicio h1', { y: 40, opacity: 0 }, { y: 0, opacity: 1, clearProps: 'transform,opacity' })
    .fromTo('#inicio p', { y: 30, opacity: 0 }, { y: 0, opacity: 1, clearProps: 'transform,opacity' }, '-=0.5')
    .fromTo('.hero-tech-badge', { y: 20, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.08, clearProps: 'transform,opacity' }, '-=0.4')
    .fromTo('#inicio a', { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, stagger: 0.1, clearProps: 'transform,opacity' }, '-=0.3')
    .fromTo('#inicio .glass-card', { y: 30, opacity: 0 }, { y: 0, opacity: 1, clearProps: 'transform,opacity' }, '-=0.3');

  // 2. Animaciones de revelado por ScrollTrigger para las secciones
  const secciones = ['#sobre-mi', '#habilidades', '#proyectos', '#contacto'];

  secciones.forEach((secId) => {
    const el = document.querySelector(secId);
    if (!el) return;

    const cards = el.querySelectorAll('.glass-card, article');

    gsap.fromTo(
      cards,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power2.out',
        clearProps: 'transform,opacity',
        scrollTrigger: {
          trigger: secId,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );
  });
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