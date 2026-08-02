// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 5
// =============================================================================

const readlineSync = require('readline-sync');

function printFibonacci(n) {
    // Validate input
    if (n <= 0) {
        console.log("Error: Please enter a positive integer.");
        return;
    }

    // Generate first N terms using a loop
    let a = 0, b = 1;
    const sequence = [];
    for (let i = 0; i < n; i++) {
        sequence.push(a);
        let temp = a;
        a = b;
        b = temp + b;
    }

    console.log("Fibonacci sequence: " + sequence.join(' '));
}

function isFibonacci(number) {
    // Handle negative numbers
    if (number < 0) {
        console.log(`${number} is NOT a Fibonacci number.`);
        return;
    }

    // Generate Fibonacci numbers until we reach or pass the input
    let a = 0, b = 1;
    while (a < number) {
        let temp = a;
        a = b;
        b = temp + b;
    }

    // If a equals the number exactly, it's in the sequence
    if (a === number) {
        console.log(`${number} is a Fibonacci number.`);
    } else {
        console.log(`${number} is NOT a Fibonacci number.`);
    }
}

function main() {
    // Part A
    console.log("PART A — First N Fibonacci Terms");
    const n = readlineSync.questionInt("How many terms? ");
    printFibonacci(n);

    // Part B
    console.log("\nPART B — Fibonacci Checker");
    const number = readlineSync.questionInt("Enter a number to check: ");
    isFibonacci(number);
}

main();
