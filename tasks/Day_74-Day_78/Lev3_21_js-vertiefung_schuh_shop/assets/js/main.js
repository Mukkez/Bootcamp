let cookieBtn = document.querySelectorAll('.cookie-btn'),
	cookie = document.querySelector('#cookie');

// *********************** Check Cookie ***********************

function getCookie(cname) {
	let name = cname + '=';
	let decodedCookie = decodeURIComponent(document.cookie);
	let ca = decodedCookie.split(';');
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return '';
}

function checkCookie() {
	let user = getCookie('username');
	if (user != '') {
		cookie.style.display = 'none';
	} else {
		cookie.style.display = 'flex';
	}
}
checkCookie();

// *********************** Cookie Banner ***********************
cookieBtn.forEach((btn) => {
	btn.addEventListener('click', () => {
		if (btn.value == 'true') {
			cookie.style.display = 'none';
			document.cookie = 'username=John Smith; expires=Thu, 18 Dec 2022 12:00:00 UTC; path=/';
		} else {
			cookie.style.display = 'none';
		}
	});
});

// *********************** Cookie clear click to Logo ***********************
document.querySelector('.logo').addEventListener('click', () => {
	document.cookie = 'username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
	location.reload();
});

// *********************** Toggle Burger ***********************
let toggleBtn = document.querySelector('.toggleBtn'),
	listContainer = document.querySelector('.list-container');

toggleBtn.addEventListener('click', () => {
	listContainer.classList.toggle('active');
	toggleBtn.classList.toggle('active');
});

// *********************** Show Articel ***********************
let articleSection = document.querySelector('.content-shoes'),
	showArticles = () => {
		data.forEach(function (item) {
			let sizes = item.sizes.toString(),
				sizesArray = sizes.split(','),
				articleSize = '';
			sizesArray.forEach((size) => {
				articleSize += `<p>${size}</p>`;
			});

			articleSection.innerHTML += `
			<div class="article-wrapper">
					<div class="img-wrapper">
						<img class="article-image" src="${item.img}">
					</div>
				<div class="article-header">
					<h4>${item.name}</h4>
					<p class="add-to-cart" id="${item.name}">+</p>
				</div><button class="accordion">${item.price}</button>
				<div class="panel">
					<p>${item.brand}</p>
					<div class="available-sizes">
						${articleSize}
					</div>
				</div>`;
		});
	};
showArticles();

// *********************** ACCORDION ***********************
let accordion = document.getElementsByClassName('accordion');

for (btn of accordion) {
	btn.addEventListener('click', function () {
		this.classList.toggle('active');
		let panel = this.nextElementSibling;
		panel.style.maxHeight ? (panel.style.maxHeight = null) : (panel.style.maxHeight = panel.scrollHeight + 'px');
	});
}

// *********************** Shopping Card ***********************
let articleAdd = document.querySelectorAll('.add-to-cart'),
	articleCount = 0,
	articleCard = '',
	shoppingCard = [];

for (cartAdd of articleAdd) {
	cartAdd.addEventListener('click', (event) => {
		articleCount++;
		data.forEach(function (item) {
			if (event.target.id == item.name) {
				numberOfUnits = 1;
				articleCard += `
					<tr>
						<td><img src="${item.img}" alt="${item.name}"></td>
						<td>${item.brand}</td>
						<td>${item.name}</td>
						<td>${item.price}</td>
						<td>
							<div class="number">
								<input class="btn" type="button" value="+">
								 ${numberOfUnits}
							 <input class="btn" type="button" value="-">
							</div>
						</td>
						<td class="total">${item.price}</td>
						<td><img class="trash" src="assets/img/trash.png"></td>
					</tr>`;
				console.log(shoppingCard);
			}
		});
		document.querySelector('#shoppingCart-counter').innerText = articleCount;
	});
}

let articleCart = document.querySelector('#shoppingCart-image'),
	modal = document.getElementById('myModal'),
	span = document.getElementsByClassName('close')[0];

articleCart.addEventListener('click', () => {
	modal.style.display = 'block';
	articleCount == 0
		? (cartContent.innerHTML = `<img src="assets/img/shopping-cart.svg" alt="">
				<p>The cart is empty</p>
				<p>Add something to make me happy :)</p>`)
		: (cartContent.innerHTML = `
		  <table class="cardContainer">
				<thead>
					<tr>
						<th>Image</th>
						<th>Brand</th>
						<th>Name</th>
						<th>Price</th>
						<th>Quantität</th>
						<th class="total">Price Total</th>
						<th>Remove</th>
					</tr>
				</thead>

				<tbody>
					${articleCard}
				</tbody>
			</table>
		`);
});
span.onclick = () => {
	modal.style.display = 'none';
};
window.onclick = (event) => {
	if (event.target == modal) {
		modal.style.display = 'none';
	}
};

// *********************** Newsletter ***********************
let newesletter = document.querySelector('.newsletter'),
	senden = document.querySelector('#send');

senden.addEventListener('click', () => {
	newesletter.innerHTML = '';
	newesletter.innerHTML = `<h2>Thank you!</h2>
		<p>You will get your response shortly.</p>`;
});
