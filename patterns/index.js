const CELL_SIZE = 22.9;

const COLORS = [
  "#f94144",
  "#f3722c",
  "#f8961e",
  "#f9844a",
  "#f9c74f",
  "#90be6d",
  "#43aa8b",
  "#4d908e",
  "#577590",
  "#277da1",
  "#FFF8E7",
];

const RADIUS = ["0%", "0%", "50%"];

function select(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function createCell(x, y) {
  const cell = document.createElement("div");

  cell.style.left = `${x * CELL_SIZE}px`;
  cell.style.top = `${y * CELL_SIZE}px`;
  cell.style.position = "absolute";
  cell.style.height = `${CELL_SIZE}px`;
  cell.style.width = `${CELL_SIZE}px`;

  return cell;
}

const cells = [];

document.addEventListener("DOMContentLoaded", () => {
  const xLen = Math.floor(window.innerWidth / CELL_SIZE);
  const yLen = Math.floor(window.innerHeight / CELL_SIZE);

  for (let y = 0; y < yLen; y++) {
    for (let x = 0; x < xLen; x++) {
      const cell = createCell(x, y);

      document.body.appendChild(cell);

      cells.push(cell);
    }
  }
});

setInterval(() => {
  for (const cell of cells) {
    cell.style.backgroundColor = select(COLORS);
    cell.style.borderTopLeftRadius = select(RADIUS);
    cell.style.borderTopRightRadius = select(RADIUS);
    cell.style.borderBottomLeftRadius = select(RADIUS);
    cell.style.borderBottomRightRadius = select(RADIUS);
  }
}, 1500);
