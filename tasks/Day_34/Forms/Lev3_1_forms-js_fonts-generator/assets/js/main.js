function getTextValue() {
	textField = document.getElementById('textField').value;
	result.innerHTML = textField;
}
function changeFontSize() {
	fontSize = document.getElementById('fontSize').value;
	result.style.fontSize = fontSize + 'px';
}
function changeMood() {
	fontFamily = document.getElementById('mood').value;
	result.style.fontFamily = fontFamily;
}
