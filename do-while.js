var greeting = "";
var highScore = 20;
var harley = ["nagaraj", "sai", "vandhu", "navya", "pandu", "bharat", "hari"]
var i=10;
do
{
greeting += "<br> your new score is " + i;
i++;
} while (i < 7);
document.getElementById("test").innerHTML = greeting;