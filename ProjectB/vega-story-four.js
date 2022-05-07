function setup() {
    let canvas = createCanvas(700, 400);
    canvas.id("my-container");
    rectMode(CENTER);
    angleMode(DEGREES);
  }
  
  function draw() {
    background(0);
    colorScene = 'Black';
    if(mouseIsPressed && mouseX >= 0 && mouseX <= 700 && mouseY >= 0 && mouseY <= 400){
      colorScene = 'White'
      text('爱', width/2, height/2 - 50);
    } else{
      circle(width/2, height/2, 400);
      fill(0);
      ellipse(width/2, 400, 600, 250);
    }
    drawVega(width / 2 - 50, height / 2);
    drawAltair(width/2 + 50, height/2);
    fill(255);
    textFont("Noto Serif SC");
    textSize(25);
    textAlign(CENTER);
    
  }
  
  function drawVega(x, y) {
    noStroke();
    fill(colorScene);
    drawBody(x, y);
    push();
    translate(x, y);
    rotate(-50);
    circle(8, -25, 20);
    ellipse(-5, -25, 30, 20);
    pop();
  
    stroke(colorScene);
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
    fill(colorScene);
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
  