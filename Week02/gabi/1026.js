const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const a = input[1].split(' ').map(Number).sort((a, b) => a - b);
const b = input[2].split(' ').map(Number).sort((a, b) => b - a);
let answer = 0;

for (let i = 0; i < n; i++) {
  answer += a[i] * b[i];
}

console.log(answer);