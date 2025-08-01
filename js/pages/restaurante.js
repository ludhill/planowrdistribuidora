console.log('restaurante.js carregado');

// Acordeons
document.querySelectorAll('.accordion')?.forEach(accordion => {
  const header = accordion.querySelector('.accordion-header');
  header?.addEventListener('click', () => {
    document.querySelectorAll('.accordion.active')?.forEach(a => a.classList.remove('active'));
    accordion.classList.toggle('active');
  });
});

// Modal
const modal = document.getElementById('improvementModal');
const modalText = document.getElementById('modal-text');
const closeBtn = document.querySelector('.close-btn');
const openBtns = document.querySelectorAll('.open-modal-btn');

openBtns?.forEach(btn => {
  btn.addEventListener('click', () => {
    modalText.textContent = btn.getAttribute('data-improvement');
    modal.style.display = 'block';
  });
});

closeBtn?.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', e => {
  if (e.target === modal) modal.style.display = 'none';
});
window.addEventListener('keydown', e => {
  if (e.key === 'Escape') modal.style.display = 'none';
});
