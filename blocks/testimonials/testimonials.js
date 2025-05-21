const proxyUrl = "https://api.allorigins.win/raw?url=";
export default function decorate(block) {
  renderCards(block);
}

async function fetchData(url) {
  const response = await fetch(proxyUrl + encodeURIComponent(url));
  const json = await response.json();
  return json.data;
}

// Convert Excel serial date to readable format
function convertExcelDate(serial) {
  const excelEpoch = new Date(1899, 11, 30);
  return new Date(
    excelEpoch.getTime() + serial * 86400000
  ).toLocaleDateString();
}

function createCard(review) {
  const card = document.createElement("div");
  card.className = "card";

  const reviewDate = /^\d+$/.test(review.reviewDate)
    ? convertExcelDate(Number(review.reviewDate))
    : review.reviewDate;

  card.innerHTML = `
    <h3>${review.name}</h3>
    <p class="rating">${"⭐".repeat(review.ratings)}</p>
    <p class="desc">${review.comments}</p>
    <p class="ohidden">${review.reviewDateLabel}: ${reviewDate}</p>
  `;

  return card;
}

async function renderCards(block) {
  //const block = document.querySelector(".testimonials");
  const div = document.createElement("div");
  div.className = "owl-carousel card-testimonials";
  const url = document.querySelector('a[href$=".json"]').textContent.trim();
  const reviews = await fetchData(url);
  reviews.forEach((review) => {
    const card = createCard(review);
    div.appendChild(card);
  });
  block.textContent = "";
  block.append(div);
}

window.onload = function () {
  $(".testimonials > .owl-carousel.card-testimonials").owlCarousel({
      items: 3,
      loop: true,
      margin: 10,
      nav: true,
      autoplay: false,
      dots: false,
      autoplayTimeout: 3000,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 3,
        },
      },
    });
};