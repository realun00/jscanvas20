function selectShape() {
  document.getElementById("rectangle").addEventListener("click", displayRectangle);
  document.getElementById("square").addEventListener("click", displaySquare);
  document.getElementById("circle").addEventListener("click", displayCircle);
  document.getElementById("triangle").addEventListener("click", displayTriangle);
  document.getElementById("line").addEventListener("click", displayLine);
  document.getElementById("primitive").addEventListener("click", displayPrimitive);
}

function clearCanvas() {
  document.getElementById('clear').addEventListener('click', function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  }, false);
}

function pickColor() {
  var color = document.getElementById("colorpick").value;
  return color;
}

function displayPrimitive() {
  context.beginPath();
  var startPositionX = Math.floor((Math.random() * 1200) + 1);
  var startPositionY = Math.floor((Math.random() * 500) + 1);
  context.arc(startPositionX, startPositionY, 60, 0, Math.PI * 2);
  context.moveTo(startPositionX-60, startPositionY+60);
  context.lineTo(startPositionX-60, startPositionY-60);
  context.moveTo(startPositionX+60, startPositionY);
  context.lineTo(startPositionX-60, startPositionY);
  context.strokeStyle = pickColor();
  context.stroke();
}

function displayRectangle() {
  context.beginPath();
  context.rect(Math.floor((Math.random() * 1200) + 1), Math.floor((Math.random() * 500) + 1), 150, 100);
  context.strokeStyle = pickColor();
  context.stroke();
}

function displaySquare() {
  context.beginPath();
  context.rect(Math.floor((Math.random() * 1200) + 1), Math.floor((Math.random() * 500) + 1), 100, 100);
  context.fillStyle = pickColor();
  context.fill();
  context.stroke();
}

function displayCircle() {
  context.beginPath();
  context.arc(Math.floor((Math.random() * 1200) + 1), Math.floor((Math.random() * 500) + 1), 50, 0, Math.PI * 2);
  context.strokeStyle = pickColor();
  context.stroke();
}

function displayTriangle() {
  context.beginPath();
  var startPositionX = Math.floor((Math.random() * 1200) + 1);
  var startPositionY = Math.floor((Math.random() * 500) + 1);
  context.moveTo(startPositionX, startPositionY);
  context.lineTo(startPositionX, startPositionY + 100);
  context.lineTo(startPositionX + 100, startPositionY + 50);
  context.lineTo(startPositionX, startPositionY);
  context.strokeStyle = pickColor();
  context.stroke();
}

function displayLine() {
  context.beginPath();
  var startPositionX = Math.floor((Math.random() * 1200) + 1);
  var startPositionY = Math.floor((Math.random() * 500) + 1);
  context.moveTo(startPositionX, startPositionY);
  context.lineTo(startPositionX + 160, startPositionX + 250);
  context.strokeStyle = pickColor();
  context.stroke();
}
