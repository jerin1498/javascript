const name = "jerin";

switch (name) {
  case "jerin":
    console.log("this is jerin");
    break;
  case "ligi":
    console.log("this is ligi");
    break;
  default:
    console.log("unknown person");
}

let age = 25;

switch (true) {
  case age < 17:
    console.log("he is a kid");
    break;
  case age >= 18 && age <= 22:
    console.log("he is a teen ager");
    break;
  case age >= 23 && age <= 35:
    console.log("he is adult");
    break;
  default:
    console.log("uncle");
}
