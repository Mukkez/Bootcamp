let result = document.getElementById('result'),
	i = 0,
	text = '';

do {
	i++;
	text += `The number is ${i} <br>`;
	console.log(`The number is ${i}`);
} while (i < 5);

result.innerHTML = text;
