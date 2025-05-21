export default async function decorate (block) {

  const headerEl = document.querySelector(
    ".link-list-container .default-content-wrapper"
  );
  const listItemBlockEl = document.querySelector(".link-list");

  if (headerEl.children.length > 1) {
    headerEl.classList.add("helpcenter__link-wrapper");
    Array.from(headerEl.children).forEach((item) => {
      if (item?.tagName === "P") {
        item.children[0].innerHTML = `<img src="https://www.kotak.com/content/dam/Kotak/selfhelpicons/back%20button.png" />`;
      }
    });
  }
  let anchorUrl = [];
  Array.from(listItemBlockEl?.children).forEach((listEl) => {
    let anchorEl;
    listEl.classList.add("helpcenter__list-item");
    listEl?.children[0].classList.add("helpcenter__border-bottom");

    Array.from(listEl?.children[0]?.children).forEach((listSubEl) => {
      if (listSubEl?.children[0]?.tagName === "STRONG") {
        listSubEl.classList.add("subheading");
      }
      if (listSubEl?.children[0]?.tagName === "A") {
        anchorEl = listSubEl.children[0];
        anchorUrl.push(anchorEl.href);
        anchorEl.replaceWith(anchorEl.textContent);
      }
    });
  });
  Array.from(listItemBlockEl?.children).forEach((item, i) => {
    let blockHtml = item.children[0].innerHTML;
    let linkEl = document.createElement("a");
    linkEl.href = anchorUrl[i];
    linkEl.innerHTML = blockHtml;
    item.children[0].innerHTML = "";
    item.children[0].append(linkEl);
  });
}

