// normal function
// arrow function

// function addNumbers(x, y) {
//   console.log(x + y);
// }
// addNumbers(4, 8);
// addNumbers(5, 5);

let myList = [2, 4, 3, 66, 44, 35, 6, 5];
let myList2 = [2, 4, 3, 66, 44, 35, 6, 43, 5, 4, 3, 25];

function logEvenNumbers(list) {
  for (let value of list) {
    if (value % 2 === 0) {
      console.log(`${value} is even`);
    }
  }
}

// logEvenNumbers(myList);
logEvenNumbers(myList2);
