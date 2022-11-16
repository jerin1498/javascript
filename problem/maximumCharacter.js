// let obj = { age: 33 };

// obj["name"] = "jerin";
// obj["age"] = 88;
// console.log(obj);
// let name = 0 || "jerin";

let character = "ddfoaddsdfdddddddddkkkkkkkkkkeeeeeeeeeeuuwwaa";

function maxChar(character) {
  let charMap = {};
  let max = 0;
  let maxCh;
  for (let char of character) {
    charMap[char] = (charMap[char] || 0) + 1;
  }

  for (let [key, val] of Object.entries(charMap)) {
    if (val > max) {
      max = val;
      maxCh = key;
    }
  }

  console.log(maxCh, "-------------", max);
}

maxChar(character);
