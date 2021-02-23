var time
var origin=document.title
document.addEventListener('visibilitychange',function()
{
	if (document.hidden)
	{
		document.title='2021加油鸭！'
		clearTimeout(time)
	}
	else document.title=origin
})