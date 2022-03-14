const RPS_CHOICES = ['Rock', 'Paper', 'Scissors'];
let playerScore = 0;
let compScore = 0;

function computerPlay() {
	let index = Math.floor(Math.random() * RPS_CHOICES.length);
	let choice = RPS_CHOICES[index];
	return choice;
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
		playerScore++;
		resultString = "You Win! " + playerSelection + " beats " + computerSelection;
	} else if (isPlayerWinner == false) {
		compScore++;
		resultString = "You Lose! " + computerSelection + " beats " + playerSelection;
	} else {
		resultString = "It's a tie! You both chose " + playerSelection;
	}

	updateScores();
	checkWinner();
	return resultString;
}

function updateScores() {
	const player = document.querySelector("#player-score");
	const comp = document.querySelector("#comp-score");
	player.textContent = `Player: ${playerScore}`;
	comp.textContent = `Computer: ${compScore}`;
}

function checkWinner() {
	let winner = document.querySelector("#winner");

	if (playerScore == 5) {
		winner.textContent = "Player is the winner!";
		console.log("Player is the winner!");
	} else if (compScore == 5) {
		winner.textContent = "Computer is the winner!";
		console.log("Computer is the winner!");
	}

}

const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => button.addEventListener('click', function() {
	const e = button.getAttribute('value');
	let result = playRound(e, computerPlay());
	console.log(result);
}));