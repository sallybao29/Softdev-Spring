console.log("loaded");

var rep = [{'state': 'Alabama', 'total': 50, 'allotted': 50},
					 {'state': 'Alaska', 'total': 28, 'allotted': 28},
					 {'state': 'Arizona', 'total': 58, 'allotted': 0},
					 {'state': 'Arkansas', 'total': 40, 'allotted': 39},
					 {'state': 'California', 'total': 172, 'allotted': 0},
					 {'state': 'Colorado', 'total': 37, 'allotted': 0},
					 {'state': 'Connecticut', 'total': 28, 'allotted': 0},
					 {'state': 'Delaware', 'total': 16, 'allotted': 0},
					 {'state': 'District of Columbia', 'total': 19, 'allotted': 19},
					 {'state': 'Florida', 'total': 99, 'allotted': 99},
					 {'state': 'Georgia', 'total': 76, 'allotted': 72},
					 {'state': 'Hawaii', 'total': 19, 'allotted': 19},
					 {'state': 'Idaho', 'total': 32, 'allotted': 32},
					 {'state': 'Illinois', 'total': 69, 'allotted': 67},
					 {'state': 'Indiana', 'total': 57, 'allotted': 0},
					 {'state': 'Iowa', 'total': 30, 'allotted': 23},
					 {'state': 'Kansas', 'total': 40, 'allotted': 40},
					 {'state': 'Kentucky', 'total': 46, 'allotted': 46},
					 {'state': 'Louisiana', 'total': 46, 'allotted': 46},
					 {'state': 'Maine', 'total': 23, 'allotted': 23},
					 {'state': 'Maryland', 'total': 38, 'allotted': 0},
					 {'state': 'Massachusetts', 'total': 42, 'allotted': 42},
					 {'state': 'Michigan', 'total': 59, 'allotted': 59},
					 {'state': 'Minnesota', 'total': 38, 'allotted': 38},
					 {'state': 'Mississippi', 'total': 40, 'allotted': 37},
					 {'state': 'Missouri', 'total': 52, 'allotted': 40},
					 {'state': 'Montana', 'total': 27, 'allotted': 0},
					 {'state': 'Nebraska', 'total': 36, 'allotted': 0},
					 {'state': 'Nevada', 'total': 30, 'allotted': 28},
					 {'state': 'New Hampshire', 'total': 23, 'allotted': 20},
					 {'state': 'New Jersey', 'total': 51, 'allotted': 0},
					 {'state': 'New Mexico', 'total': 24, 'allotted': 0},
					 {'state': 'New York', 'total': 95, 'allotted': 0},
					 {'state': 'North Carolina', 'total': 72, 'allotted': 71},
					 {'state': 'North Dakota', 'total': 28, 'allotted': 0},
					 {'state': 'Ohio', 'total': 66, 'allotted': 66},
					 {'state': 'Oklahoma', 'total': 43, 'allotted': 40},
					 {'state': 'Oregon', 'total': 28, 'allotted': 0},
					 {'state': 'Pennsylvania', 'total': 71, 'allotted': 0},
					 {'state': 'Puerto Rico', 'total': 23, 'allotted': 23},
					 {'state': 'Rhode Island', 'total': 19, 'allotted': 0},
					 {'state': 'South Caroline', 'total': 50, 'allotted': 50},
					 {'state': 'South Dakota', 'total': 29, 'allotted': 0},
					 {'state': 'Tennessee', 'total': 58, 'allotted': 58},
					 {'state': 'Texas', 'total': 155, 'allotted': 155},
					 {'state': 'Utah', 'total': 40, 'allotted': 0},
					 {'state': 'Vermont', 'total': 16, 'allotted': 16},
					 {'state': 'Virginia', 'total': 49, 'allotted': 46},
					 {'state': 'Washington', 'total': 44, 'allotted': 0},
					 {'state': 'West Virginia', 'total': 34, 'allotted': 0},
					 {'state': 'Wisconsin', 'total': 42, 'allotted': 0},
					 {'state': 'Wyoming', 'total': 29, 'allotted': 11}];


