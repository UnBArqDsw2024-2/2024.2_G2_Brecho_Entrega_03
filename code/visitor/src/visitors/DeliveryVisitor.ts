import { BulkyProduct } from "../models/BulkyProduct";
import { FragileProduct } from "../models/FragileProduct";
import { HeavyProduct } from "../models/HeavyProduct";
import { StandardProduct } from "../models/StandardProduct";
import { DeliveryStrategy } from "./DeliveryStrategy";

export interface DeliveryVisitor {
  visitStandardProduct(product: StandardProduct): DeliveryStrategy;
  visitHeavyProduct(product: HeavyProduct): DeliveryStrategy;
  visitBulkyProduct(product: BulkyProduct): DeliveryStrategy;
  visitFragileProduct(product: FragileProduct): DeliveryStrategy;
}
