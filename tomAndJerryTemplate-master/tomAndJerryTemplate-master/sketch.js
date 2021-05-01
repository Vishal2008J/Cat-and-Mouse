var cat1IMg,catWalking,cat4Img
var mouse1Img,mosueTeasing,mouse4Img
var gardenImg,garden
var cat 
var mouse



function preload() 
{
    //load the images here
cat1Img=loadImage("images/cat1.png");
catWalking=loadAnimation("images/cat2.png","images/cat3.png");
gardenImg=loadImage("images/garden.png");
mouse1Img=loadImage("images/mouse1.png");
mouseTeasing=loadAnimation("images/mouse2.png","images/mouse3.png");
cat4Img=loadImage("images/cat4.png");
mouse4Img=loadImage("images/mouse4.png");
}

function setup()
{
    createCanvas(1000,800);
    //create tom and jerry sprites here

    garden=createSprite(400,400,);
garden.addImage(gardenImg);

cat=createSprite(700,600,50,50);
cat.addImage(cat1Img)
cat.scale=0.25




mouse=createSprite(150,600,50,50);
mouse.addImage(mouse1Img);
mouse.scale=0.2
}

function draw()
 {

  background(255);
    //Write condition here to evalute if tom and jerry collide
if(cat.x-mouse.x<(cat.width-mouse.width)/2){


cat.velocityX=0;
cat.x=300;
cat.addAnimation("cat4Img",cat4Img);
cat.changeAnimation("cat4Img",cat4Img);
mouse.addAnimation("mouse4Img",mouse4Img)
mouse.changeAnimation("mouse4Img",mouse4Img);
}


    if(keyDown===LEFT_ARROW)
{
keyPressed ();

}
    drawSprites();
}


function keyPressed()
{
//For moving and changing animation write code here
mouse.addAnimation("mouseTeasing",mouseTeasing);
mouse.changeAnimation("mouseTeasing");
mouse.frameDelay=10;

cat.addAnimation("catWalking",catWalking);
cat.changeAnimation("catWalking");
cat.frameDelay=10;
cat.velocityX=-3;
}
