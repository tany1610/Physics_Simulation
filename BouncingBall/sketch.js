var balls = []
var ballsCount = 2
var gravity
var sliderMass
var sliderWind
var sliderGravity
var bounceButton
var addBallButton
var bounce
var wind
var mass

function setup() {
  createCanvas(500,500)
  createP('Mass')
  sliderMass = createSlider(0.1, 2, 0.1, 0.1)
  createP('Wind')
  sliderWind = createSlider(-0.1, 0.1, 0, 0.01)
  createP('Gravity')
  sliderGravity = createSlider(-1, 1, 0.1, 0.1)
  gravity = createVector(0, sliderGravity.value())
  bounceButton = createButton('Bounce')
  bounceButton.mousePressed(bounce)
  addBallButton = createButton('Add ball')
  addBallButton.mousePressed(addBall)
  mass = createVector(0, sliderMass.value())
  wind = createVector(sliderWind.value(), 0)
  bounce = createVector(0, -10)
  for (let i = 0; i < ballsCount; i++) {
    balls.push(new Ball(random(2)))
  } 
}

function draw() {
  background(0)
  textSize(20)
  fill(0)
  text(`current mass: ${sliderMass.value()}`, 10, 50)
  text(`current wind: ${sliderWind.value()}`, 10, 100)
  text(`current gravity: ${sliderGravity.value()}`, 10, 150)
  mass.y = sliderMass.value()
  wind.x = sliderWind.value()
  gravity.y = sliderGravity.value()
  for (let ball of balls) {
    ball.applyForce(gravity)
    ball.applyForce(mass)
    ball.applyForce(wind)
    ball.update()
    ball.collision()
    ball.show()
  }
}

function bounce() {
  for (let ball of balls) {
    ball.applyForce(bounce)
  }  
}

function addBall() {
  balls.push(new Ball(random(2)))
}