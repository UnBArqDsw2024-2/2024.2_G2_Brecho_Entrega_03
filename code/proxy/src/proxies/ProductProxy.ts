import { Product } from "../models/Product";
import { ProductService } from "../services/ProductService";

export class ProductProxy {
  private productService: ProductService;
  private cache: { [key: number]: Product | null } = {};

  constructor() {
    this.productService = new ProductService();
  }

  getProductById(id: number): Product | null {
    if (this.cache[id]) {
      console.log(`[ProductProxy] Cache encontrado para o produto ID: ${id}`);
      return this.cache[id];
    }

    console.log(`[ProductProxy] Cache não encontrado. Buscando do serviço.`);
    const product = this.productService.getProductById(id);
    this.cache[id] = product;
    return product;
  }

  listProducts(): Product[] {
    return this.productService.listProducts();
  }
}