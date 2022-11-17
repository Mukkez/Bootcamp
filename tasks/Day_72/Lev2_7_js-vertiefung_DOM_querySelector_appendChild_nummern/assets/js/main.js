let counter = 0;
document.querySelector('#btn').addEventListener('click', () => {
	let output = document.createElement('p');
	counter === 0 || counter % 10 === 0 ? output.classList.add('weiss') : output.classList.add('rechteck');
	output.textContent = counter++;
	document.querySelector('.umwickeln').appendChild(output);
});
