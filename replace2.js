var str = "APPLE apple APPLE Apple  ApPlE";
var txt = str.replace(/apple/i,"google");
document.getElementById("test").innerHTML = txt;