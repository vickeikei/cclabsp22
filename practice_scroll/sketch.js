let planeX = 100;
let planeY = 100;
let planeSpeedX = 0;
let planeSpeedY = 0;
let planePitch = 0;

let obstacles = [];
let fans = [];

function setup() {
  let canvas = createCanvas(windowWidth, 600);
  canvas.parent('canvas-container');

  let elements = document.querySelectorAll('.obstacle');
  for (let i = 0; i < elements.length; i++) {
    console.log("Obstacle at", elements[i].offsetLeft, elements[i].offsetTop, 'dimensions', elements[i].offsetWidth, elements[i].offsetHeight);
    let obstacle = new Obstacle(elements[i].offsetLeft, elements[i].offsetTop, elements[i].offsetWidth, elements[i].offsetHeight); //new instance
    obstacles.push(obstacle);
  }

  elements = document.querySelectorAll('.fan');
  for (let i = 0; i < elements.length; i++) {
    console.log("Fan at", elements[i].offsetLeft, elements[i].offsetTop, 'dimensions', elements[i].offsetWidth, elements[i].offsetHeight);
    let fan = new Fan(elements[i].offsetLeft, elements[i].offsetTop, elements[i].offsetWidth); //new instance
    fans.push(fan);
  }


  // let obstacles = document.querySelectorAll('.obstacle');
  // for (let i = 0; i < obstacles.length; i++){
  //   console.log(obstacles[i].offsetLeft + 'x' + obstacles[i].offsetTop);
  //   console.log(obstacles[i].offsetWidth + 'x' + obstacles[i].offsetHeight)
  // }

}

function draw() {
  clear();

  let isOnTopofFan = false;
  for (let i = 0; i < fans.length; i++){
    if(fans[i].isBelow(planeX, planeY)) {
      isOnTopofFan = true;
    }
  }
  console.log(isOnTopofFan);

  let isCollidingWithObstacle = false;
  for (let i = 0; i < obstacles.length; i++){
    if(obstacles[i].isColliding(planeX, planeY)) {
      isCollidingWithObstacle = true;
    }
  }
  console.log(isCollidingWithObstacle);

  console.log(mouseX - width / 2);
  planePitch = (mouseX - width / 2) / windowWidth * 75;

  planeSpeedX += planePitch / 100;
  planeSpeedX = constrain(planeSpeedX, -3, 3);


  if(isOnTopofFan){
    planeSpeedY -= 0.1;
  } else {
    planeSpeedY += 0.05;
  }
  
  planeSpeedY = constrain(planeSpeedY, -1, 1);
  
  if(!isCollidingWithObstacle){
    planeX += planeSpeedX;
  }
  planeY += planeSpeedY;

  drawPlane(planeX, planeY, planePitch);
  //console.log(window.scrollY); //gives Y position
  //colorMode(HSB);
  // background(window.scrollY % 360, 100, 100);
  //fill(0, 0, 0);
  //text("hello world", 25, window.scrollY);
}

// function mousePressed(){
//   //window.scrollTo(0, 500);
//   window.scrollBy(0, 200);
// }

function drawPlane(x, y, pitch) {
  push();
  translate(x, y);
  scale(0.2, 0.2);
  rotate(radians(pitch + 10));
  translate(-300, -200);
  beginShape();
  vertex(511, 82);
  vertex(163, 193);
  vertex(217, 320);
  endShape(CLOSE);
  beginShape();
  vertex(328, 250);
  vertex(217, 320);
  vertex(266, 234);
  endShape(CLOSE);
  beginShape();
  vertex(511, 82);
  vertex(54, 158);
  vertex(163, 193);
  endShape(CLOSE);
  beginShape();
  vertex(511, 82);
  vertex(266, 234);
  vertex(394, 280);
  endShape(CLOSE);
  pop();
}

class Obstacle {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  isColliding(checkX, checkY){
    if(this.x < checkX && checkX < this.x + this.w &&
      this.y < checkY && checkY < this.y + this.h) {
        return true;
      }
      else{
        return false;
      }

  }
}

class Fan {
  constructor(x, y, w) {
    this.x = x;
    this.y = y;
    this.w = w;
  }

  isBelow(checkX, checkY) {
    if(this.x < checkX && checkX < this.x + this.w  && this.y > checkY){
      return true;
    } else{
      return false;
    }

  }
}
