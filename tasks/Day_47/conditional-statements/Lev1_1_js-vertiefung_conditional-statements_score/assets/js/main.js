let result = document.getElementById('result');

function adult() {
	let age = document.getElementById('age').value;
	console.log(age);

	if (age >= 18) {
		console.log(true);
		document.getElementById('result').innerHTML = 'Volljährig';
	} else {
		console.log(false);
		document.getElementById('result').innerHTML = 'Minderjährig';
	}
}
