import { ProductProxy } from "./proxies/ProductProxy";

const productProxy = new ProductProxy();

// Listando produtos
console.log("Produtos disponíveis:");
console.log(productProxy.listProducts());

// Buscando um produto por ID (primeira vez, irá ao serviço)
console.log("\nBuscando produto ID 1:");
console.log(productProxy.getProductById(1));

// Buscando novamente o mesmo produto (desta vez do cache)
console.log("\nBuscando produto ID 1 novamente:");
console.log(productProxy.getProductById(1));

// Tentando buscar um produto não disponível
console.log("\nBuscando produto ID 2:");
console.log(productProxy.getProductById(2));