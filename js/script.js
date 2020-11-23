
var button = document.getElementById("changeColorBtn");
var body = document.querySelector("body");
var hexColor = document.getElementById("hexColor");

const hexValues = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];



function changeColor(){
    let hex = "#";

    for(let i = 0; i < 6; i ++){
        const colorIndex = Math.floor(Math.random()*hexValues.length);
        hex += hexValues[colorIndex];
    }
    hexColor.innerHTML = "HEX: " + hex;
    body.style.backgroundColor = hex;
}