function setup() {
	//basic setup
	createCanvas(1000, 800);
	background(255);

	//color set up --> 11 col
	var red = color(240, 39, 31);
	var reddish = color(250,57,40);
	var rorange = color(253, 74, 33);
	var orange = color (246, 89, 33);
	var yellow = color(252, 224, 11);
	var green = color(88, 115, 79);
	var dgreen = color(72, 102, 90); 
	var dblue = color(63, 80, 96);
	var blue = color(59, 83, 122);
	var blueish = color(72, 86, 123);
	var bluegrey = color(93, 109, 125);

	var colorArr = new Array(reddish, red, bluegrey, blueish, blue, dblue, dgreen, green, yellow, orange, 
		rorange);

	// other var setup
	var x = width/2;
	var y = height/2; 
	var cc = 0;	// cc = current color
	var inn = 24;	// inner length of quad

	// set up stroke
	strokeWeight(1);
	stroke(255);

	// drawing
	for (var i=0; i<4; i++) {
		fill(colorArr[cc%11]);
		if (i==0) {
			triangle(x, y, x+12
	, y+12
, x+12
, y-12
);
		}
		else if (i==1) {
			triangle(x, y, x-12
	, y-12
, x+12
, y-12
);
		}
		else if (i==2) {
			x += 12
;
			y += 12
;
			triangle(x, y, x-24, y-24, x-24, y+24);
		} 
		else if (i==3) {
			triangle(x, y, x+24, y+24, x-24, y+24);
		}

		cc+=1
	}

	while (cc <= 55) {	//	deals w (quad) segments 5-56, 
		if (cc%4 == 0) {
			fill(colorArr[cc%11]);
			//low left, high left, high right, low right
			quad(x, y, x, y-inn, x+24, y-inn-24, x+24, y+24);
			//change xy value
			y -= inn;
		}
		else if (cc%4 == 1) {
			fill(colorArr[cc%11]);
			//low right, low left, high left, high right
			quad(x, y, x-inn, y, x-inn-24, y-24, x+24, y-24);
			//change xy value
			x -= inn;
			//change length of inn
			inn+=24;
		}
		else if (cc%4 == 2) {
			fill(colorArr[cc%11]);
			//high right, low right, low left, high left
			quad(x, y, x, y+inn, x-24, y+inn+24, x-24, y-24);
			//change xy value
			y+= inn; 
		}
		else if (cc%4 == 3) {
			fill(colorArr[cc%11]);
			//high left, high right, low right, low left
			quad(x, y, x+inn, y, x+inn+24, y+24, x-24, y+24);
			//change xy value
			x+=inn;
			//change length of inn 
			inn+=24;
		}
		cc+=1
	}

	// last quad on right side, is squared at top
	quad(x, y, x, y-inn, x+24, y-inn, x+24, y+24);
}

function draw() {
	// n/a
}



