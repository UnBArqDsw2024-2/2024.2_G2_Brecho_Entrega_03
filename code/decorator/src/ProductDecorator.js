const Product = require('./Product');
class ProductDecorator extends Product {
    constructor(product) {
        super();
        this.product = product;
    }

    getDescription() {
        return this.product.getDescription();
    }

    getPrice() {
        return this.product.getPrice();
    }
}

module.exports = ProductDecorator;
