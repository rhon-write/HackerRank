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
 * Complete the 'kaprekarNumbers' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER p
 *  2. INTEGER q
 */

function kaprekarNumbers(p, q) {
    // Write your code here
    let results = [];

    for (let n = p; n <= q; n++) {
        let d = n.toString().length;
        let sq = BigInt(n) * BigInt(n); 
        let sqStr = sq.toString();

        let right = sqStr.slice(-d); 
        let left = sqStr.slice(0, sqStr.length - d);

        let leftNum = left === "" ? 0 : parseInt(left, 10);
        let rightNum = right === "" ? 0 : parseInt(right, 10);

        if (leftNum + rightNum === n) {
            results.push(n);
        }
    }

    if (results.length > 0) {
        console.log(results.join(" "));
    } else {
        console.log("INVALID RANGE");
    }
}

function main() {
    const p = parseInt(readLine().trim(), 10);

    const q = parseInt(readLine().trim(), 10);

    kaprekarNumbers(p, q);
}
