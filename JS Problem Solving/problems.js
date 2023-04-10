// Determine if a number is positive, negative, or zero

function checkNumber(num) {
  if (num > 0) {
    return "positive number";
  } else if (num < 0) {
    return "negative number";
  } else {
    return "number is 0";
  }
}

// console.log(checkNumber(10));
// console.log(checkNumber(-10));
// console.log(checkNumber(0));

// Determine if a year is a leap year

// Hint: year / 4 and  not divided by 100 = leap year
// Hint: year / 400 = leap year

// let year = 1876;

function checkLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year, "is a leap year");
  } else {
    console.log(year, "not a leap year");
  }
}

// checkLeapYear(2024);

// Determine the minimum of two numbers without Math.min()

// let x = Math.min(5, 10);
// console.log(x);

function findMin(x, y) {
  if (x < y) {
    return x;
  } else {
    return y;
  }
}

function findMax(x, y) {
  if (x < y) {
    return y;
  } else {
    return x;
  }
}

// console.log(findMax(10, 3));
// console.log(findMin(10, 3));

// Reverse a given string

// let str = "Hello World";

// let reverse = str.split("").reverse().join("");
// // let join = split.join("");

// console.log(reverse);

function reverseString(str) {
  return str.split("").reverse().join("");
}

// console.log(reverseString("Creative Frontend"));

// Problems related to array
// Sum all the elements in an array

let arr = [1, 4, 5, 7, 8, 12, 13, 14, 10];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  //   console.log(arr[i]);
  sum = sum + arr[i];
}

function sumArr(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

// console.log(sumArr([1, 2, 3, 4, 6, 6, 7]));

// console.log("Sum of array:", sum);

//Find the largest element in an array

function findLargest(arr) {
  let largest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    if (arr[i] > largest) {
      largest = arr[i];
    }
    console.log(largest, "largest value till now");
  }

  console.log(largest, "is largest value in an array");
}

findLargest([2, 5, 6, 10, 90, 92, 34, 99]);

// write a function for The FizzBuzz Problem (loop 1-100)
// If the number is divisible by both 3 and 5, it prints "FizzBuzz."
// If the number is divisible by 3 but not by 5, it prints "Fizz."
// If the number is divisible by 5 but not by 3, it prints "Buzz."
// If the number is not divisible by 3 or 5, it prints the number itself.

function fizzBuzz() {
  for (let i = 0; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log(i, "FizzBuzz");
    } else if (i % 3 === 0) {
      console.log(i, "Fizz");
    } else if (i % 5 === 0) {
      console.log(i, "Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz();

// Array filtering: Write a function that takes an array of numbers and a condition (e.g., even, odd, greater than x), and returns a new array with only the numbers that meet the condition.

function filterArray(arr, condition) {
  let filteredArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (condition(arr[i])) {
      filteredArr.push(arr[i]);
    }
  }
  console.log(filteredArr);
}

function isEven(num) {
  return num % 2 === 0;
}

function isOdd(num) {
  return num % 2 !== 0;
}

function greaterThanX(num, x) {
  return num > x;
}

filterArray([1, 2, 3, 4, 5, 6], isEven);
filterArray([1, 2, 3, 4, 5, 6], isOdd);
filterArray([1, 2, 3, 4, 5, 6, 7, 8, 9], (num) => greaterThanX(num, 5));
