'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'cavityMap' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING_ARRAY grid as parameter.
 */

function cavityMap(grid) {
    // Write your code here
    const n = grid.length;
    
    let result = grid.map(row => row.split(''));

    for (let i = 1; i < n - 1; i++) {
        for (let j = 1; j < n - 1; j++) {
            const cell = parseInt(grid[i][j], 10);
            const top = parseInt(grid[i - 1][j], 10);
            const bottom = parseInt(grid[i + 1][j], 10);
            const left = parseInt(grid[i][j - 1], 10);
            const right = parseInt(grid[i][j + 1], 10);

            if (cell > top && cell > bottom && cell > left && cell > right) {
                result[i][j] = 'X';
            }
        }
    }

    return result.map(row => row.join(''));
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let grid = [];

    for (let i = 0; i < n; i++) {
        const gridItem = readLine();
        grid.push(gridItem);
    }

    const result = cavityMap(grid);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
