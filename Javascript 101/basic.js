//   console.log("Hello World");
//   console.log(10 + 10 + 2);
//   console.log(10 + 10 / 2);

//   alert("LET'S LEARN JS");

// variables

// data types

var box = "apple"; // string
var box2 = "oranges";
var personAge = 23; // number
var age1 = 22;
var age2 = 25; // number

console.log(typeof box);
console.log(typeof personAge);
console.log(box2);
console.log(age1 + " " + age2);

// Varibales should be start with var
// first letter should be small
// first letter cannot be a number!
// it can be define as camelcase - numberOne
var numberOne = 120;
var numberTwo = 230;
// it can be define using underscore - number_one
var number_one = 120;
var number_two = 230;

// operators
var addition = numberOne + numberTwo; // addition
var substraction = numberOne - numberTwo; // substration
var multiplication = numberOne * numberTwo;
var division = numberOne / numberTwo;

console.log("Addition: " + addition);
console.log("substraction: " + substraction);
console.log("multiplication: " + multiplication);
console.log("division: " + division);

//   Data Types

//   boolean - true / false

var isRaining = false;
var isRaining = true;

console.log(isRaining);

// undefined - kono kichu agge theke define kora hoy nai amn
// Number
// String
// Null - khali, 0

// undefined
var counter;
console.log(counter);

// null
var number = null;
console.log(number);

// NaN - not a number
var counterOne = 56;
console.log(counterOne * "hi");

//  Conditions (if & else)

var isDarkMode = true;

if (isDarkMode == false) {
  console.log("Dark mode is enabled on the website!");
} else {
  console.log("Dark mode is off!");
}

//   if (!isDarkMode) {
//     console.log("Dark mode is enabled on the website!");
//   } else {
//     console.log("Dark mode is off!");
//   }

var isRaining = true;

if (isRaining == false) {
  console.log("shopping e jabo!");
} else {
  console.log("shopping e jabo naaa!");
}

//   if (!isRaining) {
//     console.log("shopping e jabo!");
//   } else {
//     console.log("shopping e jabo naaa!");
//   }

if (2 > 1) {
  console.log(true);
} else {
  console.log(false);
}

// % - Modulus
//

var givenNum = 10;

// odd - 1,3,5,7,9,11,...
// even - 2,4,6,8,12,10,...

if (givenNum % 2 == 0) {
  console.log(givenNum, "is an even number");
} else {
  console.log("Odd number");
}
