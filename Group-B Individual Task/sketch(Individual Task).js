let colors = [];
let bigCircles = [];
let smallStrokeCircles = [];
let kpatternColors = [];
let kCircle = [];

let dotSizeFactor = 2;
let targetDotSizeFactor = 4;

let kCircleStrokeWeight = 25;
let kCircleTargetStrokeWeight = 5;
let kCircleStrokeSpeed = 0.1;

let originalColors = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  //color array  
  colors = [
    color('#242062'),//1 a
    color('#0C63AD'),//2 b
    color('#0E99A2'),//3 c
    color('#FDCE23'),//4 d
    color('#199646'),//5 f
    color('#FDCE23'),//6 d
    color('#DF3E86'),//7 e
    color('#F0A428'),//8 g
    color('#DF3E86'),//9 e
    color('#F0A428'),//10 g
    color('#0C63AD'),//11 b
    color('#F0A428'),//12 g
    color('#199646'),//13 f
    color('#242062'),//14 a
    color('#0E99A2'),//15 c
    color('#FDCE23')//16 d
  ];

  originalColors = [...colors];
  // Calculate radius based on canvas size
  let r = min(width, height) * 0.35;

  // Initialize big circles
  bigCircles = [
    new Circle(0.1, 0.05, r, colors[0]),
    new Circle(0.11, 0.43, r, colors[1]),
    new Circle(0.05, 0.8, r, colors[2]),
    new Circle(0.35, 0, r, colors[3]),  
    new Circle(0.3, 0.38, r, colors[4]), 
    new Circle(0.24, 0.75, r, colors[5]),//6
    new Circle(0.17, 1.1, r, colors[6]),//7
    new Circle(0.5, 0.26, r, colors[7]),//8
    new Circle(0.45, 0.68, r, colors[8]),//9
    new Circle(0.40, 1.05, r, colors[9]),//10
    new Circle(0.7, 0.24, r, colors[10]),//11
    new Circle(0.68, 0.61, r, colors[11]),//12
    new Circle(0.63, 0.98, r, colors[12]),//13
    new Circle(0.89, 0.08, r, colors[13]),//14
    new Circle(0.9, 0.57, r, colors[14]),//15
    new Circle(0.87, 1, r, colors[15])//16
  ];

  //kate's pattern, dotted line circles
  kpatternColors = [
    color('#FFFFFF'),//4
    color('#0C63AD'),//6
    color('#b780b7'),//8
    color('#FFFFFF'),//12
    color('#FDCE23'),//14
    color('#FFFFFF')//16
  ];

  kCircle = [
    new kCircles(bigCircles[3].xScale, bigCircles[3].yScale, r, kpatternColors[0]),
    new kCircles(bigCircles[5].xScale, bigCircles[5].yScale, r, kpatternColors[1]),
    new kCircles(bigCircles[7].xScale, bigCircles[7].yScale, r, kpatternColors[2]),
    new kCircles(bigCircles[9].xScale, bigCircles[9].yScale, r, kpatternColors[2]),
    new kCircles(bigCircles[11].xScale, bigCircles[11].yScale, r, kpatternColors[3]),
    new kCircles(bigCircles[13].xScale, bigCircles[13].yScale, r, kpatternColors[4]),
    new kCircles(bigCircles[15].xScale, bigCircles[15].yScale, r, kpatternColors[1])
  ];

  smallStrokeCircles = [
    new SmallStrokeCircle(bigCircles[0], r * 0.5, color('#D43E8E'), color('#199646'), 40, true), //  circle 1
    new SmallStrokeCircle(bigCircles[0], r * 0.25, color('#FDCE23'), color('#0C63AD'), 40, true), //  circle 1

    new SmallStrokeCircle(bigCircles[1], r * 0.4, null, color('#D43E8E'), 40, true), //  circle 2
    new SmallStrokeCircle(bigCircles[1], r * 0.2, null, color('#879F88'), 25, true), //  circle 2
    new SmallStrokeCircle(bigCircles[1], r * 0.1, null, color('#EF3D29'), 15, true), //  circle 2

    new SmallStrokeCircle(bigCircles[2], r * 0.5, color('#D43E8E'), color('#879F87'), 40, true), //  circle 3
    new SmallStrokeCircle(bigCircles[2], r * 0.25, color('#FDCE23'), color('#0C63AD'), 40, true), //  circle 3
    new SmallStrokeCircle(bigCircles[2], r * 0.3, null, color('#BE479A'), 30, true), //  circle 3
    new SmallStrokeCircle(bigCircles[2], r * 0.3, null, color('#F05656'), 15, true), //  circle 3
    new SmallStrokeCircle(bigCircles[2], r * 0.09, null, color('#BE479A'), 30, true), //  circle 3
    new SmallStrokeCircle(bigCircles[2], r * 0.09, null, color('#F05656'), 15, true), //  circle 3

    new SmallStrokeCircle(bigCircles[3], r * 0.15, null, color('#DA70AC'), 30, true), //  circle 4

    new SmallStrokeCircle(bigCircles[4], r * 0.4, null, color('#F05641'), 15, true), // circle 5
    new SmallStrokeCircle(bigCircles[4], r * 0.3, null, color('#42A959'), 15, true), // circle 5
    new SmallStrokeCircle(bigCircles[4], r * 0.2, null, color('#F05641'), 15, true), // circle 5
    new SmallStrokeCircle(bigCircles[4], r * 0.1, null, color('#42A959'), 15, true), // circle 5

    new SmallStrokeCircle(bigCircles[5], r * 0.15, null, color('#DA70AC'), 30, true), //  circle 6

    new SmallStrokeCircle(bigCircles[6], r * 0.9, null, color('#F05641'), 10, true), //  circle 7
    new SmallStrokeCircle(bigCircles[6], r * 0.78, null, color('#F05641'), 20, true), //  circle 7

    new SmallStrokeCircle(bigCircles[7], r * 0.9, null, color('#DA70AC'), 10, true), //  circle 8
    new SmallStrokeCircle(bigCircles[7], r * 0.78, null, color('#D43E8E'), 20, true), //  circle 8
    
    new SmallStrokeCircle(bigCircles[8], r * 0.55, null, color('#F05641'), 15, true), // circle 9
    new SmallStrokeCircle(bigCircles[8], r * 0.45, null, color('#FFB6E3'), 10, true), // circle 9
    new SmallStrokeCircle(bigCircles[8], r * 0.35, null, color('#F05641'), 15, true), // circle 9
    new SmallStrokeCircle(bigCircles[8], r * 0.25, null, color('#FFB6E3'), 10, true), // circle 9

    new SmallStrokeCircle(bigCircles[9], r * 0.9, null, color('#DA70AC'), 10, true), //  circle 10
    new SmallStrokeCircle(bigCircles[9], r * 0.78, null, color('#D43E8E'), 20, true), //  circle 10

    new SmallStrokeCircle(bigCircles[10], r * 0.4, null, color('#D43E8E'), 40, true), //  circle 11
    new SmallStrokeCircle(bigCircles[10], r * 0.2, null, color('#879F88'), 25, true), //  circle 11
    new SmallStrokeCircle(bigCircles[10], r * 0.1, null, color('#EF3D29'), 15, true), //  circle 11

    new SmallStrokeCircle(bigCircles[11], r * 0.15, null, color('#DA70AC'), 30, true), //  circle 12

    new SmallStrokeCircle(bigCircles[12], r * 0.5, color('#D43E8E'), color('#199646'), 40, true), //  circle 13
    new SmallStrokeCircle(bigCircles[12], r * 0.25, color('#FDCE23'), color('#0C63AD'), 40, true), //  circle 13
    
    new SmallStrokeCircle(bigCircles[13], r * 0.5, color('#D43E8E'), color('#199646'), 40, true), //  circle 14
    new SmallStrokeCircle(bigCircles[13], r * 0.25, color('#FDCE23'), color('#0C63AD'), 40, true), //  circle 14

    new SmallStrokeCircle(bigCircles[14], r * 0.5, color('#D43E8E'), color('#879F87'), 40, true), //  circle 15
    new SmallStrokeCircle(bigCircles[14], r * 0.25, color('#FDCE23'), color('#0C63AD'), 40, true), //  circle 15
    new SmallStrokeCircle(bigCircles[14], r * 0.4, null, color('#BE479A'), 35, true), //  circle 15
    new SmallStrokeCircle(bigCircles[14], r * 0.4, null, color('#F05656'), 20, true), //  circle 15
    new SmallStrokeCircle(bigCircles[14], r * 0.2, null, color('#BE479A'), 35, true), //  circle 15
    new SmallStrokeCircle(bigCircles[14], r * 0.2, null, color('#F05656'), 20, true), //  circle 15
   
    
    new SmallStrokeCircle(bigCircles[15], r * 0.4, null, color('#F05641'), 15, true), // circle 16
    new SmallStrokeCircle(bigCircles[15], r * 0.3, null, color('#FFB6E3'), 10, true), // circle 16
    new SmallStrokeCircle(bigCircles[15], r * 0.2, null, color('#F05641'), 15, true), // circle 16
    new SmallStrokeCircle(bigCircles[15], r * 0.1, null, color('#FFB6E3'), 10, true), // circle 16
   
   
    
    new SmallStrokeCircle(bigCircles[1], r * 0.34, null, color('#F05641'), 15, false, true), //  circle 2
    new SmallStrokeCircle(bigCircles[1], r * 0.4, null, color('#F05641'), 10, false, true), //  circle 2

    new SmallStrokeCircle(bigCircles[3], r * 0.3, null, color('#D22C91'), 12, false, true), //  circle 4
    new SmallStrokeCircle(bigCircles[3], r * 0.2, null, color('#DDD64E'), 8, false, true), //  circle 4

    new SmallStrokeCircle(bigCircles[5], r * 0.3, null, color('#D22C91'), 12, false, true), //  circle 6
    new SmallStrokeCircle(bigCircles[5], r * 0.2, null, color('#DDD64E'), 8, false, true), //  circle 6


    new SmallStrokeCircle(bigCircles[10], r * 0.34, null, color('#F05641'), 15, false, true), //  circle 11
    new SmallStrokeCircle(bigCircles[10], r * 0.4, null, color('#F05641'), 10, false, true), //  circle 11

    new SmallStrokeCircle(bigCircles[11], r * 0.3, null, color('#D22C91'), 12, false, true), //  circle 12
    new SmallStrokeCircle(bigCircles[11], r * 0.2, null, color('#DDD64E'), 8, false, true), //  circle 12
  ];


}

