let result = document.getElementById('result'),
	i = 0,
	text = '';

do {
	i += 2;
	text += `The number is ${i} <br>`;
	console.log(`The number is ${i}`);
} while (i < 20);

result.innerHTML = text;
