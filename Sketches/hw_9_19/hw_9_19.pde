int y = 0; 
//int x = 0;
int yVel = 1; 
int xVel = 1; 
int timePassed=0;
float x = random(width);
void setup() {
  size (600,602);
  background(250);
}

void draw() { 
  // background currently not active to show ball trajectory
  background(250);
  ellipse(x, y, 15, 15);
  ellipse(x, y, 15, 15);
  
  // controling verticle speed
  y = y+yVel; 
  if (y > height || y < 0) {
    yVel *= -1; 
    //xVel *= -1;
  }
  
  // controlling horizontal speed
  x = x+xVel; 
  if (x > width || x < 0) {
    //yVel *= -1;
    xVel *= -1; 
  }
  
  // increases speed
  if (timePassed%100 == 0) {
    yVel += 1;
    xVel += 1; 
  }
  
  //if collide
  if ((mouseX > x-15 && mouseX < x+15) && (mouseY > y-15 && mouseY < y+15)) {
    endGame();
  }
  
  timePassed = timePassed + 1;  
}

void endGame() {
  // egt = end game time
  int egt = 0; 
  background(104, 66, 244);
  textSize(200);
    text("Game", 50, 50);
    text("Over", 50, 400);
  while (egt != 1000) {
    egt += 1;
  }
  if (egt == 1000) {
    exit();
  }
}