background(89, 216, 255);

var centerX = 200;
var centerY = 100;
var bodyLength = 118;
var bodyHeight = 74;
var bodyColor = color(162, 0, 255);
var tailWidth = bodyLength/4;
var tailHeight = bodyHeight/2;
var bubbleSize = 20;
var weedX = 100;
var weedY = 300;
var weedWidth = 20;
var weedHeight = 100;


var drawFish = function(centerX, centerY, bodyLength,bodyHeight, bodyColor, tailWidth, tailHeight){
    noStroke();
    fill(bodyColor);
    // body
    ellipse(centerX, centerY, bodyLength, bodyHeight);
    // tail
    triangle(centerX-bodyLength/2, centerY,
             centerX-bodyLength/2-tailWidth, centerY-tailHeight,
             centerX-bodyLength/2-tailWidth, centerY+tailHeight);
    // eye
    fill(33, 33, 33);
    ellipse(centerX+bodyLength/4, centerY, bodyHeight/5, bodyHeight/5);
         
};       

var drawSeaWeed = function(weedX, weedY, weedWidth, weedHeight){
    fill(0,255,100);
    rect (weedX,weedY,weedWidth,weedHeight);
};


drawFish(centerX,centerY, bodyLength, bodyHeight +20, bodyColor - 300, tailWidth +10, tailHeight +20);
drawFish(centerX - 50, centerY + 200, bodyLength, bodyHeight +50, bodyColor, tailWidth+ 50, tailHeight +10 );
drawFish();

drawSeaWeed(weedX, weedY, weedWidth, weedHeight);
drawSeaWeed(weedX + 50, weedY - 50, weedWidth, weedHeight + 50);
drawSeaWeed (weedX + 100, weedY + 20, weedWidth, weedHeight - 20);
drawSeaWeed (weedX + 150, weedY - 70, weedWidth, weedHeight +70);
drawSeaWeed(weedX + 200, weedY -30, weedWidth, weedHeight+30);

mouseClicked = function() {
    fill(255, 255, 255);
    ellipse(mouseX,mouseY,bubbleSize,bubbleSize);

};
