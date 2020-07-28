var greeting = "";
var highScore = 20;
var harley = { firstName : "hari", 
	       lastName : "mannem", 
               bdy : "sep6", 
	       fullName : function() {
               		return this.firstName +  "-" + this.lastName;
               }
	     }

function multiplication (num1, num2, num3)
{
	return num1*num2*num3
}

document.getElementById("test").innerHTML = harley.fullName();