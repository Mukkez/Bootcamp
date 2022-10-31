let array = [3.14, 193.4464, 0.8596433607, -2.940629089];

let roundedArray = [];

let arrayRounded = (array) => {
	for (let i = 0; i < array.length; i++) {
		roundedArray[i] = Math.round(array[i]);
	}
};
arrayRounded(array);

console.log(array);
console.log(roundedArray);
