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
 * Complete the 'hackerrankInString' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function hackerrankInString(s) {
    // Write your code here
    const target = "hackerrank";
    let j = 0; // pointer for target

    for (let i = 0; i < s.length; i++) {
        if (s[i] === target[j]) {
            j++;
        }
        if (j === target.length) {
            break; // All letters found
        }
    }

    return j === target.length ? "YES" : "NO";
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        const result = hackerrankInString(s);

        ws.write(result + '\n');
    }

    ws.end();
}
