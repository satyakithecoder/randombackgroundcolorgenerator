 let arr_color = ["blue", "red", "black", "green", "yellow", "chartreuse", "cyan"];
 function randomcolor(){
    var randomColor = arr_color[Math.floor(Math.random() * arr_color.length)];
    document.getElementById("para").innerHTML = "Color:" + randomColor;
    document.getElementById("body").style.backgroundColor = randomColor;
 }