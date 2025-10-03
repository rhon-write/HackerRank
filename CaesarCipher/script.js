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
 * Complete the 'caesarCipher' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 */

function caesarCipher(s, k) {
    // Write your code here
    let result = '';

    // Reduce k to a value within 0-25
    k = k % 26;

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        let code = s.charCodeAt(i);

        // Uppercase letters
        if (code >= 65 && code <= 90) {
            result += String.fromCharCode(((code - 65 + k) % 26) + 65);
        }
        // Lowercase letters
        else if (code >= 97 && code <= 122) {
            result += String.fromCharCode(((code - 97 + k) % 26) + 97);
        }
        // Non-alphabetic characters remain the same
        else {
            result += char;
        }
    }

    return result;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const s = readLine();

    const k = parseInt(readLine().trim(), 10);

    const result = caesarCipher(s, k);

    ws.write(result + '\n');

    ws.end();
}
