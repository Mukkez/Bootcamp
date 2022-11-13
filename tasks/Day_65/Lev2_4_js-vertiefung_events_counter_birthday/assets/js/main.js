document.querySelector('#dayOut').style.display = 'none';
document.querySelector('#stdOut').style.display = 'none';
document.querySelector('#minOut').style.display = 'none';
document.querySelector('#sekOut').style.display = 'none';

document.querySelector('#inputDate').addEventListener('click', (e) => {
	setInterval(function () {
		const date = new Date(),
			currentDate = date.toISOString().slice(0, 10),
			dateFuture = document.querySelector('#inputDate').value,
			Difference_In_Time = new Date(dateFuture).getTime() - new Date(currentDate).getTime(),
			Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

		if (dateFuture < currentDate) {
			document.querySelector('#out').innerHTML = 'Besser spät als nie: von ❤️ alles Gute nachträglich zum Geburtstag! 😀';
		} else if (dateFuture == currentDate) {
			document.querySelector('#out').innerHTML = 'Heute ist dein Geburstag alles Gute 🥳 🥂';
		} else {
			document.querySelector('#out').innerHTML = 'Bald kann deine Geburtstagsfeier starten! noch:';
			document.querySelector('#dayOut').style.display = 'block';
			document.querySelector('#stdOut').style.display = 'block';
			document.querySelector('#minOut').style.display = 'block';
			document.querySelector('#sekOut').style.display = 'block';
			dayOutput.innerText = Difference_In_Days - 1;
			stdOutput.innerText = 24 - date.getHours();
			minOutput.innerText = 60 - date.getMinutes();
			sekOutput.innerText = 60 - date.getSeconds();
		}
	}, 1000);
});
