import {
  createOptimizedPicture
} from '../../scripts/aem.js';

export default async function decorate (block) {

//console.log('block', block);

  const links = Array.from(
        document.querySelectorAll(".links.navigation.bullet a")
      );
      const linksWithoutLast = links.slice(0, -1);

      // Add bullets before links
      linksWithoutLast.forEach((link) => {
        const bullet = document.createElement("span");
        bullet.textContent = "• ";
        link.parentNode.insertBefore(bullet, link);
      });

      // Add icon to the container
      const mainDivs = document.querySelectorAll(".image-with-icon > div");
      mainDivs.forEach((div, index) => {
        if (index !== 0 && index !== mainDivs.length - 1) {
          const innerDiv = div.querySelector("div");
          if (innerDiv) {
            const icon = document.createElement("p");
            icon.classList.add("icon");
            innerDiv.appendChild(icon);
          }
        }
      });

      const links1 = document.querySelectorAll(".navigation ul > li > a");
     // console.log(links1);
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