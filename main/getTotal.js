const getProductsInfo = require('../main/getProductsInfo');
const getPromotions = require('../main/getPromotions');

const getTotal = (products) => {
    var productsInfo = getProductsInfo(products);
    var productPromotions = getPromotions(products);

    const result = {};

    result.total = productsInfo.map(n => n.price * n.number).reduce((a, b) => a + b);
    result.discount = productPromotions.reduce((a, b) => a.price * a.number + b.price * b.number);
    result.total -= result.discount;

    return result;
};

module.exports = getTotal;