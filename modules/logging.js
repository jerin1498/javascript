export const logging = (name) => {
  console.log(`${name} is logging`);
};

export function logout(name) {
  console.log(`${name} is logging out`);
}

function mainFunc() {
  console.log("this is main func");
}

export default mainFunc;
