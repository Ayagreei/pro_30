const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint; 

//var score = 0,i=1;
function setup() {
  createCanvas(1600,540);
  engine = Engine.create();
  world = engine.world;
  wall1 = new Wall(600,500,200,10);
  wall2 = new Wall(1100,500,200,10);

  Engine.run(engine);
  

  BlockBBlock6 = new Block(540,362,20,60);
  BlockBBlock3 = new Block(560,362,20,60);
  BlockBBlock4 = new Block(580,362,20,60);
  BlockBBlock1 = new Block(600,362,20,60);
  BlockBBlock2 = new Block(620,362,20,60);
  BlockBBlock5 = new Block(640,362,20,60);
  BlockBBlock7 = new Block(660,362,20,60);

  BlockBlock3 = new Block(560,300,20,60);
  BlockBlock2 = new Block(580,300,20,60);
  BlockBlock1 = new Block(600,300,20,60);
  BlockBlock4 = new Block(620,300,20,60);
  BlockBlock5 = new Block(640,300,20,60);

  BlockPBlock2 = new Block(580,239,20,60);
  BlockPBlock1 = new Block(600,239,20,60);
  BlockPBlock3 = new Block(620,239,20,60);

  BlockBLBlock1 = new Block(600,180,20,60);

  

  
  BlockBBlock62 = new Block(1040,362,20,60);
  BlockBBlock32 = new Block(1060,362,20,60);
  BlockBBlock42 = new Block(1080,362,20,60);
  BlockBBlock12 = new Block(1100,362,20,60);
  BlockBBlock22 = new Block(1120,362,20,60);
  BlockBBlock52 = new Block(1140,362,20,60);
  BlockBBlock72 = new Block(1160,362,20,60);

  BlockBlock32 = new Block(1060,300,20,60);
  BlockBlock22 = new Block(1080,300,20,60);
  BlockBlock12= new Block(1100,300,20,60);
  BlockBlock42 = new Block(1120,300,20,60);
  BlockBlock52 = new Block(1140,300,20,60);

  BlockPBlock22 = new Block(1080,239,20,60);
  BlockPBlock12 = new Block(1100,239,20,60);
  BlockPBlock32 = new Block(1120,239,20,60);

  BlockBLBlock12 = new Block(1100,180,20,60);

  
  octogon = new Octogon(300,300,5,10)
  

  rope = new Rope(octogon.body, {x:300,y:300});

}

function draw() {
  background(255,255,255); 
  Engine.update(engine)

 
  fill(0,0,0)
  //text(score,540,100);
  wall1.display();
  wall2.display();
  fill(0,255,237)
  BlockBBlock1.display(); 
  BlockBBlock2.display();
  BlockBBlock3.display();
  BlockBBlock4.display();
  BlockBBlock5.display();
  BlockBBlock6.display();
  BlockBBlock7.display();

  BlockBBlock12.display(); 
  BlockBBlock22.display();
  BlockBBlock32.display();
  BlockBBlock42.display();
  BlockBBlock52.display();
  BlockBBlock62.display();
  BlockBBlock72.display();

  fill(255,0,250)

  BlockBlock1.display();
  BlockBlock3.display();
  BlockBlock2.display();
  BlockBlock1.display();
  BlockBlock4.display();
  BlockBlock5.display();

  BlockBlock12.display();
  BlockBlock32.display();
  BlockBlock22.display();
  BlockBlock12.display();
  BlockBlock42.display();
  BlockBlock52.display();
  fill(16,255,0)
  BlockPBlock2.display();
  BlockPBlock1.display();
  BlockPBlock3.display();

  BlockPBlock22.display();
  BlockPBlock12.display();
  BlockPBlock32.display();
  fill(255,255,255)
  BlockBLBlock1.display();

  BlockBLBlock12.display();
  fill(0,0,0)
  octogon.display();

  rope.display();
  //drawSprites();
}

function  mouseDragged() {
	Matter.Body.setPosition(octogon.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
	rope.hi()
}
