import { useState } from 'react';
import Button from './Button';
import './BananaBench.css';

const Bench = () => {
	let [input, setInput] = useState();
	let [amount, setAmount] = useState(0);

	const BenchInput = () => {
		amount += Number(input);
		setAmount(amount);
		document.querySelector('#summe').innerHTML = `${amount}€`;
		document.getElementById('inputField').value = '';
	};
	const BenchOutput = () => {
		amount -= Number(input);
		setAmount(amount);
		document.querySelector('#summe').innerHTML = `${amount}€`;
		document.getElementById('inputField').value = '';
	};
	return (
		<div>
			<div action="" className="konto">
				<h2>Dein Konto</h2>
				<h3 id="summe" className="saldo">
					€
				</h3>
				<input type="text" id="inputField" placeholder="Gib einen Geldbetrag ein" required onChange={(e) => setInput(e.target.value)} className="geldbetrag" />
				<div>
					<Button func={BenchInput} btnName="Einzahlen" value="Einzahlen" />
					<Button func={BenchOutput} btnName="Auszahlen" value="Auszahlen" />
				</div>
			</div>
		</div>
	);
};

export default Bench;
