const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const arr = input.slice(1).sort((a, b) => a - b);

let ans = '';
ans = arr.join('\n');
console.log(ans);