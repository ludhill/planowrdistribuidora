document.addEventListener('DOMContentLoaded', function () {
    // --- SCRIPT DO ACCORDION ADAPTADO PARA SEU CSS ---
    const accordions = document.querySelectorAll('.accordion');
    accordions.forEach(accordion => {
        const header = accordion.querySelector('.accordion-header');
        header.addEventListener('click', function () {
            // Fecha todos os outros accordions
            accordions.forEach(otherAccordion => {
                if (otherAccordion !== accordion) {
                    otherAccordion.classList.remove('active');
                }
            });
            // Alterna a classe 'active' no accordion clicado
            accordion.classList.toggle('active');
        });
    });

    // --- SCRIPT DO MODAL ---
    const modal = document.getElementById('improvementModal');
    const modalText = document.getElementById('modal-text');
    const openModalBtns = document.querySelectorAll('.open-modal-btn');
    const closeBtn = document.querySelector('.close-btn');

    openModalBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const improvementText = this.getAttribute('data-improvement');
            modalText.textContent = improvementText;
            modal.style.display = 'block';
        });
    });

    function closeModal() {
        modal.style.display = 'none';
    }

    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', function (event) {
        if (event.target == modal) {
            closeModal();
        }
    });

    window.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
});

async function carregarPagina(nome) {
  try {
    // 1. Carrega o HTML
    const resposta = await fetch(`pages/${nome}.html`);
    const html = await resposta.text();
    document.getElementById('conteudo').innerHTML = html;

    // 2. Reexecuta scripts embutidos (caso existam no HTML)
    const temp = document.createElement('div');
    temp.innerHTML = html;
    temp.querySelectorAll('script').forEach(orig => {
      const novo = document.createElement('script');
      if (orig.src) {
        novo.src = orig.src;
      } else {
        novo.textContent = orig.textContent;
      }
      document.body.appendChild(novo);
    });

    // 3. Carrega script externo modular (se existir)
    const scriptModular = document.createElement('script');
    scriptModular.src = `pages/${nome}.js`;
    scriptModular.defer = true; // apenas por segurança, executa depois da renderização
    document.body.appendChild(scriptModular);
  } catch (erro) {
    document.getElementById('conteudo').innerHTML = `<p>Erro ao carregar: ${erro}</p>`;
  }
}