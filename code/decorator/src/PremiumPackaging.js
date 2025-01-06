const ProductDecorator = require('./ProductDecorator');

class PremiumPackaging extends ProductDecorator {
    getDescription() {
        return this.product.getDescription() + " + Embalagem Premium";
    }

    getPrice() {
        return this.product.getPrice() + 10.0;
    }
}

module.exports = PremiumPackaging;
