const RPS_CHOICES = ['Rock', 'Paper', 'Scissors'];

function computerPlay() {
	let index = Math.floor(Math.random() * RPS_CHOICES.length);
	let choice = RPS_CHOICES[index];
	return choice;
}

function playRound(playerSelection, computerSelection) {

	let playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase(); 
	let isPlayerWinner;

	// game mechanics handling
	if (playerSelection == "Rock") {
		if (computerSelection == "Rock") {
			isPlayerWinner = "tie";
		} else if (computerSelection == "Paper") {
			isPlayerWinner = false;
		} else if (computerSelection == "Scissors") {
			isPlayerWinner = true;
		}
	} else if (playerSelection == "Paper") {
		if (computerSelection == "Rock") {
			isPlayerWinner = true;
		} else if (computerSelection == "Paper") {
			isPlayerWinner = "tie";
		} else if (computerSelection == "Scissors") {
			isPlayerWinner = false;
		}
	} else if (playerSelection == "Scissors") {
		if (computerSelection == "Rock") {
			isPlayerWinner = false;
		} else if (computerSelection == "Paper") {
			isPlayerWinner = true;
		} else if (computerSelection == "Scissors") {
			isPlayerWinner = "tie";
		}
	}

	// result handling
	if (isPlayerWinner == true) {
		console.log("You Win!" + playerSelection + " beats " + computerSelection);
	}
}