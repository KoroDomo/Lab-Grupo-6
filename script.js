
var x = document.getElementById("topnav");
var y = x.getElementsByClassName("menu");

for (var i = 0; i < y.length; i++) {
    y[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    });
}
