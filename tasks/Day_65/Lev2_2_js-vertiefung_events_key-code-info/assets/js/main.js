document.body.addEventListener('keydown', (e) => {
	document.querySelector('#outputKey').innerText = e.key;
	document.querySelector('#outputKeyCode1').innerText = e.which; //veraltet
	document.querySelector('#outputKeyCode2').innerText = e.keyCode; //veraltet
	document.querySelector('#outputCode').innerText = e.code;
});