class Circle {
  constructor(xScale, yScale, r, color) {
    this.xScale = xScale; 
    this.yScale = yScale; 
    this.originalR = r; 
    this.currentR = r; 
    this.targetR = r; 
    this.color = color;
  }

  display() {
    fill(this.color);
    noStroke();
    //x and y actual position are width*scale factors
    let x = width * this.xScale;
    let y = height * this.yScale;
    let distance = dist(mouseX, mouseY, x, y);
   
    if (distance < this.currentR / 2) {
      this.targetR = this.originalR / 1.2;
    } else {
      this.targetR = this.originalR;  
    }
   
    this.currentR = lerp(this.currentR, this.targetR, 0.1);
    ellipse(x, y, this.currentR);
    
  
  }
}

function keyPressed() {
  if (key === 'a' || key === 'A') {
   
    for (let circle of bigCircles) {
      circle.color = color(0);  
    }
  } else if (key === 'd' || key === 'D') {
  
    for (let i = 0; i < bigCircles.length; i++) {
      bigCircles[i].color = originalColors[i];
    }
  }
}

class kCircles {
    constructor(x, y, r, color){
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = color;
    this.currentStrokeWeight = kCircleStrokeWeight;
  }
  
    display(){
      noFill();
      stroke(this.color);

      if (mouseIsPressed) {
        this.currentStrokeWeight = lerp(this.currentStrokeWeight, kCircleTargetStrokeWeight, kCircleStrokeSpeed);
      } else {
        this.currentStrokeWeight = lerp(this.currentStrokeWeight, kCircleStrokeWeight, kCircleStrokeSpeed);
      }

      strokeWeight(this.currentStrokeWeight);
  
      //4 layers of dotted lines
      let layers = 4;
      for(let i = 1; i <= layers; i++){
        //smaller r value refers to more dense dotted lines
        let r = this.r + this.r * i/2;
  
        let x = width * this.x;
        let y = height * this.y;
        //adjust r to cater for the size of the circle
        //I failed to use any formula to calculate the r value
        //so I tried different values and r/7 is perfect
        let step = 0.7;
        for(let i = 0; i < TWO_PI; i += step){
          let x1 = x + cos(i) * (r/7);
          let y1 = y + sin(i) * (r/7);
          let x2 = x + cos(i + 0.15) * (r/7);
          let y2 = y + sin(i + 0.15) * (r/7);
  
          line(x1, y1, x2, y2);
      }
    }
  }
  
}


