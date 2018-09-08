function Ball(mass) {
  this.pos = createVector(random(width), random(height))
  this.vel = createVector(0, 0)
  this.acc = createVector(0, 0)
  this.mass = mass

  this.show = function () {
    noFill()
    stroke(255)
    strokeWeight(4)
    ellipse(this.pos.x, this.pos.y, 40, 40)
  }

  this.update = function () {
    this.vel.add(this.acc)
    this.pos.add(this.vel)
    this.acc.mult(0)
  }

  this.applyForce = function (force) {
    this.acc.add(force)
  }

  this.collision = function () {
    for (let ball of balls) {
      if (dist(ball.pos.x, ball.pos.y, this.pos.x, this.pos.y) < 40 && ball !== this) {
        this.vel.mult(-1)
        ball.vel.mult(-1)
      }
    }
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