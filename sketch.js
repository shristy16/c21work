const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;
var ground;
var leftSide;




function preload()
{
	
}	


function setup(){

	createCanvas(700,800);
	engine = Engine.create();
	world = engine.world;

var ball_options={
isStatic:false,
restitution:0.3,
friction:0,
density:1.2

}

ball=Bodies.circle(200,100,20,ball_options);
World.add(world,ball);


ground=new Ground(width/2,670,width,20);
leftSide=new Ground(1100,600,20,120);



}


	


function draw() {
  rectMode(CENTER);
  background(0);



  ground.display();
  drawSprites();
 
}



