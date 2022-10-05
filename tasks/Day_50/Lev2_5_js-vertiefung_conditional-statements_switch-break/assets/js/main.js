function check() {
	let bl = document.getElementById('bundeslandSelect').value;

	let res;
	switch (bl) {
		case 'Baden-Württemberg':
			res = 'Baden-Württemberg hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt';
			break;
		case 'Bayern':
			res = 'Bayern hat 12,844 Mio Einwohner und München ist die Hauptstadt';
			break;
		case 'Berlin':
			res = 'Berlin hat 3,520 Mio Einwohner und Berlin ist die Hauptstadt';
			break;
		case 'Brandenburg':
			res = 'Brandenburg hat 2,485 Mio Einwohner und Potsdam ist die Hauptstadt';
			break;
		case 'Bremen':
			res = 'Bremen hat 0,671 Mio Einwohner und Bremen ist die Hauptstadt';
			break;
		case 'Hamburg':
			res = 'Hamburg hat 1,787 Mio Einwohner und Hamburg ist die Hauptstadt';
			break;
		case 'Hessen':
			res = 'Hessen hat 6,176 Mio Einwohner und Wiesbaden ist die Hauptstadt';
			break;
		case 'Mecklenburg-Vorpommern':
			res = 'Mecklenburg-Vorpommern hat 1,612 Mio Einwohner und Schwerin ist die Hauptstadt';
			break;
		case 'Niedersachsen':
			res = 'Niedersachsen hat 7,927 Mio Einwohner und Hannover ist die Hauptstadt';
			break;
		case 'Nordrhein-Westfalen':
			res = 'Nordrhein-Westfalen hat 17,865 Mio Einwohner und Düsseldorf ist die Hauptstadt';
			break;
		case 'Rheinland-Pfalz':
			res = 'Rheinland-Pfalz hat 4,053 Mio Einwohner und Mainz ist die Hauptstadt';
			break;
		case 'Saarland':
			res = 'Saarland hat 0,996 Mio Einwohner und Saarbrücken ist die Hauptstadt';
			break;
		case 'Sachsen':
			res = 'Sachsen hat 4,085 Mio Einwohner und Dresden ist die Hauptstadt';
			break;
		case 'Sachsen-Anhalt':
			res = 'Sachsen-Anhalt hat 2,245 Mio Einwohner und Magdeburg ist die Hauptstadt';
			break;
		case 'Schleswig-holstein':
			res = 'Schleswig-Holstein hat 2,859 Mio Einwohner und Kiel ist die Hauptstadt';
			break;
		case 'Thüringen':
			res = 'Thüringen hat 2,171 Mio Einwohner und Erfurt ist die Hauptstadt';
			break;
		default:
			res = `Was? ${bl} ist doch Bundesland!`;
			break;
	}
	document.getElementById('bundeslandInfoErgebnis').innerHTML = res;
}
