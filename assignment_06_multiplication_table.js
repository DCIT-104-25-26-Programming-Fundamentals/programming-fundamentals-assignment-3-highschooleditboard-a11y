// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 6
// =============================================================================

const readlineSync = require('readline-sync');

function printTable(number) {
    console.log(`Multiplication Table for ${number}:`);
    for (let i = 1; i <= 12; i++) {
        console.log(`${number}  x  ${i}  =  ${number * i}`);
    }
}

function printAllTables(n) {
    // Validate input
    if (n <= 0) {
        console.log("Error: Please enter a positive integer.");
        return;
    }

    for (let i = 1; i <= n; i++) {
        printTable(i);
        // Print separator between tables, but not after the last one
        if (i < n) {
            console.log("---------------------------");
        }
    }
}

function main() {
    // Part A
    console.log("PART A — Single Multiplication Table");
    const number = readlineSync.questionInt("Enter a number: ");
    if (number <= 0) {
        console.log("Error: Please enter a positive integer.");
        return;
    }
    printTable(number);

    // Part B
    console.log("\nPART B — Tables from 1 to N");
    const n = readlineSync.questionInt("Enter a number N: ");
    printAllTables(n);
}

main();
