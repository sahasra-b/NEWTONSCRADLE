var bob, bob1, bob2, bob3, bob4, bob5




const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	ground = new Ground (400, 10, 50, 20);
	bob1 = new Bob (400, 300, 15, 15);
	bob2 = new Bob (410, 300, 15, 15);
	bob3 = new Bob (420, 300, 15, 15);
	bob4 = new Bob (430, 300, 15, 15);
	bob5 = new Bob (440, 300, 15, 15);
	rope1= new Rope (bobObject1.body, roofObject.body, bobDiameter*2, 0)
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  drawSprites();
 
}


if (keyPressed(UP)){

bob1.velocityX=-3;




}
