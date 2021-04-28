var starImg,bgImg;
var star, starBody;
var fairyImg1 , fairy;
var music;



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	//load animation for fairy here
	fairyImg1 = loadAnimation("images/fairyImage1.png", "images/fairyImage2.png");
	
	music = loadSound("sound/JoyMusic.mp3");



}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound

	//create fairy sprite and add animation for fairy
	fairy = createSprite(400,500,20,20);
	fairy.addAnimation("Fairy_running", fairyImg1);
	fairy.scale = 0.18;

	

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody_options = {
		restitution:0.5,
		isStatic:true
	}

	starBody = Bodies.circle(650 , 30 , 5 , starBody_options);
	World.add(world, starBody);
	World.add(world, fairy);
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  Engine.update(engine);

  star.x = starBody.position.x;
  star.y = starBody.position.y; 
  
  if (star.y > 470 && starBody.position.y > 470)
  {
	  Matter.Body.setStatic(starBody, true);
  }

  if (star.isTouching(fairy))
  {
	  music.play();

  }

  console.log(star.y);

  //write code to stop star in the hand of fairy

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {

		

		Matter.Body.setStatic(starBody,false); 
	}

	//write code to move fairy left and right
	if (keyCode === LEFT_ARROW)
	{
		fairy.x = fairy.x - 20;
	}

	if (keyCode === RIGHT_ARROW)
	{
		fairy.x = fairy.x + 20;
	}

	
	
}
