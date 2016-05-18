'use strict';

function thousands_separators(num) {
    num = num + '';
    num.split("").reverse().join("");
    var reg = /(\d{3})(?=\d)/g;
    num.replace(reg,function($0,$1){
        return $1 +',';
    });
    return num.split("").reverse().join("");
}

module.exports = thousands_separators;
