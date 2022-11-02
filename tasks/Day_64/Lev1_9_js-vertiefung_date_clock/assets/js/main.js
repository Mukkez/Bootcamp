let monate = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];

function time() {
	let timeNow = new Date();
	monthNr = timeNow.getMonth();

	date.innerHTML = `${timeNow.getDate()} ${monate[monthNr]} ${timeNow.getFullYear()}`;
	day.innerHTML = new Date().toLocaleString('de-de', { weekday: 'long' });
	outputTime.innerHTML = `${timeNow.getHours()}:${timeNow.getMinutes()}:${timeNow.getSeconds()}`;
	setTimeout(time, 500);
}
