adjust()
var timeout=null
window.onresize=function()
{
	clearTimeout(timeout)
	timeout=setTimeout(function(){window.location.reload()},100)
}
function adjust()
{
	var map=document.getElementById("Map")
	var element=map.childNodes
	var itemNumber=element.length/2
	for (var i=0;i<itemNumber-1;i++)
	{
		var item=2*i+1
		var oldCoords=element[item].coords
		var newcoords=adjustPosition(oldCoords)
		element[item].setAttribute("coords",newcoords)
	}
}
function adjustPosition(position)
{
	var imageWidth=1150,imageHeigth=1000
	var pageWidth=document.body.clientWidth
	var pageHeith=document.body.clientHeight
	var each=position.split(",")
	for (var i=0;i<each.length;i++)
	{
		each[i]=Math.round(parseInt(each[i])*pageWidth/imageWidth).toString()
		i++
		each[i]=Math.round(parseInt(each[i])*pageHeith/imageHeigth).toString()
	}
	var newPosition=""
	for (var i=0;i<each.length;i++)
	{
		newPosition+=each[i]
		if (i<each.length-1)
		newPosition+=","
	}
	return newPosition
}