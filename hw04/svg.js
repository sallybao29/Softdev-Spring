console.log("Loaded");

var pic = document.getElementById("vimage");
var stop = document.getElementById("stop");
var intervalID;

var drawDot = function(x, y){
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", x);
    c.setAttribute("cy", y);
    c.setAttribute("r", "50");
    c.setAttribute("fill", "red");
    c.setAttribute("stroke", "black");
    c.addEventListener("click", change);
    pic.appendChild(c);
};


var stop = function(){

};

var grow = function(){
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    var radius = 20;

    var animateCode = function(){
	c = document.getElementsByTagName("circle")[0];
	//increment radius
	radius = parseInt(c.getAttribute("r"));
	c.setAttribute("r", radius.toString());
    };
    intervalID = window.setInterval(animateCode, 16);
};

//pic.addEventListener("click", clicked);



