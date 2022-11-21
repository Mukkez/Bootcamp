let output = document.querySelector('#content');

data.forEach((data) => {
	let img = document.createElement('img'),
		h1 = document.createElement('h1'),
		p = document.createElement('p');

	img.src = data.url;
	h1.innerText = data.question;
	output.append(img, h1);

	for (btnText of data.choice) {
		let btn = document.createElement('button');
		btn.innerText = btnText;
		btn.value = btnText;

		p.appendChild(btn);
		output.appendChild(p);

		btn.addEventListener('click', (e) => {
			btn.value == String(data.answer) ? (e.target.style.background = 'green') : (e.target.style.background = 'red');
		});
	}
});
