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

function get_great() {
    "use strict";
    alert("It's my " + build_great(5) + "grandmother!");
}

function build_great(depth) {
    if(depth > 0)
        return "great " + build_great(depth - 1);
    else
        return "";
}

