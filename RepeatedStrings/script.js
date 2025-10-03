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
 * Complete the 'repeatedString' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. LONG_INTEGER n
 */

function repeatedString(s, n) {
    // Write your code here
    let countInS = 0;
    for (let char of s) {
        if (char === 'a') countInS++;
    }

    let fullRepeats = Math.floor(n / s.length);

    let remainder = n % s.length;

    let countInRemainder = 0;
    for (let i = 0; i < remainder; i++) {
        if (s[i] === 'a') countInRemainder++;
    }

    return countInS * fullRepeats + countInRemainder;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const n = parseInt(readLine().trim(), 10);

    const result = repeatedString(s, n);

    ws.write(result + '\n');

    ws.end();
}
