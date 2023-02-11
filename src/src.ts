const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const squareButton = document.getElementById('square-button') as HTMLButtonElement;
const triangleButton = document.getElementById('triangle-button') as HTMLButtonElement;
const circleButton = document.getElementById('circle-button') as HTMLButtonElement;
const ctx = canvas.getContext('2d');

squareButton.addEventListener('click', () => {
  ctx.fillRect(25, 25, 50, 50);
});

triangleButton.addEventListener('click', () => {
  ctx.beginPath();
  ctx.moveTo(25, 25);
  ctx.lineTo(25, 75);
  ctx.lineTo(75, 75);
  ctx.fill();
});

circleButton.addEventListener('click', () => {
  ctx.beginPath();
  ctx.arc(50, 50, 25, 0, 2 * Math.PI);
  ctx.fill();
});
