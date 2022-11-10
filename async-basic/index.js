// setTimeout('call back function', 'time in millisecond')

// setTimeout(() => {
//   console.log("im from time out function");
// }, 3000);

// console.log("im from sync outside");

// let mynum = 4;

// let myPromise = new Promise((resolve, reject) => {
//   if (mynum % 2 === 0) {
//     resolve(8); // success block
//   } else {
//     reject("this is odd so its error"); // error block
//   }
// });

// myPromise
//   .then((value) => {
//     console.log(value + 8);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// let myArrow = async () => {};

// async function myFunc() {
//   try {
//     const result = await myPromise;
//     console.log(result + 7);
//   } catch (err) {
//     console.log(err);
//   }
// }

// myFunc();
// console.log("tefdaf asdfsadf");
// console.log("kdjdufuye fhhahde");

const regularPromise = new Promise((resolve, reject) => {
  resolve(9);
});

// console.log(regularPromise);

// regularPromise.then((result) => {
//   console.log(result);
// });

// async function myFunc() {
//   let x = await regularPromise;
//   console.log(x + 8);
// }

// myFunc();

async function funcTwo() {
  return 8;
}

funcTwo().then((result) => console.log(result));
