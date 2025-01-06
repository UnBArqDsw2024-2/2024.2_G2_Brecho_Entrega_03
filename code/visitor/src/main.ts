import { DeliveryService } from "./DeliveryService";
import { BulkyProduct } from "./models/BulkyProduct";
import { FragileProduct } from "./models/FragileProduct";
import { HeavyProduct } from "./models/HeavyProduct";
import { StandardProduct } from "./models/StandardProduct";
import { Dimensions } from "./models/Dimensions";

const deliveryService = new DeliveryService();

// Create products with proper dimensions
const standardProduct = new StandardProduct(
  "standardProduct1",
  5,
  new Dimensions(10, 10, 10)
);
const heavyProduct = new HeavyProduct(
  "heavyProduct1",
  150,
  new Dimensions(100, 50, 50)
);
const bulkyProduct = new BulkyProduct(
  "bulkyProduct1",
  75,
  new Dimensions(200, 180, 100),
  true
);
const fragileProduct = new FragileProduct(
  "fragileProduct1",
  3,
  new Dimensions(30, 30, 40)
);

// Process deliveries
const standardDelivery = deliveryService.processDelivery(standardProduct);
const heavyDelivery = deliveryService.processDelivery(heavyProduct);
const bulkyDelivery = deliveryService.processDelivery(bulkyProduct);
const fragileDelivery = deliveryService.processDelivery(fragileProduct);

// Log results
console.log("Standard Delivery:", standardDelivery);
console.log("Heavy Delivery:", heavyDelivery);
console.log("Bulky Delivery:", bulkyDelivery);
console.log("Fragile Delivery:", fragileDelivery);
