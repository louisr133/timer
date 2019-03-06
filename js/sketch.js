
let timeLeft = 0; 
let currentTime = 10;
let mazeGirl, scream, jep;

function preload(){
  mazeGirl = loadImage("img/scary.jpg");
  scream = loadSound('sounds/scream.mp3');
  jep = loadSound('sounds/jep.mp3')

}



// style="width: 100px; position: fixed"
window.addEventListener('load', function(){
  var startButton = document.getElementById("start");
  startButton.style.position = "fixed"; 
  startButton.style.margin = "15px";
  startButton.style.padding = "5px 15px";
  startButton.style.borderRadius = "5px";
})


var init = function(){
  var startButton = document.getElementById("start");
  startButton.style.display = 'none';

  jep.play();
    for(let i = 0; i < 10; i++){
      setTimeout(function(){
        timeLeft += 1;
        console.log(timeLeft);
      }, (i+1) * 1000);
    }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  angleMode(DEGREES);
  imageMode(CENTER);
}

function draw() {
  background(0);
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