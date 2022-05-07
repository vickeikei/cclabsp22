let colors = [
  "Black",
  "LightPink",
  "Plum",
  "LemonChiffon",
  "LightSalmon",
  "Thistle"];
let index = 0;
function setup() {
  let canvas = createCanvas(700, 400);
  canvas.id("my-container");
  rectMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
  background(255);
  if (mouseIsPressed && mouseX >= 0 && mouseX <= 700 && mouseY >= 0 && mouseY <= 400) {
    index = floor(random(colors.length));
  }
  let flowerColor = colors[index];
  noStroke();
  fill(flowerColor);
  push();
  translate(width / 2, height / 2);
  scale(1.5);
  rotate(frameCount);
  circle(0, 0, 100);
  circle(30, 60, 100);
  circle(-30, 60, 100);
  circle(0, -40, 100);
  circle(50, 0, 100);
  circle(-50, 0, 100);
  pop();
  push();
  fill(0);
  circle(50, 50, 50);
  circle(50, 350, 50);
  circle(650, 50, 50);
  circle(650, 350, 50);
  pop();
  fill(255);
  textFont("Noto Serif SC");
  textSize(25);
  textAlign(CENTER);
  text('花', 50, 60);
  text('花', 50, 360);
  text('花', 650, 60);
  text('花', 650, 360);
}