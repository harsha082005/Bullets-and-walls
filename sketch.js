var bullet;
var wall;
var speed,weight;
var thickness;


function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);


  bullet = createSprite(50, 200, 50, 5);
  bullet.velocityX = speed;
  bullet.shapeColor = 255;

  wall = createSprite(1500,200,thickness,height/2);
  wall.shapeColor=(80,80,80);


  
}

function draw() {
  background("black");  
  
    hasCollided(wall,bullet);

    if(hasCollided(wall,bullet)){
           
       bullet.velocityX = 0;

       var damage = 0.5* weight * speed* speed/(thickness*thickness*thickness);

       if(damage>10){
         wall.shapeColor = color(255,0,0);
       }

       if(damage<10){
         wall.shapeColor = color(0,255,0);
       }

    }


     
  

  
  drawSprites();

}

function hasCollided(wall,bullet){
  if(wall.x-bullet.x < bullet.width/2 + wall.width/2
    && bullet.x-wall.x<bullet.width/2 + wall.width/2
    && wall.y - bullet.y < bullet.width/2 + wall.width/2
    && bullet.y-wall.y<bullet.width/2 + wall.width/2){

    return true;
  }

  else{
    return false;
  }
}

