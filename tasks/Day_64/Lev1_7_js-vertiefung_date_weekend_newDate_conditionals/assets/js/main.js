console.log('%c----------- Aufgabe -----------', 'color:#00ff00');

function istWeekend(date) {
	let day = new Date(date);

	if (day.getDay() === 0 || day.getDay() === 6) {
		return 'Weekend';
	} else {
		return 'Arbeitstag';
	}

	// Kurzschreibweise der if
	// return [0, 6].includes(day.getDay()) ? 'Weekend' : 'Arbeitstag';
}

console.log(istWeekend('12, 15, 2019')); // Sonntag = weekend
console.log(istWeekend('2, 16, 2001')); // Freitag = Arbeitstag
console.log(istWeekend('2, 1, 2020')); // Samstag = weekend
console.log(istWeekend('2, 29, 2020')); // Samstag = weekend

output.innerHTML = `
 <p>15.12.2019 war ein Sonntag = ${istWeekend('12, 15, 2019')}</p>
 <p>16.02.2001 war ein Freitag = ${istWeekend('2, 16, 2001')}</p>
 <p>01.02.2020 war ein Samstag = ${istWeekend('2, 1, 2020')}</p>
 <p>29.02.2020 war ein Samstag = ${istWeekend('2, 29, 2020')}</p>
`;

/*========================================================================
======================= Alternative möglichkeit ==========================
==========================================================================
*/

console.log('%c----------- Alternative möglichkeit -----------', 'color:#00ff00');

function istWeekend2(dateAl) {
	let day = new Date(dateAl);

	if (day.getDay() === 0 || day.getDay() === 6) {
		return 'Weekend';
	} else {
		return 'Arbeitstag';
	}
}

console.log(istWeekend2('Dec 15, 2019')); // Sonntag = weekend
console.log(istWeekend2('Feb 16, 2001')); // Freitag = Arbeitstag
console.log(istWeekend2('Feb 1, 2020')); // Samstag = weekend
console.log(istWeekend2('Feb 29, 2020')); // Samstag = weekend

output2.innerHTML = `
 <p>15.12.2019 war ein Sonntag = ${istWeekend2('Dec 15, 2019')}</p>
 <p>16.02.2001 war ein Freitag = ${istWeekend2('Feb 16, 2001')}</p>
 <p>01.02.2020 war ein Samstag = ${istWeekend2('Feb 1, 2020')}</p>
 <p>29.02.2020 war ein Samstag = ${istWeekend2('Feb 29, 2020')}</p>
`;

/*========================================================================
======================= Alternative möglichkeit 2 ========================
==========================================================================
*/

console.log('%c----------- Alternative möglichkeit 2 -----------', 'color:#00ff00');

function istWeekend3(dateAl2) {
	if (dateAl2.getDay() === 0 || dateAl2.getDay() === 6) {
		return 'Weekend';
	} else {
		return 'Arbeitstag';
	}
}

console.log(istWeekend3(new Date('12, 15, 2019'))); // Sonntag = weekend
console.log(istWeekend3(new Date('2, 16, 2001'))); // Freitag = Arbeitstag
console.log(istWeekend3(new Date('2, 1, 2020'))); // Samstag = weekend
console.log(istWeekend3(new Date('2, 29, 2020'))); // Samstag = weekend

output3.innerHTML = `
 <p>15.12.2019 war ein Sonntag = ${istWeekend3(new Date('12, 15, 2019'))}</p>
 <p>16.02.2001 war ein Freitag = ${istWeekend3(new Date('2, 16, 2001'))}</p>
 <p>01.02.2020 war ein Samstag = ${istWeekend3(new Date('2, 1, 2020'))}</p>
 <p>29.02.2020 war ein Samstag = ${istWeekend3(new Date('2, 29, 2020'))}</p>
`;
