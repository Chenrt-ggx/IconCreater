$(document).ready(function()
{
	$('#button_img').click(function()
	{
		$('#change').click()
	})
})
$(document).ready(function()
{
	$('#img_down').click(function()
	{
		$('#button_down').click()
	})
})
var c=document.getElementById('myCanvas')
var ctx=c.getContext('2d')
var change=document.getElementById('change')
var img1=new Image()
var img2=new Image()
var img3=new Image()
var timestamp=new Date().getTime()
img2.crossOrigin="Anonymous"
img2.src="images/version1.png"+'?'+timestamp
timestamp=new Date().getTime()
img3.crossOrigin="Anonymous"
img3.src="images/welcome.jpg"+'?'+timestamp
change.onchange=function(event)
{
	var file=event.target.files[0]
	var url=window.URL.createObjectURL(file)
	img1.src=url
}
img1.onload=function()
{
	ctx.fillStyle='#282828'
	ctx.fillRect(0,0,1000,1000)
	ctx.drawImage(img1,0,0,1000,1000)
	ctx.drawImage(img2,0,0,1000,1000)
}
img3.onload=function()
{
	ctx.drawImage(img3,0,0,1000,1000)
}
function download(selector)
{
	const canvas=document.querySelector(selector)
	canvas.toBlob(function(blob)
	{
		saveAs(blob,'image')
	})
}