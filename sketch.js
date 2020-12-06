var	trashSprite,trashIMG;
var trashBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


	function setup(){
		var canvas = createCanvas(800,700);
		
		engine = Engine.create();
		world = engine.world;

		trashSprite=createSprite(width/2, 80, 10,10);
		trashSprite.shapeColor="black"&&"lime";
	
		helicopter=createSprite(5,200, 30,10);
		shapeColor="lime";

		groundSprite=createSprite(width/2, height-35, width,10);
		groundSprite.shapeColor=color(255)
		
		trash1 = new Trash(width/2,80,5,10);
		trash2 = new Trash(width/2,80,10,10);

		ground1 = new Ground(width/2,height-35,width,10)

		leftBody=Bodies.rectangle(300,600,20,100,{isStatic:true});
		World.add(world,leftBody);

		rightBody=Bodies.rectangle(500,600,20,100,{isStatic:true});
		World.add(world,rightBody);
  
		bottomBody=Bodies.rectangle(400,650,200,20,{isStatic:true});
		World.add(world,bottomBody);

		
	}
	


function draw() {
  	rectMode(CENTER);
	  background(mouseX,mouseY,mouseX);
	  
	  Engine.update(engine);
	  console.log(trash2.body.position.x);
	  console.log(trash2.body.position.y);
	  console.log(trash2.body.angle);
	  trash1.display();
	  trash2.display();
	  ground1.display();
	  fill("red");
	  rectMode(CENTER);
	  rect(leftBody.position.x,leftBody.position.y,20,100)

	  rectMode(CENTER);
	  rect(rightBody.position.x,rightBody.position.y,20,100)

	  rectMode(CENTER);
	  rect(bottomBody.position.x,bottomBody.position.y,200,20)
	  
}
function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(trashSprite.body,trashSprite.body.position,{x:85,y:85})
	}
}