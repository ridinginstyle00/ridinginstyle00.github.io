This site is a Tic-Tac-Toe game. I chose to go with a simpler look for the site.

If we had access to 2-dimensional arrays, I could've coded this a little bit easier as well.
	To do data filling I chose to have a class that had the index of the square (starting at 0)
	I also used each squares ID to determine if it had an X, an O, or nothing.
	I used the ID for comparison checkers to determine if there was a winner after every click.

The game also checks to see if there are no empty spaces left resulting in a "scratch" game.

There are winner messages for whichever winner wins.

This game does not feature an "AI" as we haven't covered Math.random() yet I don't believe.
	So the game relies on 2 inputs, player 1 and player 2.
	The AI would've worked by choosing a random number between 0 and 8.
		The javascript would check to see if that square has an X or an O.
		If it didn't have a marker it would place it's marker there.
		If it did have a marker, it would loop and try another random number until it found a spot.

Different images could be placed for X and O markers.
	CSS automatically converts the dimensions to fit into the game board.

For now a new game is made by refreshing the window. However in the future I might add a function to
	reset the game without refreshing.