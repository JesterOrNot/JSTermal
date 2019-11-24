var readline = require('readline-sync');
var colors = require('colors');

while (true) {
    input = readline.question("js-shell> ".green);
    if (input === "help") {
        console.log("commands".underline + ":\n" + "help".underline + ": display this help message!");
    }
}