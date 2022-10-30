// fizzBuzzz

function fizzBuzzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0 && i % 3 === 0) {
      console.log("fizzBuzzz", "-----------", i);
    } else if (i % 2 === 0) {
      console.log("fizz", "-----------", i);
    } else if (i % 3 === 0) {
      console.log("buzz", "-----------", i);
    }
  }
}

// fizzBuzzz(100);

function newFizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0 && i % 3 === 0) {
      console.log("fizzBuzzz", "-----------", i);
      continue;
    }
    if (i % 2 === 0) {
      console.log("fizz", "-----------", i);
      continue;
    }
    if (i % 3 === 0) {
      console.log("buzz", "-----------", i);
      continue;
    }
  }
}

newFizzBuzz(10);
