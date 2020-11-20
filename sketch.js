var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
if(isTouching(movingRect,fixedRect)){

  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";

}

else{

  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
}
  
  drawSprites();
}
function isTouching(ob1,ob2){
if (ob2.x - ob1.x < ob1.width/2 + ob2.width/2
  && ob1.x - ob2.x < ob1.width/2 + ob2.width/2&& ob2.y - ob1.y < ob1.height/2 +ob2.height/2
    && ob1.y - ob2.y < ob1.height/2 +ob2.height/2){
      
    return  true;

}
else{
return  false;

}
}