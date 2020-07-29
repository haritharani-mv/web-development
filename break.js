var greeting = "";
var highScore = 20;
var harley = ["nagaraj", "sai", "vandhu", "navya", "pandu", "bharat", "hari"]
var i;
for (i = 0; i< 20; i++)
{
if(i==15)
{
continue;
}
greeting += "<br> the new number is " + i ;
}
document.getElementById("test").innerHTML = greeting;