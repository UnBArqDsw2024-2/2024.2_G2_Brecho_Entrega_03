import { ElectronicProduct } from "../products/ElectronicProduct";
import { BaseProductBuilder } from "./BaseProductBuilder";

export class ElectronicBuilder extends BaseProductBuilder<ElectronicProduct> {
  constructor() {
    super();
    this.reset();
  }

  reset(): void {
    this.product = new ElectronicProduct();
  }

  setModelNumber(modelNumber: string): this {
    this.product.modelNumber = modelNumber;
    return this;
  }

  setBatteryLife(batteryLife: string): this {
    this.product.batteryLife = batteryLife;
    return this;
  }

  setTechnicalSpecs(specs: Record<string, string>): this {
    this.product.technicalSpecs = specs;
    return this;
  }

  build(): ElectronicProduct {
    this.validateBaseProduct();
    this.validateElectronic();
    const result = this.product;
    this.reset();
    return result;
  }

  private validateElectronic(): void {
    if (!this.product.modelNumber || !this.product.technicalSpecs) {
      throw new Error("Missing required electronic fields");
    }
  }
}
