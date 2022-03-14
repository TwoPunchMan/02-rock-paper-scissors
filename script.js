const RPS_CHOICES = ['Rock', 'Paper', 'Scissors'];

function computerPlay() {
	let index = Math.floor(Math.random() * RPS_CHOICES.length);
	let choice = RPS_CHOICES[index];
	return choice;
}

function playerChooses() {
	return;
}

function playRound(playerSelection, computerSelection) {

	playerChoice = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase(); 
	let isPlayerWinner;

	// game mechanics handling
	if (playerChoice == "Rock") {
		if (computerSelection == "Rock") {
			isPlayerWinner = "tie";
		} else if (computerSelection == "Paper") {
			isPlayerWinner = false;
		} else if (computerSelection == "Scissors") {
			isPlayerWinner = true;
		}
	} else if (playerChoice == "Paper") {
		if (computerSelection == "Rock") {
			isPlayerWinner = true;
		} else if (computerSelection == "Paper") {
			isPlayerWinner = "tie";
		} else if (computerSelection == "Scissors") {
			isPlayerWinner = false;
		}
	} else if (playerChoice == "Scissors") {
		if (computerSelection == "Rock") {
			isPlayerWinner = false;
		} else if (computerSelection == "Paper") {
			isPlayerWinner = true;
		} else if (computerSelection == "Scissors") {
			isPlayerWinner = "tie";
		}
	}

	let resultString;
	// result handling
	if (isPlayerWinner == true) {
		resultString = "You Win! " + playerSelection + " beats " + computerSelection;
	} else if (isPlayerWinner == false) {
		resultString = "You Lose! " + computerSelection + " beats " + playerSelection;
	} else {
		resultString = "It's a tie! You both chose " + playerSelection;
	}

	return resultString;
}

const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => button.addEventListener('click', function() {
	const e = button.getAttribute('value');
}));