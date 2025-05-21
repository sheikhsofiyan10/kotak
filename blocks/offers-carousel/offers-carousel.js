const createCardCarousel = async () => {
  const res = await fetch("/data/mock-offers.json");
  const cardsData = await res.json();

  const carouselContainer = document.createElement("div");
  carouselContainer.className = "owl-carousel";

  // Loop through each card data
  cardsData?.mostPopularList.forEach((card) => {
    const cardEl = document.createElement("div");
    cardEl.className = "card";

    cardEl.innerHTML = `
         <div class="card-image">
           <img src="${card.thumbnailImage}" alt="${card.offerTitleModified}" loading="lazy">
         </div>
         <div class="card-body">
           <h4>${card.offerTitleModified}</h4>
           <p>${card.description}</p>
        </div>
        <div class="card-footer">
           <p class="valid-info"> Valid Till: ${card.endDate}</p>
           <p>
             <a href="#" class="link-button" target="_blank" rel="noopener">Read more</a>
           </p>
         </div>
       `;

    carouselContainer.appendChild(cardEl);
  });

  return carouselContainer;
};

export default async function decorate(block) {
  block.innerHTML = "";

  try {
    const carouselContainer = await createCardCarousel();
    block.appendChild(carouselContainer);
  } catch (error) {
    console.log(error);
  }
}
