let angle = 0;
let radDist = 10;
let dia;
let x1, y1;
function setup() {
    let canvas = createCanvas(700, 400);
    canvas.id("my-container");
    rectMode(CENTER);
    angleMode(DEGREES);
    textAlign(CENTER);
}

function draw() {
    background(0, 10);
    if (mouseIsPressed && mouseX >= 0 && mouseX <= 700 && mouseY >= 0 && mouseY <= 400) {
        drawSisters(width / 2, height / 2);
        angle = angle + 72.8;
        radDist = radDist + 2;
        let sinValue1 = sin(angle) * radDist;
        let cosValue1 = cos(angle) * radDist;
        x1 = width / 2 + cosValue1;
        y1 = height / 2 + sinValue1;
        noStroke();
        fill(255);
        circle(x1, y1, 10);
    } else {
        background(255);
        fill(0);
        noStroke();
        rect(width / 2, height / 2, 200, 400);
        drawVega(50, height / 2);
        drawAltair(650, height / 2);
        drawSisters(width / 2, height / 2);
        strokeWeight(3);
        stroke(0);
        fill(0);
        textSize(30);
        textFont("Noto Serif SC");
        text("七", width / 2 - 150, height / 2);
        text("夕", width / 2 + 150, height / 2);
        angle = 0;
        radDist = 10;
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
function drawSisters(x, y) {
    noStroke();
    fill(255);
    ellipse(x, y - 25, 30, 20);
    ellipse(x - 20, y - 30, 30, 20);
    drawBody(x, y);
    push();
    translate(x, y);
    rotate(-50);
    circle(-3, -30, 20);
    ellipse(-5, -25, 30, 20);
    //circle(0, -30, 30);
    pop();

    stroke(255);
    strokeWeight(5);
    noFill();
    push();
    translate(x, y);
    //rotate(-20);
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