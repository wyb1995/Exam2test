'use strict';

function thousands_separators(num) {
    num = num + '';
    var reg = /(\d{3})(?=\d)/g;
    return num.replace(reg,function($0,$1){
        return $1 +',';
    });
}

module.exports = thousands_separators;
