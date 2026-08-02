// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================

const readlineSync = require('readline-sync');

function readMatrix(name, rows, cols) {
    const matrix = [];
    console.log(`Enter ${name} (${rows}x${cols}):`);
    for (let i = 0; i < rows; i++) {
        while (true) {
            const row = readlineSync.question(`  Enter row ${i + 1}: `).split(' ').map(Number);
            if (row.length === cols) {
                matrix.push(row);
                break;
            }
            console.log(`  Error: please enter exactly ${cols} values.`);
        }
    }
    return matrix;
}

function displayMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        const row = matrix[i].map(val => String(val).padStart(6)).join('  ');
        console.log('  ' + row);
    }
}

function transpose(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const result = [];
    for (let c = 0; c < cols; c++) {
        const newRow = [];
        for (let r = 0; r < rows; r++) {
            newRow.push(matrix[r][c]);
        }
        result.push(newRow);
    }
    return result;
}

function addMatrices(matrixA, matrixB) {
    const rows = matrixA.length;
    const cols = matrixA[0].length;
    const result = [];
    for (let r = 0; r < rows; r++) {
        const newRow = [];
        for (let c = 0; c < cols; c++) {
            newRow.push(matrixA[r][c] + matrixB[r][c]);
        }
        result.push(newRow);
    }
    return result;
}

function multiplyMatrices(matrixA, matrixB) {
    const m = matrixA.length;
    const n = matrixA[0].length;
    const p = matrixB[0].length;
    // Build result matrix filled with zeros
    const result = [];
    for (let r = 0; r < m; r++) {
        result.push(new Array(p).fill(0));
    }
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < p; c++) {
            for (let k = 0; k < n; k++) {
                result[r][c] += matrixA[r][k] * matrixB[k][c];
            }
        }
    }
    return result;
}

function main() {
    // --- Part A: Transpose ---
    console.log("========================================");
    console.log("PART A — Matrix Transpose");
    console.log("========================================");
    let rows = readlineSync.questionInt("Enter number of rows: ");
    let cols = readlineSync.questionInt("Enter number of columns: ");
    let matrix = readMatrix("matrix", rows, cols);
    console.log("\nOriginal Matrix:");
    displayMatrix(matrix);
    console.log("\nTransposed Matrix:");
    displayMatrix(transpose(matrix));

    // --- Part B: Addition ---
    console.log("\n========================================");
    console.log("PART B — Matrix Addition");
    console.log("========================================");
    rows = readlineSync.questionInt("Enter number of rows: ");
    cols = readlineSync.questionInt("Enter number of columns: ");
    let matrixA = readMatrix("Matrix A", rows, cols);
    let matrixB = readMatrix("Matrix B", rows, cols);
    console.log("\nMatrix A:");
    displayMatrix(matrixA);
    console.log("\nMatrix B:");
    displayMatrix(matrixB);
    console.log("\nA + B:");
    displayMatrix(addMatrices(matrixA, matrixB));

    // --- Part C: Multiplication ---
    console.log("\n========================================");
    console.log("PART C — Matrix Multiplication");
    console.log("========================================");
    const m = readlineSync.questionInt("Enter rows for Matrix A: ");
    const n = readlineSync.questionInt("Enter columns for Matrix A (= rows for Matrix B): ");
    const p = readlineSync.questionInt("Enter columns for Matrix B: ");
    matrixA = readMatrix("Matrix A", m, n);
    matrixB = readMatrix("Matrix B", n, p);
    console.log("\nMatrix A:");
    displayMatrix(matrixA);
    console.log("\nMatrix B:");
    displayMatrix(matrixB);
    console.log("\nA x B:");
    displayMatrix(multiplyMatrices(matrixA, matrixB));
}

main();
