export function Footer() {
  return `
    <footer
      class="py-12 border-t border-slate-200/50 dark:border-slate-800/50 text-center"
    >
      <div
        class="mx-auto max-w-6xl px-6 flex flex-col md:flex-row justify-between items-center gap-6"
      >
        <p class="text-sm text-slate-500">
          © <span id="year"></span> JFPC. Hecho con HTML, Tailwind y JS.
        </p>
        <a
          class="text-xs font-bold uppercase tracking-[0.2em] hover:text-blue-500 transition-colors"
          href="#inicio"
          >Volver arriba</a
        >
      </div>
    </footer>
  `;
}