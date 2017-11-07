// sound vars
//sDo = top, sRe = right, etc
var sDo, sRe, sMi, sFa; 
// ball arr
var balls = [];
var ballSz = 0;

function preload() {
	//preload sounds
	sDo = loadSound("assets/bb_Do.mp3");
	sRe = loadSound("assets/bb_Re.mp3");
	sMi = loadSound("assets/bb_Mi.mp3");
	sFa = loadSound("assets/bb_Fa.mp3");
}

function setup() {
	//set up canvas
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(250); 
	textSize(40);
	fill(0); 
	text("click to add another ball.", 50, 100); 
	
	for (var i=0; i < ballSz; i++) {
		balls[i].display(); 
	}
}

//click allows for sustain
function mousePressed() {
	balls.push(new Ball(mouseX, mouseY));
	ballSz++; 
}

//	~+~ BALL CLASS ~+~
function Ball(xx, yy) {
	this.x = xx;
	this.y = yy;
	this.dia = (random(10,20)); 
	this.xVel = random(-5,5);
	this.yVel = random(-5,5); 
	this.color = color(0);
	this.display = function() {

		// CONTROLLING VERT SPEED
		this.y += this.yVel; 
		// hit top
	  	if (this.y < 0) {
	    	this.yVel *= -1; 
	    	sDo.play(); 
	    	this.color = color(182,25,36);
	  	}
	  	// hit bottom
	  	else if (this.y > height) {
	    	this.yVel *= -1; 
	    	sMi.play(); 
	    	this.color = color(191, 244, 66);
	  	}
	  	// CONTROLLER HOR SPEED
	  	this.x += this.xVel; 
	  	if (this.x > width) {
	    	this.xVel *= -1; 
	    	sRe.play(); 
	    	this.color = color(244, 170, 66); 
	  	}
	  	else if (this.x < 0) {
	    	this.xVel *= -1; 
	    	sFa.play(); 
	    	this.color = color(65, 244, 190);
	  	}

		fill(this.color); 
		ellipse(this.x, this.y, this.dia, this.dia);
	}
}

