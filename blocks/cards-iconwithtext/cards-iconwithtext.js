import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  /* change to ul, li */
  const parentDiv = document.createElement('div');
  parentDiv.className = "owl-carousel card-carousel";
  [...block.children].forEach((row) => {
    const innerDiv = document.createElement('div');
    innerDiv.className = "innerDiv";
    while (row.firstElementChild) innerDiv.append(row.firstElementChild);
    [...innerDiv.children].forEach((div) => {
    if (block.querySelector(".cards-iconwithtext.carausel-tabs>div")) {
      if (div.children.length === 1 && div.firstElementChild.textContent.trim().endsWith(".svg")) div.className = 'cards-card-image';
            else div.className = 'cards-card-body';
    } else {
      if (div.children.length === 1 && div.firstElementChild.textContent.trim()) div.className = 'cards-card-image';
            else div.className = 'cards-card-body';
    }
    });
    parentDiv.append(innerDiv);
  });
  //ul.querySelectorAll('picture > img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
  parentDiv.querySelectorAll(".owl-carousel.card-carousel .innerDiv").forEach((li) => {
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
  const listItems = parentDiv.querySelectorAll('.innerDiv');
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
  block.append(parentDiv);
}
