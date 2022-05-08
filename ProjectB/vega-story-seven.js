let colorBack;
function setup() {
  let canvas = createCanvas(700, 400);
  canvas.id("my-container");
  rectMode(CENTER);
  angleMode(DEGREES);
  textAlign(CENTER);
}

function draw() {
  if (mouseIsPressed && mouseX >= 0 && mouseX <= 700 && mouseY >= 0 && mouseY <= 400) {
    colorBack = 'Crimson';
  } else {
    colorBack = 'Black';
  }
  background(colorBack);
  drawVega(75, height / 2 - 90);
  drawAltair(600, height / 2 - 90);
  strokeWeight(3);
  fill(0);
  textSize(100);
  textFont("Noto Serif SC");
  text("危险", width / 2, height / 2);

  drawCloud(0);
  drawCloud(500);
}

function drawVega(x, y) {
  noStroke();
  fill(255);
  drawBody(x, y);
  push();
  translate(x, y);
  rotate(-50);
  circle(8, -25, 20);
  ellipse(-5, -25, 30, 20);
  pop();

  stroke(255);
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
  fill(255);
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

function drawCloud(x) {
  fill(255);
  circle(50 + x, 375, 400);
  circle(250 + x, 375, 200);
  ellipse(x - 100, 375, 300, 150);
  noStroke();
  circle(200 + x, 380, 200);
  circle(50 + x, 375, 200);
}