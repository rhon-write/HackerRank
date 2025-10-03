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
 * Complete the 'separateNumbers' function below.
 *
 * The function accepts STRING s as parameter.
 */

function separateNumbers(s) {
    // Write your code here
    const n = s.length;

    for (let len = 1; len <= Math.floor(n / 2); len++) {
        let first = s.slice(0, len);
        let num = BigInt(first); 
        let built = first;

        while (built.length < n) {
            num += 1n;
            built += num.toString();
        }

        if (built === s) {
            console.log(`YES ${first}`);
            return;
        }
    }

    console.log("NO");
}

function main() {
    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        separateNumbers(s);
    }
}
