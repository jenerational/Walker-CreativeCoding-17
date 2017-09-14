// everything in setup func only run once at start of program 
// background color, window size

void setup() {
  size(500,500);
}

// draw loops through
// geometry, interactions, logic

void draw() {
  ellipse(30,70,20,100);
  rect(400,300,20,40); 
  
  if (5>3) {
    ellipse(100, 100, 10, 10); 
  }
}

// can control out sketches using normal computer input methods, ex:
// -> mouse pressed
// -> key pressed

void mousePressed() {
  ellipse(mouseX+50,mouseY+100, 20,30);
}

void mouseReleased() {
  rect(mouseX-100,mouseY-50,50,50); 
}

void mouseDragged() {
  ellipse(mouseX, mouseY, 5,5); 
}

void mouseMoved() {
  fill(mouseX%256, mouseY%256, 256);
}

void keyPressed() {
  //key gives value of last key pressed 
  println(key + " key pressed"); 
}