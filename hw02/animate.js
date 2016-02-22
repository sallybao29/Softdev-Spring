console.log("Loaded");

var c = document.getElementById("playground");
var ctx = c.getContext("2d");
var expanding = true;
var radius = 0;

ctx.strokeStyle = "#000000";
ctx.fillStyle = "#ff0000";
ctx.strokeRect(0, 0, 538, 538);

ctx.beginPath();
//ctx.moveTo(c.width / 2, c.height / 2);

var animateCircle = function animateCircle(e){
    e.preventDefault();
    if (expanding)
	radius += 1;
    else 
	radius -= 1;

    if (radius == 0)
	expanding = true;
    if (radius == (c.width / 2))
	expanding = false;

    ctx.arc(c.width / 2, c.height / 2, radius, 0, Math.PI * 2);
    ctx.fill();

    window.requestAnimationFrame(animateCircle);
};


var button = document.getElementById("circle");
button.addEventListener("click", animateCircle);

