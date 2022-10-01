let result = document.getElementById('result');
let weatherResult = document.getElementById('result');

function checkWeather() {
	let weather = document.getElementById('weather').value;

	if (weather >= 8 && weather <= 10) {
		weatherResult.innerHTML = 'Super ';
	} else if (weather >= 6 && weather <= 7) {
		weatherResult.innerHTML = 'Gut';
	} else if (weather >= 3 && weather <= 5) {
		weatherResult.innerHTML = 'Okay';
	} else if (weather >= 0 && weather <= 2) {
		weatherResult.innerHTML = 'Schlecht';
	} else {
		weatherResult.innerHTML = 'Gib eine Werte zwischen 0 bis 10 ein';
	}
}
