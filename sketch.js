var garden, gardenImg;
var rabbit, rabbitImg;
var orangeLeaf, orangeLeafImg;
var redLeaf, redLeafImg;


function preload(){
  gardenImg = loadImage("images/garden.png");
  rabbitImg = loadImage("images/rabbit.png");
  orangeLeafImg = loadImage("images/orangeLeaf.png");
  redLeafImg = loadImage("images/redLeaf.png");
}


function setup(){
createCanvas(400,400);

// background
garden = createSprite(200,200);
garden.addImage(gardenImg);

// rabbit setup
rabbit = createSprite(160,340,20,20);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function draw() {
  background(0);
  // rabbit moving on X axis with mouse
  rabbit.x = World.mouseX;
  
  edges = createEdgeSprites();
  rabbit.collide(edges);
  
  drawSprites();

  // create apples and oranges
  var img = Math.round(random(1,2));
  if(frameCount % 80 == 0){
    if(img == 1){
      createRedLeaf();
    } else if(img == 2){
      createOrangeLeaf();
    }
  }
}

function createRedLeaf(){
redLeaf = createSprite(random(50, 350),40, 10, 10);
redLeaf.addImage(redLeafImg);
redLeaf.scale = 0.07;
redLeaf.velocityY = 3;
redLeaf.lifetime = 150;
}

function createOrangeLeaf(){
  orangeLeaf = createSprite(random(50, 350),40, 10, 10);
  orangeLeaf.addImage(orangeLeafImg);
  orangeLeaf.scale = 0.07;
  orangeLeaf.velocityY = 3;
  orangeLeaf.lifetime = 150;
}
  