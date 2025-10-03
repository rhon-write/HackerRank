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
 * Complete the 'beautifulPairs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY A
 *  2. INTEGER_ARRAY B
 */

function beautifulPairs(A, B) {
    // Write your code here
    let freqA = new Map();
    let freqB = new Map();

    for (let a of A) {
        freqA.set(a, (freqA.get(a) || 0) + 1);
    }
    for (let b of B) {
        freqB.set(b, (freqB.get(b) || 0) + 1);
    }

    let pairs = 0;
    for (let [num, countA] of freqA) {
        let countB = freqB.get(num) || 0;
        pairs += Math.min(countA, countB);
    }

    if (pairs === A.length) {
        return pairs - 1;
    } else {
        return pairs + 1;
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const A = readLine().replace(/\s+$/g, '').split(' ').map(ATemp => parseInt(ATemp, 10));

    const B = readLine().replace(/\s+$/g, '').split(' ').map(BTemp => parseInt(BTemp, 10));

    const result = beautifulPairs(A, B);

    ws.write(result + '\n');

    ws.end();
}
