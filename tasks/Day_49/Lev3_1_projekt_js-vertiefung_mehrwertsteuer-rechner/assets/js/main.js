const taxRate1 = 19;
const taxRate2 = 7;

let betrag = 0;

let mwstValue19 = document.getElementById('taxRateValue19');
let mwstValue07 = document.getElementById('taxRateValue07');
let currency = document.getElementById('currencySign');
let betragValue = document.getElementById('betragValue');
let taxValue = document.getElementById('taxValue');
let resultValue = document.getElementById('resultValue');
let calculationType = document.getElementById('calculationType');
let resultText = document.getElementById('resultText');

// *================= Start angaben festlegen =================
start();
function start() {
	mwstValue19.innerHTML = `${taxRate1}%`;
	mwstValue07.innerHTML = `${taxRate2}%`;
	currency.innerHTML = `€`;
	taxValue.innerHTML = '0,00';
	resultValue.innerHTML = '0,00';

	// *================= Gehe zu Funktion Typ festlegen =================
	calculationTypeCheck();
}

// *================= Typ festlegen =================
function calculationTypeCheck() {
	// *================= Gibt true oder false zurück für den ersten Radiobutton =================
	task = document.getElementById('nettoToBrutto').checked;

	// *================= Wenn task true gib 'Netto..' aus, wenn false dann 'Brutto...' =================
	calculationType.innerHTML = task ? `Nettobetrag (Preis ohne MwSt.) in €` : `Bruttobetrag (Preis inkl. MwSt.) in €`;

	// *================= Wenn task true gib 'taxRate1' aus, wenn false dann 'taxRate1' =================
	valueTax = mwstValue19.checked ? taxRate1 : taxRate2;

	// *================= Wenn task true gib 'Bruttobetrag' aus, wenn false dann 'Nettobetrag' =================
	resultText.innerHTML = task ? 'Bruttobetrag:' : 'Nettobetrag:';
}

function berechnen() {
	let taxes = 0;
	let final = 0;
	let taxRate = valueTax;

	let betrag = Number(betragValue.value);

	// *================= Ist der erste Radiobutton true dann wird die MwSt. dazugerechnet =================
	if (task == true) {
		taxes = Math.round(betrag * taxRate) / 100;
		final = betrag * 1 + taxes;

		// *================= Ist der erste Radiobutton false dann wird die MwSt. abgezogen =================
	} else {
		taxes = Math.round((betrag - (betrag * 100) / (100 + taxRate)) * 100) / 100;
		final = betrag - taxes;
	}

	// *================= Gib das Ergebnis aus und ändere den Punkt in ein Komma =================
	taxValue.innerHTML = taxes.toFixed(2).replace('.', ',') + ' €';
	resultValue.innerHTML = final.toFixed(2).replace('.', ',') + ' €';
}
