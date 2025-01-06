const ProductDecorator = require('./ProductDecorator');
class ExtendedWarranty extends ProductDecorator {
    getDescription() {
        return this.product.getDescription() + " + Garantia Estendida";
    }

    getPrice() {
        return this.product.getPrice() + 20.0;
    }
}

module.exports = ExtendedWarranty;
