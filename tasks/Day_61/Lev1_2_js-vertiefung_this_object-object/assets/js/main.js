let person = {
	vorname: 'Anton',
	nachname: 'Nüssler',
	alter: 34,
	familienstand: 'ledig',
	groesse: '178cm',
	profil: function () {
		return `Meine name ist ${this.vorname} ${this.nachname} und ich bin ${this.alter} Jahre alt, mein Familienstand ist ${this.familienstand} und ich bin ${this.groesse} groß.`;
	},
};
//gib das Profil von Anton mit diesem Code im Element mit der "person" aus.
document.getElementById('person').innerHTML = person.profil();
