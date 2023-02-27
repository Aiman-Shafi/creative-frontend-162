var numOne = -67; // 4, 1, 34,67, - round numbers / natural numbers / integer
var numTwo = 32.872343; // floating point number or decimal number

var add = numOne + numTwo;

console.log(add);
console.log(add.toFixed(2));
console.log(parseInt(add)); // convert the value into integer or round number
console.log(parseFloat(add)); // convert the value into floating or decimal number

var round = Math.round(add); // .5 upore hoy 13.56 > 14 | 9.2 > 9
console.log("Round:", round);

var ceil = Math.ceil(add); // takes the value to the upper level whenever we have a decimal value
console.log("Ceil:", ceil);

var floor = Math.floor(add); // doesn't take the value to upper level whatever the result is..
console.log("Floor:", floor);

console.log("Abs:", Math.abs(add)); // turns the negative value to positive value

var random = Math.floor(Math.random() * 6 + 1); // generate a number between 0 to 6
console.log("random:", random);
// console.log(); // generate a number between 0 and 1
