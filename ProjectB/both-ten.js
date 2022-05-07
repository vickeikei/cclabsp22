let starArray = [];
let color1 = "Black";
function setup() {
    let canvas = createCanvas(700, 400);
    canvas.id("my-container");
    rectMode(CENTER);
    textAlign(CENTER);

    for (let i = 0; i < 100; i++) {
        let s1 = new LittleStars(random(width), random(height));
        starArray.push(s1);
    }
}

function draw() {
    if (mouseIsPressed && mouseX >= 0 && mouseX <= 700 && mouseY >= 0 && mouseY <= 400) {
        background(0);
        for (i = 0; i < starArray.length; i++) {
            let s = starArray[i];
            s.update();
            s.display();
        }
        color1 = "White";
        drawVega(300, height / 2);
        drawAltair(400, height / 2);
        strokeWeight(1);
        stroke(255);
        fill(255);
        textSize(30);
        textFont("Prata");
        text("t h e  e n d", width / 2, height / 2 - 80);
    } else {
        background(255);
        fill(0);
        noStroke();
        rect(width / 2, height / 2, 200, 400);
        color1 = "Black";
        drawVega(150, height / 2);
        drawAltair(550, height / 2);
    }
}

function drawVega(x, y) {
    noStroke();
    fill(color1);
    drawBody(x, y);
    push();
    translate(x, y);
    rotate(radians(-50));
    circle(8, -25, 20);
    ellipse(-5, -25, 30, 20);
    pop();

    stroke(color1);
    strokeWeight(5);
    noFill();
    push();
    translate(x, y);
    rotate(radians(30));
    circle(30, 10, 30);
    arc(35, 40, 60, 30, radians(60), radians(PI));
    pop();
    push();
    translate(x, y);
    rotate(radians(-30));
    circle(-30, 10, 30);
    arc(-40, 40, 60, 30, radians(160), radians(60));
    pop();
}
function drawAltair(x, y) {
    noStroke();
    fill(color1);
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

class LittleStars {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 5;
    }
    update() {
        this.size = map(sin(frameCount * 0.1), -1, 1, 5, 8);
    }
    display() {
        noStroke();
        fill(255, 200);
        circle(this.x, this.y, this.size);
    }
}