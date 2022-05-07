let colorBack;
function setup() {
    let canvas = createCanvas(700, 400);
    canvas.id("my-container");
    rectMode(CENTER);
    angleMode(DEGREES);
    textAlign(CENTER);
}

function draw() {
    background(255);
    if (mouseIsPressed && mouseX >= 0 && mouseX <= 700 && mouseY >= 0 && mouseY <= 400) {
        fill(0);
        noStroke();
        rect(width / 2, height / 2, 200, 400);
        drawVega(200, height / 2);
        drawAltair(500, height / 2);
        strokeWeight(3);
        stroke(255);
        fill(255);
        textSize(100);
        textFont("Noto Serif SC");
        text("银", width / 2, height / 2 - 50);
        text("河", width / 2, height / 2 + 70);
    } else {
        drawVega(300, height / 2);
        drawAltair(400, height / 2);
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