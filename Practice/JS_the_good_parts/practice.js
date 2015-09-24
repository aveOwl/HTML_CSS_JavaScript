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

