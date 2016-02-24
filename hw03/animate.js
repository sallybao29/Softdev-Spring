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
		ctx.clearRect(1, 1, c.width - 2, c.height - 2);
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
    ctx.arc(c.width / 2, c.height / 2, radius, 0, Math.PI * 2);
    ctx.fill();

    requestId = window.requestAnimationFrame(animateCircle);
};

var stopCircle = function stopCircle(){
    window.cancelAnimationFrame(requestId);
};

var logo = new Image();
logo.src = "logo_dvd.jpg";
var x = 200;
var y = 200;
var dx = 1;
var dy = 1;
var logoWidth = 90;
var logoHeight = 60;

var moveDVD = function moveDVD(){
		ctx.clearRect(1, 1, c.width - 2, c.height - 2);
		if (typeof requestId != undefined)
				stopCircle();
  
    x += dx;
    y += dy;

    if (x - logoWidth / 2 == 1)
				dx = 1;
		if (x + logoWidth / 2 == c.width - 1)
				dx = -1;
		if (y - logoHeight / 2 == 1)
				dy = 1;
		if (y + logoHeight / 2 == c.height - 1)
				dy = -1;

		ctx.drawImage(logo, x-logoWidth/2, y-logoHeight/2, logoWidth, logoHeight);
		requestId = window.requestAnimationFrame(moveDVD);
    
};

var button = document.getElementById("circle");
button.addEventListener("click", animateCircle);

var stop = document.getElementById("stop");
stop.addEventListener("click", stopCircle);

var dvd = document.getElementById("dvd");
dvd.addEventListener("click", moveDVD);
