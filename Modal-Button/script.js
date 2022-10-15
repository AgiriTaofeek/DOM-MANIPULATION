const openBtn = document.querySelector('.btn--open');
const closeBtn = document.querySelector('.btn--close');
const modalContainer = document.querySelector('.modal-container');

//* click to display modal
openBtn.addEventListener('click', () => {
  modalContainer.toggleAttribute('data-visible');
});

//* Click to close modal
closeBtn.addEventListener('click', () => {
  modalContainer.toggleAttribute('data-visible');
});

//* Click to close modal from anywhere else on the page
window.addEventListener('click', (e) => {
  if (e.target === modalContainer) {
    modalContainer.toggleAttribute('data-visible');
  }
});
