import { DeliveryStrategy } from "../visitors/DeliveryStrategy";
import { DeliveryVisitor } from "../visitors/DeliveryVisitor";
import { Dimensions } from "./Dimensions";
import { Product } from "./Product";

export class BulkyProduct implements Product {
  constructor(
    private id: string,
    private weight: number,
    private dimensions: Dimensions,
    private requiresAssembly: boolean
  ) {}

  accept(visitor: DeliveryVisitor): DeliveryStrategy {
    return visitor.visitBulkyProduct(this);
  }

  getWeight(): number {
    return this.weight;
  }

  getDimensions(): Dimensions {
    return this.dimensions;
  }

  needsAssembly(): boolean {
    return this.requiresAssembly;
  }
}
