var readline = require('readline-sync');
while (true) {
    input = readline.question("js-shell> ");
    if (input === "help") {
        console.log("commands:\nhelp: display this help message!");
    }
}