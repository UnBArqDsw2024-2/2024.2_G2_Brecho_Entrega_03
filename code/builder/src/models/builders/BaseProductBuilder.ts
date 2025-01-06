import { BaseProduct } from "../products/BaseProduct";

interface ProductBuilder {
  reset(): void;
  setBasicInfo(id: string, name: string, category: string): this;
  setPrice(price: number): this;
  setCondition(condition: string): this;
  setDescription(description: string): this;
  setBrand(brand: string): this;
  setDefects(defects: string[]): this;
  setImages(images: string[]): this;
}
export abstract class BaseProductBuilder<T extends BaseProduct>
  implements ProductBuilder
{
  protected product: T;

  constructor() {
    this.reset();
  }

  abstract reset(): void;
  abstract build(): T;

  setBasicInfo(id: string, name: string, category: string): this {
    this.product.id = id;
    this.product.name = name;
    this.product.category = category;
    return this;
  }

  setPrice(price: number): this {
    this.product.price = price;
    return this;
  }

  setCondition(condition: string): this {
    this.product.condition = condition;
    return this;
  }

  setDescription(description: string): this {
    this.product.description = description;
    return this;
  }

  setBrand(brand: string): this {
    this.product.brand = brand;
    return this;
  }

  setDefects(defects: string[]): this {
    this.product.defects = defects;
    return this;
  }

  setImages(images: string[]): this {
    this.product.images = images;
    return this;
  }

  protected validateBaseProduct(): void {
    if (
      !this.product.id ||
      !this.product.name ||
      !this.product.category ||
      !this.product.price ||
      !this.product.condition ||
      !this.product.description
    ) {
      console.log(this.product);
      throw new Error("Missing required fields");
    }
  }
}
