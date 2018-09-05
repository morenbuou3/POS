const getProductsInfo = require('../main/getProductsInfo');
const getPromotions = require('../main/getPromotions')

function printProduct(products) {
    var productPromotions = getPromotions(products);
    var result = '';

    result += '***<没钱赚商店>购物清单***\n';
    getProductsInfo(products).forEach(n => {
        n.total = n.number - (productPromotions.find(x => x.name === n.name) ? productPromotions.find(x => x.name === n.name).number : 0);
        result += '名称：' + n.name + '，数量：' + n.number + n.unit + '，单价：' + n.price.toFixed(2) + '(元)，小计：' + (n.price * n.total).toFixed(2) + '(元)\n';
    })
    return result;
}

module.exports = printProduct;