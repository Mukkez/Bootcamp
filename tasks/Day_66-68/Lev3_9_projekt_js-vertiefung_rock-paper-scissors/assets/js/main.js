const rounds5 = document.getElementById('radio5'),
	rounds10 = document.getElementById('radio10'),
	rounds15 = document.getElementById('radio15'),
	rounds20 = document.getElementById('radio20');

const roundsTotal = document.getElementById('roundsTotal'),
	activeRound = document.getElementById('roundActiv');

const outputText = document.getElementById('outputText'),
	playerCounter = document.getElementById('gamerCount'),
	computerCounter = document.getElementById('compCount'),
	gamerChoice = document.getElementById('gamerChoice'),
	computerChoice = document.getElementById('computerChoice');

const rockBtn = document.getElementById('rock'),
	paperBtn = document.getElementById('paper'),
	scissorsBtn = document.getElementById('scissors');

let playerScore = 0,
	computerScore = 0,
	activeRoundScore = 0,
	totalRoundScore = 0,
	choisPlayerText = '',
	compChoiseText = '';

// was passiert wenn gecheckt wird
function checkRounds() {
	if (rounds5.checked) {
		totalRoundScore = 5;
		roundsTotal.innerHTML = 5;
		activeRound.innerHTML = 0;
	} else if (rounds10.checked) {
		totalRoundScore = 10;
		roundsTotal.innerHTML = 10;
		activeRound.innerHTML = 0;
	} else if (rounds15.checked) {
		totalRoundScore = 15;
		roundsTotal.innerHTML = 15;
		activeRound.innerHTML = 0;
	} else if (rounds20.checked) {
		totalRoundScore = 20;
		roundsTotal.innerHTML = 20;
		activeRound.innerHTML = 0;
	}
}
// Symbole stehen für Zahlen 1-3
function playerChooseRock() {
	const rock = 1;
	compare(rock);
}
function playerChoosePaper() {
	const paper = 2;
	compare(paper);
}
function playerChooseScissors() {
	const scissors = 3;
	compare(scissors);
}

function compare(choisPlayer) {
	let compChoise = Math.floor(Math.random() * 3) + 1; //random Zahl

	if (rounds5.checked || rounds10.checked || rounds15.checked || rounds20.checked) {
		//wenn gechecked
		if (activeRoundScore !== totalRoundScore) {
			//wenn aktive runden<totalrunden
			if (choisPlayer == compChoise) {
				// wenn klick von Player = klick von computer

				if (choisPlayer == 1 || compChoise == 1) {
					choisPlayerText = 'Stein';
					compChoiseText = 'Stein';
				} else if (choisPlayer == 2 || compChoise == 2) {
					choisPlayerText = 'Papier';
					compChoiseText = 'Papier';
				} else if (choisPlayer == 3 || compChoise == 3) {
					choisPlayerText = 'Schere';
					compChoiseText = 'Schere';
				}

				outputText.innerHTML = 'Unentschieden';
				outputText.style.color = 'yellow';
				activeRoundScore++;
				activeRound.innerHTML = activeRoundScore;
				gamerChoice.innerHTML = choisPlayerText;
				computerChoice.innerHTML = compChoiseText;
			} else if (choisPlayer == 1 && compChoise == 2) {
				outputText.innerHTML = 'Papier umwickelt Stein, Der Computer gewinnt diese Runde!';
				outputText.style.color = 'red';
				computerScore++;
				computerCounter.innerHTML = computerScore;
				activeRoundScore++;
				activeRound.innerHTML = activeRoundScore;
				gamerChoice.innerHTML = 'Stein';
				computerChoice.innerHTML = 'Papier';
			} else if (choisPlayer == 1 && compChoise == 3) {
				outputText.innerHTML = 'Stein bricht Schere, Der Spieler gewinnt diese Runde!';
				outputText.style.color = 'green';
				playerScore++;
				playerCounter.innerHTML = playerScore;
				activeRoundScore++;
				activeRound.innerHTML = activeRoundScore;
				gamerChoice.innerHTML = 'Stein';
				computerChoice.innerHTML = 'Schere';
			} else if (choisPlayer == 2 && compChoise == 1) {
				outputText.innerHTML = 'Papier umwickelt Stein, Der Spieler gewinnt diese Runde!';
				outputText.style.color = 'green';
				playerScore++;
				playerCounter.innerHTML = playerScore;
				activeRoundScore++;
				activeRound.innerHTML = activeRoundScore;
				gamerChoice.innerHTML = 'Papier';
				computerChoice.innerHTML = 'Stein';
			} else if (choisPlayer == 2 && compChoise == 3) {
				outputText.innerHTML = 'Schere zerschneidet Papiert, Der Computer gewinnt diese Runde!';
				outputText.style.color = 'red';
				computerScore++;
				computerCounter.innerHTML = computerScore;
				activeRoundScore++;
				activeRound.innerHTML = activeRoundScore;
				gamerChoice.innerHTML = 'Papier';
				computerChoice.innerHTML = 'Schere';
			} else if (choisPlayer == 3 && compChoise == 1) {
				outputText.innerHTML = 'Stein bricht Schere, Der Computer gewinnt diese Runde!';
				outputText.style.color = 'red';
				computerScore++;
				computerCounter.innerHTML = computerScore;
				activeRoundScore++;
				activeRound.innerHTML = activeRoundScore;
				gamerChoice.innerHTML = 'Schere';
				computerChoice.innerHTML = 'Stein';
			} else if (choisPlayer == 3 && compChoise == 2) {
				outputText.innerHTML = 'Schere zerschneidet Papiert, Der Spieler gewinnt diese Runde!';
				outputText.style.color = 'green';
				playerScore++;
				playerCounter.innerHTML = playerScore;
				activeRoundScore++;
				activeRound.innerHTML = activeRoundScore;
				gamerChoice.innerHTML = 'Schere';
				computerChoice.innerHTML = 'Papier';
			}
		} else {
			if (playerScore > computerScore) {
				outputText.innerHTML = 'Yeaaaah 🥳 Du hast das Spiel gewonnen. 🥂';
				outputText.style.color = 'green';
				startConfetti();
			} else if (playerScore < computerScore) {
				outputText.innerHTML = 'Leider hast du das Spiel verloren. 😣';
				outputText.style.color = 'red';
			} else if (playerScore == computerScore) {
				outputText.innerHTML = 'Unentschieden, spiel nochmal 😀';
				outputText.style.color = 'yellow';
			}
		}
	} else {
		document.getElementById('outputRadio').innerHTML = 'Bitte zuerst eine Rundenanzahl wählen!';
	}
}

function restart() {
	window.location.reload(true);
	stopConfetti();
}
