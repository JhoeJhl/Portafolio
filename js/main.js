import { Header } from './components/Header.js';
import { Hero } from './components/Hero.js';
import { About } from './components/About.js';
import { Skills } from './components/Skills.js';
import { Projects } from './components/Projects.js';
import { Contact } from './components/Contact.js';
import { Footer } from './components/Footer.js';

const app = document.getElementById('app');

// 1. Inyectamos los componentes
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

// 2. Inicializamos eventos e interacciones de UI
inicializarUI();

function inicializarUI() {
  // Actualizar año en footer
  const yearElement = document.getElementById('year');
  if (yearElement) yearElement.textContent = new Date().getFullYear();

  // Menú Móvil
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

  // Dark Mode Persistence
  const themeBtn = document.getElementById('themeBtn'); 
  const htmlElement = document.documentElement;

  const isDarkMode = localStorage.getItem('theme') === 'dark' || 
                    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
  
  if (isDarkMode) {
    htmlElement.classList.add('dark');
  } else {
    htmlElement.classList.remove('dark');
  }

  const toggleTheme = () => {
    const isDarkNow = htmlElement.classList.toggle('dark');
    localStorage.setItem('theme', isDarkNow ? 'dark' : 'light');
    showToast(isDarkNow ? 'Modo Oscuro Activado 🌙' : 'Modo Claro Activado ☀️');
  };

  if (themeBtn) themeBtn.addEventListener('click', toggleTheme);

  // Modal de "Ver más proyectos"
  const openMoreProjectsBtn = document.getElementById('openMoreProjectsBtn');
  const closeMoreProjectsBtn = document.getElementById('closeMoreProjectsBtn');
  const moreProjectsModal = document.getElementById('moreProjectsModal');

  if (openMoreProjectsBtn && moreProjectsModal) {
    openMoreProjectsBtn.addEventListener('click', () => {
      moreProjectsModal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
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

// Toast Helper
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