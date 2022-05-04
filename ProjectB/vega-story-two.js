function setup() {
    let canvas = createCanvas(1400, 800);
    canvas.id("storyv2-container");
    rectMode(CENTER);
    angleMode(DEGREES);
  }
  
  function draw() {
    background(0);

  }

// let sketch = function(p) {
//     p.setup = function(){
//       p.createCanvas(1400, 800);
//       p.background(0);
//     }
//   };
//   new p5(sketch, window.document.getElementById('container'));