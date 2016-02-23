console.log("Loaded");

var c = document.getElementById("playground");
var ctx = c.getContext("2d");
var expanding = true;
var radius = 0;
var requestId;

ctx.strokeStyle = "#000000";
ctx.fillStyle = "#ff0000";
ctx.strokeRect(0, 0, 538, 538);

var animateCircle = function animateCircle(){
    if (typeof requestId != undefined)
	stopCircle();
    if (expanding)
	radius += 2;
    else 
	radius -= 2;
    
    if (radius <= 0)
	expanding = true;
    if (radius >= (c.width / 2))
	expanding = false;

    ctx.beginPath();
    ctx.clearRect(1, 1, c.width - 2, c.height - 2);
    ctx.arc(c.width / 2, c.height / 2, radius, 0, Math.PI * 2);
    ctx.fill();

    requestId = window.requestAnimationFrame(animateCircle);
};

var stopCircle = function stopCircle(){
    window.cancelAnimationFrame(requestId);
};

var logo = new Image();
logo.src = "logo_dvd.jpg";
var x = c.width / 2;
var y = c.height / 2;
var dx = 1;
var dy = 1;

var moveDVD = function moveDVD(){
    /*
  if (typeof requestId != undefined)
	stopCircle();
    */
    x += dx;
    y += dy;

    if (x == 0)
	dx = 1;
    if (x == c.width)
	dx = -1;
    if (y == 0)
	dy = 0;

    ctx.drawImage(logo, x, y, 100, 100);
    
};

var button = document.getElementById("circle");
button.addEventListener("click", animateCircle);

var stop = document.getElementById("stop");
stop.addEventListener("click", stopCircle);

var dvd = document.getElementById("dvd");
dvd.addEventListener("click", moveDVD);
/*
  window.cancelAnimationFrame
  var logo = new Image();
  logo.src = 'filename';
  ctx.drawImage(logo, x, y, w, h);
*/
