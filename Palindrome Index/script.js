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
 * Complete the 'palindromeIndex' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function palindromeIndex(s) {
    // Write your code here
   let i = 0;
    let j = s.length - 1;

    while (i < j) {
        if (s[i] === s[j]) {
            i++;
            j--;
        } else {
            // Try removing s[i]
            if (isPalindrome(s, i + 1, j)) return i;
            // Try removing s[j]
            if (isPalindrome(s, i, j - 1)) return j;
            // Neither works (should not happen in valid input)
            return -1;
        }
    }

    // Already a palindrome
    return -1;
}

// Helper
function isPalindrome(s, start, end) {
    while (start < end) {
        if (s[start] !== s[end]) return false;
        start++;
        end--;
    }
    return true;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        const result = palindromeIndex(s);

        ws.write(result + '\n');
    }

    ws.end();
}
