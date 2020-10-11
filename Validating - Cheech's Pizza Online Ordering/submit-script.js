'use strict';

//Vars
    var resultsName     = document.getElementById("resultsName");
    var resultsNum      = document.getElementById("resultsNum");
    var resultsNumPiz   = document.getElementById("resultsNumPiz");
    var resultsTypePiz  = document.getElementById("resultsTypePiz");
    var subtotal        = document.getElementById("subtotal");
    var taxCharged      = document.getElementById("taxCharged");
    var total           = document.getElementById("total");

    var resultsArr = [resultsName, resultsNum, resultsNumPiz, resultsTypePiz];

    var costPerPizza = 9.49;

//On window load event
    window.addEventListener('load', onLoad);

    function onLoad()
    {
        printQuery();
        printCosts();
    }

//Get data from query and display it
    function printQuery() 
    {
        var query = window.location.search.substring(1);
        var vars = query.split("&");

        //Minus 1 to remove the submit button from this list
            for (var i = 0; i < vars.length-1; i++) 
            {
                //Split the inputs from the query
                    var pair = vars[i].split("=");
                
                //The first position is the name, this splits it to not include a + if the name field had spaces
                    if (i == 0)
                    {
                        var name = pair[1].split("+");
                        for (var k = 0; k < name.length; k++)
                        {
                            resultsArr[i].innerHTML += name[k] + " ";   
                        }
                    }
                //Everything but the name is printed normally
                    else
                    {
                        resultsArr[i].innerHTML += pair[1];
                    }
            }
    }

function printCosts()
{
    //toFixed only used to not display numbers like
    //91.90115999999999 (which is what happened if 9 pizzas were entered)
    var subtotalCost = costPerPizza * resultsNumPiz.innerHTML;
    subtotal.innerHTML = "$" + subtotalCost;

    var taxTotal = subtotalCost * 0.076
    taxCharged.innerHTML = "$" + taxTotal.toFixed(2);

    var totalCost = subtotalCost + taxTotal;
    total.innerHTML = "$" + totalCost.toFixed(2);
}