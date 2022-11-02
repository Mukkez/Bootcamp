function getAmPm(date) {
	return date.getHours() < 12 ? 'AM' : 'PM';
}

console.log(getAmPm(new Date(1999, 10, 5, 15)));
console.log(getAmPm(new Date()));
console.log(getAmPm(new Date(2019, 12, 3, 12)));
console.log(getAmPm(new Date(2000, 1, 1, 11)));
