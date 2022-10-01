'use strict';

let homeResult = document.getElementById('homeResult');
let awayResult = document.getElementById('awayResult');

let homeScore = 0;
let awayScore = 0;

function onePlusHome() {
	homeScore += 1;
	homeResult.innerHTML = homeScore;
}
function towPlusHome() {
	homeScore += 2;
	homeResult.innerHTML = homeScore;
}
function threePlusHome() {
	homeScore += 3;
	homeResult.innerHTML = homeScore;
}

function onePlusAway() {
	awayScore += 1;
	awayResult.innerHTML = awayScore;
}
function towPlusAway() {
	awayScore += 2;
	awayResult.innerHTML = awayScore;
}
function threePlusAway() {
	awayScore += 3;
	awayResult.innerHTML = awayScore;
}

function reset() {
	var x = document.getElementById('resultBox');
	x.classList.replace('resultNew', 'resultOld');
	document.getElementById('resultBox').innerText = 'Aktuell kein Spiel gestartet!';

	homeScore = 0;
	awayScore = 0;
	homeResult.innerHTML = homeScore;
	awayResult.innerHTML = awayScore;
	teamHome.innerText = '-';
	teamAway.innerText = '-';
	removeConfetti();
}

//Dialog feld geändert
const modul = document.getElementById('dialog');
const home = document.getElementById('diaHome');
const away = document.getElementById('diaAway');

const team = () => {
	modul.style.display = 'block';
};
function savePlayersNames1() {
	teamHome.innerHTML = home.value;
	home.value = '';
	teamAway.innerHTML = away.value;
	away.value = '';
	modul.style.display = 'none';
}
window.onclick = function (event) {
	if (event.target == modul) {
		modul.style.display = 'none';
	}
};
var input = document.getElementById('diaAway');
input.addEventListener('keypress', function (event) {
	if (event.key === 'Enter') {
		event.preventDefault();
		document.getElementById('add-home').click();
		modul.style.display = 'none';
	}
});

// Zusatz ein zufällig Ergebnis mit einer Ausgabe welches Team gewohnnen hat.

let resultBox = document.getElementById('resultBox');

function spiel() {
	//Confetti Stoppen
	removeConfetti();

	//Ergebnis zurücksetzen
	resultBox.innerText = '';

	//Classe von der resultBox ändern
	var x = document.getElementById('resultBox');
	if (x.classList == 'resultOld') {
		x.classList.replace('resultOld', 'resultTimer');
	} else if (x.classList == 'resultNew') {
		x.classList.replace('resultNew', 'resultTimer');
	}

	//Score auf Null setzen
	homeScore = 0;
	awayScore = 0;
	homeResult.innerHTML = homeScore;
	awayResult.innerHTML = awayScore;

	//Timerfunktion von 10 sekunden
	var timeleft = 10;
	var downloadTimer = setInterval(function () {
		if (timeleft <= 0) {
			clearInterval(downloadTimer);

			var x = document.getElementById('resultBox');
			x.classList.replace('resultTimer', 'resultNew');

			let zahlHome = Math.round(Math.random() * 100);
			let zahlAway = Math.round(Math.random() * 100);
			homeResult.innerHTML = zahlHome;
			awayResult.innerHTML = zahlAway;

			let winnerHome = document.getElementById('teamHome').innerHTML;
			let winnerAway = document.getElementById('teamAway').innerHTML;

			if (zahlHome > zahlAway) {
				startConfetti();
				resultBox.innerHTML = `Das Ergebnis ist </br><span class="ende">${zahlHome} : ${zahlAway}</span></br>Das Gewinnerteam ist </br> <span>${winnerHome}</span></br> Herzlichen Glückwunsch! Bis zum nächsten mal.`;
			} else if (zahlHome == zahlAway) {
				resultBox.innerHTML = `Das Ergebnis ist</br><span class="ende">${zahlHome} : ${zahlAway}</span></br>Das Spiel endet</br> <span>unentschieden</span></br>Bis zum nächsten mal.`;
			} else {
				startConfetti();
				resultBox.innerHTML = `Das Ergebnis ist </br><span class="ende"> ${zahlHome} : ${zahlAway}</span></br>Das Gewinnerteam ist </br> <span> ${winnerAway}</span></br> Herzlichen Glückwunsch!</br>Bis zum nächsten mal.`;
			}
		} else {
			resultBox.innerHTML = `Ergebnis wird ermittelt noch </br> <span class="ende"> ${timeleft} Sekunden.</span>`;
		}
		timeleft -= 1;
	}, 500);
}
