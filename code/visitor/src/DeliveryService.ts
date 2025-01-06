import { Product } from "./models/Product";
import { DeliveryStrategy } from "./visitors/DeliveryStrategy";
import { DeliveryStrategyVisitor } from "./visitors/DeliveryStrategyVisitor";

export class DeliveryService {
  private visitor: DeliveryStrategyVisitor;

  constructor() {
    this.visitor = new DeliveryStrategyVisitor();
  }

  processDelivery(product: Product): DeliveryStrategy {
    return product.accept(this.visitor);
  }
}
