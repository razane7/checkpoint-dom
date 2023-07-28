// Sample data for the cart (you can replace this with your own data)
const cartItems = [
    { id: 1, name: "Item 1", price: 10, quantity: 2 },
    { id: 2, name: "Item 2", price: 20, quantity: 1 },
    { id: 3, name: "Item 3", price: 15, quantity: 3 }
  ];
  
  // Function to display cart items
  function displayCart() {
    const cartElement = document.getElementById("cart");
    cartElement.innerHTML = ""; // Clear previous content
  
    cartItems.forEach(item => {
      const itemElement = document.createElement("div");
      itemElement.innerHTML = `${item.name} - $${item.price} x ${item.quantity}`;
      cartElement.appendChild(itemElement);
    });
  }
  
  // Call displayCart to show cart items when the page loads
  displayCart();
  
  // Example functions for the cart instructions (you can customize these as needed)
  function adjustQuantity() {
    // Implement logic to allow users to adjust quantity
    console.log("Adjusting quantity...");
  }
  
  function removeItem() {
    // Implement logic to remove an item from the cart
    console.log("Removing item...");
  }
  
  function applyPromoCode() {
    // Implement logic to apply promo code and calculate discounts
    console.log("Applying promo code...");
  }
  
  function saveForLater() {
    // Implement logic to move an item to the "Save for Later" list
    console.log("Saving for later...");
  }
  
  function proceedToCheckout() {
    // Implement logic to navigate to the checkout page
    console.log("Proceeding to checkout...");
  }
  
  function continueShopping() {
    // Implement logic to allow users to continue shopping
    console.log("Continuing shopping...");
  }
  