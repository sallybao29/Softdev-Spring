console.log("Loaded");

var pic = document.getElementById("vimage");
var stop = document.getElementById("stop");
var circle = document.getElementById("circle");
var intervalID;


var stopIt = function(){
		window.clearInterval(intervalID);
};


var grow = function(){
		var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
		c.setAttribute("cx", 250);
		c.setAttribute("cy", 250);
		c.setAttribute("fill", "red");
		c.setAttribute("r", 0);
		pic.appendChild(c);
		var radius = 0;
		var expanding = true;

		var animateCode = function(){
				var a = document.getElementsByTagName("circle")[0];
				radius = parseInt(a.getAttribute("r"));
				if (expanding)
						radius += 2;
				else 
						radius -= 2;
				
				if (radius <= 0)
						expanding = true;
				if (radius >= 250)
						expanding = false;

				a.setAttribute("r", radius.toString());
		};
		intervalID = window.setInterval(animateCode, 16);
};

circle.addEventListener("click", grow);
stop.addEventListener("click", stopIt);



