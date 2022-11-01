let array = [393, 205, 479, 47, 376, 267, 385, 2, 190, 383, 286, 462, 115, 138, 331, 409, 427, 245, 224, 276, 483, 55, 147, 177, 208, 347, 135, 282, 33, 270, 475, 426, 476, 453, 474, 351, 219, 358, 354, 410, 240, 139, 371, 356, 277, 202, 264, 204, 447, 488];

console.log(array);

console.log('%c----------- Finde mit Math.min den niedrigsten Wert aus dem Array -------', 'color:#00ff00');
let min = Math.min(...array);
console.log('Minimum : ' + min);

console.log('%c----------- Finde nun mit Math.max den höchsten Wert aus dem Array -------', 'color:#00ff00');
let max = Math.max(...array);
console.log('Maximum : ' + max);
