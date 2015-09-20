function for_standart() {
    var response, count = 0;
    var array = ["first element", "second element", "third element", "fourth element", "fifth element"];
    
    for (var i = 0; i < array.length; i++) {
        response = confirm("Is this a " + array[i] + "?");
        
        if (response) count++;
    }
    alert("You go through " + count + " elements.");
}

function for_in() {
    var response, count = 0;
    var array = ["first element", "second element", "third element", "fourth element", "fifth element"];
    
    for (var i in array) {
        response = confirm("Is this a " + array[i] + "?");
        
        if (response) count++;
    }
    alert("You go through " + count + " elements.");
}

function for_in_object() {
    var response, count = 0;
    var onePerson = {initials:"DR", age:40, job:"Professor"};
    
    for (var property in onePerson) {
        alert(property + "=" + onePerson[property]);
    }
}

function for_of() {
    var response, count = 0;
    var array = ["first element", "second element", "third element", "fourth element", "fifth element"];
    
    for (var i of array) {
        response = confirm("Is this a " + i + "?");
        
        if (response) count++;
    }
    alert("You go through " + count + " elements.");
}