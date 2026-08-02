// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 1
// =============================================================================

const readlineSync = require('readline-sync');

function isPrime(number) {
    // Numbers less than 2 are not prime
    if (number < 2) {
        return false;
    }
    // Check divisors from 2 up to the square root of the number
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

function main() {
    const number = readlineSync.questionInt("Enter a number: ");

    if (isPrime(number)) {
        console.log(`${number} is a prime number.`);
    } else {
        console.log(`${number} is NOT a prime number.`);
    }
}

main();
