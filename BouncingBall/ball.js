function Ball() {
  this.pos = createVector(width/2, height/2)
  this.vel = createVector(0, 0)
  this.acc = createVector(0, 0)

  this.show = function () {
    noFill()
    stroke(255)
    strokeWeight(4)
    ellipse(this.pos.x, this.pos.y, 80, 80)
  }

  this.update = function () {
    this.vel.add(this.acc)
    this.pos.add(this.vel)
    this.acc.mult(0)
  }

  this.applyForce = function (force) {
    this.acc.add(force)
  }

  this.edges = function () {
    if (this.pos.x < 0) {
      this.pos.x = 0
      this.vel.x *= -1
    }
    if (this.pos.y < 0) {
      this.pos.y = 0
      this.vel.y *= -1
    } 
    if (this.pos.y > height) {
      this.pos.y = height
      this.vel.y *= -1
    } 
    if (this.pos.x > width) {
      this.pos.x = width
      this.vel.x *= -1
    }
  }
}