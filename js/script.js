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
 
function carregarPagina(nome) {
  fetch(`pages/${nome}.html`)
    .then(res => res.text())
    .then(html => {
      const destino = document.getElementById('conteudo');
      destino.innerHTML = html;

      // reprocessa scripts
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = html;
      tempDiv.querySelectorAll('script').forEach(script => {
        const novoScript = document.createElement('script');
        if (script.src) {
          novoScript.src = script.src;
        } else {
          novoScript.textContent = script.textContent;
        }
        document.body.appendChild(novoScript);
      });
    });
}


