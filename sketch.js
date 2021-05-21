var ground1
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render
var boxBottomBody, boxPosition, boxY;
var ball;

function preload()
{
}

function setup() {
	createCanvas(1600, 300);
	rectMode(CENTER);

	//groundSprite=createSprite(width/2, height-35, width,10);
	//groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);
      dustBox = new dustbin(width/2+500, 210 )

	  // crumpled body
	  ground1 = new Ground(800, height, 1600,10);

	  ball = new Paper(200, 200, 20);
	  var render = Render.create({
		   element: document.body, 
		   engine: engine, 
		   options: { 
			   width: 1200, 
			   height: 700, 
			   wireframes: false 
			} 
		}
		);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  ball.display();
  ground1.display();
  dustBox.display();
  drawSprites();
 
}


function keyPressed() {
	if (keyCode === UP_ARROW) {   
	   Matter.Body.applyForce(ball.body,ball.body.position, {x:85, y:-85});
	  // Matter.Body.setStatic(ball,false);

	 }
   }

