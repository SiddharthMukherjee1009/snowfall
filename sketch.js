var background
var snow

function preload() {

  backgroundImg=loadImage("snow2.png")

}


function setup() {
  createCanvas(1200,600);

  boy=createSprite(200,250,50,50)

}

function draw() {
  background(255);  
  drawSprites();
}
