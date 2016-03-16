console.log("Loaded");

d3.selectAll("p")
    .data([14, 16, 18])
    .style("font-size", function(d){return d + "px";});
