var isEven = function (n) {
    'use strict';
    if (n < 0) {
        n *= -1;
    }
    if (n === 0) {
        return true;
    }
    if (n === 1) {
        return false;
    }
    return isEven(n - 2);
};

console.log(isEven(52));
console.log(isEven(75));
console.log(isEven(-1));