import { createOptimizedPicture } from "../../scripts/aem.js";

export default async function decorate(block) {

  [...block.children].forEach((row) => {
    row.className = "contact-us-card";

    [...row.children].forEach((card) => {
      if (card.children.length === 1 && card.querySelector("picture"))
        card.className = "card-image";
      else card.className = "card-body";
    });
  });
}
