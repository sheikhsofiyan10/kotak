import {
  createOptimizedPicture
} from '../../scripts/aem.js';

export default async function decorate (block) {

  console.log('block', block);
  const videoWrapper = document.querySelector(".more-information div");

  videoWrapper?.classList.add("container");

  Array.from(videoWrapper?.children).forEach((item, i) => {
    let divEl = document.createElement("div");
    item.classList.add(`col-${i + 1}`);
    while (item.firstChild) {
      divEl.appendChild(item.firstChild);
    }
    item.appendChild(divEl);
  });
}