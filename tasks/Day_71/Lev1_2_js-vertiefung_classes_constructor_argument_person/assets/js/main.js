class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
		this.info = () => {
			console.log(`${this.name} is ${this.age} year old.`);
		};
	}
}
let person = new Person('Emanuela', 18);
person.info();
