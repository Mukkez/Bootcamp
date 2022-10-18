const separating = () => {
	radio = document.getElementById('before').checked ? document.getElementById('before').value : document.getElementById('after').value;

	let userInput = document.getElementById('userInput').value,
		seperator = document.getElementById('seperator').value,
		result = document.getElementById('result'),
		searchResult = userInput.search(seperator);

	if (searchResult === -1) {
		result.innerHTML = `<h6 class="me-3">Das Zeichen (${seperator}) konnte nicht gefunden werden</h6>`;
	} else {
		switch (radio) {
			case 'before':
				before = userInput.slice(0, searchResult);
				after = userInput.slice(searchResult);

				result.innerHTML = `<div class="d-flex">
								<h4 class="me-3">Vorderer Teil:</h4>
								<div class="h5"> ${before} </div>
							</div>
							<div class="d-flex h">
								<h4 class="me-3">Hinterer Teil:</h4>
								<div class="h5"> ${after} </div>
							</div>`;

				break;
			case 'after':
				before = userInput.slice(0, searchResult + seperator.length);
				after = userInput.slice(searchResult + seperator.length);

				result.innerHTML = `<div class="d-flex">
								<h4 class="me-3">Vorderer Teil:</h4>
								<div class="h5"> ${before} </div>
							</div>
							<div class="d-flex h">
								<h4 class="me-3">Hinterer Teil:</h4>
								<div class="h5"> ${after} </div>
							</div>`;
				break;
		}
	}
};
