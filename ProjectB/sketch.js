function setup() {
  let canvas = createCanvas(1000, 550);
  canvas.id("my-container");

}

function draw() {
  background(0);
  //text
  textSize(15)
  fill(255, 255);
  textFont('Prata');
  text('pick', 60, 100);
  text('a', 100, 120);
  text('star', 120, 140);
  textSize(60);
  text('   a', 90, 350)
  text('starcrossed', 90, 410)
  text('                story.', 90, 470)

  //altair constellation
  let altair = new MainStars(617, 318);
  altair.update();
  altair.checkMouse();
  altair.display();


  let a = new LittleStars(780, 359);
  a.update();
  a.display();
  let a1 = new LittleStars(721, 121);
  a1.update();
  a1.display();
  let a2 = new LittleStars(697, 149);
  a2.update();
  a2.display();
  let a3 = new LittleStars(621, 280);
  a3.update();
  a3.display();
  let a4 = new LittleStars(606, 348);
  a4.update();
  a4.display();
  let a5 = new LittleStars(719, 442);
  a5.update();
  a5.display();
  let a6 = new LittleStars(682, 521);
  a6.update();
  a6.display();
  let a7 = new LittleStars(902, 421);
  a7.update();
  a7.display();

  stroke(255, 200);
  line(617, 318, 780, 359);
  line(617, 318, 621, 280);
  line(617, 318, 606, 348);
  line(780, 359, 719, 442);
  line(719, 442, 682, 521);
  line(780, 359, 902, 421);
  line(780, 359, 697, 149);
  line(697, 149, 721, 121);

  //vega constellation
  let vega = new MainStars(278, 117);
  vega.update();
  vega.checkMouse();
  vega.display();

  let v = new LittleStars(280, 182);
  v.update();
  v.display();
  let v1 = new LittleStars(280, 232);
  v1.update();
  v1.display();
  let v2 = new LittleStars(351, 218);
  v2.update();
  v2.display();
  let v3 = new LittleStars(351, 277);
  v3.update();
  v3.display();

  stroke(255, 200);
  line(278, 117, 280, 182);
  line(280, 182, 280, 232);
  line(280, 232, 351, 277);
  line(351, 277, 351, 218);
  line(351, 218, 280, 182);
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

class MainStars {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.scale;
    this.starName = '';
  }
  update() {
    this.scale = map(sin(frameCount * 0.1), -1, 1, 1, 2);
  }
  checkMouse() {
    let distance = dist(this.x, this.y, mouseX, mouseY);
    if (distance < 20) {
      if (this.x == 617) {
        this.starName = "a l t a i r"
        this.description = "scroll through panels \nto complete their love"
        if (mouseIsPressed) {
          window.location.href = "altairStory.html";
        }
      } else if (this.x == 278) {
        this.starName = "v e g a"
        this.description = "scroll or click on the \npictures to unfold the story"
        if (mouseIsPressed) {
          window.location.href = "vegaStory1.html";
        }
      }
    } else {
      this.starName = "";
      this.description = "";
    }
  }
  display() {
    push();
    noStroke();
    fill(255, 100);
    translate(this.x, this.y);
    scale(this.scale);
    circle(0, 0, 10);
    circle(0, 0, 5);
    pop();

    push();
    stroke(255, 200);
    translate(this.x, this.y);
    rotate(frameCount * 0.009);
    scale(this.scale);
    line(0, -5, 0, 5);
    line(-5, 0, 5, 0);
    pop();

    push();
    textSize(15)
    fill(255, 255);
    textFont('Prata');
    textAlign(CENTER);
    text(this.starName, width / 2, (height / 2)-35);
    textSize(10);
    text(this.description, width/2, height/2);
    pop();
  }
}

