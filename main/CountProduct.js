function countProduct(products) {
    var result = {};
    products.filter(n => n.indexOf('-') === -1).forEach(item => {
        if (item in result) {
            result[item] += 1;
        } else {
            result[item] = 1;
        }
    });
    products.filter(n => n.indexOf('-') !== -1).forEach(item => {
        result[item.split('-')[0]] = parseInt(item.split('-')[1]);
    })
    return result;
}

module.exports = countProduct;