const name = "jerin";

let capital;
for (let i = 0; i < name.length; i++) {
  if (i === 0) {
    capital = name[i].toUpperCase();
  } else {
    capital = capital + name[i];
  }
}
console.log(capital);
