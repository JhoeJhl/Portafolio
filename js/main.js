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
          { y: 0, opacity: 1, stagger: 0.05, duration: 0.4, ease: 'power2.out', delay: 0.1 }
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