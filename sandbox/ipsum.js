console.log("Loaded");

d3.selectAll("p")
    .data([14, 16, 18])
    .style("font-size", function(d){return d + "px";});

d3.selectAll("p").style("color", function(){
    return "hsl(" + Math.random() * 360 + ", 100%, 50%)";
});
