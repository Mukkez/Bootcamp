let studentData = [
	{
		name: 'Alex',
		age: 23,
		coop: false,
		address: {
			street: 'Don Valley Business Park',
			city: 'Toronto',
			postalCode: 'ONM3C3E5',
		},
		emails: ['alex69@gmail.com', 'alex123@yahoo.com'],
	},
	{
		name: 'Sandra',
		age: 22,
		coop: true,
		address: {
			street: '34 Lawrence Ave',
			city: 'Toronto',
			postalCode: 'ONM3C0E5',
		},
		emails: ['sandra@gmail.com', 'sandra@yahoo.com'],
	},
];

console.log('%c-----------lev1_8: forEach()-------', 'color:#00ff00');

studentData.forEach((a) => console.log(a.name, a.coop, a.address.city, a.emails));

console.log('%c-----------lev1_8: map()-------', 'color:#00ff00');

let output = studentData.map(function ({ name, coop, emails }) {
	console.log(name, coop, emails);
});
