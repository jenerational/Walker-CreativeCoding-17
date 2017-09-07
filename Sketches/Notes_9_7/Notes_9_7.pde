// things are drawn in the order they're given 
// tabs in Processing is for classes --> tries to create something 
//that feeds into the main program 

//background color --> have to do first bc otherwise it will cover everything 
background(255,0,127); 


//  line, x1, y1, x2, y2
line(10.0,50,3,30);
// rectangle, x, y, w, h
rect(10, 20, 50, 30); 
// ellipse centerx, center y, w, h
ellipse(200, 100, 70, 50);
// triangle x1, y1, x2, y2, x3, y3
triangle(50,50,200,300,100,400); 
// point x, y
point(100, 200); 

//triangle starts to be outside screen --> can change screen size
// screen size, x dimension, y dimension 
size(500,400);

// how to define variables
int circPl = 400;
int circDia = 100; 
ellipse(circPl, 300, circDia, circDia); 

//print
//doesnt create a sketch, prints to console 
println("hello world"); 

//changing fill & stroke weight
// has white fill as default, aka 255 255 255
// make no black outline
noStroke(); 
fill(0, 0, 0); 
rect(100, 345, 66, 66); 
fill(0, 234, 54); 
rect(222, 70, 80, 80); 

//to turn stroke back on
// have to define stroke color
stroke(5,34,255);
// changes line thickness 
strokeWeight(3); 
fill(134, 034, 54); 
rect(60, 30, 80, 80); 

// draw a complex shape
// made by placing a bunch of verticies and linking them all together 
beginShape();
vertex(50, 100);
vertex(300, 200);
vertex(200,300);
vertex(100, 150);
vertex(80, 300);
endShape(CLOSE); 