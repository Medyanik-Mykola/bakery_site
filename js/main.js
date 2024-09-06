const modal = document.querySelector('.backdrop');
const modalBtnOpen = document.querySelector('.modal-bth-open');

const modalBtnClose = document.querySelector('.modal-bth-close');

const toggleModal = () => modal.classList.toggle('is-hidden');

modalBtnOpen.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleModal);


