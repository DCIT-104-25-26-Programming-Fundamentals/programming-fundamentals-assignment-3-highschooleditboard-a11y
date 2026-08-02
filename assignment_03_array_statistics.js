// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 3
// =============================================================================

const readlineSync = require('readline-sync');

function calculateSum(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}

function calculateAverage(numbers) {
    return calculateSum(numbers) / numbers.length;
}

function calculateMaximum(numbers) {
    let maximum = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > maximum) {
            maximum = numbers[i];
        }
    }
    return maximum;
}

function calculateMinimum(numbers) {
    let minimum = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < minimum) {
            minimum = numbers[i];
        }
    }
    return minimum;
}

function main() {
    const n = readlineSync.questionInt("How many numbers? ");

    // Validate input
    if (n <= 0) {
        console.log("Error: Please enter a positive integer.");
        return;
    }

    // Collect numbers from user
    const numbers = [];
    for (let i = 1; i <= n; i++) {
        const num = readlineSync.questionFloat(`Enter number ${i}: `);
        numbers.push(num);
    }

    // Display results
    console.log("\nResults:");
    console.log(`Sum:     ${calculateSum(numbers)}`);
    console.log(`Average: ${calculateAverage(numbers)}`);
    console.log(`Maximum: ${calculateMaximum(numbers)}`);
    console.log(`Minimum: ${calculateMinimum(numbers)}`);
}

main();
