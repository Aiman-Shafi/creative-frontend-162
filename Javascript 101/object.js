let fruits = ["apple", "orange", "kiwi", "banana", "berry", "papaya", 0, 23];

let students = [
  {
    name: "Rahim",
    age: 14,
    school: "XYZ Int'l",
    DOB: "12th March, 2006",
    married: false,
  },
  {
    name: "Karim",
    age: 17,
    school: "XYZ Int'l",
    DOB: "16th March, 2004",
    married: false,
  },
  {
    name: "Dulal",
    age: 18,
    school: "XYZ Int'l",
    DOB: "12th March, 2002",
    married: false,
  },
];

let car = {
  brand: "BMW",
  weight: "1130 kg",
  model: 2014,
};

// let student = {
//   name: "Rahim",
//   age: 14,
//   school: "XYZ Int'l",
//   DOB: "12th March, 2006",
//   married: false,
// };

console.log(car.brand);
console.log(car.weight);
console.log(car["model"]);
console.log(students[0].school);
// console.log(student.school);
// console.log(student.name);

for (let i = 0; i < students.length; i++) {
  //   console.log("STU NAME:", students[i].name);
}

let newStudent = {
  name: "Rahim",
  age: 14,
  school: "XYZ Int'l School",
  DOB: "12th March, 2006",
  married: false,
  isAdmitted: function () {
    console.log(`${this.name} is addmitted to the ${this.school}`);
  },
  waver: function () {
    console.log(`${this.name} have no waver yet`);
  },
};

newStudent.isAdmitted();
newStudent.waver();

// let paragraph = "lorem ispum....
// asdasda
// asdadas
// ";

// let newName = "Karim";
// let code = "python";

// // template strings / literals
// let paragraph = `
// hello,
// this is ${newName}
// learining ${code}
// `;

// console.log(paragraph);
