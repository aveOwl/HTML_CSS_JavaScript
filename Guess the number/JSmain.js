var target;
var guess_input_text;
var guess_input;
var finished = false;
var guesses = 0;

function do_game() {
    var random_number = Math.floor(Math.random()*100);
    target = random_number + 1;

    while(!finished) {
        guess_input_text = prompt("I'am thinking of a number " +
                                  "in the range 1 to 100.\n\n" +
                                  "What is the number ? ");
        guess_input = parseInt(guess_input_text);
        guesses++;
        finished = check_guess();
    }
}

function check_guess() {
    if (isNaN(guess_input)) {
        alert("Enter a number !");
    return false;
    }
    else if (guess_input < 1 || guess_input > 100) {
        alert("Wrong range !");
    return false;
    }
    else if (guess_input > target) {
        alert("Too high !");
    return false;
    }
    else if (guess_input < target) {
        alert("Too low !");
    return false;
    }
    alert("You got it ! The number was " +
          target + ".\n\nIt took you " +
          guesses + " guesses to get the number !");
    return true;
}