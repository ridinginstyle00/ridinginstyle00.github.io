'use strict';

var imgArray = ["images/img1.jpg", "images/img2.jpg", "images/img3.jpg", "images/img4.jpg"];
var fourImgsDiv = document.getElementById('fourImgs');
var largeImg = document.getElementById('largeImg');

//Run code only when window is loaded
window.addEventListener('load', windowLoad);

function windowLoad()
{	
	createImages();
	addClickEvents();
}

//Create the images and add them to the page
function createImages()
{
	largeImg.src = imgArray[0];
	
	for (var i = 0; i < imgArray.length; i++)
	{
		fourImgsDiv.innerHTML += "<img src='" + imgArray[i] + "'>";
	}
}


//Creating the click event listener
function addClickEvents()
{
	var allImg = document.getElementsByTagName("img");
	
	for (var i = 0; i < allImg.length; i++)
	{
		allImg[i].addEventListener('click', imgClicked);
	}	
}

//Function called when an image is clicked (Including when the large image is clicked, although it doesn't change anything.)
function imgClicked(e)
{
	largeImg.src = e.target.src;
}