let pos = 50;
function setup() {
let canvas = createCanvas(5000, 100);;
  canvas.id("heart-container");
}

function draw() {
    background(255);
    x = constrain(mouseX, 150, 4770);
    drawMovingHeart(x, height/2);
    drawStationaryHeart(4800, height/2);
}

function drawMovingHeart(x, y){
    stroke(255, 0, 0);
    strokeWeight(5);
    push();
    translate(x, y);
    rotate(radians(135));
    arc(0, 0, 40, 40, 0, PI);
    pop();
    line(x-14, y+14, x+15, y+42.5)
  }
  
  function drawStationaryHeart(x, y){
    stroke(255, 0, 0);
    strokeWeight(5);
    push();
    translate(x, y);
    rotate(radians(45));
    arc(0, 0, 40, 40, PI, 0);
    pop();
    line(x+14, y+14, x-15, y+42.5)
  }
  