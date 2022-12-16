
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var score;
var ball,ball2;
var ground5,ground6;
var ground;
var groundleft;
var groundright;
var ground1;
var ground2;
var ground3;
var ground4;
var piso;
var soulsSound;
var score = 0;
var score2 = 0;
var invisibleGround;
var imagen;
var anillo;
var hoguera;
var soulsSound,lunaSound;
var button,no,button1,no2;
function preload()
{
	restartImg = loadImage("restart.png")
	groundImage = loadImage("piso.png")
	fotoImage = loadImage ("imagen.jpg")
    hogueraImage = loadImage ("hoguera.jpg")
	anilloImage = loadImage ("ANILLO.jpg")
	soulsSound = loadSound("souls.mp3");
	lunaSound = loadSound ("aro de luna.mp3")
}

function setup() {

	soulsSound.loop();

	createCanvas(800, 700);
	piso= createSprite(200,750,200,5);
    piso.addImage("piso",groundImage);
	piso.x = piso.width/3 ;
	
	button = createImg('mute.jpg');
	button.position(630,100);
	button.size(50,50);
	button.mouseClicked(drop);

	button1 = createImg('sonido.png');
	button1.position(630,200);
	button1.size(50,50);
	button1.mouseClicked(drop1);
 
	no = createImg('no.jpg');
	no.position(690,100);
	no.size(50,50);
	no.mouseClicked(mute);

	no2 = createImg('no2.jpg');
	no2.position(690,200);
	no2.size(50,50);
	no2.mouseClicked(mute2);
  
	hoguera= createSprite(660,630,100,5);
    hoguera.addImage("hoguera",hogueraImage);
	hoguera.scale = 0.7
	
	invisibleGround = createSprite(790,264,20,420);
	invisibleGround.visible = false;
   
	engine = Engine.create();
	world = engine.world;
	
 	var ball_options ={
	isStatic : false,
	restitution : 0.2,
	friction : 0,
	density : 1.1
    }
	ball = Bodies.circle (100,700,20,ball_options);
	World.add(world,ball);
	
	Engine.run(engine);

	
	var ground_options ={
		isStatic: true
	  };

	ground = Bodies.rectangle(width/2,688,width,20,ground_options);
	World.add(world,ground);

    var groundleft_options ={
		isStatic: true
	 	 };
		groundleft = Bodies.rectangle(625,650,20,120,ground_options);
		World.add(world,groundleft);

	var groundright_options ={
		isStatic: true
	 	 };
     	groundright = Bodies.rectangle(695,650,20,120,ground_options);
	    World.add(world,groundright);

	 var ground1_options ={
		isStatic: true
		 };
		 ground1 = Bodies.rectangle(790,264,20,420,ground_options);
		  World.add(world,ground1);

	var ground2_options ={
		isStatic: true
		  };
		 ground2 = Bodies.rectangle(10,264,20,420,ground_options);
		  World.add(world,ground2);

	 var ground3_options ={
		isStatic: true
		 };
		 ground3 = Bodies.rectangle(330,10,10,20,ground_options);
		  World.add(world,ground3);
		  score = 0;
	      score2 = 0;
}

function draw() {
	
  rectMode(CENTER);
  background(0);
  textSize(20),
  text("TIEMPO: "+ score,60,110);
  text("PELOTAS USADAS:"+score2,50,60)
  text("Algunas paredes no sirven",50,260)
  text("Asi que espera 10 seg",50,290)
  text("Musica",630,70)
  text("Si algunas canciones",565,270)
  text("no se escuchan intenta",565,290)
  text("poner en mute las dos",565,310)
  text ("canciones",565,350)
  text ("Solo presiona 1 vez",565,380)

  text("Presiona la flecha hacia arriba",50,170)
  text("para mover la pelota a la",50,200)
  text("hoguera",50,230)
  Engine.update(engine);


  score = score + Math.round(getFrameRate()/66);
  if(score>0 && score%100 === 0){   
 }

  ellipse(ball.position.x,ball.position.y,20);
 
 

  rect(ground.position.x,ground.position.y,870,20);
  rect(groundleft.position.x,groundleft.position.y,20,140);
  rect(groundright.position.x,groundright.position.y,20,140);
  rect(ground1.position.x,ground1.position.y,30,820)
  rect(ground2.position.x,ground2.position.y,30,820)
  rect(ground3.position.x,ground3.position.y,700,20)
 
  if (score ==10){
	score2+=1;
  }
   if (score ==  10) {
    text( "¡Gracias por jugar!",200,200)
    
	var ball_options ={
		isStatic : false,
		restitution : 0.2,
		friction : 0,
		density : 1.1
	}
			ball = Bodies.circle (100,200,20,ball_options);
			World.add(world,ball);
			score = 0;
    }
	
 drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
	Matter.Body.applyForce(ball, {x:0,y:0} , {x:22,y:19} );
}
}
function drop()
{
  soulsSound.play();
 
}

function drop1()
{
  lunaSound.play();
 
}
function mute()
{
  if(soulsSound.isPlaying()){
	soulsSound.stop()
}
}

function mute2()
{
  if(lunaSound.isPlaying()){
	lunaSound.stop()
}
}
