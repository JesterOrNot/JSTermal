var readline = require('readline-sync');
var colors = require('colors');

while (true) {
    input = readline.question("js-shell> ".green);
    if (input === "help") {
        console.log("commands".underline.yellow + ":\n" + "help".underline.yellow + ": display this help message!");
    } else {
        console.log("js-shell: ".red + input.red + ": command not found".red)
    }
}