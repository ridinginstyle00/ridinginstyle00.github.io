'use strict';
//Save the original src ID to use for later
var originalSrc = document.getElementById("fourImgs").getElementsByTagName('img')[0].src;
//Setting the large image to the first image in the list
document.getElementById("largeImg").src = document.getElementById("fourImgs").getElementsByTagName('img')[0].src;

//event.target.id is used to get the ID of the object that called this function.
//In this assignment's case, only the images are calling the function, thus getting their ID's to pass to the large image.
function changeImage(smallSrc)
{
	document.getElementById('largeImg').src = smallSrc;
}

//Getting the element to create a listener
var largeImg = document.getElementById("largeImg");

largeImg.addEventListener('dblclick', function (e) 
    {	
		if (originalSrc === document.getElementById("fourImgs").getElementsByTagName('img')[0].src)
		{
			for (var x = 0; x < 4; x++)
			{
				document.getElementById("fourImgs").getElementsByTagName('img')[x].src = "images/img" + (x + 5) + ".jpg";
				document.getElementById("largeImg").src = document.getElementById("fourImgs").getElementsByTagName('img')[0].src;
			}
		}
		else
		{
			for (var y = 0; y < 4; y++)
			{
				document.getElementById("fourImgs").getElementsByTagName('img')[y].src = "images/img" + (y + 1) + ".jpg";
				document.getElementById("largeImg").src = document.getElementById("fourImgs").getElementsByTagName('img')[0].src;
			}
		}
    });