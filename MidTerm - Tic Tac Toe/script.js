var headerDisplay = document.getElementById("headerDisplay");
var playerTurn = document.getElementById("playerTurn");
var row1 = document.getElementById("row1");
var row2 = document.getElementById("row2");
var row3 = document.getElementById("row3");

var player1Turn = true;
var player1Won = false;
var player2Won = false;

window.addEventListener('load', onLoad());

function onLoad() {
	//Display player 1 goes first
	playerTurn.innerHTML = "Player 1 - O";

	//Set player1Turn to true to ensure that the game starts with player 1
	player1Turn = true;

	createCells();
}

function createCells() {
	//Create the board
	for (var i = 0; i < 9; i++) {
		//Creating elements
		var buttonLink = document.createElement('a');
		var tableCell = document.createElement('td');

		//Setting values for elements
		tableCell.id = i;

		buttonLink.href = "#";
		buttonLink.id = "link" + i;
		buttonLink.className = i;
		buttonLink.addEventListener('click', clickedCell);
		buttonLink.appendChild(tableCell);

		//Creating a 3x3 grid
		if (i < 3) {
			row1.appendChild(buttonLink);
		} else if (i < 6) {
			row2.appendChild(buttonLink);
		} else if (i < 9) {
			row3.appendChild(buttonLink);
		}
	}
}

function clickedCell(e) {
	if (player1Turn === true) {
		//Switch to player 2 and change text
		player1Turn = false;
		playerTurn.innerHTML = "Player 2 - X";

		//Get the <a> id and change it to the placed marker
		document.getElementById("link" + e.target.id).id = "O";

		//Create and place marker
		var oImg = document.createElement('img');
		oImg.src = "images\\O.png";
		e.target.appendChild(oImg);
	} else if (player1Turn === false) {
		//Switch to player 1 and change text
		player1Turn = true;
		playerTurn.innerHTML = "Player 1 - O";

		//Get the <a> id and change it to the placed marker
		document.getElementById("link" + e.target.id).id = "X";

		//Create and place marker
		var xImg = document.createElement('img');
		xImg.src = "images\\X.png";
		e.target.appendChild(xImg);
	}

	checkForWinner();
}

function checkForWinner() {
	if (boardHasEmptySpaces()) {
		//Check horizontally for O
		if (document.getElementsByClassName(0)[0].id == 'O' && document.getElementsByClassName(1)[0].id == 'O' && document.getElementsByClassName(2)[0].id == 'O' ||
			document.getElementsByClassName(3)[0].id == 'O' && document.getElementsByClassName(4)[0].id == 'O' && document.getElementsByClassName(5)[0].id == 'O' ||
			document.getElementsByClassName(6)[0].id == 'O' && document.getElementsByClassName(7)[0].id == 'O' && document.getElementsByClassName(8)[0].id == 'O') {
			player1Won = true;
			player1Turn = null;
		}

		//Check vertically for O
		if (document.getElementsByClassName(0)[0].id == 'O' && document.getElementsByClassName(3)[0].id == 'O' && document.getElementsByClassName(6)[0].id == 'O' ||
			document.getElementsByClassName(1)[0].id == 'O' && document.getElementsByClassName(4)[0].id == 'O' && document.getElementsByClassName(7)[0].id == 'O' ||
			document.getElementsByClassName(2)[0].id == 'O' && document.getElementsByClassName(5)[0].id == 'O' && document.getElementsByClassName(8)[0].id == 'O') {
			player1Won = true;
			player1Turn = null;
		}

		//Check diagonally for O
		if (document.getElementsByClassName(0)[0].id == 'O' && document.getElementsByClassName(4)[0].id == 'O' && document.getElementsByClassName(8)[0].id == 'O' ||
			document.getElementsByClassName(2)[0].id == 'O' && document.getElementsByClassName(4)[0].id == 'O' && document.getElementsByClassName(6)[0].id == 'O') {
			player1Won = true;
			player1Turn = null;
		}

		//Check horizontally for X
		if (document.getElementsByClassName(0)[0].id == 'X' && document.getElementsByClassName(1)[0].id == 'X' && document.getElementsByClassName(2)[0].id == 'X' ||
			document.getElementsByClassName(3)[0].id == 'X' && document.getElementsByClassName(4)[0].id == 'X' && document.getElementsByClassName(5)[0].id == 'X' ||
			document.getElementsByClassName(6)[0].id == 'X' && document.getElementsByClassName(7)[0].id == 'X' && document.getElementsByClassName(8)[0].id == 'X') {
			player2Won = true;
			player1Turn = null;
		}

		//Check vertically for X
		if (document.getElementsByClassName(0)[0].id == 'X' && document.getElementsByClassName(3)[0].id == 'X' && document.getElementsByClassName(6)[0].id == 'X' ||
			document.getElementsByClassName(1)[0].id == 'X' && document.getElementsByClassName(4)[0].id == 'X' && document.getElementsByClassName(7)[0].id == 'X' ||
			document.getElementsByClassName(2)[0].id == 'X' && document.getElementsByClassName(5)[0].id == 'X' && document.getElementsByClassName(8)[0].id == 'X') {
			player2Won = true;
			player1Turn = null;
		}

		//Check diagonally for X
		if (document.getElementsByClassName(0)[0].id == 'X' && document.getElementsByClassName(4)[0].id == 'X' && document.getElementsByClassName(8)[0].id == 'X' ||
			document.getElementsByClassName(2)[0].id == 'X' && document.getElementsByClassName(4)[0].id == 'X' && document.getElementsByClassName(6)[0].id == 'X') {
			player2Won = true;
			player1Turn = null;
		}
	} else {
		headerDisplay.innerHTML = "The game is a scratch!";
	}

	if (player1Won === true) {
		headerDisplay.innerHTML = "Player 1 Won!!";
		playerTurn.innerHTML = "Reload the page to play again.";
	}
	if (player2Won === true) {
		headerDisplay.innerHTML = "Player 2 Won!!";
		playerTurn.innerHTML = "Reload the page to play again.";
	}
}

function boardHasEmptySpaces() {
	//Loops through each <a> tag by class name and determines if the game board is filled or not by id name
	for (var i = 0; i < 9; i++) {
		//Get each element by class name
		var testElement = document.getElementsByClassName(i)[0];

		//If the id doesn't match X or O then there is an empty space
		if (testElement.id != 'X' && testElement.id != 'O') {
			return true;
		}
	}

	return false;
}