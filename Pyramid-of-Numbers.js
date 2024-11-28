const readline = require('readline');
// Create an interface to read input from the user
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt for user input and handle it
rl.question("Enter a number: ", function(x) {
    x = parseInt(x);  // Convert input to an integer


    for (let i = 1; i <= x; i++) {
        let row = '';  // Initialize an empty string to build the row
        for (let j = 1; j <= i; j++) {
            row += j + ' ';  // Add each number followed by a space
        }
        console.log(row.trim());  // Output the row, trimming any trailing space
    }

    // Close the readline interface after finishing
    rl.close();
});
