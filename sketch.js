function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  var sun,mercury,venus,earth;
  var mars,jupiter,saturn,urenus,neptune;
  var sun=createSprite(400,200,20,20);
  var mercury=createSprite(370,190,5,5);
  var venus=createSprite(350,170,10,10);
  var earth=createSprite(330,155,15,10);
  var mars=createSprite(300,140,10,20);
  var jupiter=createSprite(265,120,20,20);
  var saturn=createSprite(245,100,15,15);
  var urenus=createSprite(225,85,10,10);
  var neptune=createSprite(200,70,10,7);

}




function display (){

}
function draw() {
  background(255,255,255);  
  drawSprites();
}