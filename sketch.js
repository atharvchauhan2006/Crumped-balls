var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,paper;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//function preload()
//{
	
//}

function setup() {
	createCanvas(1800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,690,2300,20);
	paper = new Paper (240,650,30);
	boxleft = new Box (1300,630,20,100);
	boxright = new Box (1650,630,20,100);
	boxbottom = new Box (1480,670,350,20);
	

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
    //World.add(world, ground);


	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);
  
  //drawSprites();
  ground.display();
  paper.display();
  boxleft.display();
  boxright.display();
  boxbottom.display();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(paper.body,paper.body.position,{x:210,y:-210});
	}
	if (keyCode === DOWN_ARROW) {
	Matter.Body.applyForce(paper.body,paper.body.position,{x:-215,y:215});
		}
	



}



