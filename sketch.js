const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;
var button_1,button_2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);

  var ball_options = {
    restitution: 0.5,
    frictionAir: 0.01
  };

  ball = Bodies.circle(200,200,30,ball_options);
  World.add(world,ball);

  button_1 = createImg("up.png");
  button_1.position(100,100);
  button_1.size(50,50);
  button_1.mouseClicked(vforce);

  button_2 = createImg("right.png");
  button_2.position(150,100);
  button_2.size(50,50);
  button_2.mouseClicked(hforce);
  
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);

  ellipse(ball.position.x,ball.position.y,30);
}

function vforce() {

  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});

}

function hforce() {

  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});

}