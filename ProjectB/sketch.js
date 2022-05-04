function setup() {
  //let canvas = createCanvas(windowWidth, windowHeight);
  let canvas = createCanvas(2000, 1100);
  canvas.id("my-container");
  //canvas.id("p5-canvas");
  
}

function draw() {
  background(0);
  //text
  textSize(30)
  fill(255, 255);
  textFont('Prata');
  text('pick', 120, 200);
  text('a', 200, 240);
  text('star', 240, 280);
  textSize(120);
  text('   a', 180, 700)
  text('starcrossed', 180, 820)
  text('                story.', 180, 940)
  
  //altair constellation
  let altair = new MainStars(1234, 636);
  altair.update();
  altair.checkMouse();
  altair.display();

  let a = new LittleStars(1560, 718);
  a.update();
  a.display();
  let a1 = new LittleStars(1442, 242);
  a1.update();
  a1.display();
  let a2 = new LittleStars(1394, 298);
  a2.update();
  a2.display();
  let a3 = new LittleStars(1242, 560);
  a3.update();
  a3.display();
  let a4 = new LittleStars(1212, 696);
  a4.update();
  a4.display();
  let a5 = new LittleStars(1438, 884);
  a5.update();
  a5.display();
  let a6 = new LittleStars(1364, 1042);
  a6.update();
  a6.display();
  let a7 = new LittleStars(1804, 842);
  a7.update();
  a7.display();
  
  strokeWeight(2);
  stroke(255, 200);
  line(1234, 636, 1560, 718);
  line(1234, 636, 1242, 560);
  line(1234, 636, 1212, 696);
  line(1560, 718, 1438, 884);
  line(1438, 884, 1364, 1042);
  line(1560, 718, 1804, 842);
  line(1560, 718, 1394, 298);
  line(1394, 298, 1442, 242);
  
  //vega constellation
  let vega = new MainStars(556, 234);
  vega.update();
  vega.checkMouse();
  vega.display();

  let v = new LittleStars(560, 364);
  v.update();
  v.display();
  let v1 = new LittleStars(560, 464);
  v1.update();
  v1.display();
  let v2 = new LittleStars(702, 436);
  v2.update();
  v2.display();
  let v3 = new LittleStars(702, 554);
  v3.update();
  v3.display();
  
  stroke(255, 200);
  line(556, 234, 560, 364);
  line(560, 364, 560, 464);
  line(560, 464, 702, 554);
  line(702, 554, 702, 436);
  line(702, 436, 560, 364);
}

class LittleStars {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 20;
  }
  update() {
    this.size = map(sin(frameCount * 0.1), -1, 1, 10, 20);
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
    this.starName = ""
  }
  update() {
    this.scale = map(sin(frameCount * 0.1), -1, 1, 1, 2);
  }
  checkMouse() {
    let distance = dist(this.x, this.y, mouseX, mouseY);
    if (distance < 20) {
      if (this.x == 1234){
        this.starName = "a l t a i r"
        window.location.href = "altairStory.html";
      } else if (this.x == 556){
        this.starName = "v e g a"
        window.location.href = "vegaStory.html";
      }
      if (mouseIsPressed) {
        //count += 1;
        console.log(true);
      }
    } else{
      this.starName = ""
    }
  }
  display() {
    push();
    noStroke();
    fill(255, 100);
    translate(this.x, this.y);
    scale(this.scale);
    circle(0, 0, 30);
    circle(0, 0, 15);
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
    textSize(30)
    fill(255, 255);
    textFont('Prata');
    text(this.starName, width/2, height/2);
    pop();
  }
}
