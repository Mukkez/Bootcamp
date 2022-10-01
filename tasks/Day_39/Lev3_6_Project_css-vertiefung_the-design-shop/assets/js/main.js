const toggleBtn = document.getElementsByClassName('toggleBtn')[0];
const listContainer = document.getElementsByClassName('list-container')[0];

toggleBtn.addEventListener('click', () => {
	listContainer.classList.toggle('active');
	toggleBtn.classList.toggle('active');
});
