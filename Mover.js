class Mover {
  constructor(x, y, m) {
    this.pos = createVector(x, y);
    this.mouse = createVector(mouseX, mouseY);
    this.vel = createVector();
    this.acc = createVector();
    this.m = m;
  }

  applyForce(aForce) {
    let f = p5.Vector.div(aForce, this.m);
    this.acc.add(f);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  show1() {
    fill(0);
    circle(this.pos.x, this.pos.y, this.m);
  }

  show2(){
    fill(0);
    circle(this.mouse.x, this.mouse.y, this.m);
  }
}

// class a {
//   constructor(){
//     this.mouse = createVector(mouseX, mouseY);
//   }
// }
