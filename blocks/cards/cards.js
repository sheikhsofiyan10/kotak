import { createOptimizedPicture } from "../../scripts/aem.js";
export default function decorate(block) {
  /* change to ul, li */
  const isCardDarkGray = block.classList.contains("card-bg-dark-gray");
  const isCardLightGray = block.classList.contains("card-bg-light-gray");

  const ul = document.createElement("ul");
  [...block.children].forEach((row) => {
    const li = document.createElement("li");
    while (row.firstElementChild) li.append(row.firstElementChild);
    [...li.children].forEach((div) => {
      if (div.children.length === 1 && div.querySelector("picture"))
        div.className = "cards-card-image";
      else div.className = "cards-card-body";
      if (div.children.length === 1 && div.querySelector("p")) {
        div.className = "card-absolute-content";
      }
    });
    if (li.children.length === 3) {
      li.children[0].append(li.children[2]);
    }

    if (isCardDarkGray) li.classList.add("card-bg-dark-gray");
    if (isCardLightGray) li.classList.add("card-bg-light-gray");

    ul.append(li);
  });
  ul.querySelectorAll("picture > img").forEach((img) =>
    img
      .closest("picture")
      .replaceWith(
        createOptimizedPicture(img.src, img.alt, false, [{ width: "750" }])
      )
  );
  block.textContent = "";
  block.append(ul);
}
