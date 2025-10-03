'use strict';

const fs = require('fs');

let width = []; // make width global

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

// Complete the 'serviceLane' function below.
function serviceLane(n, cases) {
    const result = [];

    for (let i = 0; i < cases.length; i++) {
        const [start, end] = cases[i];
        let minWidth = Infinity;

        for (let j = start; j <= end; j++) {
            if (width[j] < minWidth) {
                minWidth = width[j];
            }
        }

        result.push(minWidth);
    }

    return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const t = parseInt(firstMultipleInput[1], 10);

    width = readLine().replace(/\s+$/g, '').split(' ').map(widthTemp => parseInt(widthTemp, 10)); // global

    let cases = Array(t);

    for (let i = 0; i < t; i++) {
        cases[i] = readLine().replace(/\s+$/g, '').split(' ').map(casesTemp => parseInt(casesTemp, 10));
    }

    const result = serviceLane(n, cases);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
