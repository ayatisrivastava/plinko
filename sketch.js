var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var bucket1,bucket2,bucket3,bucket4;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  if (frameCount%60===0){
    particles.push(new particles(random(width/2.10, width/2+10),10,10));
  }
  for (var j = 0; j < particles.length; j++){
    particles[j].display();
  }
  for (var j = 40; j <=width; j = j+50)
  {
    plinkos.push(new plinkos(j,75));
  }
  for (var j = 15; j <=width-10; j = j+50)
  {
    plinkos.push(new plinkos(j,175));
  }
  for (var k = 0; k <=width; k = k + 80){
    divisions.push(new divisions(k, height-divisionHeight/2,10,divisionHeight));
  }
  for (var k = 0; k< divisions.length; k++){
    divisions[k].display();
  }
  bucket1 = new bucket1(150,50,5,20);
  bucket1 = new bucket1(300,50,5,20);
  bucket1 = new bucket1(450,50,5,20);
  bucket1 = new bucket1(600,50,5,20);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}