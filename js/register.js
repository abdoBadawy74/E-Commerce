// register user

let username = document.getElementById("username");

let email = document.getElementById("email");

let password = document.getElementById("password");

let signUpBtn = document.getElementById("signUp");

signUpBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (username.value === "" || email.value === "" || password.value === "") {
    alert("please enter your deta..");
  } else {
    window.localStorage.setItem("username", username.value);
    window.localStorage.setItem("email", email.value);
    window.localStorage.setItem("password", password.value);
  }
  setTimeout(() => {
    window.location = "../index.html";
  },1500);
});
