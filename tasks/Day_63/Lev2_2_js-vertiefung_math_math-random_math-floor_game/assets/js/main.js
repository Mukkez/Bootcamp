let random = Math.ceil(Math.random() * 1);
let input = Number(prompt('Gibt eine Zahl ein'));

if (isNaN(input) == false) {
	if (input === random) {
		console.log('Richtig! Du hast gewonnen! Du hast', input, 'eingegeben und die Nummer ist:', random);
	} else {
		console.log('Falsch! Du hast verloren! Du hast', input, 'eingegeben und die Nummer ist:', random);
	}
} else {
	console.log('Du hast keine Nummer eingegeben');
}
