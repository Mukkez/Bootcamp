let morseAlphabet = [
	{ letter: '1', morseCode: '.----' },
	{ letter: '2', morseCode: '..---' },
	{ letter: '3', morseCode: '...--' },
	{ letter: '4', morseCode: '....-' },
	{ letter: '5', morseCode: '.....' },
	{ letter: '6', morseCode: '-....' },
	{ letter: '7', morseCode: '--...' },
	{ letter: '8', morseCode: '---..' },
	{ letter: '9', morseCode: '----.' },
	{ letter: '0', morseCode: '-----' },
	{ letter: ' ', morseCode: '    ' },
	{ letter: 'A', morseCode: '.-' },
	{ letter: 'B', morseCode: '-...' },
	{ letter: 'C', morseCode: '-.-.' },
	{ letter: 'D', morseCode: '-..' },
	{ letter: 'E', morseCode: '.' },
	{ letter: 'F', morseCode: '..-.' },
	{ letter: 'G', morseCode: '--.' },
	{ letter: 'H', morseCode: '....' },
	{ letter: 'I', morseCode: '..' },
	{ letter: 'J', morseCode: '.---' },
	{ letter: 'K', morseCode: '-.-' },
	{ letter: 'L', morseCode: '.-..' },
	{ letter: 'M', morseCode: '--' },
	{ letter: 'N', morseCode: '-.' },
	{ letter: 'O', morseCode: '---' },
	{ letter: 'P', morseCode: '.--.' },
	{ letter: 'Q', morseCode: '--.-' },
	{ letter: 'R', morseCode: '.-.' },
	{ letter: 'S', morseCode: '...' },
	{ letter: 'T', morseCode: '-' },
	{ letter: 'U', morseCode: '..-' },
	{ letter: 'V', morseCode: '...-' },
	{ letter: 'W', morseCode: '.--' },
	{ letter: 'X', morseCode: '-..-' },
	{ letter: 'Y', morseCode: '-.--' },
	{ letter: 'Z', morseCode: '--..' },
];

const inputText = document.getElementById('input-text');
const output = document.getElementById('output');

const output2 = document.getElementById('output2');

let encrypt = () => {
	output.innerHTML = '';
	output2.innerHTML = '';
	for (inputIndex of inputText.value.toUpperCase()) {
		for (match of morseAlphabet) {
			if (match.letter === inputIndex) {
				output.innerHTML += match.morseCode;
				output2.innerHTML += match.letter + ' -> ' + match.morseCode + '<br>';
			}
		}
	}
};
