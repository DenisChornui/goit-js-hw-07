import { galleryItems } from "./gallery-items.js";

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

container.addEventListener("click", handlerProductClick);

function handlerProductClick(evt) {
  evt.preventDefault();
  if (evt.target === evt.currentTarget) {
    return;
  }

  const instance = basicLightbox.create(`
	<img  
    src="${evt.target.dataset.source}" 
    alt="${evt.target.alt}">
`);
  instance.show();

  container.addEventListener("keydown", (evt) => {
    if (evt.code === "Escape") {
      instance.close();
    }
  });
}
