let result = document.querySelector('#result'),
	name = document.querySelector('#name'),
	age = document.querySelector('#age'),
	examCheck = document.querySelector('#examCheck'),
	btn = document.querySelector('#button');

class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	write() {
		let txt = document.createElement('p');
		txt.innerText = `• ${this.name} is ${this.age} years old.`;
		examCheck.checked == true ? (txt.style.color = 'red') : '';
		result.appendChild(txt);
	}
}

btn.addEventListener('click', () => {
	let newPerson = new Person(name.value, age.value);
	newPerson.write();
});
