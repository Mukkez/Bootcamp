function hero(heroName, heroPower, heroEnemy) {
	let name = 'Mein Lieblingsheld ist: ' + heroName + '.';
	let power = 'Er hat die Fähigkeit: ' + heroPower + '.';
	let enemy = 'Sein größter Gegner ist: ' + heroEnemy + '.';
	console.log(name + '\n' + power + '\n' + enemy);
}

hero('Superman', 'Schnelligkeit, Stärke, Unverwundbarkeit etc.', 'Lex Luthor');
