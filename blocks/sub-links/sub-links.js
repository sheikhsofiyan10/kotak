export default async function decorate(block) {
  console.log("sublinks- block", block);
  if (block.querySelector(".sub-links.navigation.bullet>div") !== null) {
    const newWrapper1 = document.querySelector(".sub-links-container");
    const newWrapper = document.createElement("div");
    newWrapper.className = "custom-nav-links-wrapper";
    const newWrapper2 = document.createElement("div");
    newWrapper2.className = "sub-links-wrapper";
    newWrapper1.appendChild(newWrapper);
    newWrapper.appendChild(newWrapper2);
    newWrapper2.appendChild(block);
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
    // insert wrapper
    const customLinksWrapper = document.querySelector(
      ".custom-nav-links-wrapper"
    );
    const newWrapper2 = document.createElement("div");
    newWrapper2.className = "sub-links-wrapper";
    customLinksWrapper.appendChild(newWrapper2);
    newWrapper2.appendChild(block);
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
  } else {
    const customLinksWrapper = document.querySelector(
      ".custom-nav-links-wrapper"
    );
    const newWrapper2 = document.createElement("div");
    newWrapper2.className = "sub-links-wrapper";
    customLinksWrapper.appendChild(newWrapper2);
    newWrapper2.appendChild(block);
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