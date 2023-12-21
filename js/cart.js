let productsInCart = window.localStorage.getItem("productsInCart");

let productsDom = document.querySelector(".products");

if (productsInCart) {
  let items = JSON.parse(productsInCart);
  drawProductCartUI(items);
}

function drawProductCartUI(products) {
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
            <button class="add-to-cart" onclick="removeFromCart(${item.id})">Remove From Cart</button>
          </div>
        </div>`;
  });
  productsDom.innerHTML = productsUI;
}
