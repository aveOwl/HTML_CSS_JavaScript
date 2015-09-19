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

