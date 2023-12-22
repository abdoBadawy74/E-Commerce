let productsDom = document.querySelector(".products");

function drawProductCartUI(allProducts = []) {
  let products =
    JSON.parse(window.localStorage.getItem("productsInCart")) || allProducts;

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
            <button class="add-to-cart" onclick="removeFromCart(${item.id})" style="padding: 2px; margin-left:5px">Remove From Cart</button>
          </div>
        </div>`;
  });
  productsDom.innerHTML = productsUI;
}

drawProductCartUI();

function removeFromCart(id) {
  let productsInCart = window.localStorage.getItem("productsInCart");
  if (productsInCart) {
    let items = JSON.parse(productsInCart);

    let filteredItems = items.filter((item) => item.id !== id);

    window.localStorage.setItem("productsInCart", JSON.stringify(filteredItems));

    drawProductCartUI(filteredItems);
  }
}
