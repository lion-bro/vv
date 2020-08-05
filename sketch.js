
var dog, dogIMG, happyDog, happyDogIMG;
var database;
var foodS, foodStock;
var count;

function preload()
{
  dogIMG = loadImage("dog.png");
  happyDogIMG = loadImage("happydog.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(250,250,50,50);
  dog.scale = 0.2;
  dog.addImage(dogIMG);

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);

//count = 20;
  
}


function draw() {  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){

    writeStock(foodS -1);
    dog.addImage(happyDogIMG);

    //count = count - 1;

  }

  drawSprites();
  
  fill("yellow");
  text("Note: Press UP_ARROW Key to Feed Dawg Milk!", 150,10);

  textSize(20);
  stroke(4);
  //text("Food Stock: " + count ,225,100);
  text("Food Stock: " + foodS ,225,100);
}

function readStock(data)
{
  foodS = data.val();
}

function writeStock(x)
{
  database.ref('/').update({
    Food:x
  })
}