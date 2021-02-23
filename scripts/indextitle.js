var time
var origin=document.title
document.addEventListener('visibilitychange',function()
{
	if (document.hidden)
	{
		document.title='你不要我了么？=7='
		clearTimeout(time)
	}
	else document.title=origin
})