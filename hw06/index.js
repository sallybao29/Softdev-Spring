console.log("loaded");

var data = [{'state': 'Alabama', 'total': 50, 'allotted': 50},
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


var foo = d3.scale.linear()
    .domain([0, 172])
    .range([0, window.innerWidth - 250]);

var tr = d3.select(".chart")
    .selectAll("tr")
    .data(data)
    .enter().append("tr");

tr.append("td")
    .attr("class", "state")
    .html(function(d){ return d.state });

var bars = tr.append("td")
    .attr("class", "stats")
    .append("div")
    .style("background-color", function(d){
	if (d.allotted > 0) return "steelblue"; else return "gray"; })
    .text(function(d){ return d.total; });

bars.transition()
    .duration(1500)
    .style("width", function(d){ return foo(d.total) + "px"; });
   
