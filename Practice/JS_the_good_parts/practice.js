// Create myObject. It has a value and an increment
// method. The increment method takes an optional
// parameter. If the argument is not a number, then 1
// is used as the default.

var myObject = {
    value: 0,
    increment: function(inc) {
        this.value += typeof inc === 'number' ? inc : 1;
    }
};

myObject.increment();
document.writeln(myObject.value);

myObject.increment(2);
document.writeln(myObject.value);

myObject.increment('cat');
document.writeln(myObject.value);

// The function invocation Pattern
// Augment myObject with a double method.

myObject.double = function() {
    var that = this; // Workaround.

    var helper = function() {
        that.value = add(that.value, that.value);
    };

    helper();
}

// Invoke double as a method.

myObject.double();
document.writeln(myObject.getValue());

// Create a constructor function called Quo.
// It makes an object with a status property.
var Quo = function (status) {
    this.status = status;
};

// Give all instances of Quo a public method.
// Called get_status.
Quo.prototype.get_status = function () {
    return this.status;
};

// Make an instance of Quo.
var myQuo = new Quo("confused"):
document.writeln(myQuo.get_status()); // confused

// Make a function that adds a lot of stuff.

var sum = function() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
};

document.writeln(sum(4, 8, 15, 16, 23, 42));

