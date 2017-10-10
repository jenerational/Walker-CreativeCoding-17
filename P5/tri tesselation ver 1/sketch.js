//ASSIGNEMNT 10.05.17
//Array for Triangle Points
var tPoint = [];
var s=0;//variable to make 3rd Point mouseX,mouseY
//Array of distance from last 'tPoint's to Mouse Position
var pointDist = [];
//first Triangle of the program
var firstTri = true;
//Records i of the tPoint furthers from the mouse position;
var greatestDist;
//Last Drawn Point
var lastPt = [];


function setup(){
    createCanvas(1200,600);
    noFill();
    //creating 2D ARRAYS
    for(var i =2; i>-1;i--){	//	for(var i =0; i<3;i++){
        tPoint[i]=[];
        // new code in for loop below
        for(var j =0; j<2;j++){
        	if(j==0){
	            tPoint[i][j]= mouseX-((10*s)+5);
	        }else{
	            tPoint[i][j]= mouseY-((10*s)+5);
	        }
	        s++;
        }
    }
    s=0; //	new code line
    for(var i =0; i<3;i++){
            pointDist[i]=[];
    }   

    console.log(tPoint);	// prints point array
}
function draw(){
	// ~ theres no need to constantly update the farthest point tho?
    /*if(mousePressed){
        if(!firstTri){
            for(var i =0; i<3;i++){
                    pointDist[i] = dist(tPoint[i][0],tPoint[i][2],mouseX,mouseY);
            }
            if(pointDist[0]>pointDist[1] && pointDist[0]>pointDist[2]){
                greatestDist = 0;
            }else if(pointDist[1]>pointDist[2]){
                greatestDist = 1;
            }else{
                greatestDist = 2;
            }
        }
    }*/
}
function createTri(){
    // ~ I think its good to have createTri as its own func
    triangle(tPoint[0][0],tPoint[0][1],tPoint[1][0],tPoint[1][1],tPoint[2][0],tPoint[2][1]);
}
function mousePressed(){
	console.log(firstTri);
    if(firstTri){
    	console.log("entered");
        //WILL ONLY EXECUTE ON FIRST PRESS ON PROGRAM
        //WILL NOT EXECUTE AFTER RELEASE
        for(var i=2; i>-1; i--){
        	console.log("entered");
            for(var j=0; j<2; j++){
            	//	~was forming a line bc slope was the same among three pts
            	//	~thus wasnt forming a triangle, so i changed it
            	console.log(mouseX);
            	console.log(mouseY);
                if(j==0){
                    tPoint[i][j]= mouseX-((20*s)+5);
                }else if(i==1){
                	tPoint[i][j]= mouseY+((10*s)+5);
                }else{
                    tPoint[i][j]= mouseY-((10*s)+5);
                }
                console.log("fTri");
                console.log(tPoint);
            }
        	s++;
        } 
        s=0;
        console.log("entered");
        createTri();
        firstTri = false;
    }else {	// ~calculates dist, draws lines, and updates tPoint array
    	for(var i =0; i<3;i++){
        pointDist[i] = dist(tPoint[i][0],tPoint[i][1],mouseX,mouseY);
    }
    if(pointDist[0]>pointDist[1] && pointDist[0]>pointDist[2]){
        greatestDist = 0;
        line(tPoint[1][0],tPoint[1][1],mouseX,mouseY);
        line(tPoint[2][0],tPoint[2][1],mouseX,mouseY);
        tPoint[0][0] = mouseX;
        tPoint[0][1] = mouseY;
    }else if(pointDist[1]>pointDist[2]){
        greatestDist = 1;
        line(tPoint[0][0],tPoint[0][1],mouseX,mouseY);
        line(tPoint[2][0],tPoint[2][1],mouseX,mouseY);
        tPoint[1][0] = mouseX;
        tPoint[1][1] = mouseY;
    }else{
        greatestDist = 2;
        line(tPoint[0][0],tPoint[0][1],mouseX,mouseY);
        line(tPoint[1][0],tPoint[1][1],mouseX,mouseY);
        tPoint[2][0] = mouseX;
        tPoint[2][1] = mouseY;
    }
    console.log(tPoint);
    console.log(greatestDist);
    }

}





