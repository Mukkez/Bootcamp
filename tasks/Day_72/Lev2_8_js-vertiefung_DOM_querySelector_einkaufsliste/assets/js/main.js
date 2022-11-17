let userInput = document.getElementById('userinput');
userInput.addEventListener('keydown', (elt) => {
	if (elt.key === 'Enter') buttonCode();
});
function buttonCode() {
	let li = document.createElement('li');
	li.appendChild(document.createTextNode(userInput.value));
	document.querySelector('ul').appendChild(li);
	document.getElementById('userinput').value = '';
}
