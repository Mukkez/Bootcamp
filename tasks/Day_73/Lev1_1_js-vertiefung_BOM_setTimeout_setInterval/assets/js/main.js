console.log('%c----------- Aufgabe 1 -------', 'color:#00ff00');
console.log('Start Warten für 3 Sekunden...');
setTimeout(
	(taskOne = () => {
		console.log('Erledigt. Du hast 3 Sekunden verschwendet.');
	}),
	3000
);

console.log('%c----------- Aufgabe 2 -------', 'color:#00ff00');

let counter = 10,
	myInterval = setInterval(taskTwo, 1000);

function taskTwo() {
	counter === 0 ? console.log('Endlich Feierabend!') : console.log(counter--);
	counter === 0 ? clearInterval(myInterval) : console.log(counter--);
}
