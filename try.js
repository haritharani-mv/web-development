try
{
aleert("hello user");
}
catch(err)
{
document.getElementById("test").innerHTML = err.message;
}
