function changeForm() {
	document.getElementById('form').classList.add('invisible');
	document.getElementById('div').classList.remove('invisible');
	console.log(document.getElementById('mail').value);
}

function refreshPage() {
	document.getElementById('div').classList.add('invisible');
	document.getElementById('form').classList.remove('invisible');
	document.getElementById('mail').value = '';
	console.clear();
}
