import {
  createOptimizedPicture
} from '../../scripts/aem.js';



export default async function decorate (block) {
  let mybutton = document.getElementsByClassName("back-to-top")[0];
  mybutton.addEventListener("click", topFunction);
  window.onscroll = function() {scrollFunction()};


function scrollFunction() {

   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
       mybutton.addClass = "block-btn";
   } else {
       mybutton.removeClass = "block-btn";
   }
}


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
}
