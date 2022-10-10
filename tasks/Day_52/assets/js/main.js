let numberOne = document.getElementById('numberOne');
let numberTwo = document.getElementById('numberTwo');
let resultUser = document.getElementById('resultUser');
let remark = document.getElementById('remark');

const minMax = {
	min: 1,
	max: 100,
};

function getRandomNumbers(min, max) {
	return Math.floor(Math.random() * max + min);
}

numberOne.innerHTML = getRandomNumbers(minMax.min, minMax.max);
numberTwo.innerHTML = getRandomNumbers(minMax.min, minMax.max);

resultUser.addEventListener('keydown', (event) => {
	if (event.key === 'Enter') {
		resultSubmit.click();
	}
});

resultSubmit.addEventListener('click', () => {
	let summe = Number(numberOne.innerHTML) + Number(numberTwo.innerHTML);
	userSumme = Number(resultUser.value);

	if (summe === userSumme) {
		remark.style.color = 'green';
		remark.innerHTML = `Das Ergebnis stimmt!`;
	} else {
		remark.style.color = 'red';
		remark.innerHTML = `Das Ergebnis ist falsch!`;
	}
});

newTask.addEventListener('click', () => {
	numberOne.innerHTML = getRandomNumbers(minMax.min, minMax.max);
	numberTwo.innerHTML = getRandomNumbers(minMax.min, minMax.max);
});
