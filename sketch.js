//Create variables here
var dog, happyDog, database, foodS, foodStock;
function preload()
{
  //load images here
  var dog = loadImage("images/dogimg.png")
  var happyDog = loadImage("images/dogimg1.png")
}

function setup() {
  createCanvas(500, 500);
  var dog = createSprite(250,250);
  dog.addImage("dog",dog);
  
  foodStock = database.ref('Food')
  foodStock.on("value",readStock);
  
}


function draw() {  
background("46, 139, 87");
if(KeyWentDown(UP_ARROW)){
  foodS=-1;
  firebase=firebase-1;
}
if(KeyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog);
}
  drawSprites();
  //add styles here
Text("press up arrow to feed the dog milk")
textSize(20);
fill("red");
}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }
  database.ref('/').update({
    Food : x
  })
}


