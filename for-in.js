var greeting = "";
var highScore = 20;
var harley = ["nagaraj", "sai", "vandhu", "navya", "pandu", "bharat", "hari"]
var i;
for (i in harley)
{
greeting += harley[i] + "<br>";
}
document.getElementById("test").innerHTML = greeting;