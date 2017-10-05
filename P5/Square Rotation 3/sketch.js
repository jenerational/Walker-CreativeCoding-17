function setup() {
	//
	createCanvas(800, 600);
}

function draw() {
	//background
	background(255);
	//initialize variables
	var transX = 100

	//task 3
	textSize(32);
	text("Task 3:", 20, 50);
	//do task 3 --> squares set to rotate around their center
	for (var i=0; i<3; i++) {
		push();
		translate(transX,100);
		rotate(TWO_PI/(i+2+(mouseX%2)));
		rect(-15,-15,30,30);
		pop();
		//change variables
		transX+=150;
	}
}
