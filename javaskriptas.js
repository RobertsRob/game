function fv1 () {
document.getElementById("1").style.visibility = "visible";
}
function fv2 () {
document.getElementById("2").style.visibility = "visible";
}
function fv3 () {
document.getElementById("3").style.visibility = "visible";
}
function fh1 () {
document.getElementById("1").style.visibility = "hidden";
document.getElementById("gtp").style.visibility = "hidden";
document.getElementById("n").style.visibility = "hidden";
}
function fh2 () {
document.getElementById("2").style.visibility = "hidden";
}
function fh3 () {
document.getElementById("3").style.visibility = "hidden";
}
function en () {
var user = document.getElementById("ser").value
var psw = document.getElementById("psw").value
if (user == "Roberts" && psw == "123") document.getElementById("gtp").style.visibility = "visible";
if (user == "Roberts" && psw == "123") document.getElementById("n").style.visibility = "hidden";
if (user == "Roberts" && psw == "123") document.getElementById("n").style.fontSize = 0;
else document.getElementById("n").style.visibility = "visible";
}
