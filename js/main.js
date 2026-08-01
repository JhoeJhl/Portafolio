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
  const themeBtnMobile = document.getElementById('themeBtnMobile'); 
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
  if (themeBtnMobile) themeBtnMobile.addEventListener('click', toggleTheme);

  // Filtrado de Proyectos
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('bg-indigo-600', 'text-white', 'shadow-md', 'shadow-indigo-500/20');
        b.classList.add('glass-panel', 'text-slate-700', 'dark:text-slate-300');
      });
      btn.classList.remove('glass-panel', 'text-slate-700', 'dark:text-slate-300');
      btn.classList.add('bg-indigo-600', 'text-white', 'shadow-md', 'shadow-indigo-500/20');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        if (filter === 'all') {
          card.style.display = 'flex';
        } else {
          const categories = card.getAttribute('data-category')?.split(' ') || [];
          if (categories.includes(filter)) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        }
      });
    });
  });

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