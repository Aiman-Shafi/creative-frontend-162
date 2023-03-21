let fruits = ["apple", "orange", "kiwi", "banana", "berry", "papaya", 0, 23];

console.log(fruits[8]); // using index
console.log(fruits.length); // length of an array
console.log(fruits.indexOf("banana")); // find the index of item of an array

console.log(fruits);

// array methods
fruits.pop(); // remove last item from an array
fruits.push("strawberry"); // add an item
fruits.shift(); // remove an item from the first index
fruits.unshift("berries"); // add an item in the first index

console.log(fruits);

let numbers = [1, 3, 56, 34, 67, 65, 32, 12, 9, 90, 78];

//splice - adding new items to an array (index | delete | new items name)

// numbers.splice(0, 0, 11, 12, 13);
// numbers.splice(3, 0, "chicken", "fish", 45);

console.log(numbers);

let slice = numbers.slice(5); // removing items from an array
console.log(slice);

// sorting an array

console.log(fruits);
console.log(fruits.sort());
console.log(numbers.sort());
console.log(
  numbers.sort(function (a, b) {
    return a - b;
  })
);

// function add(num1, num2) {
//   //   console.log(num1 + num2);
//   return num1 + num2;
// }

// let sum = add(12, 14);
// console.log(sum);
// console.log(add(12, 14));

console.log(numbers.reverse());
console.log(fruits.reverse());

// array iteration

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// console.log(fruits.length);
