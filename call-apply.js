var doSomething() = function(work)
{
	console.log(work);
        console.log(this.hari);
}
doSomething("pushups")
var exercise = {hari : "98", anu : "94"};
doSomething.call(exercise, exercise.anu);
doSomething.apply(exercise,['crunches']);
