/* 
	Name: Ville Peltonen
	Date Created: 10/11/2019
	Most recent revision: 10/13/2019
*/

// function called on <body> load or when "Play Again" button is clicked
function gameStart() {
	do {
	startingBet = prompt("How many dollars would you like to bet?");
	if (startingBet <= 0) {
		alert("Your bet must be higher than $0.");
	}
} while (startingBet <= 0);

document.getElementById("game-money").value = startingBet;
document.getElementById("play-again").style.display = "none";
document.getElementById("results").style.display = "none";
document.getElementById("play").style.display = "block";
document.getElementById("resultsText").style.display = "none";
document.getElementById("underline").style.display = "none";
}


// function called when "Play" button clicked
function gamePlay() {
	var gameMoney = startingBet;
	var moneyCount = new Array(); // array to keep track of rolling dollar amount
	var diceCount = new Array(); // array to keep track of each dice throw (for troubleshooting)

	while (gameMoney > 0) {
		
		moneyCount[moneyCount.length] = gameMoney;

		// parseInt used to convert initial startingBet string to integer in array
		for (var i = 0; i < moneyCount.length; i++) { 
			moneyCount[i] = parseInt(moneyCount[i], 10); 
		} 
				
		function rollDice() {
			return (Math.floor(Math.random() * 11) + 2);
		}

		for (var i = 0; i < 1; i++) {
			var diceThrow = rollDice();
			diceCount[diceCount.length] = diceThrow;
		}

		/* Known, but unresolved bug (edit: resolved, see below) if first dice roll results in 7, 
		4 is concatenated to startingBet amount (e.g. 40 + 5 = 405), not added. parseInt function 
		was included above to remove string from startingBet and return the integer in the array, but did not fix issue.
		Neither did changing "+ 4" to "- (-4)" */

			if (diceThrow === 7) {
				gameMoney = parseInt(gameMoney, 10) + 4; // parseInt added here also, seems to fix issue. 
			} 
			else {
				gameMoney = gameMoney - 1;
			}
			}

	var maxNumber = moneyCount[0];
	for (var i = 0; i < moneyCount.length; i++) {
		if (moneyCount[i] > maxNumber) {
			maxNumber = moneyCount[i];
		}
	}

	var maxNumberPosition = moneyCount.indexOf(maxNumber);

	document.getElementById("results").style.display = "block";
	document.getElementById("startingBet").innerText = "$ " + startingBet;
	document.getElementById("totalRolls").innerText = moneyCount.length;
	document.getElementById("highestAmount").innerText = "$ " + maxNumber;
	document.getElementById("rollCount").innerText = maxNumberPosition;
	document.getElementById("game-money").value = "0.00";
	document.getElementById("play-again").style.display = "block";
	document.getElementById("play").style.display = "none";
	document.getElementById("resultsText").style.display = "block";
	document.getElementById("underline").style.display = "block";

	console.log(moneyCount);
	console.log(diceCount);
}	

   