const btnAdd = document.getElementById('btnAdd');
const btnDelete = document.getElementById('btnDelete');
const inputFirstName = document.getElementById('inputFirstName');
const inputLastName = document.getElementById('inputLastName');

let namenBox = document.getElementById('namenBox');
let array = [];

inputLastName.addEventListener('keydown', (event) => {
	if (event.key === 'Enter') {
		btnAdd.click();
	}
});

btnAdd.addEventListener('click', () => {
	array.push(inputFirstName.value + ' ' + inputLastName.value);
	inputFirstName.value = '';
	inputLastName.value = '';
	printName();
});

btnDelete.addEventListener('click', () => {
	array.pop(inputFirstName.value + ' ' + inputLastName.value);
	printName();
});

printName = () => {
	namenBox.innerHTML = '';

	for (let i = 0; i < array.length; i++) {
		namenBox.innerHTML += `<div class="userBox">
					<p class="userNumber">${[i + 1]}. </p>
					<p class="userName">${array[i]}</p>
				</div>`;
	}
};
