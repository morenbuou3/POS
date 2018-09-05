const getPromotions = require('../main/getPromotions');

function printPromotions(products) {
    var result = '';
    result += '----------------------\n';
    result +='挥泪赠送商品：\n';
    getPromotions(products).forEach(n => {
        result += '名称：' + n.name + '，数量：' + n.number + n.unit + '\n';
    })
    return result;
}

module.exports = printPromotions;