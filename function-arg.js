var mul = function()
{
	var result = 1;
        for( i = arguments.length - 1; i >= 0; i-- )
	{
	 result = result * arguments[i];
	}
	return result;
}
console.log(mul(2,3,5,7));