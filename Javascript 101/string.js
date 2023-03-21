let sentence = "Bangladesh is a populated country";
console.log(sentence);
console.log("length:", sentence.length); // to find the total letters in a string

let newSentence = sentence.replace("Bangladesh", "China");
console.log("Replace Word:", newSentence);

// charAt - finding a letter in a string using it's index
console.log(sentence.charAt(11));

// split - seperating a words or letters
let split = sentence.split(" ");
// console.log(split);
// joining an array
// console.log(split.join(" "));

// to remove spaces
let trim = sentence.trim();
// console.log(trim);

// uppercase and lowercase

console.log(sentence.toUpperCase());
console.log(sentence.toLowerCase());

// find a word if it is present or not in a given variable

let paragraph =
  "Lorem ipsum dolor sit amet consectetur, Adipisicing elit. Dolores, possimus ipsum eligendi qui sint ipsam atque reprehenderit. Odit, reiciendis sit!";

let lowercaseP = paragraph.toLowerCase();
console.log(lowercaseP);

let searchWord = "adiisicing";

let search = lowercaseP.indexOf(searchWord.toLowerCase());
// let char = paragraph.charAt(18);
// console.log(char);
console.log(search);

if (search == -1) {
  console.log("Word is missing!!");
} else {
  console.log(searchWord, "has been found in the paragraph");
}
