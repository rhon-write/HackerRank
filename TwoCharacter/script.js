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
 * Complete the 'alternate' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function alternate(s) {
    // Write your code here
    const uniqueChars = [...new Set(s)];
    let maxLen = 0;

    for (let i = 0; i < uniqueChars.length; i++) {
        for (let j = i + 1; j < uniqueChars.length; j++) {
            const x = uniqueChars[i];
            const y = uniqueChars[j];

            const filtered = [...s].filter(ch => ch === x || ch === y).join('');

            if (isValid(filtered)) {
                maxLen = Math.max(maxLen, filtered.length);
            }
        }
    }

    return maxLen;
}
function isValid(str) {
    for (let i = 1; i < str.length; i++) {
        if (str[i] === str[i - 1]) return false;
    }
    return true;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const l = parseInt(readLine().trim(), 10);

    const s = readLine();

    const result = alternate(s);

    ws.write(result + '\n');

    ws.end();
}
 