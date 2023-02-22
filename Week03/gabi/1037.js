const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const divisor = input[1].split(' ').map(Number).sort((a, b) => a - b);

console.log(divisor[0] * divisor[n - 1]);