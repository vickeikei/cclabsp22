function setup() {
    let canvas = createCanvas(700, 400);
    canvas.id("storyv1-container");
    rectMode(CENTER);
    angleMode(DEGREES);
  }
  
  function draw() {
    background(255);
    drawSisters(width/2, height/2);
  }

function drawVega(x, y){
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
    arc(35, 40, 60, 30, 60, PI)
    pop();
    push();
    translate(x, y);
    rotate(-30);
    circle(-30, 10, 30);
    arc(-40, 40, 60, 30, 160, 60)
    pop();
    
  }
  function drawAltair(x, y){
    noStroke();
    fill(0);
    drawBody(x, y);
    push();
    translate(x, y);
    circle(0, -30, 30);
    pop();
  }
  function drawSisters(x, y){
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
  
  function drawBody(x, y){
    push();
    translate(x, y);
    circle(0, 0, 50)
    circle(0, 40, 50);
    rect(0, 60, 50);
    pop();
  }