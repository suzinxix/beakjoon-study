const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const arr = input[1].split(' ').map(Number);
const answer = [...new Set(arr)].sort((a, b) => a - b);

console.log(answer.join(' '));