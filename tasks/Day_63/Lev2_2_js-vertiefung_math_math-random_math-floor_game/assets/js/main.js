let userNumber = document.getElementById('userNumber'),
	output = document.getElementById('output');

let game = () => {
	let random = Math.floor(Math.random() * 10) + 1;

	if (userNumber.value == random) {
		output.innerHTML = `<p class="true"> Richtig! Du hast gewonnen!</p> <p>Du hast <strong>${userNumber.value}</strong> eingegeben und die Zufallszahl ist: <strong>${random}</strong></p>`;
	} else {
		output.innerHTML = `<p class="false"> Falsch! Du hast verloren! </p><p>Du hast <strong>${userNumber.value}</strong> eingegeben und die Zufallszahl ist: <strong>${random}</strong></p>`;
	}
};
