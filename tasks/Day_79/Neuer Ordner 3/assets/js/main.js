let date = new Date().toISOString().slice(0, 10);
// console.log(date);

let url = `https://newsapi.org/v2/top-headlines?country=de&from=${date}&sortBy=popularity&apiKey=dfa15bcdb22a42bcb28d796f5aee1a9d`;

fetch(url)
	.then((res) => res.json())
	.then((data) => {
		console.log(data.articles);
		for (news of data.articles) {
			document.querySelector('#test').innerHTML += `
			  <p>${news.source.name}</p>
			  <p>${news.title}</p>
			  <img src="${news.urlToImage}"/>
			  <p>${news.description}</p>
			  <a href="${news.url}">More</a>
			`;
		}
	});

require('fs').writeFile('file.json', JSON.stringify(proj), (error) => {
	if (error) {
		throw error;
	}
});
