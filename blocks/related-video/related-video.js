export default async function decorate(block) {
  const relatedvideoEl = document.querySelector(".related-video div");

  relatedvideoEl.classList.add("related-video__container");

  const urls = [];
  const imgUrls = [];

  Array.from(relatedvideoEl?.children)?.forEach((item, i) => {
    Array.from(item?.children)?.forEach((subItem) => {
      if (subItem?.children?.length > 0) {
        imgUrls.push(
          subItem?.children?.[0]?.children[
            subItem?.children?.[0]?.children?.length - 1
          ]?.src
        );
      }
      if (subItem?.textContent?.includes("youtube")) {
        urls.push(subItem?.textContent);
      }
    });
    let divEl = document.createElement("div");
    divEl.classList.add("related-video__imgCard");
    item.insertBefore(divEl, item.children[1]);
    let anchorEl = document.createElement("a");
    anchorEl.setAttribute("data-fancybox", "");
    anchorEl.setAttribute("href", urls[i]);
    anchorEl.innerHTML = `
   <img src=${imgUrls[i]} alt="thumblains"/>
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
                </svg>`;
    divEl.append(anchorEl);
    item.classList.add(`col-w-${i + 1}`);

    item?.children?.[2]?.remove();
    item?.children?.[2]?.remove();
  });
  const videoEl = document.querySelectorAll(".button-container a");
}
