let username = document.getElementById("username");

let password = document.getElementById("password");

let signInBtn = document.getElementById("signIn");

let getUser = window.localStorage.getItem("username");

let getPassword = window.localStorage.getItem("password");

signInBtn.addEventListener("click", login);

function login(e) {
    e.preventDefault();
    if (username.value === "" || password.value === "") {
      alert("please enter your deta..");
    } else {
      if (
        getUser &&
        getUser.trim() === username.value.trim() &&
        getPassword &&
        getPassword === password.value
      ) {
        setTimeout(() => {
          window.location = "../index.html";
        }, 1500);
      } else {
      }
    }
  }