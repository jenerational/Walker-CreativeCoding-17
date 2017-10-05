function setup() {
	//
	createCanvas(800, 600);
}

function draw() {
	//initialize variables
	var transX = 100
	var rotation = 3; 

	//task 2
	textSize(32);
	text("Task 2:", 20, 50);
	//do task 2 --> squares set to rotate around their center
	for (var i=0; i<3; i++) {
		push();
		translate(transX,100);
		rotate(PI/rotation);
		rect(-15,-15,30,30);
		pop();
		//change variables
		transX+=150;
		rotation+=3;
	}
}
