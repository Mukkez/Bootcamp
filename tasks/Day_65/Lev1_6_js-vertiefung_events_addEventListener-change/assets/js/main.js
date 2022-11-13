document.querySelector('#my-select').addEventListener('change', (e) => {
	document.querySelector('#option-selected').innerHTML = `Sie haben ausgewählt ${e.target.value}`;
});
