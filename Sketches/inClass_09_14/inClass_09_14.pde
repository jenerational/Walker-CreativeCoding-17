int y = 0; 
int timePassed=0;
void setup() {
  size (600,600);
  background(250);
}

void draw() {   
  
  y = y+1; 
  if (y >= height) {
    y = 0;
  }
  
  ellipse(mouseX, y, 10, 10);
  
  if (mousePressed == true) {
    fill(250); 
    ellipse(mouseX, y-1, 10, 10);
    fill(3, 245,22); 
    ellipse(mouseX, y, 10, 10);
  }
  
  
  
  timePassed = timePassed + 1;
  
   
}