const getTotal = require('../main/getTotal');

function printTotal(products) {
    var result = '';
    const sum = getTotal(products);

    result += '----------------------\n';
    result += '总计：' + sum.total.toFixed(2) + '(元)\n';
    result += '节省：' + sum.discount.toFixed(2) + '(元)\n';
    result += '**********************';

    return result;
}

module.exports = printTotal;