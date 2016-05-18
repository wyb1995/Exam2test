'use strict';

function thousands_separators(num) {
    if(/[^0-9\.]/.test(num)) return "invalid value";
    num=num.replace(/^(\d*)$/,"$1.");
    num=(num+"00").replace(/(\d*\.\d\d)\d*/,"$1");
    num=num.replace(".",",");
    var re=/(\d)(\d{3},)/;
    while(re.test(num)){
        num=num.replace(re,"$1,$2");
    }
    num=num.replace(/,(\d\d)$/,".$1");
    return num.replace(/^\./,"0.")

}

module.exports = thousands_separators;
