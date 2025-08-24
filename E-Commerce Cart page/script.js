let cart = [];

function addToCart(name, price) {
  const itemIndex = cart.findIndex(item => item.name === name);
  if (itemIndex > -1) {
    cart[itemIndex].quantity += 1;
  } else {
    cart.push({ name, price, quantity: 1 });
  }
  renderCart();
}

function removeFromCart(name) {
  const itemIndex = cart.findIndex(item => item.name === name);
  if (itemIndex > -1) {
    cart[itemIndex].quantity -= 1;
    if (cart[itemIndex].quantity <= 0) {
      cart.splice(itemIndex, 1);
    }
  }
  renderCart();
}

function renderCart() {
  const cartContainer = document.getElementById("cart");
  cartContainer.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    total += item.price * item.quantity;
    cartContainer.innerHTML += `
      <div class="cart-item">
        <span>${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}</span>
        <button class="remove-btn" onclick="removeFromCart('${item.name}')">Remove</button>
      </div>
    `;
  });

  document.getElementById("total").innerText = `Total: $${total.toFixed(2)}`;
}

function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  // Show popup
  document.getElementById("popup").style.display = "flex";

  // Reset cart after checkout
  cart = [];
  renderCart();

  // Auto close popup after 3 seconds
  setTimeout(() => {
    closePopup();
  }, 3000);
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}




