let userInfo = document.getElementById("userInfo");

let userDom = document.getElementById("user");

let links = document.getElementById("links");

let username = window.localStorage.getItem("username");

let logOutBtn = document.getElementById("logOut");

if (username) {
  links.remove();

  userInfo.style.display = "flex";

  userDom.innerHTML = username;
}

logOutBtn.addEventListener("click", logout);

function logout() {
  window.localStorage.clear();
  setTimeout(() => {
    window.location = "../register.html";
  }, 1500);
}