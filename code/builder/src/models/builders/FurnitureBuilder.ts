import { FurnitureProduct } from "../products/FurnitureProduct";
import { BaseProductBuilder } from "./BaseProductBuilder";

export class FurnitureBuilder extends BaseProductBuilder<FurnitureProduct> {
  constructor() {
    super();
    this.reset();
  }

  reset(): void {
    this.product = new FurnitureProduct();
  }

  setStyle(style: string): this {
    this.product.style = style;
    return this;
  }

  setMaterial(material: string): this {
    this.product.material = material;
    return this;
  }

  setDimensions(width: number, height: number, depth: number): this {
    this.product.dimensions = { width, height, depth };
    return this;
  }

  setWeight(weight: number): this {
    this.product.weight = weight;
    return this;
  }

  setAssembly(required: boolean): this {
    this.product.assembly = required;
    return this;
  }

  setUpholsteryType(type: string): this {
    this.product.upholsteryType = type;
    return this;
  }

  build(): FurnitureProduct {
    this.validateBaseProduct();
    this.validateFurniture();
    const result = this.product;
    this.reset();
    return result;
  }

  private validateFurniture(): void {
    if (
      !this.product.style ||
      !this.product.dimensions ||
      !this.product.material
    ) {
      throw new Error("Missing required furniture fields");
    }
  }
}
