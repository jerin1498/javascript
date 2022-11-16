// malayalam ---> true

// "somthing" ----> false

function checkPalandrome(str) {
  for (let i in str) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
    return true;
  }
}

let str = "121";

console.log(checkPalandrome(str));
