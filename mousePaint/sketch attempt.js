function setup() {
	createCanvas(700,500);
	//background(250); 

	noStroke(); 
}

function draw() {
	background (250);
	//ellipse(mouseX, mouseY, 20, 20);
	circ = new fadedCirc(); 
}

// circ class
function fadedCirc() {
	this.x = 30;
	this.y = 30; 
}