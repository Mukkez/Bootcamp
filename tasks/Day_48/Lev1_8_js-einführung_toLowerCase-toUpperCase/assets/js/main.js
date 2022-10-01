const text = 'Sam is going to codingschool';

//Aufgabe 1
let a = text.toUpperCase();
let a1 = a.replace('CODINGSCHOOL', 'SCHOOL');
document.write(a1 + '<br>');

//Aufgabe 2
let b = text.toLowerCase();
let b1 = b.replace('codingschool', 'school');
document.write(b1 + '<br>');

//Aufgabe 3
let c = a.slice(0, 4);
let c1 = b.slice(4, 16);
let c2 = a.slice(-6);

document.write(c + c1 + c2 + '<br>');

//Aufgabe 4
let d = b.slice(0, 4);
let d1 = a.slice(4, 16);
let d2 = b.slice(-6);
document.write(d + d1 + d2 + '<br>');
