let list = [1, 4, 6, 3, 4, 7, 4, 2, 0];

// list.forEach()
// list.find()
// list.map()
// list.filter()
// list.reduce()
// list.sort()

// -------------------------------------
// list.forEach((value, index) => {
//   console.log(value, "--------------", index);
// });
// -------------------------------------
// list.forEach((val) => {
//   if (val % 2 === 0) {
//     console.log(val, "is even");
//   }
// });
// ---------------------------

// FIND

// let filteredVal = list.find((value, index) => {
//   return value === 2;
// });

// console.log(filteredVal);
// -----------------------------------
// filter

// method one
// let filtervalues = list.filter((val, position) => {
//   return val % 2 === 0;
// });
// // method two
// let handyMethod = list.filter((val) => val % 2 === 0);

// console.log(filtervalues);

// ----------------------------------------
// map

// let alteredValues = list.map((val) => {
//   if (val % 2 === 0) {
//     return `${val} is even`;
//   } else {
//     return `${val} is odd`;
//   }
// });

// console.log(list);
// console.log(alteredValues);
