const listButtonMenu = document.querySelector('.list-button-menu');
const buttonMenu = document.querySelector('.button-menu');


buttonMenu.addEventListener('click', () => {
    listButtonMenu.classList.add('button-menu-focus');
});

buttonMenu.addEventListener('blur', () => {
    setTimeout(() => {
    listButtonMenu.classList.remove('button-menu-focus')
},0)
});