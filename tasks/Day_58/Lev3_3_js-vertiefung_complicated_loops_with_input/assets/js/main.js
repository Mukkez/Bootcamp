let number = document.getElementById('number'),
	result = document.getElementById('result'),
	str = '';

loop = () => {
	if (number.value == 0) {
		result.innerHTML = `
    <p class="error">ERROR</p>
  `;
	} else {
		for (let i = 0; i < number.value; i++) {
			if (i % 2 === 0) {
				let o = [];
				for (let i = 0; i < number.value; i++) {
					if (i % 2 === 0) {
						o.push('o');
					} else {
						o.push('0');
					}
				}
				str = o.join('');
			} else {
				let o = [];
				for (let i = 0; i < number.value; i++) {
					o.push('o');
				}
				str = o.join('');
			}
		}
		result.innerHTML = `
    <p>L${str}p</p>
  `;
	}
};
