var selectedBall;
var gleamSizes;
var pupilSizes;
var irisSizes;
var corneaSizes;
var brushes = [];
var colors = [];

function setup() {
   	createCanvas(displayWidth, displayHeight);
   	selectedBall = 0;
   	gleamSizes = [7,8,9,10];
   	pupilSizes = [17,20,26,32];
   	irisSizes = [30,33,39,45];
   	corneaSizes = [40,43,49,55];
   	colors[0] = color(250,100,0);
   	colors[1] = color(200,200,50);
   	colors[2] = color(50,100,100);
   	colors[3] = color(200,100,200);
   	brushes = ["cool!", "really cool!", "amazing!", "mind boggling!"]
}

function draw() {
    	  background(51);
    	  
  textSize(30);
	textAlign(CENTER);
	fill(255);
  noStroke();
	text("That is " + brushes[selectedBall], 320, 350);

    fill(colors[selectedBall]);
  	ellipse(330, 170, 250, 250);
  	
  	fill(250,250,150);
  	ellipse(330, 170, 240, 240);
  	
  	fill(250,250,250);
  	stroke(0,0,0);
  	ellipse(390, 170, 100, 100);
  	
  	fill(100,200,250);
  	ellipse(370, 180, corneaSizes[selectedBall], corneaSizes[selectedBall]);
  	
  	fill(250,250,250);
  	stroke(0,0,0);
  	ellipse(270, 170, 100, 100);
  	
  	fill(100,200,250);
  	ellipse(290, 180, corneaSizes[selectedBall], corneaSizes[selectedBall]);
  	
  	fill(0,220,150);
  	ellipse(290, 180, irisSizes[selectedBall], irisSizes[selectedBall]);
  	
  	fill(0,220,150);
  	ellipse(370, 180, irisSizes[selectedBall], irisSizes[selectedBall]);

  	fill(0,0,0);
  	ellipse(370, 180, pupilSizes[selectedBall], pupilSizes[selectedBall]);
  	
  	 fill(0,0,0);
  	ellipse(290, 180, pupilSizes[selectedBall], pupilSizes[selectedBall]);
  	
  	fill(250,250,250);
  	ellipse(290, 184, gleamSizes[selectedBall], gleamSizes[selectedBall]);
  	
  	fill(250,250,250);
  	ellipse(370, 184, gleamSizes[selectedBall], gleamSizes[selectedBall]);
  	
  	fill(0,0,0);
  	noStroke();
    arc(330, 230, 70, 60, 0, PI);
    
    fill(250,0,0);
  	noStroke();
    arc(320, 230, 40, 30, 0, PI);
}

function mousePressed () {
  selectedBall++
  
  if (selectedBall >= gleamSizes.length) {
    selectedBall = 0;
  }
}