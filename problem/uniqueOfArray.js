let arr1 = [1, 2, 3, 8];
let arr2 = [1, 3, 5, 8];

function unique(arr1, arr2) {
  const uniq = [];
  for (let i of arr1) {
    if (arr2.indexOf(i) === -1) {
      uniq.push(i);
    }
  }
  console.log(uniq);
}

unique(arr1, arr2);
