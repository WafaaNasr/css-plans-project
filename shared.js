var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var modalNoButton = document.querySelector('.modal__action--negative');
var planButtons = document.querySelectorAll('.plan button');
var toggleButton = document.querySelector('.toggle-button');
var mobileMenu = document.querySelector('.mobile-nav');

planButtons.forEach(button =>
    button.addEventListener('click', () => {
        toggleModal(true)
    })
);

backdrop.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    toggleModal(false);
});
if (modalNoButton)
    modalNoButton.addEventListener('click', () => toggleModal(false));


const toggleModal = show => {
    if (show) {
        if (modal)
            modal.classList.add('open');
        backdrop.classList.add('open');
    }
    else {
        if (modal)
            modal.classList.remove('open');
        backdrop.classList.remove('open');
    }
}

toggleButton.addEventListener('click', () => {
    mobileMenu.classList.add('open');
    backdrop.classList.add('open');
})