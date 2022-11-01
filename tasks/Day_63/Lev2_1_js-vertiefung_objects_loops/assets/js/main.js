let edelMetallPreise = [
	{ name: 'Gold', preiseGramEuro: 42.91, veraenderung: '+0.12%' },
	{ name: 'Silber', preiseGramEuro: 0.51, veraenderung: '+1.02%' },
	{ name: 'Platin', preiseGramEuro: 25.74, veraenderung: '+0.41%' },
	{ name: 'Palladium', preiseGramEuro: 50.93, veraenderung: '0.00%' },
	{ name: 'Rhodium', preiseGramEuro: 160.12, veraenderung: '-0.10%' },
	{ name: 'Iridium', preiseGramEuro: 42.84, veraenderung: '0.00%' },
	{ name: 'Ruthenium', preiseGramEuro: 7.36, veraenderung: '0.00%' },
	{ name: 'Rhenium', preiseGramEuro: 37.22, veraenderung: '-0.53%' },
	{ name: 'Osmium', preiseGramEuro: 11.54, veraenderung: '0.00%' },
];

console.log('%c----------- Verwende forEach() und greife auf alle name zu. Pushe diese in ein neues Array. -------', 'color:#00ff00');

let namePush = [];
edelMetallPreise.forEach((y) => {
	namePush.push(y.name);
});
console.log(namePush);

console.log('%c----------- Verwende map() und greife auf alle name zu. -------', 'color:#00ff00');
let nameMap = edelMetallPreise.map((x) => x.name);
console.log(nameMap);

console.log('%c----------- Verwende forEach() und greife auf alle preiseGramEuro zu und pushe diese ein neues Array. -------', 'color:#00ff00');
let preiseGramEuroPush = [];
edelMetallPreise.forEach((y) => {
	preiseGramEuroPush.push(y.preiseGramEuro);
});
console.log(preiseGramEuroPush);

console.log('%c----------- Verwende map() und greife auf alle preiseGramEuro zu. -------', 'color:#00ff00');
let preiseGramEuroMap = edelMetallPreise.map((x) => x.preiseGramEuro);
console.log(preiseGramEuroMap);

console.log('%c----------- Verwende forEach() und greife auf alle veraenderung zu und pushe in ein neues Array. -------', 'color:#00ff00');
let veraenderungPush = [];
edelMetallPreise.forEach((y) => {
	veraenderungPush.push(y.veraenderung);
});
console.log(veraenderungPush);

console.log('%c----------- Verwende map() und greife auf alle veraenderung zu. -------', 'color:#00ff00');
let veraenderungMap = edelMetallPreise.map((x) => x.veraenderung);
console.log(veraenderungMap);

console.log('%c----------- Verwende filter() und greife auf preiseGramEuro die teurer als 50 Euro zu. -------', 'color:#00ff00');

const preiseGramEuroFilter = edelMetallPreise.filter(function (x) {
	return x.preiseGramEuro >= 50;
});

for (const x of preiseGramEuroFilter) {
	console.log(x.preiseGramEuro);
}

console.log('%c----------- Gib alles als Tabelle in deinem HTML-Dokument aus. -------', 'color:#00ff00');

let table = document.getElementById('table');

for (c of edelMetallPreise) {
	table.innerHTML += '<tr>' + '<td>' + c.name + '</td><td>' + c.preiseGramEuro + '</td><td>' + c.veraenderung + '</td></tr>';
}
