var readline = require('readline-sync');
var colors = require('colors');

while (true) {
    input = readline.question("js-shell> ".green);
    if (input === "help") {
        console.log("commands".underline.yellow + ":\n" + "help".underline.yellow + ": display this help message!".rainbow);
    } else if (input.length === 0) {
        continue;
    } else {
        console.log("js-shell: ".red.italic.bold + input.red.italic.bold + ": command not found!".red.italic.bold);
    }
}