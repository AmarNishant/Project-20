var garden,gardenImg;
var cat,catImg1,catImg2,catImg3;
var mouse,mouseImg1,mouseImg2,mouseImg3;

function preload() {
    //load the images here
    gardenImg=loadImage("garden.png");

    catImg1=loadImage("cat1.png");
    catImg2=loadAnimation("cat2.png","cat3.png");
    catImg3=loadImage("cat4.png");

    mouseImg1=loadImage("mouse1.png");
    mouseImg2=loadAnimation("mouse2.png","mouse3.png");
    mouseImg3=loadImage("mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden=createSprite(500,400,100,100);
    garden.addImage(gardenImg);

    cat=createSprite(900,700,10,10);
    cat.addImage(catImg1);
    cat.scale=0.1;

    mouse=createSprite(100,700,10,100);
    mouse.addImage(mouseImg1);
    mouse.scale=0.1;

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width+mouse.width)/2){
        mouse.addImage("mouse_happy",mouseImg3);
        mouse.changeAnimation("mouse_happy"); 
        cat.addImage("cat_happy",catImg3)
        cat.changeAnimation("cat_happy");
    }

    keyPressed();

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyDown(LEFT_ARROW)){
        mouse.addAnimation("mouse_teasing",mouseImg2);
        mouse.changeAnimation("mouse_teasing");
        cat.addAnimation("cat_walking",catImg2)
        cat.changeAnimation("cat_walking");
        cat.x=cat.x-5;
    }

}
