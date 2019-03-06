let timeLeft = 0; 
let currentTime = 10;
let mazeGirl, scream, jep;

setTimeout(function(){
  for(let i = 1; i < 11; i++){
    setTimeout(function(){
      timeLeft += 1;
      console.log(timeLeft);
    }, (i+1) * 1000);
  }
}, 1000);


function preload(){

  mazeGirl = loadImage("img/scary.jpg");

  scream = loadSound('sounds/scream.mp3');
  jep = loadSound('sounds/jep.mp3')

}


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  angleMode(DEGREES);
  imageMode(CENTER);


  jep.play();

}

function draw() {
  background(0);

  let sec = second();
  translate(width/2, height/2);
  strokeWeight(1);
  text(currentTime-timeLeft, 0, 0);
  rotate(-90);
  noFill();
  strokeWeight(5);
  stroke(255,200,200);

  let end = map(timeLeft, 0, 10, 359, 0);
  arc(0, 0, 200, 200, 0, end);


  if(timeLeft == 10){
    push();
    rotate(90);
    background(mazeGirl);
    pop();
    scream.play();
    noLoop();

  }
}