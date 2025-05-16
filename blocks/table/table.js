function buildCell(rowIndex, content) {
  const isHeader = rowIndex === 0;
  const cell = document.createElement(isHeader ? "th" : "td");
  if (isHeader) cell.setAttribute("scope", "col");

  // Detect [colspan:X] and [rowspan:Y] markers
  const colspanMatch = content.match(/\[colspan:(\d+)\]/);
  const rowspanMatch = content.match(/\[rowspan:(\d+)\]/);

  if (colspanMatch) {
    cell.setAttribute("colspan", colspanMatch[1]);
    content = content.replace(/\[colspan:\d+\]/, "").trim();
  }

  if (rowspanMatch) {
    cell.setAttribute("rowspan", rowspanMatch[1]);
    content = content.replace(/\[rowspan:\d+\]/, "").trim();
  }

  cell.innerHTML = content;
  return cell;
}

export default function decorate(block) {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");

  const rows = [...block.children];
  const header = table.appendChild(thead);
  const body = table.appendChild(tbody);

  rows.forEach((child, rowIndex) => {
    const row = document.createElement("tr");
    [...child.children].forEach((col) => {
      const cell = buildCell(rowIndex, col.innerHTML);
      row.appendChild(cell);
    });

    if (rowIndex === 0) {
      header.appendChild(row);
    } else {
      body.appendChild(row);
    }
  });

  block.innerHTML = "";
  block.appendChild(table);
}
