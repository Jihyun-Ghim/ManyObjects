let m;

function setup() {
  createCanvas(400, 400);
  m = new Mover(50, 50, 10);
}

function draw() {
  background(220);
  m.update();
  m.show1();

  if (mouseIsPressed) {
    m.show2();
    //make attract to mouse position
  }
}
