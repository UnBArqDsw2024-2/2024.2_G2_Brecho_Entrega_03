const Product = require('./Product');
class BasicProduct extends Product {
    getDescription() {
        return "Produto Base";
    }

    getPrice() {
        return 50.0;
    }
}

module.exports = BasicProduct;
