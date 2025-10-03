'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = '';
process.stdin.on('data', chunk => input += chunk);
process.stdin.on('end', () => {
  const tokens = input.trim().split(/\s+/);
  if (tokens.length === 0 || tokens[0] === '') return;

  // Expect: first token n, then n numbers
  const n = parseInt(tokens[0], 10);
  let ar;
  if (!isNaN(n) && tokens.length >= 1 + n) {
    ar = tokens.slice(1, 1 + n).map(Number);
  } else {
    // fallback: treat all tokens as the array (defensive)
    ar = tokens.map(Number);
  }

  insertionSort(ar);
  console.log(ar.join(' ')); // exact required output: space-separated numbers
});

function insertionSort(ar) {
  for (let i = 1; i < ar.length; i++) {
    const value = ar[i];
    let j = i - 1;

    // NOTE: j >= 0 is essential so index 0 is considered
    while (j >= 0 && ar[j] > value) {
      ar[j + 1] = ar[j];
      j = j - 1;
    }

    ar[j + 1] = value;
  }
  return ar;
}

