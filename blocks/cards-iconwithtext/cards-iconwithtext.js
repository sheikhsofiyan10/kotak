import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  /* change to ul, li */
  const ul = document.createElement('ul');
  ul.className = "owl-carousel card-carousel";
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    while (row.firstElementChild) li.append(row.firstElementChild);
    [...li.children].forEach((div) => {
      if (div.children.length === 1 && div.firstElementChild.textContent.trim()) div.className = 'cards-card-image';
      else div.className = 'cards-card-body';
    });
    ul.append(li);
  });
  //ul.querySelectorAll('picture > img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
  ul.querySelectorAll(".owl-carousel.card-carousel li").forEach((li) => {
    const svgParagraph = li.querySelector("p");
    if (svgParagraph && svgParagraph.textContent.trim().endsWith(".svg")) {
      const svgFileName = svgParagraph.textContent.trim();
      const img = document.createElement("img");
      img.src = `../../icons/${svgFileName}`;
      img.alt = svgFileName.replace(".svg", "").replace(/-/g, " ");

      // Replace the <p> tag with the <img> tag
      svgParagraph.parentNode.replaceChild(img, svgParagraph);
    }
  });
  const listItems = ul.querySelectorAll('li');
  if (!block.querySelector(".cards-iconwithtext.carausel-tabs>div")) {
    listItems.forEach(li => {
      const linkParagraph = li.querySelector('p:last-of-type');
      const link = linkParagraph.textContent;
      const anchor = document.createElement('a');
      anchor.href = link;
      const clonedLi = li.cloneNode(true);
      anchor.appendChild(clonedLi);
      li.parentNode.replaceChild(anchor, li);
      clonedLi.querySelector('p:last-of-type').remove();
    });
  }

  block.textContent = '';
  block.append(ul);
}
