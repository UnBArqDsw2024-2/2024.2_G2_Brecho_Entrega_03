import { DeliveryStrategy } from "../visitors/DeliveryStrategy";
import { DeliveryVisitor } from "../visitors/DeliveryVisitor";
import { Dimensions } from "./Dimensions";

export interface Product {
  accept(visitor: DeliveryVisitor): DeliveryStrategy;
  getWeight(): number;
  getDimensions(): Dimensions;
}
