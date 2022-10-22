let numMax = document.getElementById('numMax'),
	selectNumber1 = document.getElementById('number1'),
	selectNumber2 = document.getElementById('number2'),
	result = document.getElementById('result');

function countMe() {
	let number = Number(numMax.value),
		divi1 = Number(selectNumber1.value),
		divi2 = Number(selectNumber2.value);

	result.style.color = 'red';
	if (number == 0) {
		result.innerHTML = 'Bitte eine Zahl > 0 eingeben!';
	} else if (divi1 == divi2) {
		result.innerHTML = 'Die beiden selektierten Zahlen dürfen nicht gleich sein!';
	} else {
		let summe = 0;
		for (let i = 0; i < number; i++) {
			if (i % divi1 == 0 || i % divi2 == 0) {
				summe += i;
			}
		}
		result.style.color = 'green';
		result.innerHTML = `Ergebnis: ${summe}`;
	}
}
