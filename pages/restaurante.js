document.addEventListener('DOMContentLoaded', () => {
  // Acordeons
  const accordions = document.querySelectorAll('.accordion');
  accordions.forEach(accordion => {
    const header = accordion.querySelector('.accordion-header');
    header.addEventListener('click', () => {
      accordions.forEach(other => {
        if (other !== accordion) other.classList.remove('active');
      });
      accordion.classList.toggle('active');
    });
  });

  // Botões de melhoria (modal)
  const modal = document.getElementById('improvementModal');
  const modalText = document.getElementById('modal-text');
  const closeBtn = document.querySelector('.close-btn');
  const openBtns = document.querySelectorAll('.open-modal-btn');

  openBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      modalText.textContent = btn.getAttribute('data-improvement');
      modal.style.display = 'block';
    });
  });

  closeBtn.addEventListener('click', () => modal.style.display = 'none');
  window.addEventListener('click', e => {
    if (e.target === modal) modal.style.display = 'none';
  });
  window.addEventListener('keydown', e => {
    if (e.key === 'Escape') modal.style.display = 'none';
  });
});
