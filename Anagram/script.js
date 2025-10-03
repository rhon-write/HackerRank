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
 * Complete the 'anagram' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function anagram(s) {
    // Write your code here
    if (s.length % 2 !== 0) return -1;

    const mid = s.length / 2;
    const s1 = s.slice(0, mid);
    const s2 = s.slice(mid);

    const count = {};

    for (let char of s1) {
        count[char] = (count[char] || 0) + 1;
    }

    let changes = 0;

    for (let char of s2) {
        if (count[char] > 0) {
            count[char]--;
        } else {
            changes++;
        }
    }

    return changes;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        const result = anagram(s);

        ws.write(result + '\n');
    }

    ws.end();
}
