const loadAllItems = require('../main/datbase').loadAllItems();
const countProduct = require('../main/CountProduct');

const getProductsInfo = (products) => {
    var productsInfo = loadAllItems;
    var productsNum = countProduct(products);
    const result = [];
    productsInfo.filter(n => n.barcode in productsNum).forEach(product => {
        product.number = productsNum[product.barcode];
        result.push(product);
    });
    return result;
};

module.exports = getProductsInfo;