var myAccount = "";
var myScore = 100;
var highScore = "100";
if (myScore > highScore)
{
myAccount = "this prints only if statement";
}
else if (myScore === highScore)
{
myAccount = "this prints only if-else statement";
}
else
{
myAccount = "this is only else statement";
}

document.getElementById("test").innerHTML = myAccount;