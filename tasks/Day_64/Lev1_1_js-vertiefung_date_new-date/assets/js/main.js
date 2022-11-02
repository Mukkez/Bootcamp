let date1 = new Date('September 2, 2019 09:00:00'),
	date2 = new Date(0),
	date3 = new Date(31556908800),
	date4 = new Date(86400000);

date.innerHTML = `${date1} = new Date("Septemper 2, 2019 09:00:00) <br>  ${date2} = new Date(0) <br> ${date3} = new Date(31556908800)  <br> ${date4} = new Date(86400000)`;
