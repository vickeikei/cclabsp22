
function setup() {
  let canvas = createCanvas(700, 400);
  canvas.id("my-container");
  rectMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
  background(255);
  drawSisters(50, height / 2 - 100);
  drawSisters(150, height / 2 - 90);
  drawSisters(250, height / 2 - 100);
  drawSisters(450, height / 2 - 100);
  drawSisters(550, height / 2 - 90);
  drawSisters(650, height / 2 - 100);
  drawVega(width / 2, height / 2 - 90);
  strokeWeight(5);
  fill(0);
  textSize(175);
  textFont("Noto Serif SC");
  text("天", 485, 375);

  if (mouseY >= 0 && mouseY <= 400) {
    let xPos = constrain(mouseX, 0, 700);
    drawCloud(xPos);
  } else {
    drawCloud(0);
  }
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

function drawSisters(x, y) {
  noStroke();
  fill(0);
  drawBody(x, y);
  push();
  translate(x, y);
  rotate(-50);
  circle(-3, -30, 20);
  ellipse(-5, -25, 30, 20);
  pop();

  stroke(0);
  strokeWeight(5);
  noFill();
  push();
  translate(x, y);
  rotate(-20);
  circle(-30, -9, 15);
  circle(-30, 3, 20);
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