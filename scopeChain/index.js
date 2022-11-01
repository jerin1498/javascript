let name = "jerin";

function logginFunc() {
  // let name = "ligi";
  function innerFuncion() {
    // let name = 'rejolin'
    console.log(`this is from inner function`, name);
  }
  innerFuncion();
}

logginFunc();
