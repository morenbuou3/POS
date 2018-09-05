const loadPromotions = require('../main/datbase').loadPromotions();
const loadAllItems = require('../main/datbase').loadAllItems();
const countProduct = require('../main/CountProduct');

const getPromotions = (products) => {
    var productPromotions = loadPromotions;
    var productsInfo = loadAllItems;
    var productsNum = countProduct(products);

    const result = [];
    
    for (let productsNumKey in productsNum) {
        if (productPromotions[0].barcodes.includes(productsNumKey)) {
            result.push({name: productsInfo.find(n => n.barcode === productsNumKey).name, number: ~~(productsNum[productsNumKey] / 3), unit: productsInfo.find(n => n.barcode === productsNumKey).unit, price: productsInfo.find(n => n.barcode === productsNumKey).price});
        }
    }
    return result;
};

module.exports = getPromotions;