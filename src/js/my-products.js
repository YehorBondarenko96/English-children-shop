import { galleryItems } from "./gallety-my-products";
import idItemButtonMenu from "./menu-my-products";
console.log(idItemButtonMenu);

const buttonsGallery = document.querySelectorAll('.button-gallery');
const modalGallery = document.querySelector('.modal-gallery');

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

buttonsGallery.forEach((buttonGallery) => {
    buttonGallery.addEventListener('click', () => {
        removeVisuallyHidden();
        modalGallery.addEventListener('click', removeEventListenerModalGallery)
    });
});


function renderItemsVideo (event, galleryItems) {
    const idItem = event.currentTarget.getAttribute('id');
    const itemVideo = galleryItems.find(galleryItem => galleryItem.id == idItem).urlVideo;
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



