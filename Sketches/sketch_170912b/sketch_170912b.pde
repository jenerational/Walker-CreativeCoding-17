void setup() {
  size(600,600);
  noStroke();
}

void draw() {
  //variables
  int halfW=width/2;
  int tfW = halfW+(width/4);
  int ttH=height*2/3;
  //blue
  if (mouseX<=halfW && mouseY<=ttH) {
    background(233);
    fill(66, 89, 244);
    rect(0,0,halfW,ttH); 
  }
  // teal
  if (mouseX<=halfW && mouseY>=ttH) {
    background(233);
    tealMousePressed(0,ttH,halfW,ttH/2);
  }
  // red
  if (mouseX>=halfW && mouseX != tfW) {
    background(233);
    fill(244, 65, 65);
    rect(halfW,0,halfW,height); 
  }
  //yellow
  if (mouseX == tfW) {
    background(233);
    fill(242, 238, 24);
    rect(0,0,width,height); 
  }
}

void tealMousePressed(int sW, int sH,int w,int h) {
  if(mousePressed == true){
    fill(65, 244, 226);
    rect(sW,sH,w,h);
  }
}  