            var target;
            var guess_input;
            var finished = false;
            var guesses = 0;
            var color = ["aqua", "blueviolet", "crimson", "darksalmon",
             "forestgreen", "gold", "hotpink", "indigo",
             "magenta", "navy", "olive", "sienna", "teal", "wheat"];

            function do_game() {
                var random_number = Math.floor(Math.random()*color.length);
                target = color[random_number];

                if (confirm("Do you want to cheat ?"))
                    alert("I am thinking about " + target);

                while(!finished) {
                    guess_input = prompt("I'am thinking of one of these colors:\n\n" +
                             "aqua, blueviolet, crimson, darksalmon, forestgreen, gold, hotpink, indigo, magenta, navy, olive, sienna, teal, wheat.\n\n" +
                             "What color am i thinking of ? ");
                    guesses++;
                    finished = check_guess();
                }
            }

            function check_guess() {
                if (color.indexOf(guess_input) == -1){
                    alert("Sorry, Sorry, i dont't recognize your color.\n\n" + "Please try again.");
                return false;
            }
                else if (guess_input > target) {
                    alert("Sorry, your guess is not correct !\n\n" + "Hint: your color is alphabetically higher than mine !\n\n" + "Please try again.");
                return false;
            }
                else if (guess_input < target) {
                    alert("Sorry, your guess is not correct !\n\n" + "Hint: your color is alphabetically lower than mine !\n\n" + "Please try again.");
                return false;
            }
            myBody=document.getElementsByTagName("body")[0];
            myBody.style.background = target;
            alert("Congratulations ! You have guessed the color !\n\n" +
                  "It took you " + guesses + " guesses to finish the game !\n\n" +
                  "You can see the colour in the background.");
                return true;
            }