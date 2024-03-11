import * as BABYLON from 'babylonjs';
console.log("Script loaded");
function generateCanvases() {
  const canvasContainer = document.querySelector('.canvas-container');

  for (let i = 1; i <= 12; i++) {
    const canvasWrapper = document.createElement('div');
    canvasWrapper.classList.add('canvas-wrapper');
    const canvas = document.createElement('canvas');
    canvas.id = `canvas${i}`;
    canvasWrapper.appendChild(canvas);
    const text = document.createElement('div');
    text.classList.add('canvas-text');
    text.textContent = `Canvas ${i}`;
    canvasWrapper.appendChild(text);
    canvasContainer.appendChild(canvasWrapper);

    generateBabylon(canvas.id);
  }
}

function generateBabylon(canvas) {
  console.log(canvas)
}

window.onload = function () {
  generateCanvases();
};