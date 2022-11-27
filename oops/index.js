// class Person {
//   constructor(name, age) {
//     this.name = name; // properities
//     this.age = age;
//   }

//   detail() {
//     // method
//     console.log(`my name is ${this.name} and my age is ${this.age}`);
//   }
// }

// const jerin = new Person("jerin", 27); // instince

// // console.log(jerin instanceof Person);

// // const ligi = new Person("ligi", 25);

// // jerin.detail();
// // ligi.detail();

// class Student extends Person {
//   constructor(school, name, age) {
//     super(name, age);
//     this.school = school;
//   }

//   mySchool() {
//     console.log("my school name is", this.school);
//   }
// }

// const studentLigi = new Student("excel", "ligi", 23);

// studentLigi.mySchool();
// studentLigi.detail();

// for loop
// for in loop
// for of loop

// while loop;
// do while loop;

// array methods
// map
// filter
// find
// reduce
// every
// some

// for loop;

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

let name = "jerin";
let list = [1, 4, 3, 4, "jerin", 6, 9, "ligi", "rejo", 8];

// console.log(list.length);
// console.log(name.length);

// console.log(name[2]);
// console.log(list[3]);

// for (let i = 0; i < name.length; i++) {
//   console.log(name[i]);
// }

// for (let i = 0; i < list.length; i++) {
//   console.log(list[i]);
// }

// for (let i in name) {
//   // console.log(i);
//   console.log(name[i]);
// }

// let tempStr = [];
// let temNumber = [];

// let x = "5";

// console.log(typeof x);

// for (let i in list) {
//   if (typeof list[i] === "string") {
//     tempStr.push(list[i]);
//     continue;
//   }
//   temNumber.push(list[i]);
// }

// console.log(tempStr);
// console.log(temNumber);

// for (let val  of list) {
//   console.log(val)
// }

// break     --> exit
// continue  --> skip

// for (let i = 1; i <= 10; i++) {
//   if (i === 5) {
//     break;
//   }
//   console.log(i);
// }
//

// for (let i = 1; i <= 10; i++) {
//   if (i === 5) {
//     continue;
//   }
//   console.log(i);
// }

// let stringArray = ["jerin", "happy", "ligi", "rejo"];

// function upperCaseByPositon(arr, indx) {
//   let str = arr[indx];
//   console.log(str.toUpperCase());
// }

// upperCaseByPositon(stringArray, 1);

// object looping --> important

// Object.values()
// Object.keys()
// Object.entries()

const obj = { name: "jerin", age: 25, city: "ngl" };

// let val = Object.values(obj);
// console.log(val);

// let keys = Object.keys(obj);
// console.log(keys);

// let keyAndVal = Object.entries(obj);
// console.log(keyAndVal);

// for (let key of Object.keys(obj)) {
//   console.log(key);
// }

// for (let key of Object.values(obj)) {
//   console.log(key);
// }

// for (let [key, value] of Object.entries(obj)) {
//   console.log(key, "--------------------", value);
// }

// array methods
// map
// filter
// forEach
// find
// reduce
// every
// some

let myArr = [5, 7, 2, 4, 6, 3, 8, 5];

// myArr.forEach((val, idx) => {
//   console.log(val, "--------->", idx);
// });

// let findValue = myArr.find((val, idx) => {
//   console.log(val % 2 === 0);
//   return val % 2 === 0;
// });
// console.log(findValue);

// let filterVals = myArr.filter((val, indx) => {
//   return val % 2 === 0;
// });

// console.log(filterVals);

// const mapVals = myArr.map((val, idx) => {
//   return val * 2;
// });

// console.log(mapVals);

// const reduceVal = myArr.reduce((val, acc) => {
//   return val + acc;
// }, 0);

// console.log(reduceVal);
