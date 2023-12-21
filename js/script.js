// define products

let productsDom = document.querySelector(".products");

let cartProducts = document.querySelector(".cart-products");

let cartProductsDiv = document.querySelector(".cart-products div");

let shoppingCart = document.querySelector(".shopping-cart");

let badge = document.querySelector(".badge");

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
        <button class="add-to-cart" onclick="addedToCart(${item.id})">Add To Cart</button>
        <i class="fa-regular fa-heart favorite"></i>
      </div>
    </div>`;
  });
  productsDom.innerHTML = productsUI.join("");
}

window.onload = drawProductUI;

let addedItems = window.localStorage.getItem("productsInCart")
  ? JSON.parse(window.localStorage.getItem("productsInCart"))
  : [];

if (addedItems) {
  addedItems.map((item) => {
    cartProductsDiv.innerHTML += `<p>${item.title}</p>`
  });
  badge.style.display="block"
  badge.innerHTML = addedItems.length
}

function addedToCart(id) {
  if (window.localStorage.getItem("username")) {
    let clickedItem = products.find((item) => item.id === id);
    cartProductsDiv.innerHTML += `
    <p>${clickedItem.title}</p>
    `;

    addedItems = [...addedItems, clickedItem];

    window.localStorage.setItem("productsInCart", JSON.stringify(addedItems));

    let cartProductsItem = document.querySelectorAll(".cart-products div p");
    badge.style.display = "block";
    badge.innerHTML = cartProductsItem.length;
  } else {
    setTimeout(() => {
      window.location = "../login.html";
    }, 1000);
  }
}

shoppingCart.addEventListener("click", openCartMenu);

function openCartMenu() {
  if (cartProductsDiv.innerHTML != "") {
    if (cartProducts.style.display == "block") {
      cartProducts.style.display = "none";
    } else {
      cartProducts.style.display = "block";
    }
  }
}
