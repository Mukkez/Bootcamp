let deutscheGerichte = ['Speckkuchen', 'Thüringer Rostbratwurst', 'Quarkkeulchen', 'Sauerbraten'];
console.log('Das ist der Array deutscheGerichte: ' + deutscheGerichte);
console.log(deutscheGerichte);

let nichtGut = [deutscheGerichte.shift(), deutscheGerichte.shift(), deutscheGerichte.shift()];

console.log(nichtGut);
console.log(deutscheGerichte);
