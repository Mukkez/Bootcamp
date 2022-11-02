let monate = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];

let wochenTag = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];

let date = new Date();
p1.innerHTML = date;
p2.innerHTML = date.getFullYear();
p3.innerHTML = date.getMonth() + ' Monat';
p4.innerHTML = date.getDate() + ' Tag';
p5.innerHTML = date.getHours() + ' Stunde';
p6.innerHTML = date.getMinutes() + ' Minute';
p7.innerHTML = wochenTag[3];
p8.innerHTML = monate[10];

let weekDay = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function time() {
	let timeNow = new Date();
	let dayNr = timeNow.getDay();
	let dayName = weekDay[dayNr];
	day.innerHTML = dayName;

	hours.innerHTML = timeNow.getHours();
	minutes.innerHTML = timeNow.getMinutes();
	seconds.innerHTML = timeNow.getSeconds();
	period.innerHTML = timeNow.getHours() >= 12 ? 'PM' : 'AM';
	setTimeout(time, 500);
}
