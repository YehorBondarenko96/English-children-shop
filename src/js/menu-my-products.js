const listButtonMenu = document.querySelector('.list-button-menu');
const buttonMenu = document.querySelector('.button-menu');


buttonMenu.addEventListener('click', () => {
    listButtonMenu.classList.add('button-menu-focus');
});

document.addEventListener('click', (event) => {
    if(!buttonMenu.contains(event.target)&&!listButtonMenu.contains(event.target)){
        listButtonMenu.classList.remove('button-menu-focus')
    } else if(listButtonMenu.contains(event.target)){
        setTimeout(() => {
            listButtonMenu.classList.remove('button-menu-focus')
        }, 100)
    }
});
