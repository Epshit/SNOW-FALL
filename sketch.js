const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var snow1,snow2,snow3,snow4,snow5

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

    engine = Engine.create();
    world = engine.world;
}

ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    snow1 = new Snow(700,320,70,70);
    snow2 = new Snow(920,320,70,70);
    snow3 = new Snow(810, 350);
    snow4 = new Snow(200,50);
    snow5 = new Snow(200,50);


function draw() {
  background(255,255,255);
  drawSprites();
  Engine.update(engine);

  snow1.display();
  snow2.display();
  snow3.display();
  snow4.display();
  snow5.display();
}