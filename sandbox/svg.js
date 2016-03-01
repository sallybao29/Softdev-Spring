console.log("Loaded");

var pic = document.getElementById("vimage");

var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");

c.setAttribute("cx", 0);
c.setAttribute("cy", 0);
c.setAttribute("r", "100");
c.setAttribute("fill", "red");
c.setAttribute("stroke", "green");

pic.appendChild(c);


var change = function(e){
    e.preventDefault();
    this.setAttribute("fill", "green");
};

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

var clicked = function(e){
    if (e.toElement == this){
	drawDot(e.offsetX, e.offsetY);
    }
};

pic.addEventListener("click", clicked);
