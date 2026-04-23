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
    for (var i = 0; i < 9; i++) {
        var tableCell = document.createElement('td');
        var buttonLink = document.createElement('a');

        // 1. Set up the cell
        tableCell.id = "cell" + i; // Give the cell a unique ID
        
        // 2. Set up the link
        buttonLink.href = "#";
        buttonLink.id = "link" + i;
        buttonLink.className = i; // This keeps your checkForWinner logic working
        buttonLink.style.display = "block"; // Makes the link fill the whole cell
        buttonLink.style.height = "100%";
        
        buttonLink.addEventListener('click', clickedCell);

        // 3. Nest them correctly: Row -> Cell -> Link
        tableCell.appendChild(buttonLink);

        if (i < 3) {
            row1.appendChild(tableCell);
        } else if (i < 6) {
            row2.appendChild(tableCell);
        } else {
            row3.appendChild(tableCell);
        }
    }
}

function clickedCell(e) {
    // Prevent the page from jumping because of the "#" href
    e.preventDefault();

    // currentTarget is the <a> tag we attached the listener to
    var activeLink = e.currentTarget;

    // Check if the cell is already taken (prevents overwriting)
    if (activeLink.id === "O" || activeLink.id === "X") {
        return;
    }

    if (player1Turn === true) {
        player1Turn = false;
        playerTurn.innerHTML = "Player 2 - X";

        activeLink.id = "O"; // Change ID for your win-check logic

        var oImg = document.createElement('img');
        oImg.src = "images/O.png"; // Use forward slash for web compatibility
        activeLink.appendChild(oImg);
    } else if (player1Turn === false) {
        player1Turn = true;
        playerTurn.innerHTML = "Player 1 - O";

        activeLink.id = "X"; // Change ID for your win-check logic

        var xImg = document.createElement('img');
        xImg.src = "images/X.png";
        activeLink.appendChild(xImg);
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