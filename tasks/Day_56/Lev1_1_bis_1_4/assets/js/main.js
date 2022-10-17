//-----------Übung lev1_1: forEach()
console.log('%c-----------lev1_1: forEach()-------', 'color:#00ff00');
let ausgabe_forEach = document.getElementById('ausgabe_forEach');

let getraenke = ['Coca-Cola', 'Apfelsaft', 'Pepsi', 'Traubensaft', 'Sprite', 'Orangensaft', 'Red Bull Energy Drink', 'Fanta'];

let newGetraenke = getraenke.sort();
console.log(newGetraenke);

newGetraenke.forEach((myDrinks) => {
	console.log(myDrinks);
	ausgabe_forEach.innerHTML += myDrinks + '<br>';
});

//-----------Übung lev1_2: array-iteration_map()
console.log('%c-----------lev1_2: array-iteration_map()-------', 'color:#00ff00');
let ausgabe_iteration_map = document.getElementById('ausgabe_iteration_map');

let upperDrinks = getraenke.map((groß) => {
	return groß.toUpperCase();
});
console.log(upperDrinks);
ausgabe_iteration_map.innerHTML = upperDrinks;

//-----------Übung lev1_3: array-iteration_map()_sort()
console.log('%c-----------lev1_3: array-iteration_map()_sort()-------', 'color:#00ff00');

let ausgabe_iteration_map_sort = document.getElementById('ausgabe_iteration_map_sort');

let array = [18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5, 30, 74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78];

let sortArray = array.sort((a, b) => a - b);
console.log(sortArray);

sortArray.forEach((multi) => {
	console.log(multi * 2);
	ausgabe_iteration_map_sort.innerHTML += multi * 2;
});

//-----------Übung lev1_4: array-iteration_map_math.round
console.log('%c-----------lev1_4: array-iteration_map_math.round-------', 'color:#00ff00');

let ausgabe_iteration_map_math_round = document.getElementById('ausgabe_iteration_map_math.round');
let ausgabe_iteration_map_math_round2 = document.getElementById('ausgabe_iteration_map_math.round2');

let fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];

let celsius = fahrenheit.map((f) => {
	item = (f - 32) / 1.8;

	return Math.floor(item).toFixed(0);
});
console.log(fahrenheit);
console.log(celsius);

ausgabe_iteration_map_math_round.innerHTML = fahrenheit;
ausgabe_iteration_map_math_round2.innerHTML = celsius;
