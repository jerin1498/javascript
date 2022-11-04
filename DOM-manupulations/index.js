// dom - document object model
const nameElement = document.getElementById("name");
const emailElement = document.getElementById("email");
const passwordElement = document.getElementById("password");
const submitElement = document.getElementById("submit-btn");
const contentElement = document.getElementById("content");

// console.log(submitElement);

// nameElement.innerHTML = "ligi";
// nameElement.style.color = "red";
// // nameElement.style.display = "none";

submitElement.addEventListener("click", (event) => {
  event.preventDefault();

  if (!emailElement.value) {
    alert("email is required");
    return;
  }
  if (!passwordElement.value) {
    alert("password is required");
    return;
  }
  alert("you are logged in successfully");
});

contentElement.innerHTML = "this is created by javascript";
