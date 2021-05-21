const toggleBttn = document.querySelector('.navbar__toggleBttn');
const menu = document.querySelector('.navbar_menu');
const icon = document.querySelector('.navbar_icons');

toggleBttn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icon.classList.toggle('active');
}); 