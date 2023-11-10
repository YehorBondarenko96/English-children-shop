const listButtonMenu = document.querySelector('.list-button-menu');
const buttonMenu = document.querySelector('.button-menu');


buttonMenu.addEventListener('click', () => {
    listButtonMenu.classList.add('button-menu-focus');
    definesItemsButtonMenu();
});

buttonMenu.addEventListener('blur', () => {
    setTimeout(() => {
    listButtonMenu.classList.remove('button-menu-focus')
},0)
});


async function definesItemsButtonMenu() {
    const itemsButtonMenu = await document.querySelectorAll('.item-button-menu');
    [...itemsButtonMenu].forEach((itemButtonMenu) => {
        console.log(1);
        itemButtonMenu.addEventListener('click', renderMainForProducts)
        });
};



import { galleryItems } from "./gallety-my-products";

const main = document.querySelector('main');


let idItemButtonMenu = '';

const removeVisuallyHidden = () => {
    modalGallery.classList.remove('visually-hidden');
    renderItemsVideo(event, galleryItems);
};
const addVisuallyHidden = () => {
    modalGallery.classList.add('visually-hidden');
    modalGallery.innerHTML = ''
};
const removeEventListenerModalGallery = () => {addVisuallyHidden();
    modalGallery.removeEventListener('click', removeEventListenerModalGallery)};


function renderItemsVideo (event, galleryItems) {
    const idItem = event.currentTarget.getAttribute('id');
    const itemVideo = galleryItems[idItemButtonMenu].find(galleryItem => galleryItem.id == idItem).urlVideo;
    modalGallery.innerHTML = `<iframe 
    width="560" 
    height="315" 
    src="${itemVideo}" 
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen>
</iframe>`;
};



function renderMainForProducts(event) {
    console.log(2);
    idItemButtonMenu = event.currentTarget.getAttribute('id');
    const itemMainForProducts = galleryItems[idItemButtonMenu].map((galleryItem) =>
        `<li>
        <button id="${galleryItem.id}" class="button-gallery" type="button">
        <img class="img-manual" src="${galleryItem.img}" alt="manual"/>
        <h3 class="h3-manual">${galleryItem.name}<br> <span>${galleryItem.surname}</span></h3>
        <p class="p-manual">${galleryItem.description}</p>
        <p class="button-for-more">Click to learn more</p>
    </button>
    </li>`
    ).join("");
    const contentMain = `<ul class="gallery">
        ${itemMainForProducts}
</ul>
<div class="modal-gallery visually-hidden">
</div>`
    main.innerHTML = contentMain;
    const buttonsGallery = document.querySelectorAll('.button-gallery')
    

buttonsGallery.forEach((buttonGallery) => {
    buttonGallery.addEventListener('click', () => {
        const modalGallery = document.querySelector('.modal-gallery');
        removeVisuallyHidden();
        modalGallery.addEventListener('click', removeEventListenerModalGallery)
    });
});
};
