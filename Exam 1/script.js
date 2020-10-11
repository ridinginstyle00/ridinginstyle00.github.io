/*
    Name: Quinn Ridings
    Date: 9/28/2020
    Class: OTC-CIS-131
*/

//Creating the array of image URL's
    var imgArray = ["images/diamondHead.jpeg", "images/horses.jpg", "images/lanikai.png", "images/plumeria-garden.jpg"];

//Creating the captions for the images in an array
    var imgArrayCaption = ["Diamond Head", "Pa’u Riders", "Lanikai Beach", "Plumeria Garden"];

//Get the input field for selecting an image
    var imgSelectInput = document.getElementById("inputImgArr");

//Get the ID for the large image holder
    var largeImg = document.getElementById("largeImg");

//Get the ID for the quantity selection
    var quantitySelect = document.getElementById("quantitySelect");

//Get the ID for the img caption
    var imgCaption = document.getElementById("imgCaption");

//Get the ID for the name input field
    var fullName = document.getElementById("fullName");

//Get the ID for the post submit data
    var postSubmit = document.getElementById("postSubmit");

//Get the ID for the submit button
    var submit = document.getElementById("submit");

//Global img value to access later
    var setImage;

window.addEventListener("load", function()
{
    //Create the select tag's image texts
        createImageSelection();
    //Create handlers for any buttons or inputs
        createHandlers();
    //Set the large image to the first image of the array
        setFirstImage();
    //Create the quantity range
        createQuantitySelect();
});

function createImageSelection()
{
    //Create the option tags to populate the imgSelectInput's range. This is for the image caption and image loading
        for (var i = 0; i < imgArray.length; i++)
        {
            //Creating the option tag
                var newOptionItem = document.createElement("option");

            //Setting value and innerHTML
                newOptionItem.value = i;
                newOptionItem.innerHTML = imgArrayCaption[i];

            //Adding newOptionItem to imgSelectInput    
                imgSelectInput.appendChild(newOptionItem);
        }
}

function createHandlers()
{
    //When imgSelectInput's input changes, this code is ran to change the caption and change the src of the large img
        imgSelectInput.addEventListener("change", function(e)
        {
            //Changing the caption's innerHTML
                imgCaption.innerHTML = imgArrayCaption[e.target.value];

            //Changing the largImg's src
                setImage.src = imgArray[e.target.value];
        });

    //When the SubmitOrder button is hit, this clears the postSubmit's innerHTML and adds in the current data
        submit.addEventListener("click", function()
        {
            //Clear the innerHTML
                postSubmit.innerHTML = "";

            //Add each field to the innerHTML
                postSubmit.innerHTML += "Full name: " + fullName.value + "<br><br>";
                postSubmit.innerHTML += "Painting: " + imgCaption.innerHTML + "<br><br>";
                postSubmit.innerHTML += "Quantity: " + quantitySelect.value + "<br><br>";
        });
}

function setFirstImage()
{
    //Creating the img element and settings it's src
        setImage = document.createElement("img");
        setImage.src = imgArray[0]

    //adding the setImage.src to the large image
        largeImg.appendChild(setImage);

    //Setting the caption
        imgCaption.innerHTML = imgArrayCaption[0]
}

function createQuantitySelect()
{
    //Creating the range of 1 - 10 for the quantity selection
        for (var i = 1; i < 11; i++)
        {
            //New option tag
                var newOptionItem = document.createElement("option");

            //Setting value and innerHTML    
                newOptionItem.value = i;
                newOptionItem.innerHTML = i;

            //Adding it to the page
                quantitySelect.appendChild(newOptionItem);
        }
}