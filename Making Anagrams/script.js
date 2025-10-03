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
 * Complete the 'makingAnagrams' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING s1
 *  2. STRING s2
 */

function makingAnagrams(s1, s2) {
    // Write your code here
    const count1 = {};
    const count2 = {};

    for (let char of s1) {
        count1[char] = (count1[char] || 0) + 1;
    }

    for (let char of s2) {
        count2[char] = (count2[char] || 0) + 1;
    }

    let deletions = 0;

    const allChars = new Set([...Object.keys(count1), ...Object.keys(count2)]);

    for (let char of allChars) {
        const diff = Math.abs((count1[char] || 0) - (count2[char] || 0));
        deletions += diff;
    }

    return deletions;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s1 = readLine();

    const s2 = readLine();

    const result = makingAnagrams(s1, s2);

    ws.write(result + '\n');

    ws.end();
}
