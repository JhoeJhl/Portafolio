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

// 2. Activamos todas las funcionalidades de los botones
inicializarUI();

function inicializarUI() {
  const yearElement = document.getElementById('year');
  if (yearElement) yearElement.textContent = new Date().getFullYear();
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileLinks = mobileMenu?.querySelectorAll('a');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      menuBtn.textContent = mobileMenu.classList.contains('hidden') ? '☰' : '✕';
    });
    mobileLinks?.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuBtn.textContent = '☰';
      });
    });
  }

  const themeBtn = document.getElementById('themeBtn'); 
  const themeBtnMobile = document.getElementById('themeBtnMobile'); 
  const htmlElement = document.documentElement;
  const updateIcons = (isDark) => {
    const icon = isDark ? '☀️' : '🌙';
    if (themeBtn) themeBtn.textContent = icon;
    if (themeBtnMobile) themeBtnMobile.textContent = icon;
  };
  const isDarkMode = localStorage.getItem('theme') === 'dark' || 
                    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
  
  if (isDarkMode) {
    htmlElement.classList.add('dark');
    updateIcons(true);
  } else {
    htmlElement.classList.remove('dark');
    updateIcons(false);
  }
  const toggleTheme = () => {
    const isDarkNow = htmlElement.classList.toggle('dark');
    localStorage.setItem('theme', isDarkNow ? 'dark' : 'light');
    updateIcons(isDarkNow);
  };

  if (themeBtn) themeBtn.addEventListener('click', toggleTheme);
  if (themeBtnMobile) themeBtnMobile.addEventListener('click', toggleTheme);
  const contactForm = document.querySelector('form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.');
      contactForm.reset();
    });
  }
}