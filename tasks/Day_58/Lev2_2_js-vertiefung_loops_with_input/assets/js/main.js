let number = document.getElementById('number'),
	result = document.getElementById('result');

loop = () => {
	let o = [];

	for (let i = 0; i < number.value; i++) {
		o.push('o');
	}
	let str = o.join('');

	result.innerHTML = `
    <p>L${str}p</p>
  `;
};
