// VARS
var randArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]; 
var drops = [];
var dropsSz = 0;
// sound vars
var gb1, gb2, gb3, gb4, gb5, gb6, gb7, gb8; 
//var soundArr = [gb1.play(), gb2.play(), gb3.play(), gb4.play(), gb5.play(), gb6.play(), gb7.play(), gb8.play()];
//"gb1", "gb2","gb3", "gb4", "gb5", "gb6", "gb7", "gb8"];
//var sevArr = [0, 1, 2, 3, 4, 5, 6, 7]; 


function preload() {
	//preload sounds
	gb1 = loadSound("assets/gb1.mp3");
	gb2 = loadSound("assets/gb2.mp3");
	gb3 = loadSound("assets/gb3.mp3");
	gb4 = loadSound("assets/gb4.mp3");
	gb5 = loadSound("assets/gb5.mp3");
	gb6 = loadSound("assets/gb6.mp3");
	gb7 = loadSound("assets/gb7.mp3");
	gb8 = loadSound("assets/gb8.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(2); 
  noFill(); 
  drops.push(new Drop()); 
  dropsSz++; 
}

function draw() {
  background(150); 
  // add drop?
  var rand = random(randArr);
  if (rand == 7) {
  	drops.push(new Drop()); 
  	dropsSz++; 
  }
  for (var i=0; i<dropsSz; i++) {
  	drops[i].display(); 
  	if (drops[i].y > windowHeight-80) {
  		if (rand == 5) {
  			drops[i].linear = false; 
  			/*if (drops[i].length > 20) {
				drops[i].splice(i, 1); 
  				dropsSz--; 
  			}*/
  			//noLoop(); 
  			if (drops[i].x <= windowWidth/8) {
  				gb1.play(); 
  			}
  			else if (drops[i].x <= windowWidth/4) {
  				gb2.play(); 
  			}
  			else if (drops[i].x <= windowWidth/8*3) {
  				gb3.play(); 
  			}
  			else if (drops[i].x <= windowWidth/2) {
  				gb4.play(); 
  			}
  			else if (drops[i].x <= windowWidth/8*5) {
  				gb5.play(); 
  			}
  			else if (drops[i].x <= windowWidth/4*3) {
  				gb6.play(); 
  			}
  			else if (drops[i].x <= windowWidth/8*7) {
  				gb7.play(); 
  			}
  			else {
  				gb8.play();
  			}
  		}
  		
  	}
  }
}

//  CLASSES
function Drop() {
  this.x = random(10, windowWidth-10);
  this.y = random(10, 30);
  this.length = random(5, 20);
  this.color = color(random(0,255));
  this.linear = true; 
  this.display = function() {
  	if (this.linear == true) {
  		stroke(this.color);
    	line(this.x,this.y,this.x, this.y-this.length);
    	this.y += 2; 
  	}
  	else {
  		if (this.length < 30) {
  			ellipse(this.x, this.y, this.length, this.length/2)
  			this.x -= .5;
  			this.length++; 
  		}
  		else {
  			//
  		}
  	}
  }
}


