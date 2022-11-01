// function outerFunciton() {
//   function innerFuncion() {
//     console.log("im inner function");
//   }
//   return innerFuncion;
// }

// let resultFunc = outerFunciton();
// resultFunc();

function doubble(x) {
  const result = x * 2;
  // console.log(result);
  return result;
}

function square(x) {
  const result = x * x;
  // console.log(result);
  return result;
}

function factoryFunction(fn, num) {
  return fn(num);
}

let myNumber = 8;

let result = factoryFunction(doubble, myNumber);

console.log(result);
