var randX;
var randY;  

var randR;
var randG;
var randB; 

var col1;
var col2;
var col3;


function setup() {
	//initialize variables
	// sets first arc location
	randX = random(280, 820);
	randY = random(140, 560);
	//sets color patterns
	newRands();
	col1 = color(randR, randG, randB);	//UL, LM
	newRands();
	//	COLORED ARC SET
	col2 = color(randR, randG, randB);	//UL, LM 
	newRands();
	col3 = color(randR, randG, randB);	//UL, LM
	newRands();
	col4 = color(randR, randG, randB);	//UL, LM
	newRands();
	col5 = color(randR, randG, randB);	//UL, LM
	newRands();
	col6 = color(randR, randG, randB);	//UL, LM
	newRands();
	col7 = color(randR, randG, randB);	//UL, LM
	//	END CAS
	newRands();
	col8 = color(randR, randG, randB);	//UL
	newRands();
	col9 = color(randR, randG, randB);	//UM
	newRands();
	col10 = color(randR, randG, randB);	//UM
	newRands();
	col11 = color(randR, randG, randB);	//UM, UL
	// COLORED ARC SET 2
	newRands();
	col12 = color(randR, randG, randB);	//UM, LL
	newRands();
	col13 = color(randR, randG, randB);	//UM, LL
	newRands();
	col14 = color(randR, randG, randB);	//UM, LL
	newRands();
	col15 = color(randR, randG, randB);	//UM, LL
	newRands();
	col16 = color(randR, randG, randB);	//UM, LL
	newRands();
	col17 = color(randR, randG, randB);	//UM, LL
	// END CAS
	// COLORED ARC SET 3
	newRands();
	col18 = color(randR, randG, randB);	//UM, UL
	newRands();
	col19 = color(randR, randG, randB);	//UM, UL
	newRands();
	col20 = color(randR, randG, randB);	//UM, UL
	newRands();
	col21 = color(randR, randG, randB);	//UM, UL
	newRands();
	col22 = color(randR, randG, randB);	//UM, UL
	newRands();
	col23 = color(randR, randG, randB);	//UM, UL
	// END CAS
	newRands();
	col24 = color(randR, randG, randB);	//UL
	newRands();
	col25 = color(randR, randG, randB);	//LL
	newRands();
	col26 = color(randR, randG, randB);	//LM
	newRands();
	col27 = color(randR, randG, randB);	//LM
	//	COLORED ARC SET 4
	newRands();
	col28 = color(randR, randG, randB);	//LM, LR
	newRands();
	col29 = color(randR, randG, randB);	//LM, LR
	newRands();
	col30 = color(randR, randG, randB);	//LM, LR
	newRands();
	col31 = color(randR, randG, randB);	//LM, LR
	newRands();
	col32 = color(randR, randG, randB);	//LM, LR
	newRands();
	col33 = color(randR, randG, randB);	//LM, LR
	// 	END CAS
	newRands();
	col34 = color(randR, randG, randB); 
 
	createCanvas(1100, 700);
	background(250); 
}

