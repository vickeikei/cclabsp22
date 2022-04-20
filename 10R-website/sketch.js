
function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent("my-container");
  background(93, 132, 179);
  rectMode(CENTER);
  
  
  
}

function draw() {
  
  for (let x = 0; x <= width; x += 50) {
    for (let y = 0; y <= height; y += 50) {
      drawCircle(x, y, 50);
      drawSquare(x, y, 40);
      drawCircle(x, y, 30);
      drawSquare(x, y, 20);
      drawCircle(x, y, 10);
      drawSquare(x, y, 5);
    }
  }
}
function drawSquare(x, y, size) {
  fill(123, 162, 209);
  noStroke();
  push();
  translate(x, y);
  rotate(radians(frameCount));
  rect(0, 0, size, size);
  pop();
}
function drawCircle(x, y, dia) {
  fill(255);
  push();
  circle(x, y, dia);
  pop();
}
