let numberOne = document.getElementById('numberOne'),
	numberTwo = document.getElementById('numberTwo'),
	resultUser = document.getElementById('resultUser'),
	remark = document.getElementById('remark');

numberOne.innerHTML = Math.floor(Math.random() * 100 + 1);
numberTwo.innerHTML = Math.floor(Math.random() * 100 + 1);

resultUser.addEventListener('keydown', (event) => {
	if (event.key === 'Enter') {
		resultSubmit.click();
	}
});

resultSubmit.addEventListener('click', () => {
	if (Number(numberOne.innerHTML) + Number(numberTwo.innerHTML) === Number(resultUser.value)) {
		remark.style.color = 'green';
		remark.innerHTML = `Das Ergebnis stimmt!`;
	} else {
		remark.style.color = 'red';
		remark.innerHTML = `Das Ergebnis ist leider falsch!`;
	}
});

newTask.addEventListener('click', () => {
	numberOne.innerHTML = Math.floor(Math.random() * 100 + 1);
	numberTwo.innerHTML = Math.floor(Math.random() * 100 + 1);
});
