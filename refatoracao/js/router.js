import { carregarPagina } from './carregarPagina.js';

export function iniciarRoteador() {
  // Escuta navegação
  document.body.addEventListener('click', e => {
    const link = e.target.closest('[data-page]');
    if (link) {
      e.preventDefault();
      const pagina = link.getAttribute('data-page');
      carregarPagina(pagina);
    }
  });

  // Popstate: botão voltar/avançar
  window.addEventListener('popstate', e => {
    const pagina = e.state?.pagina || 'restaurante';
    carregarPagina(pagina, false);
  });

  // Carga inicial
  const inicial = window.location.pathname.replace('/', '') || 'restaurante';
  carregarPagina(inicial);
}
