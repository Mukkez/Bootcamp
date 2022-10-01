let counterDisplay = document.querySelector('.counter-display');
let counterMinus = document.querySelector('.counter-minus');
let counterMinus10 = document.querySelector('.counter-minus10');
let counterMinus100 = document.querySelector('.counter-minus100');
let counterPlus = document.querySelector('.counter-plus');
let counterPlus10 = document.querySelector('.counter-plus10');
let counterPlus100 = document.querySelector('.counter-plus100');
let counterMal = document.querySelector('.counter-mal');
let counterReset = document.querySelector('.counter-reset');
let count = 0;

updateCount();
counterPlus.addEventListener('click', () => {
	count++;
	updateCount();
});
counterMinus.addEventListener('click', () => {
	count--;
	updateCount();
});
counterPlus10.addEventListener('click', () => {
	count += 10;
	updateCount();
});
counterMinus10.addEventListener('click', () => {
	count -= 10;
	updateCount();
});
counterPlus100.addEventListener('click', () => {
	count += 100;
	updateCount();
});
counterMinus100.addEventListener('click', () => {
	count -= 100;
	updateCount();
});
counterMal.addEventListener('click', () => {
	count *= 2;
	updateCount();
});
counterReset.addEventListener('click', () => {
	count = 0;
	updateCount();
});
function updateCount() {
	counterDisplay.innerHTML = count;
}
