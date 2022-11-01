// normal function
// arrow function
// ------------------------------------
// function myAdd(x, y) {
//   const add = x + y;
//   return add;
// }

// let result = myAdd(4, 9);

// console.log(result);
// ------------------------------------

// function myFunc() {
//   console.log(this);
// }

// myFunc();
// --------------------------------

// --------------------------------

// const multiply = function (x, y) {
//   return x * y;
// };
// multiply(6, 7);
// --------------------------------

// const list = [1, 2, 3, 4, 6, 4, 3];
// function totalSum(list) {
//   let total = 0;
//   for (let value of list) {
//     total = total + value;
//   }
//   return total;
// }

// const result = totalSum(list);
// console.log(result);

// ------------------------------

const list = [1, 2, 3, 4, 6, 4, 3];
function average(list) {
  let total = 0;
  for (let value of list) {
    total = total + value;
  }
  return total / list.length;
}

const result = average(list);
console.log(result);
