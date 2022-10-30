// truthy value
// non emety strings will be consider as true eg 'some thing'
// numers expect 0 are true
// true
// empty list or values consider as true
// empey object or values consider as true

// falsy values
// all emety strings are consider as false
// 0 is consider as false
// null
// undefind
// false

// let condition = undefined;

// if (6 === "6") {
//   console.log("this statement is true");
// }  else {
//   console.log("this statement is worng");
// }

// const age = 10;

// if (age < 17) {
//   console.log("he is a kid");
// } else if (age >= 18 && age <= 22) {
//   console.log("he is a teen ager");
// } else if (age >= 23 && age <= 35) {
//   console.log("he is adult");
// } else {
//   console.log("uncle");
// }

// let age = 18;
//  ==
// ===

// !=
// !==

// 7 != '7'  // false

// 7 !== 7  // false

// 7 !== '7' // true

// switch statement

let name = "rejolin";

switch (name) {
  case "jerin":
    console.log("this is from jeriin block ");
    break;
  case "rejolin":
    console.log("this is from rejolin block");
    break;
  case "ligi":
    console.log("this is from ligi block");
    break;
  default:
    console.log("no one match");
}

// const age = 10;

// if (age < 17) {
//   console.log("he is a kid");
// } else if (age >= 18 && age <= 22) {
//   console.log("he is a teen ager");
// } else if (age >= 23 && age <= 35) {
//   console.log("he is adult");
// } else {
//   console.log("uncle");
// }

let age = 25;

switch (true) {
  case age < 17:
    console.log("he is a kid");
    break;
  case age >= 18 && age <= 22:
    console.log("he is a teen ager");
    break;
  case age >= 23 && age <= 35:
    console.log("he is adult");
    break;
  default:
    console.log("uncle");
}

console.log(!true);
console.log(!false);
