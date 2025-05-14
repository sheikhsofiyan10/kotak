export default async function decorate(block) {
  const svgWrappers = block.querySelectorAll(".card-svg-wrapper .card-svg div > div:first-child p");
  svgWrappers.forEach(p => {
    const fileName = p.textContent.trim();
    const img = document.createElement("img");
    img.src = `../../icons/${fileName}`;
    img.alt = fileName.replace(".svg", "");
    img.classList.add("credit-card-icon");
    p.replaceWith(img);
  });

}