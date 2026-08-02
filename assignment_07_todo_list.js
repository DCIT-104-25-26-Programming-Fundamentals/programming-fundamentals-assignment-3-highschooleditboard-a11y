// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 7
// =============================================================================

const readlineSync = require('readline-sync');

// Task storage
let tasks = [];

function addTask() {
    const task = readlineSync.question("Enter task: ");
    tasks.push(task);
    console.log(`Task added: "${task}"`);
}

function viewTasks() {
    if (tasks.length === 0) {
        console.log("No tasks yet. Your to-do list is empty.");
        return;
    }
    console.log("Your Tasks:");
    for (let i = 0; i < tasks.length; i++) {
        console.log(`${i + 1}. ${tasks[i]}`);
    }
}

function deleteTask() {
    if (tasks.length === 0) {
        console.log("No tasks to delete.");
        return;
    }
    viewTasks();
    const taskNumber = readlineSync.questionInt("Enter task number to delete: ");

    if (taskNumber < 1 || taskNumber > tasks.length) {
        console.log("Error: Invalid task number.");
        return;
    }

    const removed = tasks.splice(taskNumber - 1, 1);
    console.log(`Task "${removed[0]}" has been removed.`);
}

function printMenu() {
    console.log("\n============================");
    console.log("     TO-DO LIST MENU");
    console.log("============================");
    console.log("1. Add task");
    console.log("2. View tasks");
    console.log("3. Delete task");
    console.log("4. Quit");
}

function main() {
    let running = true;

    while (running) {
        printMenu();
        const choice = readlineSync.questionInt("Enter your choice (1-4): ");

        if (choice === 1) {
            addTask();
        } else if (choice === 2) {
            viewTasks();
        } else if (choice === 3) {
            deleteTask();
        } else if (choice === 4) {
            console.log("Goodbye!");
            running = false;
        } else {
            console.log("Error: Invalid choice. Please enter a number between 1 and 4.");
        }
    }
}

main();
