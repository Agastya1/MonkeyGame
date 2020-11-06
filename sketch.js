
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage, bananaGroup;
var FoodGroup, obstacleGroup;
var score;
var ground;
var PLAY;
var gameState=PLAY;


var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running );
  monkey.scale=0.1;

  
  ground = createSprite(400,350,900,10);
  //ground.addImage("ground",groundImage);
 
  
  
  bananaGroup=new Group();
}


function draw() {
background(0);
    monkey.collide(ground);
  ground.velocityX=-4;
   ground.x = ground.width /2;
  if (gameState===PLAY){
  if(keyDown("space") && monkey.y >= 159) {
      monkey.velocityY = -12;
       
  }
       monkey.velocityY = monkey.velocityY + 0.8

    
    }
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Survival Time: " + survivalTime,125,50);
  
  stroke("white");
  textSize(20);
  fill("white");
  survivalTime=Math.ceil(frameCount/frameRate())
    text("Survival Time: " + survivalTime,125,50);
  
  food()
  spawnObstacles()
  drawSprites();
}



function food(){
  if(World.frameCount%80===0){
    banana=createSprite(400,200,20,20);
    banana.y = Math.round(random(120,200));
     banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.velocityX=-3;
    banana.lifetime=138;
   
    bananaGroup.add(banana);
    
}
  
}

function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(400,330,10,40);
    //obstacle.debug = true;
    obstacle.velocityX = -4;
    obstacle.addImage(obstaceImage);
    obstacle.scale=0.1;
    
  }
}