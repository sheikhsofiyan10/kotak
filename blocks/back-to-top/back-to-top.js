import {
  createOptimizedPicture
} from '../../scripts/aem.js';



export default async function decorate (block) {
  let backToTopDiv = block.querySelector(".back-to-top > div > div");
    backToTopDiv.onclick = function () {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    };
}
