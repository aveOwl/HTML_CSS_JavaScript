var loop = function () {
    'use strict';
    var count = 0;
    var symbol = '#';
    while (count < 8) {
        console.log(symbol);
        symbol += '#';
        count++;
    }
};
loop();

// for (var symbol = '#'; symbol.length < 8; symbol += '#')
// console.log(symbol);