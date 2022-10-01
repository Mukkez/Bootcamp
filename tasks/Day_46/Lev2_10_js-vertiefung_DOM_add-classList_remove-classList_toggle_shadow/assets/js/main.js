function smallChange() {
	document.getElementById('element').classList.remove('middle');
	document.getElementById('element').classList.remove('big');
	document.getElementById('element').classList.toggle('small');
}

function middleChange() {
	document.getElementById('element').classList.remove('big');
	document.getElementById('element').classList.remove('small');
	document.getElementById('element').classList.toggle('middle');
}
function crazyChange() {
	document.getElementById('element').classList.remove('small');
	document.getElementById('element').classList.remove('middle');
	document.getElementById('element').classList.toggle('big');
}