class SmallStrokeCircle {
    constructor(bigCircle, r, fillColor, strokeColor, strokeWeightVal, hasFill, isDashed = false) {
      this.bigCircle = bigCircle;
      this.originalR = r; 
      this.currentR = r;  
      this.targetR = r;    
      this.fillColor = fillColor;
      this.strokeColor = strokeColor; 
      this.strokeWeightVal = strokeWeightVal;
      this.hasFill = hasFill;
      this.isDashed = isDashed;
    }
  
    draw() {
      let x = width * this.bigCircle.xScale;
      let y = height * this.bigCircle.yScale;
      let distance = dist(mouseX, mouseY, x, y);
      
      if (distance < this.currentR / 2) {
        this.targetR = this.originalR * 1.2;
      } else {
        this.targetR = this.originalR;
      }
      
     
      this.currentR = lerp(this.currentR, this.targetR, 0.1);
  
      if (this.isDashed) {
          this.drawDashedCircle(x, y, this.currentR);
      } else {
          if (this.hasFill && this.fillColor) {
              fill(this.fillColor);
          } else {
              noFill();
          }
          stroke(this.strokeColor);
          strokeWeight(this.strokeWeightVal);
          ellipse(x, y, this.currentR);
        }
    }
    drawDashedCircle(x, y, diameter) {
        let numDashes = 20; // Number of dashes in the circle
        let angleStep = TWO_PI / numDashes;
        let gapRatio = 0.7; // Ratio of gap size to total segment size (adjust this to change spacing)
        stroke(this.strokeColor);
        strokeWeight(this.strokeWeightVal);
        strokeCap(ROUND); // Makes the ends of dashes rounded
    
      for (let i = 0; i < numDashes; i++) {
        let angle = i * angleStep;
        let x1 = x + cos(angle) * diameter / 2;
        let y1 = y + sin(angle) * diameter / 2;
        let x2 = x + cos(angle + angleStep * (1 - gapRatio)) * diameter / 2;
        let y2 = y + sin(angle + angleStep * (1 - gapRatio)) * diameter / 2;
        line(x1, y1, x2, y2);
      }
    }
}

