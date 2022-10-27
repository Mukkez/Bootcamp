// Variablen bestimmen

let userInput = document.getElementById('userInput'),
	userKey = document.getElementById('userKey'),
	outputResult = document.getElementById('outputResult'),
	outputAlphabet = document.getElementById('outputAlphabet'),
	outputNewAlphabet = document.getElementById('outputNewAlphabet'),
	outputKey = document.getElementById('outputKey'),
	newAlphabet = [],
	op = '',
	alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// versteckt das Alphabet
function hideShow() {
	if (outputNewAlphabet.style.display === 'none') {
		outputNewAlphabet.style.display = 'grid';
	} else {
		outputNewAlphabet.style.display = 'none';
	}
}

function addWert(e) {
	userInput.innerHTML += e;
}
function btnSpace() {
	userInput.innerHTML += ' ';
}
function btnDelete() {
	let newUserInput = userInput.innerHTML;
	userInput.innerHTML = newUserInput.replace(/.$/, '');
}

// Gibt das Alphabet auf der Seite aus.
outputAlphabet.innerHTML = alphabet
	.map((b) => {
		return `<p onclick="addWert('${b}')">${b}</p>`;
	})
	.join(' ');

// function Kodieren.
function btnCheck() {
	op = '+';
	newAlphabet = [];
	let codeIn = userInput.value;
	outputResult.innerHTML = check(codeIn);
}

// function Dekodieren.
function btnChange() {
	op = '-';
	newAlphabet = [];
	userInput.value = outputResult.innerHTML;
	let codeIn = userInput.value;
	outputResult.innerHTML = check(codeIn);
}

// Haupt function
function check(a) {
	let key = Number(userKey.value);
	outputKey.innerHTML = userKey.value;
	// prüft welcher Rechenoperator zuständig ist.
	// Bei PLUS neues Alphabet.
	if (op === '+') {
		// Ermittelt neues Alphabet mit dem userKey
		for (let i = 0; i < alphabet.length; i++) {
			let newArray = (i + key) % alphabet.length;
			newAlphabet.push(alphabet[newArray]);
		}
		// output von dem neuen Alphabet.
		outputNewAlphabet.innerHTML = newAlphabet
			.map((b) => {
				return `<p>${b}</p>`;
			})
			.join(' ');

		// bei MINUS normales Alphabet.
	} else if (op === '-') {
		outputNewAlphabet.innerHTML = alphabet
			.map((b) => {
				return `<p>${b}</p>`;
			})
			.join(' ');
	}

	// wandelt die Wörter (via ASCII-Zeichen) um und beachtet dabei Groß- und Kleinschreibung.
	return a
		.split('')
		.map((txt) => {
			let lettersNumber = txt.charCodeAt(0);
			if ('A' <= txt && txt <= 'Z' && op === '+') {
				lettersNumber = ((lettersNumber - 65 + key) % 26) + 65;
			} else if ('A' < txt && txt <= 'Z' && op === '-') {
				lettersNumber = ((lettersNumber - 65 - key) % 26) + 65;
			} else if ('a' <= txt && txt <= 'z' && op === '+') {
				lettersNumber = ((lettersNumber - 97 + key) % 26) + 97;
			} else if ('a' < txt && txt <= 'z' && op === '-') {
				lettersNumber = ((lettersNumber - 97 - key) % 26) + 97;
			}
			return String.fromCharCode(lettersNumber);
		})
		.join('');
}
