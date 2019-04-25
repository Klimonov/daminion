document.addEventListener("DOMContentLoaded", function(event) { 

var canvasPos = getPosition(canvas);
var mouseX;
var mouseY;

canvas.addEventListener("mousemove", setMousePosition, false);

function setMousePosition(e) {
  mouseX = e.clientX - canvasPos.x;
  mouseY = e.clientY - canvasPos.y;
};

function draw() {
  
  var canvas = document.querySelector('canvas');
  var context = canvas.getContext('2d');

  context.clearRect(0, 0, canvas.width, canvas.height);
  context.beginPath();
    context.arc(mouseX, mouseY, 40, 0, 2 * Math.PI, true);
    context.fillStyle = "#0294BF";
    context.fill();
  context.closePath();

  

  context.beginPath();
  context.arc(295, 295, 488, 0, 2 * Math.PI, true);
  context.lineWidth = 500;
  context.strokeStyle = "#34648E";
  context.stroke();
context.closePath();

context.beginPath();
    context.arc(295, 295, 491, 0, 2 * Math.PI, true);
    context.lineWidth = 500;
    context.strokeStyle = "#F8F8F8";
    context.stroke();
  context.closePath();


  requestAnimationFrame(draw);

};

draw();

function getPosition(el) {
  return {
    x: el.offsetLeft,
    y: el.offsetTop
  };
};

});





