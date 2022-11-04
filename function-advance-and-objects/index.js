// function is consider as a object

let ligi = {
  name: "ligi",
  age: 25,
};

console.log(ligi);

// let rejolin = {
//   name: "rejolin",
//   age: 24,
// };

// let happy = {
//   name: "happy",
//   age: 27,
// };

function Person(name, age) {
  this.name = name;
  this.age = age;
}

let happy = new Person("happy", 27);
let rejolin = new Person("rejolin", 27);

console.log(happy);
console.log(rejolin);
