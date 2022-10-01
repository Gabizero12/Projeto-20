
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let world;
let engine
var ball
var plan
var rectangle
var square


function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	var Balls_options = {
		restitution:0.5,
		friction:0.02,
		frictionAir:0
	}
	
	var Rectangle_options = {
		restitution:0.7,
		friction:0.01,
		frictionAir:0.1
	}
	
	var Square_options = {
		restitution:0.01,
		friction:1,
		frictionAir:0.3
	}
	
	//Crie os Corpos Aqui.
	ball = Bodies.circle(200, 10, 10, Balls_options);
	World.add(world, ball)
	

	rectangle= Bodies.rectangle(110, 50,10,10, Rectangle_options);
	World.add(world,rectangle)

	square= Bodies.rectangle(350, 50,10,01, Square_options);
	World.add(world,square)
	
	
	
	var Plans_options={
		isStatic:true
}

 plan = Bodies.rectangle(400, 700,800,200, Plans_options);
World.add(world, plan)


rectMode(CENTER);
ellipseMode(RADIUS)
fill(50);
}


function draw() {
	rectMode(CENTER);
	background(0);
	Engine.update(engine);

	ellipse(ball.position.x, ball.position.y, 50)
	rect(rectangle.position.x,rectangle.position.y,70,100);
	rect(square.position.x,square.position.y,50,50);
	
	drawSprites();
	Engine.run(engine);
}



