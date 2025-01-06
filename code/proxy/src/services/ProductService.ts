import { Product } from "../models/Product";

export class ProductService {
  private products: Product[] = [
    { id: 1, name: "Blusa Vintage", description: "Blusa em ótimo estado.", price: 50, isAvailable: true },
    { id: 2, name: "Calça Jeans", description: "Calça com leve desgaste.", price: 70, isAvailable: false },
  ];

  getProductById(id: number): Product | null {
    console.log(`[ProductService] Buscando produto com ID: ${id}`);
    return this.products.find((product) => product.id === id) || null;
  }

  listProducts(): Product[] {
    console.log("[ProductService] Listando todos os produtos.");
    return this.products;
  }
}
