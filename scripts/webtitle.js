var time
var origin=document.title
document.addEventListener('visibilitychange',function()
{
	if (document.hidden)
	{
		document.title='你不要我了么？=7='
		clearTimeout(time)
	}
	else
	{
		document.title='我喜欢你啊❤'
		time=setTimeout(function()
		{
			document.title=origin
		},2000)
	}
})