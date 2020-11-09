
var moving_rectangle, fixed_rectangle;


function setup() {
  createCanvas(800,400);
  fixed_rectangle = createSprite(400, 200, 50, 50);
  moving_rectangle = createSprite(90,200,50,50);
  fixed_rectangle.shapeColor = "blue";
  moving_rectangle.shapeColor = "black";
} 

function draw() {
  background(240,215,255);

  moving_rectangle.x=World.mouseX;
  moving_rectangle.y=World.mouseY;

  if (fixed_rectangle.width/2 + moving_rectangle.width/2>fixed_rectangle.x - moving_rectangle.x &&
    fixed_rectangle.width/2 + moving_rectangle.width/2>moving_rectangle.x - fixed_rectangle.x&&
    fixed_rectangle.height/2 + moving_rectangle.height/2>fixed_rectangle.y - moving_rectangle.y &&
    fixed_rectangle.height/2 + moving_rectangle.height/2>moving_rectangle.y - fixed_rectangle.y){
   moving_rectangle.shapeColor = "red"; 
   fixed_rectangle.shapeColor = "yellow";
  }
  else
  {
  fixed_rectangle.shapeColor = "blue";
  moving_rectangle.shapeColor = "black";
}

  drawSprites();
}