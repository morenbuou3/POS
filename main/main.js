const printProduct = require('../main/printProduct')
const printPromotions = require('../main/printPromotions')
const printTotal = require('../main/printTotal')

module.exports = function printInventory(inputs) {
    var result = '';

    result += printProduct(inputs);
    result += printPromotions(inputs);
    result += printTotal(inputs);

    console.log(result);
};