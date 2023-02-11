var canvas = document.getElementById('canvas');
var squareButton = document.getElementById('square-button');
var triangleButton = document.getElementById('triangle-button');
var circleButton = document.getElementById('circle-button');
var ctx = canvas.getContext('2d');
squareButton.addEventListener('click', function () {
    ctx.fillRect(25, 25, 50, 50);
});
triangleButton.addEventListener('click', function () {
    ctx.beginPath();
    ctx.moveTo(25, 25);
    ctx.lineTo(25, 75);
    ctx.lineTo(75, 75);
    ctx.fill();
});
circleButton.addEventListener('click', function () {
    ctx.beginPath();
    ctx.arc(50, 50, 25, 0, 2 * Math.PI);
    ctx.fill();
});
