int y = 0; 
int x = 0;
int yVel = 1; 
int xVel = 1; 
int timePassed=0;
void setup() {
  size (600,600);
  background(250);
}

void draw() {  
  // background currently not active to show ball trajectory
  //background(250);
  ellipse(x, y, 15, 15);
  ellipse(x+100, y, 15, 15);
  
  // controling verticle speed
  y = y+yVel; 
  if (y > height || y < 0) {
    yVel *= -1; 
    xVel *= -1;
  }
  
  // controlling horizontal speed
  x = x+xVel; 
  if (x > width || x < 0) {
    yVel *= -1;
    xVel *= -1; 
  }
  
  if (timePassed%100 == 0) {
    yVel += 1;
    xVel += 1; 
  }
  
  timePassed = timePassed + 1;  
}