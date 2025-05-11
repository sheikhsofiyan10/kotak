import {
  createOptimizedPicture
} from '../../scripts/aem.js';

export default function decorate(block) {
  const parentDivs = block.querySelectorAll(".images > div");
  parentDivs.forEach(function (parentDiv) {
    const linkElement = parentDiv.querySelector("p:last-child");
    const url = linkElement.innerText;
    const anchor = document.createElement("a");
    anchor.href = url;
    const newDiv = document.createElement("div");
    anchor.appendChild(newDiv);
    // Move the internal divs inside the anchor tag
    while (parentDiv.firstChild) {
      newDiv.appendChild(parentDiv.firstChild);
    }
    parentDiv.appendChild(anchor);
    linkElement.style.display = "none";
  });
}