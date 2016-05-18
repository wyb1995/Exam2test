'use strict';

function thousands_separators(num) {
    num = num + '';
    var reg = /(-?\d+)(\d{3})/;

    if(reg.test(num)){
        num = num.replace(reg, '$1,$2');
    }

    return num;
}

module.exports = thousands_separators;
