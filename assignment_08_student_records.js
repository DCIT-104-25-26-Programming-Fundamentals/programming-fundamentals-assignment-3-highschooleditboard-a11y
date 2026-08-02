// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 8
// =============================================================================

const readlineSync = require('readline-sync');

// Student records storage
let students = [];

function calculateAverage(scores) {
    let total = 0;
    for (let i = 0; i < scores.length; i++) {
        total += scores[i];
    }
    return total / scores.length;
}

function addStudent() {
    const name = readlineSync.question("Student name: ");
    const id = readlineSync.questionInt("Student ID: ");

    const numScores = readlineSync.questionInt("How many scores? ");
    if (numScores <= 0) {
        console.log("Error: Number of scores must be positive.");
        return;
    }

    const scores = [];
    for (let i = 1; i <= numScores; i++) {
        const score = readlineSync.questionFloat(`Enter score ${i}: `);
        scores.push(score);
    }

    students.push({ name, id, scores });
    console.log(`Student "${name}" added successfully.`);
}

function displayAllStudents() {
    if (students.length === 0) {
        console.log("No students on record yet.");
        return;
    }

    console.log("\n" + "=".repeat(60));
    console.log("  NAME                  ID          SCORES        AVERAGE");
    console.log("=".repeat(60));

    for (let i = 0; i < students.length; i++) {
        const s = students[i];
        const avg = calculateAverage(s.scores).toFixed(2);
        const scoresStr = s.scores.join(', ');
        console.log(`  ${s.name.padEnd(22)}${String(s.id).padEnd(12)}${scoresStr.padEnd(14)}${avg}`);
    }

    console.log("=".repeat(60));
}

function calculateStudentAverage() {
    const id = readlineSync.questionInt("Enter student ID: ");

    // Search for student by ID
    let found = null;
    for (let i = 0; i < students.length; i++) {
        if (students[i].id === id) {
            found = students[i];
            break;
        }
    }

    if (found === null) {
        console.log(`Error: No student found with ID ${id}.`);
        return;
    }

    const avg = calculateAverage(found.scores).toFixed(2);
    console.log(`${found.name}'s average score: ${avg}`);
}

function printMenu() {
    console.log("\n================================");
    console.log("   STUDENT RECORD SYSTEM MENU");
    console.log("================================");
    console.log("1. Add student");
    console.log("2. Display all students");
    console.log("3. Calculate average score");
    console.log("4. Quit");
}

function main() {
    let running = true;

    while (running) {
        printMenu();
        const choice = readlineSync.questionInt("Enter your choice (1-4): ");

        if (choice === 1) {
            addStudent();
        } else if (choice === 2) {
            displayAllStudents();
        } else if (choice === 3) {
            calculateStudentAverage();
        } else if (choice === 4) {
            console.log("Goodbye!");
            running = false;
        } else {
            console.log("Error: Invalid choice. Please enter a number between 1 and 4.");
        }
    }
}

main();
