var readline = require('readline-sync');
var colors = require('colors');

while (true) {
    input = readline.question("js-shell> ".green);
    if (input === "help") {
        console.log("commands:\nhelp: display this help message!");
    }
}