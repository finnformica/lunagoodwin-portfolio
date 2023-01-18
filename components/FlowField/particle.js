export class Particle {
  constructor(x, y) {
    this.pos = new Vector(x, y);
    this.vel = new Vector(Math.random() - 0.5, Math.random() - 0.5);
    this.acc = new Vector(0, 0);
    this.hue = Math.random() * 30 - 15;
  }

  move(acc) {
    if (acc) {
      this.acc.addTo(acc);
    }
    this.vel.addTo(this.acc);
    this.pos.addTo(this.vel);
    if (this.vel.getLength() > maxSpeed) {
      this.vel.setLength(maxSpeed);
    }
    this.acc.setLength(0);
  }

  wrap() {
    if (this.pos.x > w) {
      this.pos.x = 0;
    } else if (this.pos.x < -this.fieldSize) {
      this.pos.x = w - 1;
    }
    if (this.pos.y > h) {
      this.pos.y = 0;
    } else if (this.pos.y < -this.fieldSize) {
      this.pos.y = h - 1;
    }
  }
}
