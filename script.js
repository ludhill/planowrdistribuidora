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

document.addEventListener('DOMContentLoaded', () => {
  // Localiza todos os blocos de carrossel
  document.querySelectorAll('.carrossel-wrapper').forEach((wrapper, i) => {
    const checkbox = document.getElementById(`toggleCarrossel${i + 1}`);
    const container = wrapper.querySelector('.carrossel-imagens');
    const nextBtn = wrapper.querySelector('.next');
    const prevBtn = wrapper.querySelector('.prev');
    let index = 0;
    const total = container?.children.length || 0;

    // Controle de exibição
    checkbox?.addEventListener('change', () => {
      wrapper.classList.toggle('hidden', !checkbox.checked);
    });

    // Navegação
    nextBtn?.addEventListener('click', () => {
      index = (index + 1) % total;
      atualizarCarrossel();
    });

    prevBtn?.addEventListener('click', () => {
      index = (index - 1 + total) % total;
      atualizarCarrossel();
    });

    // Função de atualização de posição
    function atualizarCarrossel() {
      const largura = container.clientWidth;
      container.style.transform = `translateX(-${index * largura}px)`;
    }

    window.addEventListener('resize', atualizarCarrossel);
  });
});