function drawDotsAroundCircle(circle, dotSizeFactor) {
  let dotRadius1 = circle.originalR / 3; // outer circle radius
  let dotRadius2 = circle.originalR / 2.4; // further outer circle radius
  
  let numDots = 20; // Number of dots in each circle
  let angleStep = TWO_PI / numDots;
  
  let x = width * circle.xScale;
  let y = height * circle.yScale;
  
  // Draw the first layer of dots
  for (let i = 0; i < numDots; i++) {
    let angle = i * angleStep;
    let x1 = x + cos(angle) * dotRadius1;
    let y1 = y + sin(angle) * dotRadius1;
    fill('#fabd4d');
    noStroke();
    ellipse(x1, y1, 7 * dotSizeFactor); 
  }

  // Draw the second layer of dots
  for (let i = 0; i < numDots; i++) {
    let angle = i * angleStep;
    let x1 = x + cos(angle) * dotRadius2;
    let y1 = y + sin(angle) * dotRadius2;
    fill('#fabd4d');
    noStroke();
    ellipse(x1, y1, 7 * dotSizeFactor);
  }
}


function drawDotsAroundCircle2(circle, dotSizeFactor) {
  let dotRadius3 = circle.originalR / 3.2; // outer circle radius
  let dotRadius4 = circle.originalR / 2.4; // further outer circle radius
  let dotRadius5 = circle.originalR / 2; // further outer circle radius
  
  let numDots = 20; // Number of dots in each circle
  let angleStep = TWO_PI / numDots;
  
  let x2 = width * circle.xScale;
  let y2 = height * circle.yScale;
  
  // Draw the first layer of dots
  for (let i = 0; i < numDots; i++) {
    let angle = i * angleStep;
    let x1 = x2 + cos(angle) * dotRadius3;
    let y1 = y2 + sin(angle) * dotRadius3;
    fill(255);
    noStroke();
    ellipse(x1, y1, 5 * dotSizeFactor); 
  }

  // Draw the second layer of dots
  for (let i = 0; i < numDots; i++) {
    let angle = i * angleStep;
    let x1 = x2 + cos(angle) * dotRadius4;
    let y1 = y2 + sin(angle) * dotRadius4;
    fill(255);
    noStroke();
    ellipse(x1, y1, 5 * dotSizeFactor);
  }

  // Draw the second layer of dots
  for (let i = 0; i < numDots; i++) {
    let angle = i * angleStep;
    let x1 = x2 + cos(angle) * dotRadius5;
    let y1 = y2 + sin(angle) * dotRadius5;
    fill(255);
    noStroke();
    ellipse(x1, y1, 5 * dotSizeFactor);
  }
}
    

