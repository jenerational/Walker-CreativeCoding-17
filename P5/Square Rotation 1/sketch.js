function setup() {
	//
	createCanvas(800, 600);
}

function draw() {
	//task 1
	textSize(32);
	text("Task 1:", 20, 50);
	//do task 1 --> squares set to rotate around their center
	push();
	translate(100,100);
	rotate(PI/3.0);
	rect(-15,-15,30,30);
	pop();
	push();
	translate(250,100);
	rotate(TWO_PI/3.0);
	rect(-15,-15,30,30);
	pop();
	push();
	translate(400,100);
	rotate(TWO_PI+HALF_PI/6.0);
	rect(-15,-15,30,30);
	pop();
}
