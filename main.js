var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

//x and y for character
charX = 10
charY = 10

//makes a square
function square(linewidth, strokeColor, x, y, size){
    context.beginPath();
    context.lineWidth = linewidth;
    context.strokeStyle = strokeColor;
    context.rect(x, y, size, size);
    context.stroke();
}

//clear canvas
function clearCanvas(){
    context.clearRect(0, 0, canvas.width, canvas.height);
}

square(5, "blue", charX, charY, 20)

//timed loop for movement
var timer = setInterval(moveForward, 100);
function moveForward(){
    charX += 10;
    updateFrame();
    if(charX == 220){
        clearInterval(timer)
        timer = setInterval(moveBackwards, 100);
    }
}
function moveBackwards(){
    charX -= 10;
    updateFrame();
    if(charX == 0){
        clearInterval(timer)
        timer = setInterval(moveForward, 100);
    }
}

updateFrame();

function updateFrame(){
  clearCanvas();
  square(5, "blue", charX, charY, 20)
}