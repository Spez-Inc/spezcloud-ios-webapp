//(C) 2018 Spez Inc.

var standdiv = document.getElementById("standlone");
var nostanddiv = document.getElementById("nostandlone");
standdiv.style.display = "none";
nostanddiv.style.display = "none";

if (
    ("standalone" in window.navigator) &&
    !window.navigator.standalone
    ){
	standdiv.style.display = "block";
	location.replace("https://kmu.files.cnow.at/login?redirect_url=/apps/files/");
} else {
    nostanddiv.style.display = "block";
}