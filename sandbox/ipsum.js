console.log("Loaded");

d3.selectAll("p")
    .data([12, 16, 18])
    .style("font-size", function(d){return d + "px";});
