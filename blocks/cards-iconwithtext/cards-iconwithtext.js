import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  /* change to ul, li */
  const ul = document.createElement('ul');
  ul.className = "owl-carousel card-carousel";
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    while (row.firstElementChild) li.append(row.firstElementChild);
    [...li.children].forEach((div) => {
      if (div.children.length === 1 && div.querySelector('picture')) div.className = 'cards-card-image';
      else div.className = 'cards-card-body';
    });
    ul.append(li);
  });
  ul.querySelectorAll('picture > img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));

  const listItems = ul.querySelectorAll('li');

 /* listItems.forEach(li => {
    const linkParagraph = li.querySelector('p:last-of-type');
    const link = linkParagraph.textContent;
    const anchor = document.createElement('a');
    anchor.href = link;
    const clonedLi = li.cloneNode(true);
    anchor.appendChild(clonedLi);
    li.parentNode.replaceChild(anchor, li);
    clonedLi.querySelector('p:last-of-type').remove();
  });*/
  block.textContent = '';
  block.append(ul);
}


window.onload = function(){

/*$(".owl-carousel.card-carousel").owlCarousel({
        loop: true,
        margin: 10,
        autoplay: false,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        dots: true,
        responsive: {
            0:{
                items:2
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        },
    });*/

    /*$(".carausel-tabs .owl-carousel").owlCarousel({
      items: 4,
      loop: true,
      margin: 10,
      nav: true,
      autoplay: false,
      dots:false,
      autoplayTimeout: 3000,
      responsive: {
        0: {
          items: 1
        },
        600:{
          items:2
        },
        800:{
            items:3
        },
      }
    });*/
};