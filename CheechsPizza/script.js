// JavaScript Document
'use strict';

var endForm 	= 	  document.getElementById("endForm");
var custName 	= 	  document.getElementById("custName");
var phoneNum 	= 	  document.getElementById("phoneNum");
var numOfPizzas = 	  document.getElementById("numOfPizzas");
var typeOfPizza = 	  document.getElementById("typeOfPizza");

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



function submitOrder()
{		
		var subTotalDouble = 9.75 * numOfPizzas.value;
		var taxDouble = (subTotalDouble * .076);
		var finalName 	   = "<b>Name: </b>" 		 	 + custName.value;
		var finalNum 	   = "<b>Phone number: </b>" 	 + phoneNum.value;
		var finalNumPizza  = "<b>Number of pizzas: </b>" + numOfPizzas.value;
		var finalTypePizza = "<b>Type of pizza: </b>" 	 + typeOfPizza.value;
		var subTotal 	   = "<b>Subtotal: </b>$" 		 + subTotalDouble;
		var tax 		   = "<b>Tax Charged: </b>$"	 + taxDouble;
		var total 		   = "<b>Total: </b>$" 			 + (subTotalDouble + taxDouble);

		var pFinalName 		  = document.createElement('p');
		var pFinalNum 		  = document.createElement('p');
		var pFinalNumPizza    = document.createElement('p');
		var pFinalTypePizza   = document.createElement('p');
		var pSubTotal 		  = document.createElement('p');
		var pTax 		  	  = document.createElement('p');
		var pTotal		  	  = document.createElement('p');

		var orderInformation  = document.createElement('h2');

		var breakLine 		  = document.createElement('hr');

		pFinalName.innerHTML 		 = finalName;
		pFinalNum.innerHTML  		 = finalNum;
		pFinalNumPizza.innerHTML 	 = finalNumPizza;
		pFinalTypePizza.innerHTML 	 = finalTypePizza;
		pSubTotal.innerHTML 		 = subTotal;
		pTax.innerHTML 		 		 = tax;
		pTotal.innerHTML 		 	 = total;
		orderInformation.innerHTML   = "Order information";

		endForm.appendChild(breakLine);
		endForm.appendChild(orderInformation);
		endForm.appendChild(pFinalName);
		endForm.appendChild(pFinalNum);
		endForm.appendChild(pFinalNumPizza);
		endForm.appendChild(pFinalTypePizza);
		endForm.appendChild(pSubTotal);
		endForm.appendChild(pTax);
		endForm.appendChild(pTotal);
}