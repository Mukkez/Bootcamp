let myMusic = [
	{
		artist: 'The Beatles',
		title: 'Abbey Road',
		release_year: 1969,
		medium: ['LP', 'CD', 'MC', 'Download'],
		gold: true,
	},
	{
		artist: 'Pink Floyd',
		title: 'Dark Side of the Moon',
		release_year: 1978,
		medium: ['CS', 'CD', 'LP', 'Download'],
		gold: true,
	},
	{
		artist: 'Led Zeppelin',
		title: 'Led Zeppelin IV',
		release_year: 1971,
		medium: ['CS', 'LP', 'Download'],
		gold: true,
	},
	{
		artist: 'Metallica',
		title: 'Kill ’Em All und Ride the Lightning',
		release_year: 1983,
		medium: ['LP', 'CD', 'MC', 'Download'],
		gold: true,
	},
];

// Füge zu dem Objekt Deine Lieblingsmusik hinzu.
console.log('%c----------- Füge zu dem Objekt Deine Lieblingsmusik hinzu. -----------', 'color:#00ff00');
myMusic.push({});
myMusic[4].artist = 'Eminem';
myMusic[4].title = '8 Mile';
myMusic[4]['release year'] = 2002;
myMusic[4].medium = ['LP', 'CD', 'MC', 'MiniDisc', 'Download'];
myMusic[4].gold = true;

console.log(myMusic);

// "The Beatles"
console.log('%c----------- "The Beatles" -----------', 'color:#00ff00');
console.log(myMusic[0].artist);

// Von Pink Floyd: "Download"
console.log('%c----------- Von Pink Floyd: "Download" -----------', 'color:#00ff00');
console.log(myMusic[1].medium[3]);

// Von Pink Floyd: true
console.log('%c----------- Von Pink Floyd: true -----------', 'color:#00ff00');
console.log(myMusic[1].gold);

// 1971 und 1983
console.log('%c----------- 1971 und 1983 -----------', 'color:#00ff00');
console.log(myMusic[2].release_year, myMusic[3].release_year);

// Von Metallica: "MC"
console.log('%c----------- Von Metallica: "MC" -----------', 'color:#00ff00');
console.log(myMusic[3].medium[2]);

// Von Metallica das Wort: Ride
console.log('%c----------- Von Metallica das Wort: Ride -----------', 'color:#00ff00');
let ride = myMusic[3].title.split(' ');
console.log(ride[4]);

// Von Led Zeppelin das Wort: IV:
console.log('%c----------- Von Led Zeppelin das Wort: IV: -----------', 'color:#00ff00');
let iv = myMusic[2].title.split(' ');
console.log(iv[2]);

// Von Pink Floyd das Wort: Floyd
console.log('%c----------- Von Pink Floyd das Wort: Floyd -----------', 'color:#00ff00');
let floyd = myMusic[1].artist.split(' ');
console.log(floyd[1]);
