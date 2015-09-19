function check_user_age() {
    "use strict";
    if (age_of_user() < 18)
    alert("Please get the fuck aus.");
}

function age_of_user() {
    "use strict";
    var age_text, age;
    age_text = prompt("What is your age ?");
    age = parseInt(age_text);
    return age;
}

