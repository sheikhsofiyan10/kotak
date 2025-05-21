import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  /* change to ul, li */

 const videoId = block.querySelector('p').innerHTML;

 block.textContent = "";

  let modal = `
    <div class=modal fade id=videoModal-${videoId} tabindex=-1 role=dialog aria-labelledby=videoModalLabel aria-hidden=true>
     <div class=modal-dialog modal-lg modal-dialog-centered role=document>
     <div class=modal-content>
     <div class=modal-body>
      <button type=button class=close data-dismiss=modal aria-label=Close onclick=stopVideo()>
        &times;
        </button>
     <div class=embed-responsive embed-responsive-16by9>
     <iframe id=videoFrame class=embed-responsive-item src=https://www.youtube.com/embed/${videoId} allowfullscreen height=300px></iframe>
     </div>
     </div>
     </div>
     </div>
    </div>`;

  block.innerHTML = modal;
}