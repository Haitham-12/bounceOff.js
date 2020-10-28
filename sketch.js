var fixedRect, movingRect;
var rectangle

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  rectangle = createSprite(400,600,50,50)
  rectangle.shapeColor = "blue"
  rectangle.velocityY = +5;


}

function draw() {
  background(0,0,0);  

  bounceOff(rectangle, movingRect);

  drawSprites();
}
