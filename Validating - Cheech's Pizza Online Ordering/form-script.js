// JavaScript Document
'use strict';

var endForm 	= 	  document.getElementById("endForm");
var custName 	= 	  document.getElementById("custName");
var phoneNum 	= 	  document.getElementById("phoneNum");
var numOfPizzas = 	  document.getElementById("numOfPizzas");
var typeOfPizza = 	  document.getElementById("typeOfPizza");
var fixName 	= 	  document.getElementById("fixName");
var fixNum 		= 	  document.getElementById("fixNum");
var fixPizNum 	= 	  document.getElementById("fixPizNum");
var fixPizType 	= 	  document.getElementById("fixPizType");

var typeOfPizzaArray = ["Pepperoni", "Meat Supreme", "Sausage", "Hawaiian", "Deep Dish", "Thin Crust"];

//Add or create things when the page loads
window.addEventListener('load', onLoad);

function onLoad()
{
	makeNumberOfPizzasSelection();
	makeTypeOfPizzaSelection();
}

function makeNumberOfPizzasSelection()
{
	//Create the selection box for number of pizzas
	for (var i = 1; i < 11; i++)
	{
		var optionItem 		 = document.createElement('option');
		optionItem.value 	 = i;
		optionItem.innerHTML = i;

		numOfPizzas.appendChild(optionItem);
	}
}

function makeTypeOfPizzaSelection()
{
	//Create the selection box for number of pizzas
	for (var i = 0; i < typeOfPizzaArray.length; i++)
	{
		var optionItem	     = document.createElement('option');
		optionItem.value 	 = typeOfPizzaArray[i];
		optionItem.innerHTML = typeOfPizzaArray[i];

		typeOfPizza.appendChild(optionItem);
	}
	typeOfPizza.select = null;
}



function submitOrder(form)
{		
	//Vars for if the form is valid and the allowed phone number formats
		var isValid = true;
		var phoneNumFormat = /^\(?[0-9]{3}\)?-?([0-9]{3})-?([0-9]{4})$/;

	//Checking and setting whether or not the name field is valid
		if(custName.value.length < 6)
		{
			custName.focus();
			custName.style.backgroundColor = "#ffccff";
			isValid = false;
			fixName.innerHTML = "Name must be at least 6 characters long!";
		}
		else
		{
			fixName.innerHTML = "";
			custName.style.backgroundColor = "#ffffff";
		}
	
	//Checking to see if the phone number field is valid
		if(!phoneNum.value.match(phoneNumFormat))
		{
			phoneNum.focus();
			phoneNum.style.backgroundColor = "#ffccff";
			isValid = false;
			fixNum.innerHTML = "Not an accepted format.";
		}
		else
		{
			fixNum.innerHTML = "";
			phoneNum.style.backgroundColor = "#ffffff";
		}

	//Making sure a selection was made for the number of pizzas, and the type of pizza
		if(numOfPizzas.value == "")
		{
			numOfPizzas.focus();
			numOfPizzas.style.backgroundColor = "#ffccff";
			isValid = false;
			fixPizNum.innerHTML = "You must select an option!";
		}
		else
		{
			fixPizNum.innerHTML = "";
			numOfPizzas.style.backgroundColor = "#ffffff";
		}

		if(typeOfPizza.value == "")
		{
			typeOfPizza.focus();
			typeOfPizza.style.backgroundColor = "#ffccff";
			isValid = false;
			fixPizType.innerHTML = "You must select an option!";
		}
		else
		{
			fixPizType.innerHTML = "";
			typeOfPizza.style.backgroundColor = "#ffffff";
		}

	//Submit the form if all checks validated
		return isValid;
}