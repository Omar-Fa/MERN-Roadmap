const container = document.querySelector('.container');
const resizeBtn = document.getElementById('resizeBtn');

function createGrid(size) {
  container.innerHTML = ''; // clear previous grid
  const squareSize = 960 / size;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    square.dataset.opacity = '0';

    // Hover effect with color and darkening
    square.addEventListener('mouseenter', () => {
      let opacity = parseFloat(square.dataset.opacity);
      if (opacity < 1) {
        opacity += 0.1;
        square.dataset.opacity = opacity.toFixed(1);
      }
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      square.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${opacity})`;
    });

    container.appendChild(square);
  }
}

function setGridSize() {
  let size = prompt('Enter grid size (1–100):');
  size = parseInt(size);
  if (isNaN(size) || size < 1 || size > 100) {
    alert('Invalid number. Please enter a number from 1 to 100.');
    return;
  }
  createGrid(size);
}

resizeBtn.addEventListener('click', setGridSize);

// Initial grid
createGrid(16);
