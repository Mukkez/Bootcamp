jahr = new Date().getFullYear();

function showAlter() {
	jahresZahl = document.getElementById('jahr').value;
	alter = jahr - jahresZahl;
	ausgabe.innerHTML = alter;
}
