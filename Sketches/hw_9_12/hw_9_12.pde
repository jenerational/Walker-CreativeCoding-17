// idea: a poloroid esc self portrait

//first, create the dimensions of the polaroid shot
//mini polaroids are 46mm x 62 mm so I multiplied that by 5 to get the same ratio
size(230,310); 
//then set the background color to a whitish grey 
background(249, 249, 247); 
// and then create a box within that to have a picture
noStroke(); 
fill(42, 150, 193); 
rect(20, 20, 190, 220);

//I gathered inspiration from a photobooth photo I took once where 
//I was wearing minnie mouse ears, so I added two circles
fill(239, 43, 190); 
//mmDia = minnie mouse (circle) Diameter
int mmDia = 50; 
ellipse(70, 70, mmDia, mmDia); 
ellipse(150, 70, mmDia, mmDia);
//I added a bunch of white dots to the ears
fill(250); 
//dotDia = dot Diameter
int dotDia = 10; 
// dots on the first ear
ellipse(70, 87, dotDia, dotDia);
ellipse(56, 78, dotDia, dotDia); 
ellipse(85, 70, dotDia, dotDia);
ellipse(53, 61, dotDia, dotDia);
ellipse(72, 53, dotDia, dotDia);
ellipse(71, 73, dotDia, dotDia);

// dots on the second ear
ellipse(150, 87, dotDia, dotDia);
ellipse(136, 78, dotDia, dotDia); 
ellipse(165, 70, dotDia, dotDia);
ellipse(133, 61, dotDia, dotDia);
ellipse(152, 53, dotDia, dotDia);
ellipse(151, 73, dotDia, dotDia);

//minnie mouse headband
fill(227,192,6); 
arc(110, 116, 85, 90, PI, TWO_PI); 


// hair
//arcs of hair
fill(198, 126, 43); 
arc(110, 116, 80, 80, PI, PI+HALF_PI); 
arc(110, 116, 80, 80, PI+HALF_PI, TWO_PI); 
//rects of hair
fill(168, 106, 37); 
rect(70, 116, 20, 70); 
rect(130, 116, 20, 70);
 
fill(237, 215, 206); // skin color 
//neck
rect(90, 140, 40, 50);
//chest
rect(70, 190, 80, 50);
arc(150,240,75,100, PI+HALF_PI, TWO_PI); 
arc(70,240,75,100, PI, PI+HALF_PI); 
//dress
fill(56, 53, 81);
rect(65,190,15,50);
rect(140,190,15,50);
rect(80,210,70,30);
//dress details
fill(244, 241, 66);
ellipse(70,205,3,3);
ellipse(75,215,5,5);
ellipse(72,230,4,4);
ellipse(145,205,3,3);
ellipse(150,215,5,5);
ellipse(147,230,4,4);
ellipse(80,225,4,4);
ellipse(140,225,4,4);
ellipse(88,233,2,2);
ellipse(95,230,4,4);
ellipse(133,233,4,4);
ellipse(125,230,2,2);
ellipse(117,232,3,3);
ellipse(106,230,2,2);
ellipse(111,235,2,2);
//neck cutouts
fill(168, 106, 37);
arc(147, 173, 50, 50, HALF_PI, PI+HALF_PI);
arc(73, 173, 50, 50, PI+HALF_PI, TWO_PI+HALF_PI);
//face shadow
fill(221, 199, 190);
ellipse(110, 123, 66, 80);
//face circle
fill(237, 215, 206); // skin color
ellipse(110, 120, 70, 80);
arc(110,210,60,35,0,PI);

// hair waves
fill(198, 126, 43);
//left
arc(75, 125, 30, 30, HALF_PI, PI+HALF_PI);
arc(64, 144, 30, 30, PI+HALF_PI, TWO_PI+HALF_PI);
arc(76, 155, 40, 40, HALF_PI, PI+HALF_PI);
arc(70, 175, 40, 50, PI+HALF_PI, TWO_PI+HALF_PI);
arc(70, 185, 30, 30, HALF_PI, PI+HALF_PI);
//right 
arc(128, 84, 20, 20, HALF_PI, PI+QUARTER_PI); 
arc(145, 97, 40, 40, HALF_PI, PI+QUARTER_PI); 
arc(155, 125, 40, 45, HALF_PI, PI+QUARTER_PI); 
arc(145, 143, 30, 45, PI+HALF_PI, TWO_PI+HALF_PI);
arc(145, 175, 30, 45, PI+HALF_PI, TWO_PI+HALF_PI); 
arc(157, 158, 40, 45, HALF_PI, PI+QUARTER_PI);
arc(145, 183, 30, 30, HALF_PI, PI+HALF_PI);

//eyebrows
stroke(198, 126, 43); 
strokeWeight(2); 
line(104,110,90,108);
line(90,108,85,111);
line(116,110,130,108);
line(130,108,135,111); 
//left eye
stroke(0);  
arc(96, 117, 13, 8, PI, TWO_PI);
strokeWeight(0.5); //eyeliner flick weight
line(89, 117, 86, 116); //eyeliner flick 
noStroke();
fill(249, 249, 247); //white
ellipse(96, 117, 12, 6); //eyeball
fill(81, 167, 181); //blue
ellipse(96, 117, 5,5); //iris 
fill(0);
ellipse(96, 117, 2,2);
//right eye
stroke(0);
strokeWeight(2); 
arc(125, 117, 13, 8, PI, TWO_PI);
strokeWeight(0.5); //eyeliner flick weight
line(131, 117, 134, 116); //eyeliner flick 
noStroke(); 
fill(249, 249, 247); //white
ellipse(125, 117, 12, 6); //eyeball
fill(81, 167, 181); //blue
ellipse(125, 117, 5,5); //iris 
fill(0);
ellipse(125, 117, 2,2);

//nose
noFill(); 
stroke(0);
strokeWeight(1); 
arc(107, 132, 5, 5, HALF_PI, PI); 
arc(113, 132, 5, 5, 0, HALF_PI);
arc(110, 132, 8, 5, QUARTER_PI, HALF_PI+QUARTER_PI); 
//smile
arc(110, 145, 20, 7, 0, PI);  