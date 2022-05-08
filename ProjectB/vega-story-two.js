function setup() {
  let canvas = createCanvas(700, 400);
  canvas.id("my-container");
  rectMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
  background(255);
  drawSisters(600, height / 2 + 50);
  drawSisters(500, height / 2 + 60);
  drawSisters(400, height / 2 + 50);
  drawSisters(450, height / 2 - 100);
  drawSisters(550, height / 2 - 90);
  drawSisters(650, height / 2 - 100);
  drawVega(width / 2, height / 2 - 90);
  strokeWeight(5);
  fill(0);
  textSize(150);
  textFont("Noto Serif SC");
  text("地", 80, 175);
  noStroke();
  if (mouseIsPressed && mouseX >= 0 && mouseX <= 700 && mouseY >= 0 && mouseY <= 400) {

    fill(109, 175, 222);
    ellipse(50, 375, 600, 300);
    fill(94, 178, 204, 100);
    ellipse(50, 375, 500, 250);
    ellipse(50, 375, 400, 200);
  }
  else {
    fill(0);
    ellipse(50, 375, 600, 300);
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