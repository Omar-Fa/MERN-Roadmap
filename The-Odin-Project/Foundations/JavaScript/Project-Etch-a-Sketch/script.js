const container = document.getElementById('container');
const eraserBtn = document.getElementById('eraserBtn');
const widthInput = document.getElementById('gridWidth');
const heightInput = document.getElementById('gridHeight');
const squareSizeInput = document.getElementById('squareSize');
const colorModeSelect = document.getElementById('colorMode');

let eraserOn = false;
let colorMode = colorModeSelect.value;

function createGrid() {
  const gridW = parseInt(widthInput.value);
  const gridH = parseInt(heightInput.value);
  const squareSize = parseInt(squareSizeInput.value);

  const cols = Math.floor(gridW / squareSize);
  const rows = Math.floor(gridH / squareSize);

  container.innerHTML = '';
  container.style.width = `${cols * squareSize}px`;
  container.style.height = `${rows * squareSize}px`;

  for (let i = 0; i < cols * rows; i++) {
    const square = document.createElement('div');
    square.classList.add('grid-square');
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    square.dataset.darkness = 0;

    square.addEventListener('mouseover', () => handleHover(square));
    container.appendChild(square);
  }
}

function handleHover(square) {
  if (eraserOn) {
    square.style.backgroundColor = 'white';
    square.dataset.darkness = 0;
  } else if (colorMode === 'black') {
    square.style.backgroundColor = '#000';
  } else if (colorMode === 'rgb') {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    let darkness = parseFloat(square.dataset.darkness);
    darkness = Math.min(darkness + 0.1, 1);
    square.dataset.darkness = darkness;
    square.style.backgroundColor = `rgba(${r},${g},${b},${darkness})`;
  }
}

// === Event Listeners ===
eraserBtn.addEventListener('click', () => {
  eraserOn = !eraserOn;
  eraserBtn.textContent = eraserOn ? '🧽 Eraser: On' : '🧽 Eraser: Off';
  eraserBtn.classList.toggle('active');
});

[widthInput, heightInput, squareSizeInput].forEach((input) =>
  input.addEventListener('input', createGrid)
);

colorModeSelect.addEventListener('change', () => {
  colorMode = colorModeSelect.value;
});

// Initial grid
createGrid();
