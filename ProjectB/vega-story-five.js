function setup() {
  let canvas = createCanvas(700, 400);
  canvas.id("my-container");
  rectMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
  background(255);
  rect(width / 2, 400, 700, 200);
  circle(700, 300, 400);
  if (mouseY >= 0 && mouseY <= 400) {
    let xPos = constrain(mouseX, 0, 350);
    drawVega(xPos, height / 2 + 30);
  } else {
    drawVega(0, height / 2 + 30);
  }
  drawAltair(400, height / 2 + 30);
  strokeWeight(5);
  textSize(100);
  textFont("Noto Serif SC");
  text("幸福", 50, 150);
}

function drawVega(x, y) {
  noStroke();
  fill(0);
  drawBody(x, y);
  push();
  translate(x, y);
  rotate(-50);
  circle(8, -25, 20);
  ellipse(-5, -25, 30, 20);
  pop();

  stroke(0);
  strokeWeight(5);
  noFill();
  push();
  translate(x, y);
  rotate(30);
  circle(30, 10, 30);
  arc(35, 40, 60, 30, 60, PI);
  pop();
  push();
  translate(x, y);
  rotate(-30);
  circle(-30, 10, 30);
  arc(-40, 40, 60, 30, 160, 60);
  pop();
}
function drawAltair(x, y) {
  noStroke();
  fill(0);
  drawBody(x, y);
  push();
  translate(x, y);
  circle(0, -30, 30);
  pop();
}

function drawBody(x, y) {
  push();
  translate(x, y);
  circle(0, 0, 50);
  circle(0, 40, 50);
  rect(0, 60, 50);
  pop();
}