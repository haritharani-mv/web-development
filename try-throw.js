function myError()
{
var x,msg;
msg = document.getElementById("msg");
msg.innerHTML = "";
x = getElementById("some").value;
try
{
if (x == "") throw "enter a number";
if (x = isNaN(x)) throw "please enter a number";
if (x < 4) throw "enter a num greater than 3";
}
catch(err)
{
msg.innerHTML = "error is" + err;
}
finally
{ 
document.getElementById("some").value = "";
}
}