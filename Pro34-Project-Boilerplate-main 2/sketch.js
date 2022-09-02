const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var ground2;
var ground3;
var box;
var platform;

function setup() {
  createCanvas(1000,600);

  

  engine = Engine.create();
  world = engine.world;
  rectMode(CENTER)
  ellipseMode(RADIUS)
  
  ground = new Ground(500,600,1000,100);
  ground2 = new Ground(0,570,950,100);
  ground3 = new Ground(1000,570,950,100);
  platform = new Ground(500,100,100,40);
  box = new Box(500, 30, 30, 30);
}

function draw() 
{

  background(0);


  ground.display();
  ground2.display();
  ground3.display();
  platform.display();
  box.display();
  Engine.update(engine);
  
}

function keyPressed(){
  if (keyCode === 32){
    Matter.Body.applyForce(box, {x: 0, y: 0}, {x: -0.1, y: 0})
  }
}