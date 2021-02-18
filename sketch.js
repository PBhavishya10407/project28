const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var ground,stone,launcherobject;
var boy,tree;
var m1,m2,m3,m4,m5,m6,m7,m8,m9,m10;
function preload(){
	boy=loadImage("boy.png");
  }
function setup() {
	createCanvas(1300, 700);
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(600,680,1300,20);
	stone = new Stone(200,450,50);
	tree = new Tree(1000,650);
	launcherobject = new Launcher(stone.body,{x:139,y:530});

	m1 = new Mango(1050,100,50);
	m2 = new Mango(1000,180,50);
    m3 = new Mango(1000,280,50);
	m4 = new Mango(1050,200,50);
	m5 = new Mango(900,200,50);
	m6 = new Mango(850,300,50);
	m7 = new Mango(1150,200,50);
	m8 = new Mango(1150,300,50);
	m9 = new Mango(950,300,50);
	m10 = new Mango(1070,250,50);

	Engine.run(engine);
  
}


function draw() {
  
  background(255);
  text(mouseX+","+mouseY,mouseX,mouseY);
  
  Engine.update(engine);

  image(boy ,100,450,200,300);
  
  ground.display();
  stone.display();
  tree.display();
  launcherobject.display();

  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  m6.display();
  m7.display();
  m8.display();
  m9.display();
  m10.display();
  detectCollision(stone,m1);
  detectCollision(stone,m2);
  detectCollision(stone,m3);
  detectCollision(stone,m4);
  detectCollision(stone,m5);
  detectCollision(stone,m6);
  detectCollision(stone,m7);
  detectCollision(stone,m8);
  detectCollision(stone,m9);
  detectCollision(stone,m10);
}

function mouseDragged()
{
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased()
{
	launcherobject.fly();
}

function keyPressed()
{
	if(keyCode === 32)
	{
		Matter.Body.setPosition(stone.body,{x:139,y:530});
		launcherobject.attach(stone.body);
	}
}

function detectCollision(lstone,lmango)
{
    mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;
	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
	if(distance <= lstone.r+lmango.r)
	{
		Matter.Body.setStatic(lmango.body,false);
	}
}