function checkAirQuality() {
	let aqi = document.getElementById('aqiRange').value;
	document.getElementById('aqi').innerHTML = aqi;

	let healthConcern, healthEffect, bgColor, fgColor;

	if (aqi <= 50) {
		healthConcern = 'good';
		healthEffect = 'Little or no risk';
		bgColor = 'green';
		fgColor = 'white';
	} else if (aqi > 50 && aqi <= 100) {
		healthConcern = 'Moderate';
		healthEffect = 'Acceptable quality';
		bgColor = 'yellow';
		fgColor = 'black';
	} else if (aqi > 100 && aqi <= 150) {
		healthConcern = 'Unhealthy for sensitive groups';
		healthEffect = 'General publics not likely affected';
		bgColor = 'orange';
		fgColor = 'black';
	}

	document.getElementById('healthConcern').innerHTML = healthConcern;
	document.getElementById('healthEffect').innerHTML = healthEffect;
	document.getElementById('designSection').style.background = bgColor;
	document.getElementById('designSection').style.color = fgColor;
}
checkAirQuality();
