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

// define products

let productsDom = document.querySelector(".products");

let products = [
  {
    id: 1,
    title: "headphone",
    size: "large",
    imageUrl: "./images/headphone.jpg",
  },
  {
    id: 2,
    title: "Laptop",
    size: "small",
    imageUrl: "./images/laptop.jpg",
  },
  {
    id: 3,
    title: "keyboard",
    size: "medium",
    imageUrl: "./images/keyboard.jpg",
  },
  {
    id: 4,
    title: "tablet",
    size: "meduim",
    imageUrl: "./images/tablet.jpg",
  },
  {
    id: 5,
    title: "pc",
    size: "large",
    imageUrl: "./images/pc.jpeg",
  },
];

function drawProductUI() {
  let productsUI = products.map((item) => {
    return `<div class="product-item">
      <img src="${item.imageUrl}" class="product-img" alt="image" />
      <div class="product-desc">
        <h2>${item.title}</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur
        </p>
        <span>size: ${item.size}</span>
      </div>
      <div class="product-actions">
        <button class="add-to-cart">Add To Cart</button>
        <i class="fa-regular fa-heart favorite"></i>
      </div>
    </div>`;
  });
  productsDom.innerHTML = productsUI.join('');
}

drawProductUI();
