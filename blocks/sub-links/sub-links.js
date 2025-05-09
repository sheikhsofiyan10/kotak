import {
  createOptimizedPicture
} from '../../scripts/aem.js';

export default async function decorate (block) {
console.log('sublinks- block', block);

  if (block.querySelector(".bullet > div") !== null) {
    const links = Array.from(
      block.querySelectorAll(".sub-links.navigation.bullet a")
    );
    const linksWithoutLast = links.slice(0, -1);
    linksWithoutLast.forEach((link) => {
      const bullet = document.createElement("span");
      bullet.textContent = "• ";
      link.parentNode.insertBefore(bullet, link);
    });
  } else if (block.querySelector(".image-with-icon > div") !== null) {
    const mainDivs = block.querySelectorAll(".image-with-icon > div");
    mainDivs.forEach((div, index) => {
      if (index !== 0 && index !== mainDivs.length - 1) {
        const innerDiv = div.querySelector("div");
        if (innerDiv) {
          const icon = document.createElement("p");
          icon.classList.add("icon");

          // Find the <a> tag within the same div
          const link = innerDiv.querySelector("a");
          if (link) {
            icon.addEventListener("click", function () {
              window.location.href = link.href;
            });
          }
          innerDiv.appendChild(icon);
        }
      }
    });
  }

  const links1 = block.querySelectorAll(".navigation ul > li > a");
  links1.forEach((link) => {
    const iconLink = document.createElement("a");
    iconLink.href = link.href;
    iconLink.title = link.title;

    const icon = document.createElement("i");
    icon.classList.add("icon-more-arow");

    iconLink.appendChild(icon);
    link.parentNode.insertBefore(iconLink, link.nextSibling);
  });

}