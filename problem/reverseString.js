// happy ---> yppah

function reverseString(str) {
  let reverse = "";
  for (let char of str) {
    reverse = char + reverse;
  }
  console.log(reverse);
}

let str = "something";

reverseString(str);
