var Rect1, Rect2;

function setup() {
  createCanvas(1200,800);
  Rect1 = createSprite(100, 100, 50, 80);
  Rect1.shapeColor = "green";
  Rect1.debug = true;
  Rect2 = createSprite(800, 100,80,30);
  Rect2.shapeColor = "green";
  Rect2.debug = true;

  Rect2.velocityX = -5;
  Rect1.velocityX = +5;

}

function draw() {
  background(0,0,0);  

  B1(Rect1, Rect2);
  
  drawSprites();
}

