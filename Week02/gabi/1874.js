const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const sequence = input.slice(1).map(Number);

let stack = [];
let answer = [];
let cnt = 0;

for (let i = 1; i <= n; i++) {
  stack.push(i);
  answer.push('+');
  while (stack.length !== 0 && sequence[cnt] === stack[stack.length-1]) {
    stack.pop();
    answer.push('-');
    cnt++;
  }
}

if (stack.length) console.log('NO');
else console.log(answer.join('\n'));