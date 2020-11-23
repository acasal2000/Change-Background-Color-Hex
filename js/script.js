
var button = document.getElementById("changeColorBtn");
var body = document.querySelector("body");
var hexColor = document.getElementById("hexColor");

const colors = ["#fcba03", "#70633d", "#9466d9", "#cec3de", "#c3d9de", "#53cae6", "#53e69f", "#03ab5a"];


function changeColor(){

    var colorIndex = parseInt(Math.random()*colors.length);
    
    body.style.backgroundColor = colors[colorIndex];
    hexColor.innerHTML = "HEX: " + colors[colorIndex];
}