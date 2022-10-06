function myFunct(nummer) {
	let a = nummer;
	let b;
	if (a > 27) {
		b = 2 * (a - 27);
		console.log(b);
	} else {
		console.log('Nummer ist kleiner als 27');
	}
}
myFunct(35);
myFunct(74);
myFunct(123);
myFunct(5);
