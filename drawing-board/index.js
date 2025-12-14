// Pixel Editor
//
// - grid-based canvas
// - click to toggle between set/unset

const GRID_SIZE = 600;
const CELL_SIZE = 40;
const CELL_COUNT = GRID_SIZE / 15;

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = GRID_SIZE;
canvas.height = GRID_SIZE;

//
// Draw Grid
//

function drawGrid() {
  ctx.strokeStyle = "lightgray";
  ctx.lineWidth = 1;

  for (let i = 0; i <= CELL_COUNT; i++) {
    ctx.beginPath();

    ctx.moveTo(i * CELL_SIZE, 0);
    ctx.lineTo(i * CELL_SIZE, GRID_SIZE);

    ctx.moveTo(0, i * CELL_SIZE);
    ctx.lineTo(GRID_SIZE, i * CELL_SIZE);

    ctx.stroke();
    ctx.closePath();
  }
}

function drawCell(x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(
    x * CELL_SIZE + 1,
    y * CELL_SIZE + 1,
    CELL_SIZE - 2,
    CELL_SIZE - 2,
  );
}

drawGrid();

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static fromIndex(index) {
    return new Point(index % CELL_COUNT, Math.floor(index / CELL_COUNT));
  }
}

const state = {
  cells: new Array(CELL_COUNT * CELL_COUNT),
  color: "black",
};

const currentState = window.localStorage.getItem("drawing-board-state");

if (currentState) {
  Object.assign(state, JSON.parse(currentState));

  for (let i = 0; i < state.cells.length; i++) {
    const point = Point.fromIndex(i);

    if (state.cells[i]) {
      drawCell(point.x, point.y, state.cells[i]);
    }
  }
}

function setColor(color) {
  state.color = color;
}

function onCanvasClick(event) {
  const canvasRect = canvas.getBoundingClientRect();

  const cellX = Math.floor((event.clientX - canvasRect.x) / CELL_SIZE);
  const cellY = Math.floor((event.clientY - canvasRect.y) / CELL_SIZE);

  const index = cellY * CELL_COUNT + cellX;

  let actualColor = state.cells[index] == state.color ? "white" : state.color;

  drawCell(cellX, cellY, actualColor);
  state.cells[index] = actualColor;

  window.localStorage.setItem("drawing-board-state", JSON.stringify(state));
}

function reset() {
  state.cells.fill("white");
  ctx.clearRect(0, 0, GRID_SIZE, GRID_SIZE);
  drawGrid();

  localStorage.removeItem("drawing-board-state");
}
