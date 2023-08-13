import { galleryItems } from './gallery-items.js';

const container = document.querySelector(".gallery");

function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `
    <li class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img 
    class="gallery__image" 
    src="${preview}" 
    alt="${description}"
    data-source="${original}">
    </a>
  </li>`
    )
    .join("");
}
container.insertAdjacentHTML("beforeend", createMarkup(galleryItems));

const lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: "alt",
    captionDelay: 250});