var greeting = "";
var highScore = 20;
var harley = ["nagaraj", "sai", "vandhu", "navya", "pandu", "bharat", "hari"]
var i=0;
while (i < 7)
{
greeting += "<br> your new score is " + i;
i++;
}
document.getElementById("test").innerHTML = greeting;