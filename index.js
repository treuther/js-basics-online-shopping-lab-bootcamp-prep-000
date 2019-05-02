var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var price = Math.floor(Math.random() * 100) 
 + 1;
 cart.push({itemName: item, itemPrice: price})
 return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  } else if (cart.length === 1) {
       return `In your cart, you have ${cart[0]['itemName']} at $${cart[0]['itemPrice']}.`
    } else if (cart.length === 2) {
      return `In your cart, you have ${cart[0]['itemName']} at $${cart[0]['itemPrice']}, and ${cart[1]['itemName']} at $${cart[1]['itemPrice']}.`
    } else {
      var list = "In your cart, you have ";
      for (let i = 0; i < cart.length; i++) {
          if(i !== cart.length-1) {
            list += `${cart[i]['itemName']} at $${cart[i]['itemPrice']},`;
            } else (i === cart.length-1); {
             `and ${cart[i]['itemName']} at $${cart[i]['itemPrice']}.`;
          }
      }
    }
  return cart.length[i];
}

function total() {
  const sum = cart.reduce((total, amount) => total + amount);
  return total;
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
