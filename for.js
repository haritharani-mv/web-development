var greeting = "";
var highScore = 20;
var harley = ["nagaraj", "sai", "vandhu", "navya", "pandu", "bharat", "hari"]
var i;
for (i = 0; i< harley.length; i++)
{
greeting += harley[i] + "<br>";
}
document.getElementById("test").innerHTML = greeting;