function draw() {
	
	strokeWeight(1);
	stroke(255);
	//	UPPER LEFT (UL) (has randX/randY location)
	//main arc
	fill(col8);
	arc(randX, randY, 280, 280, PI+HALF_PI, TWO_PI);
	// inner white stroke
	fill(255);
	arc(randX+14, randY-14, 211, 211, PI+HALF_PI, TWO_PI);
	fill(col1);
	arc(randX+15, randY-15, 210, 210, PI+HALF_PI, TWO_PI);
	//CAS 1
	fill(col2);
	arc(randX+15, randY-15, 180, 180, PI+HALF_PI, TWO_PI);
	fill(col3);
	arc(randX+15, randY-15, 150, 150, PI+HALF_PI, TWO_PI);
	fill(col4);
	arc(randX+15, randY-15, 120, 120, PI+HALF_PI, TWO_PI);
	fill(col5);
	arc(randX+15, randY-15, 90, 90, PI+HALF_PI, TWO_PI);
	fill(col6);
	arc(randX+15, randY-15, 60, 60, PI+HALF_PI, TWO_PI);
	fill(col7);
	arc(randX+15, randY-15, 30, 30, PI+HALF_PI, TWO_PI);
	
	//	UPPER MID RECT (UM)
	// rectangles
	fill(col9); 
	rect(randX-140,randY-140,140,140);
	fill(255); 
	rect(randX-125,randY-125, 110,110);
	fill(col10); 
	rect(randX-126,randY-65,50,50);
	fill(col11); 
	rect(randX-65,randY-126,50,50);
	//CAS 2
	fill(col12);
	arc(randX-15, randY-15, 180, 180, PI, PI+HALF_PI);
	fill(col13);
	arc(randX-15, randY-15, 150, 150, PI, PI+HALF_PI);
	fill(col14);
	arc(randX-15, randY-15, 120, 120, PI, PI+HALF_PI);
	fill(col15);
	arc(randX-15, randY-15, 90, 90, PI, PI+HALF_PI);
	fill(col16);
	arc(randX-15, randY-15, 60, 60, PI, PI+HALF_PI);
	fill(col17);
	arc(randX-15, randY-15, 30, 30, PI, PI+HALF_PI);
	//CAS 3
	fill(col18);
	arc(randX-125, randY-125, 180, 180, 0, HALF_PI);
	fill(col19);
	arc(randX-125, randY-125, 150, 150, 0, HALF_PI);
	fill(col10);
	arc(randX-125, randY-125, 120, 120, 0, HALF_PI);
	fill(col21);
	arc(randX-125, randY-125, 90, 90, 0, HALF_PI);
	fill(col22);
	arc(randX-125, randY-125, 60, 60, 0, HALF_PI);
	fill(col23);
	arc(randX-125, randY-125, 30, 30, 0, HALF_PI);

	//	UPPER LEFT ARC
	// main arc
	fill(col24);
	arc(randX-140, randY-140, 280, 280, HALF_PI, PI);
	// inner white stroke
	fill(255);
	arc(randX-154, randY-126, 211, 211, HALF_PI, PI);
	// non cas3 arc
	fill(col11);
	arc(randX-155, randY-125, 210, 210, HALF_PI, PI);
	//CAS 3
	fill(col18);
	arc(randX-155, randY-125, 180, 180, HALF_PI, PI);
	fill(col19);
	arc(randX-155, randY-125, 150, 150, HALF_PI, PI);
	fill(col10);
	arc(randX-155, randY-125, 120, 120, HALF_PI, PI);
	fill(col21);
	arc(randX-155, randY-125, 90, 90, HALF_PI, PI);
	fill(col22);
	arc(randX-155, randY-125, 60, 60, HALF_PI, PI);
	fill(col23);
	arc(randX-155, randY-125, 30, 30, HALF_PI, PI);

	//	LOWER LEFT ARC (LL)
	// main arc
	fill(col25);
	arc(randX, randY, 280, 280, HALF_PI, PI);
	// inner white stroke
	fill(255);
	arc(randX-14, randY+14, 211, 211, HALF_PI, PI);
	// non cas3 arc
	fill(col10);
	arc(randX-15, randY+15, 210, 210, HALF_PI, PI);
	//CAS 3
	fill(col12);
	arc(randX-15, randY+15, 180, 180, HALF_PI, PI);
	fill(col13);
	arc(randX-15, randY+15, 150, 150, HALF_PI, PI);
	fill(col14);
	arc(randX-15, randY+15, 120, 120, HALF_PI, PI);
	fill(col15);
	arc(randX-15, randY+15, 90, 90, HALF_PI, PI);
	fill(col16);
	arc(randX-15, randY+15, 60, 60, HALF_PI, PI);
	fill(col17);
	arc(randX-15, randY+15, 30, 30, HALF_PI, PI);

	//	LOWER MID RECT
	// rectangles
	fill(col26); 
	rect(randX,randY,140,140);
	fill(255); 
	rect(randX+14,randY+14, 111,111);
	fill(col1); 
	rect(randX+14,randY+75,50,50);
	fill(col27); 
	rect(randX+75,randY+14,50,50);
	//CAS 4
	fill(col28);
	arc(randX+125, randY+125, 180, 180, PI, PI+HALF_PI);
	fill(col29);
	arc(randX+125, randY+125, 150, 150, PI, PI+HALF_PI);
	fill(col30);
	arc(randX+125, randY+125, 120, 120, PI, PI+HALF_PI);
	fill(col31);
	arc(randX+125, randY+125, 90, 90, PI, PI+HALF_PI);
	fill(col32);
	arc(randX+125, randY+125, 60, 60, PI, PI+HALF_PI);
	fill(col33);
	arc(randX+125, randY+125, 30, 30, PI, PI+HALF_PI);
	//CAS 1
	fill(col2);
	arc(randX+15, randY+15, 180, 180, 0, HALF_PI);
	fill(col3);
	arc(randX+15, randY+15, 150, 150, 0, HALF_PI);
	fill(col4);
	arc(randX+15, randY+15, 120, 120, 0, HALF_PI);
	fill(col5);
	arc(randX+15, randY+15, 90, 90, 0, HALF_PI);
	fill(col6);
	arc(randX+15, randY+15, 60, 60, 0, HALF_PI);
	fill(col7);
	arc(randX+15, randY+15, 30, 30, 0, HALF_PI);

	//	LOWER RIGHT ARC
	// main arc
	fill(col34);
	arc(randX+140, randY+140, 280, 280, PI+HALF_PI, TWO_PI);
	// white fill
	fill(255);
	arc(randX+154, randY+126, 211, 211, PI+HALF_PI, TWO_PI);
	//outer arc
	fill(col27);
	arc(randX+155, randY+125, 210, 210, PI+HALF_PI, TWO_PI);
	//CAS 4
	fill(col28);
	arc(randX+155, randY+125, 180, 180, PI+HALF_PI, TWO_PI);
	fill(col29);
	arc(randX+155, randY+125, 150, 150, PI+HALF_PI, TWO_PI);
	fill(col30);
	arc(randX+155, randY+125, 120, 120, PI+HALF_PI, TWO_PI);
	fill(col31);
	arc(randX+155, randY+125, 90, 90, PI+HALF_PI, TWO_PI);
	fill(col32);
	arc(randX+155, randY+125, 60, 60, PI+HALF_PI, TWO_PI);
	fill(col33);
	arc(randX+155, randY+125, 30, 30, PI+HALF_PI, TWO_PI);
	
}

function newRands() {
	randR = random(75,250);
	randG = random(75,250);
	randB = random(75,250);
}