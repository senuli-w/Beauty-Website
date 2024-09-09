document.addEventListener("DOMContentLoaded", function () {
  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  const cartItems = document.querySelector(".cart-items");
  const cartTotalPrice = document.getElementById("cart-total-price");
  const placeOrderForm = document.querySelector("form");
  const placeOrderButton = document.getElementById("place-order-button");

  let cart = [];

  // Function to add item to cart
  function addItemToCart(name, price, quantity = 1) {
      for (let i = 0; i < cart.length; i++) {
          if (cart[i].name === name) {
              cart[i].quantity += quantity;
              updateCart();
              return;
          }
      }
      cart.push({ name, price, quantity });
      updateCart();
      showPlaceOrderForm();
  }

  // Function to update cart display
  function updateCart() {
      cartItems.innerHTML = "";
      let totalPrice = 0;
      cart.forEach((item) => {
          const cartItem = document.createElement("div");
          cartItem.classList.add("cart-item");
          cartItem.innerHTML = `
          <div class="cart-item-details">
              <span class="cart-item cart-column-name">${item.name}</span>
              <span class="cart-price cart-column-prize">Rs.${item.price * item.quantity}</span>
          </div>
          <div class="form-group cart-quantity cart-column">
              <input class="cart-quantity-input" type="number" name="quantity" min="1" value="${item.quantity}">
              <button class="remove-from-cart" data-name="${item.name}">Delete</button>
          </div>`;
          cartItems.appendChild(cartItem);
          totalPrice += item.price * item.quantity;
      });
      cartTotalPrice.textContent = `Rs.${totalPrice}`;
  }

  // Function to show place order form
  function showPlaceOrderForm() {
      placeOrderForm.style.display = "block";
  }

  // Add to cart button click event
  addToCartButtons.forEach((button) => {
      button.addEventListener("click", () => {
          const name = button.parentElement.querySelector("h4").textContent;
          const price = parseInt(button.parentElement.querySelector(".price").textContent.match(/\d+/)[0]);
          addItemToCart(name, price);
      });
  });

  // Remove from cart button click event
  cartItems.addEventListener("click", (event) => {
      if (event.target.classList.contains("remove-from-cart")) {
          const itemName = event.target.dataset.name;
          cart = cart.filter((item) => item.name !== itemName);
          updateCart();
      }
  });

  // Update quantity in cart event
  cartItems.addEventListener("change", (event) => {
      if (event.target.classList.contains("cart-quantity-input")) {
          const itemName = event.target.parentElement.parentElement.querySelector(".cart-column-name").textContent;
          const newQuantity = parseInt(event.target.value);
          cart.find((item) => item.name === itemName).quantity = newQuantity;
          updateCart();
      }
  });

  // Place order button click event
  placeOrderButton.addEventListener("click", (event) => {
      event.preventDefault();
      const name = document.getElementById("full-name").value.trim();
      const email = document.getElementById("email").value.trim();
      const address = document.getElementById("address").value.trim();
      const phoneNo = document.getElementById("phoneNo").value.trim();
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      var phoneRegex = /^[0-9]+$/; // Regular expression to match only numbers

      if (name === '') {
          alert('Please enter your name.');
          return false;
      }
      if (email === '') {
          alert('Please enter your email address.');
          return false;
      } else if (!emailRegex.test(email)) {
          alert('Please enter a valid email address.');
          return false;
      }
      if (address === '') {
          alert('Please enter your Address');
          return false;
      }
      if (phoneNo === '') {
          alert('Please enter your Phone No');
          return false;
      } else if (!phoneRegex.test(phoneNo)) { // Check if phone number contains only numbers
          alert('Phone number should contain only numbers.');
          return false;
      }

      const discountPercentage = calculateDiscountPercentage(retrieveQuizPoints());
      const totalOrderPrice = calculateTotalOrderPrice() * (1 - discountPercentage / 100);
      alert(`Dear ${name}, your order has been placed. Your total order price after applying ${discountPercentage}% discount is Rs.${totalOrderPrice}.`);
      //can send order details to server or perform other actions
      updateCart(); // Update cart total after placing order
      cart = [];
      placeOrderForm.reset();
      placeOrderForm.style.display = "none";
  });

  // Function to retrieve quiz points from localStorage
  function retrieveQuizPoints() {
      return localStorage.getItem('quizScore') || 0;
  }

  // Function to calculate discount percentage based on quiz points
  function calculateDiscountPercentage(quizScore) {
      // Ensure quizScore is a positive integer
      const score = parseInt(quizScore);
      if (isNaN(score) || score < 0) {
          return 0; // No discount for negative or non-numeric scores
      } else {
          return score * 10; // Assuming 1 quiz point equals 10% discount
      }
  }

  // Function to calculate the total order price
  function calculateTotalOrderPrice() {
      let totalPrice = 0;
      cart.forEach((item) => {
          totalPrice += item.price * item.quantity;
      });
      return totalPrice;
  }
});
