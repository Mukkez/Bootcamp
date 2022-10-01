let heading = document.getElementById('heading');
let list = document.getElementById('list');

function changeHeadline() {
	heading.classList.add('heading');
	list.classList.add('list');
}
function resetHeadline() {
	heading.classList.toggle('heading');
	list.classList.toggle('list');
}
