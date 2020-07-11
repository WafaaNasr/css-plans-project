var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var modalNoButton = document.querySelector('.modal__action--negative');
var planButtons = document.querySelectorAll('.plan button');

planButtons.forEach(button =>
    button.addEventListener('click', () => {
        toggleModal(true)
    })
);

backdrop.addEventListener('click', () =>toggleModal(false));
modalNoButton.addEventListener('click', () => toggleModal(false));


const toggleModal = show => {
    if (show)
        modal.style.display = backdrop.style.display = 'block';
    else
        modal.style.display = backdrop.style.display = 'none';

}