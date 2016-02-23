/*
	Sally Bao
	Softdev2 pd6
	HW#1a - Canvas
	2016-02-10
*/

var c = document.getElementById("ftb2maga");
var ctx = c.getContext("2d");

//Sets the color to fill the shape
ctx.fillStyle = "#FF0000";

//Sets the color of the line stroke
ctx.strokeStyle = "#ffcccc";

for (var i = 0; i < 5; i++){
		for(var j = 0; j < 5; j++){
				//fills in a rectangle at position x, y of size width * height
				ctx.fillRect(i * 100, j * 100, 75, 75);
				
				//outlines a rectangle at position x, y of size width * height
				ctx.strokeRect(i * 100 + 10, j * 100 + 10, 55, 55);
		}
}

ctx.strokeStyle = "#ff9980";
ctx.fillStyle = "#ff9980";

//Start plotting points
ctx.beginPath();

//Move the starting point 
ctx.moveTo(475, 0);

//Create a line from the starting point to point a, b
ctx.lineTo(300, 0);
ctx.lineTo(475, 175);
ctx.lineTo(475, 0);

//Draw the lines in the path
ctx.stroke();

//Fill in the areas enclosed by lines 
ctx.fill();

//Stop plotting points
ctx.closePath();


ctx.strokeStyle = "#000000";
ctx.fillStyle = "#000000";
ctx.beginPath();

//Draw an arc at point a, b with a certain radius
//Indicate the start and end angle in radians
ctx.arc(200, 200, 125, 0, Math.PI * 2);
ctx.stroke();
ctx.fill();

ctx.fillStyle = "#ff9980";

//Set the font style
ctx.font = "30px arial";

//Draw the text at a certain coordinate
ctx.fillText("Hello World", 150, 250);
ctx.closePath();
