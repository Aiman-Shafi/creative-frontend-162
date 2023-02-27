// temp -> 30 -> hot temp
// temp -> < 30 -> normal
// temp -> < 22 -> Cold temp

var temp = 28;

if (temp >= 30) {
  console.log("Weather is hot!");
} else if (temp <= 22) {
  console.log("Weather is cold");
} else {
  console.log("temperature is normal! :)");
}

// Course  -> Math, English, Science
// Find out the average of 3 courses
// Find the actual grade?
// 90 -> A+
// 80 -> A
// 60 -> B+
// 50 -> C
// 40 -> F

var math = 37;
var english = 31;
var science = 61;

var average = (math + english + science) / 3;

console.log("Average:", Math.round(average));

if (average >= 90) {
  console.log("A+ Great Result");
} else if (average >= 80) {
  console.log("You got an A");
} else if (average >= 60) {
  console.log("Good Try, Your grade is B+");
} else if (average >= 50) {
  console.log("Need to try more harder: Grade -> C");
} else if (average >= 40) {
  console.log("You got D");
} else {
  console.log("You failed");
}
