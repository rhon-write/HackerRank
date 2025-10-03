'use strict';

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
 * Complete the 'decentNumber' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function decentNumber(n) {
    // Write your code here
    let count5 = n;

    while (count5 % 3 !== 0) {
        count5 -= 5;
    }

    if (count5 < 0) {
        console.log(-1);
        return;
    }

    let count3 = n - count5;

    let result = '5'.repeat(count5) + '3'.repeat(count3);
    console.log(result);
}

function main() {
    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine().trim(), 10);

        decentNumber(n);
    }
}
