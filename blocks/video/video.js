import {
  createOptimizedPicture
} from '../../scripts/aem.js';

export default async function decorate (block) {

  const videoWrapper = document.querySelector(".more-information div");

  let url = Array.from(videoWrapper?.children)[0]?.children[1]?.textContent;

  let videoHtml = ` <div class="section__video">
        <div class="video__container">
          <div class="col-w-7">
            <div class="video__card" style="padding-top: 60px">
              <a
                data-fancybox
                href=${url}
              >
                <img
                  src="https://www.kotak.com/content/dam/Kotak/video-thumbnails/homepage-yt-t-690x340.jpg.transform/transformer-width-495-height-242/image.jpg"
                  alt="Watch Video"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="55"
                  width="76"
                  viewBox="0 0 236 163"
                  class="overlay-icon"
                >
                  <path
                    d="M229.763 25.817c-2.699-10.162-10.65-18.165-20.747-20.881C190.716 0 117.333 0 117.333 0S43.951 0 25.651 4.936C15.554 7.652 7.602 15.655 4.904 25.817 0 44.237 0 82.667 0 82.667s0 38.43 4.904 56.85c2.698 10.162 10.65 18.164 20.747 20.881 18.3 4.935 91.682 4.935 91.682 4.935s73.383 0 91.683-4.935c10.097-2.717 18.048-10.72 20.747-20.88 4.904-18.422 4.904-56.851 4.904-56.851s0-38.43-4.904-56.85"
                    fill="#101010E6"
                  ></path>
                  <path
                    d="M93.333 117.558l61.334-34.89-61.334-34.893z"
                    fill="#fff"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="col-w-5">
            <div class="video__card">
              <p class="video__card__heading">Hausla hai toh ho jayega</p>
              <img
                src="https://www.kotak.com/content/dam/Kotak/feature-cards/housla-hai-to-ho-jayega_girl-image.jpg.transform/transformer-width-495-height-242/image.jpg"
                alt="girl"
              />
              <p class="video__card__text">
                At Kotak, we believe in the fearless trailblazers—the ones who
                dare to dream bigger, push boundaries, and turn challenges into
                opportunities. That’s why we are here—to back you with financial
                solutions that evolve with your needs, empowering you to chase the
                extraordinary.
                <span>Because when you have Hausla, anything is possible.</span>
              </p>
            </div>
          </div>
        </div>
      </div>`;

  document.querySelector(".video-container").innerHTML = videoHtml;


}