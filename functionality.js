function check_user_age() {
    if (age_of_user() < 18)
    console.log("Please get the fuck aus.");
}

function age_of_user() {
    var age_text, age;
    age_text = prompt("What is your age ?");
    age = parseInt(age_text);
    return age;
}

function get_great() {
    alert("It's my " + build_great(5) + "grandmother!");
}

function build_great(depth) {
    if(depth > 0)
        return "great " + build_great(depth - 1);
    else
        return "";
}

function get_array() {
    var todo = ["Java", "HTML", "C++", "JavaScript", "CSS", "Pascal"];
    var priority = [3, 4, 2, 6, 5, 1];
    var index = 0;
    var todoSorted = [];

    while (index < todo.length) {
        var position;
        position = priority.indexOf(index + 1);
        todoSorted.push(todo[position]);
        index++;
    }

    alert("Before:\n\n" + todo + "\n\n" + "After:\n\n" + todoSorted);
}

