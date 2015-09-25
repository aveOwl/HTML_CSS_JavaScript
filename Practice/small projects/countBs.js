var countChar = function(s, ch) {
    'use strict';
    var c = 0;
    for (var i = 0; i < s.length; i++) {
        if (s.charAt(i) === ch)
            c++;
    }
    return c;
}

var countBs = function (l) {
    return countChar(l,"B");
};

console.log(countBs("BBCbs"));
console.log(countChar("kakkerlak", "k"));