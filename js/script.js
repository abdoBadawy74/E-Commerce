let userInfo = document.getElementById("userInfo");

let userDom = document.getElementById("user");

let links = document.getElementById("links");

let username = window.localStorage.getItem("username");

if (username) {
  links.remove();

  userInfo.style.display = "block";

  userDom.innerHTML = username;
}