function draw() {
  background(255); 

  // Draw big circles
  for (let circle of bigCircles) {
    circle.display();
  }

  // Draw small stroke circles on top
  for (let smallCircle of smallStrokeCircles) {
    smallCircle.draw();
  }

  //draw the dottedline circles
  for(let kcircles of kCircle) {
    kcircles.currentStrokeWeight = lerp(kcircles.currentStrokeWeight, kCircleTargetStrokeWeight, kCircleStrokeSpeed);
    kcircles.display();
  }

  
  
  drawDotsAroundCircle(bigCircles[0], dotSizeFactor);

  // Add white dots around bigCircles[4] (the fifth circle) in two layers
  drawDotsAroundCircle(bigCircles[4], dotSizeFactor);

  // Add white dots around bigCircles[14] (the fifteenth circle) in two layers
  drawDotsAroundCircle(bigCircles[14], dotSizeFactor);

  drawDotsAroundCircle2(bigCircles[1], dotSizeFactor);

  drawDotsAroundCircle2(bigCircles[10], dotSizeFactor);

  drawDotsAroundCircle2(bigCircles[12], dotSizeFactor);

  dotSizeFactor = lerp(dotSizeFactor, targetDotSizeFactor, 0.1);

 
  
}

function mousePressed() {
  targetDotSizeFactor = 4; // Target size to shrink to 50% of original size
}

// When the mouse is released, restore the size of the dots
function mouseReleased() {
  targetDotSizeFactor = 2; // Target size to restore to 100% of original size
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

