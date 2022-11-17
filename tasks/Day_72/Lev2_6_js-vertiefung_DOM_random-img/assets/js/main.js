let container = document.getElementById('content'),
	h1 = document.createElement('h1'),
	btn = document.createElement('button'),
	img = document.createElement('img');

h1.textContent = 'Zufälliges Bild mit JavaScript anzeigen';
btn.textContent = 'Click Me';
container.append(h1, btn);

btn.addEventListener('click', () => {
	let randomNumber = Math.floor(Math.random() * data.length);
	img.src = data[randomNumber]['download_url'];
	container.appendChild(img);
});
