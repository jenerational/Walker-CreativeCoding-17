function setup() {
	createCanvas(600,500); 
	background(200,200,200); 

	console.log("Launched the screen.");
}

function draw() {
	noStroke();

	//initializing variables
	halfW=width/2;
    tfW = halfW+(width/4);
    otH=height/3;

    /*color values
	blue: 66, 89, 244
	red: 244, 65, 65
	teal: 65, 244, 226
	yellow: 242, 238, 24
	*/

	//teal
	if (mouseX<=halfW && mouseY<=otH) {
	    background(200);
	    if (mouseIsPressed == true) {
	    	fill(65, 244, 226);
	    	rect(0,0,halfW,otH);
	    } 
	}
	// red
	if (mouseX<=halfW && mouseY>=otH) {
	    background(200);
	    fill(244, 65, 65);
	    rect(0,otH,halfW,otH*2);
	}
	// blue
	if (mouseX>=halfW && mouseX != tfW) {
	    background(200);
	    fill(66, 89, 244);
	    rect(halfW,0,halfW,height); 
	}
	//yellow
	if (mouseX == tfW) {
	    background(200);
	    fill(242, 238, 24);
	    rect(0,0,width,height); 
	}
}
