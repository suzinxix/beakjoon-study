const input = require('fs').readFileSync('example.txt').toString().trim().split(' ').map(Number);

const [m, n] = input;
let arr = [];
let answer = '';

for (let i = m; i <= n; i++) {
  arr[i] = i;
}
arr[1] = 0;
for (let i = 2; i <= Math.sqrt(n); i++) {
  if (arr[i] === 0) continue;
  for (let j = i * i; j <= n; j += i) {
    arr[j] = 0;
  }
}
answer = arr.filter(e => e !== 0).join('\n');
console.log(answer);