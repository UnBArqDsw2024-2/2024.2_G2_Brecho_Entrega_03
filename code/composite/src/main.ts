import { CartItem } from "./models/CartItem";
import { CartBundle } from "./models/CartBundle";
import { Dimensions } from "./interfaces/Dimensions";
import { formatAmountBRL } from "./utils/formatAmount.";

const cart = new CartBundle("Shopping Cart");

// Adding individual items
const tshirt = new CartItem("Nike T-Shirt", 29.99, new Dimensions(20, 30, 10));
const cheapJeans = new CartItem(
  "Cheap Jeans",
  89.99,
  new Dimensions(30, 40, 20)
);
const expensiveJeans = new CartItem(
  "Expensive Jeans",
  399.99,
  new Dimensions(40, 50, 30)
);

// Creating a special bundle
const summerBundle = new CartBundle("Summer Special");
const shorts = new CartItem("Beach Shorts", 39.99, new Dimensions(20, 30, 10));
const sandals = new CartItem("Flip Flops", 19.99, new Dimensions(10, 20, 5));
summerBundle.add(shorts);
summerBundle.add(sandals);

// Adding everything to main cart
cart.add(tshirt);
cart.add(expensiveJeans);
cart.add(summerBundle);

// Replacing an item in the cart for a cheaper alternative
cart.remove(expensiveJeans);
cart.add(cheapJeans);

// Display cart contents and totals
console.log(cart.getDescription());
console.log(`Quantity of Items: ${cart.getQuantity()}`);
console.log(`Shipping Price: ${formatAmountBRL(cart.getPrice())}`);
console.log(`Items Price: ${formatAmountBRL(cart.getShippingPrice())}`);
console.log(`Total Price: ${formatAmountBRL(cart.getTotal())}`);
