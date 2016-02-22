console.log("Loaded");

var c = document.getElementById("playground");
var ctx = c.getContext("2d");

ctx.strokeStyle = "#000000";
ctx.fillStyle = "#ff0000";
ctx.strokeRect(0, 0, 538, 538);

ctx.beginPath();

/*Connect the current point with the previous one*/
var connect = function(e){
    e.preventDefault();
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(e.offsetX, e.offsetY, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
};

/*Clear drawings from canvas*/
var clear = function(e){
    e.preventDefault();
    ctx.clearRect(0, 0, 538, 538);
    ctx.strokeRect(0, 0, 538, 538);
    ctx.beginPath();
};


c.addEventListener("click", connect);

var button = document.getElementById("clear");
button.addEventListener("click", clear);
