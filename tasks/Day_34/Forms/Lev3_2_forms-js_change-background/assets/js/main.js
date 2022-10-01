function changeBackground() {
	colorRed = document.getElementById('red').value;
	colorGreen = document.getElementById('green').value;
	colorBlue = document.getElementById('blue').value;
	document.body.style.backgroundColor = `rgb(${colorRed}, ${colorGreen}, ${colorBlue})`;
}
