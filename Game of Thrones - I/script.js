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
 * Complete the 'gameOfThrones' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function gameOfThrones(s) {
    // Write your code here
    const count = {};

    for (let char of s) {
        count[char] = (count[char] || 0) + 1;
    }

    let oddCount = 0;

    for (let key in count) {
        if (count[key] % 2 !== 0) {
            oddCount++;
        }
    }

    return oddCount > 1 ? "NO" : "YES";
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = gameOfThrones(s);

    ws.write(result + '\n');

    ws.end();
}
