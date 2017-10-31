// sound vars
//sDo = top, sRe = right, etc
var sDo, sRe, sMi, sFa, doReMi;
// x y vars
var x=0, y=0;
// x y vel vars
var xVel=5, yVel = 5;  
// for sustain
var playMode = "sustain"; 
var canPlay = false; 
var ellFill = 0; 

function preload() {
	//preload sounds
	sDo = loadSound("assets/bb_Do.mp3");
	sRe = loadSound("assets/bb_Re.mp3");
	sMi = loadSound("assets/bb_Mi.mp3");
	sFa = loadSound("assets/bb_Fa.mp3");
	doReMi = loadSound("assets/doReMi.mp3");
}

function setup() {
	//set up canvas
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(250); 
	textSize(40);
	text("click to toggle sustain.", 50, 100); 
	text("Press key to play do re mi.", 50, 200);
	if (canPlay == true) {
		text("song is playing.", 50, 300); 
	} 
	fill(ellFill); 
	ellipse(x, y, 20, 20); 

	// CONTROLLING VERT SPEED
	y = y+yVel; 
	// hit top
  	if (y < 0) {
    	yVel *= -1; 
    	sDo.play(); 
    	ellFill = color(182,25,36);
  	}
  	// hit bottom
  	else if (y > height) {
    	yVel *= -1; 
    	sMi.play(); 
    	ellFill = color(191, 244, 66);
  	}
  	// CONTROLLER HOR SPEED
  	x = x+xVel; 
  	if (x > width) {
    	xVel *= -1; 
    	sRe.play(); 
    	ellFill = color(244, 170, 66); 
  	}
  	else if (x < 0) {
    	xVel *= -1; 
    	sFa.play(); 
    	ellFill = color(65, 244, 190);
  	}
}

//click allows for sustain
function mousePressed() {
	if (canPlay == false) {
		canPlay = true; 
		doReMi.play(); 
	}
	else {
		doReMi.stop();
		canPlay = false; 
	}
	console.log("pressed");
}

//play whole song
function keyPressed() {
	if (canPlay == true) {
		doReMi.playMode(playMode); 
		doReMi.play();
	}
} 	


