const BasicProduct = require('./BasicProduct');
const ExtendedWarranty = require('./ExtendedWarranty');
const PremiumPackaging = require('./PremiumPackaging');

// 🚀 Teste do Padrão Decorator
function main() {
    // Produto Base
    let product = new BasicProduct();
    console.log(`${product.getDescription()} - R$${product.getPrice()}`);

    // Adiciona Garantia Estendida
    product = new ExtendedWarranty(product);
    console.log(`${product.getDescription()} - R$${product.getPrice()}`);

    // Adiciona Embalagem Premium
    product = new PremiumPackaging(product);
    console.log(`${product.getDescription()} - R$${product.getPrice()}`);
}

// 🎯 Executa o teste
main();
