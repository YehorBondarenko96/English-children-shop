const listButtonMenu = document.querySelector('.list-button-menu');
const buttonMenu = document.querySelector('.button-menu');
const itemsButtonMenu = document.querySelectorAll('.item-button-menu');

let idItemButtonMenu = '';

buttonMenu.addEventListener('click', () => {
    listButtonMenu.classList.add('button-menu-focus');
});

buttonMenu.addEventListener('blur', () => {
    setTimeout(() => {
    listButtonMenu.classList.remove('button-menu-focus')
},0)
});

function readIdButtonMenu (event) {
    idItemButtonMenu = event.currentTarget.getAttribute('id');
    return idItemButtonMenu
};

itemsButtonMenu.forEach((itemButtonMenu) => {
itemButtonMenu.addEventListener('click', readIdButtonMenu)
});