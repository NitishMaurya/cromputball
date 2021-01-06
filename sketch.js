var ground;
var ball2,ballimage;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	ballimage=loadImage("ball2png.png")	
	dimage = loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(1000, 700);
	engine = Engine.create();
	world = engine.world;
/*
	//Create the Bodies Here.
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(225)
	ball2=createSprite(width/8, 620, 10,10);
	ball2.addImage(ballimage)
	ball2.scale=0.1
	//ask miss
	*/
	
var options={
		isStatic:false,
		restitution:0.3,
		friction:0.5,
		density:1.2
	  }
ball2=Bodies.circle(50, 200, 20, options);
World.add(world, ball2);
	//ground
	ground = Bodies.rectangle(width/2, height-40, width, 20 , {isStatic:true} );
	World.add(world, ground);
	//WALL
   walll= Bodies.rectangle(740, 550,20,200 , {isStatic:true} );
	World.add(world, walll);
	wallr= Bodies.rectangle(960, 550,20,200 , {isStatic:true} );
	World.add(world, wallr);
	wallb= Bodies.rectangle(850, 640,200,20 , {isStatic:true} );
	World.add(world, wallb);
 


  Engine.run(engine);
}

function draw() {
   rectMode(CENTER);
  background(0);
//ground
fill("yellow")
rect(ground.position.x, ground.position.y, width,20);
//wall
fill("red")

rect(wallb.position.x, wallb.position.y, 200,20);
rect(walll.position.x, walll.position.y, 20,200);
rect(wallr.position.x, wallr.position.y, 20,200);
image(dimage, wallb.position.x-130, walll.position.y-150, 255,250);
//BALL
fill("white")
ellipseMode(RADIUS)
ellipse(ball2.position.x, ball2.position.y, 20,20);
imageMode(CENTER)
image(ballimage, ball2.position.x, ball2.position.y, 20*2,20*2);

}
function keyPressed(){
if(keyCode === UP_ARROW){
Matter.Body.applyForce(ball2, ball2.position,{x:60,y: -110});
}
}