var dem = [{'state': 'Alabama', 'total': 60, 'allotted': 53},
					 {'state': 'Alaska', 'total': 20, 'allotted': 0},
					 {'state': 'Arizona', 'total': 85, 'allotted': 0},
					 {'state': 'Arkansas', 'total': 37, 'allotted': 32},
					 {'state': 'California', 'total': 548, 'allotted': 0},
					 {'state': 'Colorado', 'total': 78, 'allotted': 66},
					 {'state': 'Connecticut', 'total': 71 , 'allotted': 0},
					 {'state': 'Delaware', 'total': 31, 'allotted': 0},
					 {'state': 'District Of Columbia', 'total': 46, 'allotted': 0},
					 {'state': 'Florida', 'total': 246, 'allotted': 214},
					 {'state': 'Georgia', 'total': 117, 'allotted': 102},
					 {'state': 'Hawaii', 'total': 35, 'allotted': 0},
					 {'state': 'Idaho', 'total': 27, 'allotted': 0},
					 {'state': 'Illinois', 'total': 182, 'allotted': 156},
					 {'state': 'Indiana', 'total': 92, 'allotted': 0},
					 {'state': 'Iowa', 'total': 52, 'allotted': 44},
					 {'state': 'Kansas', 'total': 37, 'allotted': 33},
					 {'state': 'Kentucky', 'total': 60, 'allotted': 0},
					 {'state': 'Louisiana', 'total': 59, 'allotted': 51},
					 {'state': 'Maine', 'total': 30, 'allotted': 25},
					 {'state': 'Maryland', 'total': 118, 'allotted': 0},
					 {'state': 'Massachusetts', 'total': 116, 'allotted': 91},
					 {'state': 'Michigan', 'total': 147, 'allotted': 130},
					 {'state': 'Minnesota', 'total': 93, 'allotted': 77},
					 {'state': 'Mississippi', 'total': 41, 'allotted': 36},
					 {'state': 'Missouri', 'total': 84, 'allotted': 71},
					 {'state': 'Montana', 'total': 27, 'allotted': 0},
					 {'state': 'Nebraska', 'total': 30, 'allotted': 25},
					 {'state': 'Nevada', 'total': 43, 'allotted': 35},
					 {'state': 'New Hampshire', 'total': 32, 'allotted': 24},
					 {'state': 'New Jersey', 'total': 142, 'allotted': 0},
					 {'state': 'New Mexico', 'total': 43, 'allotted': 0},
					 {'state': 'New York', 'total': 291, 'allotted': 0},
					 {'state': 'North Carolina', 'total': 121, 'allotted': 107},
					 {'state': 'North Dakota', 'total': 23, 'allotted': 0},
					 {'state': 'Ohio', 'total': 160, 'allotted': 143},
					 {'state': 'Oklahoma', 'total': 42, 'allotted': 38},
					 {'state': 'Oregon', 'total': 74, 'allotted': 0},
					 {'state': 'Pennsylvania', 'total': 210, 'allotted': 0},
					 {'state': 'Rhode Island', 'total': 33, 'allotted': 0},
					 {'state': 'South Carolina', 'total': 59, 'allotted': 53},
					 {'state': 'South Dakota', 'total': 25, 'allotted': 0},
					 {'state': 'Tennessee', 'total': 75, 'allotted': 67},
					 {'state': 'Texas', 'total': 251, 'allotted': 222},
					 {'state': 'Utah', 'total': 37, 'allotted': 0},
					 {'state': 'Vermont', 'total': 26, 'allotted': 16},
					 {'state': 'Virginia', 'total': 109, 'allotted': 95},
					 {'state': 'Washington', 'total': 118, 'allotted': 0},
					 {'state': 'West Virginia', 'total': 37, 'allotted': 0},
					 {'state': 'Wisconsin', 'total': 96, 'allotted': 0},
					 {'state': 'Wyoming', 'total': 18, 'allotted': 0}];

var repDel = [2472, 1408, 1064];
var demDel = [4763, 2006, 2757];

var data = rep;

var foo = d3.scale.linear()
    .domain([0, 580])
    .range([0, window.innerWidth - 250]);

var makeChart = function(clicked){
		var tr;
		var delegates;
		if (!clicked){
				tr = d3.select(".chart")
						.selectAll("tr")
						.data(data)
						.enter().append("tr");

				tr.append("td")
						.attr("class", "state")
						.html(function(d){ return d.state });

				tr.append("td")
						.attr("class", "stats")
						.append("div")
						.style("background-color", function(d){
								if (d.allotted > 0) return "steelblue"; else return "gray"; })
						.text(function(d){ return d.total; })
						.transition()
						.duration(1500)
						.style("width", function(d){ return foo(d.total) + "px"; });
		}
		else {
				if (data === rep){
						data = dem;
						delegates = repDel;
						d3.select("img").attr("src", "demLogo.png");
				}
				else {
						data = rep;
						delegates = demDel;
						d3.select("img").attr("src", "repLogo.png");
				}
				
				d3.select("#logo").selectAll("div").data(delegates)
						.text(function(d){
								return d + " " + d3.select(this).attr("id"); });
				
				tr = d3.select(".chart")
						.selectAll("tr")
						.data(data)
						.select("[class=stats]").select("div")
						.text(function(d){ return d.total; })
						.style("background-color", function(d){
								if (d.allotted > 0) return "steelblue";
								else return "gray"; })
						.transition()
						.duration(1500)
						.style("width", function(d){ return foo(d.total) + "px"; });
		}
}

makeChart(false);

d3.select(".chart").on("click", function(){
		makeChart(true);
});
