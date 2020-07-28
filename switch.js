var myAccount = "";
var highScore = 100;
var myScore = 200;
switch (highScore)
{
case 0:
	myAccount = "sunday: sunday is holiday for us";
	break;
case 1:
	myAccount = "monday: very bad...today clg is there";
	//break;
case 2:
	myAccount = "tuesday: let's chill with family";
	//break;
case 3:
	myAccount = "wed: enjoy with u r frds";
	//break;
case 4:
	myAccount = "thursday: let's take a vacation";
	break;
default:
	myAccount = "hey! enter correct number"
	break;
}


document.getElementById("test").innerHTML = myAccount;