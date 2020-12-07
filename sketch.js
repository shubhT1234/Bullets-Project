var bullet;
var wall;
var s, s1,s2;
var thickness,speed,weight;
function preload(){
 s=loadImage("red bullet.jpg");
 s1=loadImage("green bullet.jpg");
 s2=loadImage("bullet.jpg");
  
}

function setup() {
  createCanvas(1600, 400);
  bullet=createSprite(50,190,40,40);
  wall=createSprite(1550,200,thickness,height/2);
  bullet.addImage("s2",s2);
  bullet.addImage("s",s);
  bullet.addImage("s1",s1);
  bullet.scale=0.4;
  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);

}

function draw() {
background("white");
bullet.velocityX=speed;
console.log(thickness,speed,weight);
  if(hasTouched(bullet,wall)){
    bullet.velocityX=0;
    
    var damage=0.5*speed*speed*weight/thickness*thickness*thickness;
    if(damage>10){
       bullet.changeImage("s");
      bullet.scale=0.4;
      
    }
    if(damage<10){
    bullet.changeImage("s1");
  
      bullet.scale=0.4;
    }
    
  }
  
  
  drawSprites();
  
  
}
function  hasTouched(object1,object2){
bulletRightEdge=object1.x+object1.width;
wallLeftEdge=object2.x;
if(bulletRightEdge>=wallLeftEdge){
  return true;
}else{
  return false;
}
}
