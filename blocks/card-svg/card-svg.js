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

   if (
      block.querySelectorAll(".card-svg-wrapper .card-svg.cta-link > div") !== null) {
      block.querySelectorAll(".card-svg-wrapper .card-svg.cta-link > div")
        .forEach((originalDiv) => {
          const link = originalDiv.querySelector("a");
          if (!link) return;

          // Create a new wrapper div
          const wrapper = document.createElement("div");
          wrapper.className = "card-link-wrapper";

          // Clone the original content
          const contentClone = originalDiv.cloneNode(true);
          wrapper.appendChild(contentClone);

          // Create and append the accordion arrow image
          const arrowImg = document.createElement("img");
          arrowImg.src = "../../icons/accordionarrow.svg";
          arrowImg.alt = "Arrow Icon";
          arrowImg.classList.add("arrow-icon");
          // arrowImg.width = 24;
          // arrowImg.height = 24;
          wrapper.appendChild(arrowImg);

          // Replace the original div with the new wrapper
          originalDiv.replaceWith(wrapper);

          // Make the entire wrapper clickable
          block.querySelector(".card-link-wrapper > div").addEventListener("click", () => {
              window.location.href = link.href;
            });
        });
    }



}