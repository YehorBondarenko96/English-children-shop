const buttonGallery = document.querySelector('.button-gallery');
const modalGallery = document.querySelector('.modal-gallery');
const videoGallery = document.querySelector('#video-gallery');

const removeVisuallyHidden = () => {modalGallery.classList.remove('visually-hidden')};
const addVisuallyHidden = () => {modalGallery.classList.add('visually-hidden')};
const removeEventListenerModalGallery = () => {addVisuallyHidden();
    modalGallery.removeEventListener('click', removeEventListenerModalGallery)};

buttonGallery.addEventListener('click', () => {
    removeVisuallyHidden();
    modalGallery.addEventListener('click', removeEventListenerModalGallery)
});

if(modalGallery.classList.contains('visually-hidden')){
    videoGallery.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
};
