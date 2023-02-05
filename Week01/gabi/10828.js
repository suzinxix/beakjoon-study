const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const cmd = input.slice(1);

const stack = [];
let ans = '';

const push = (stack, num) => {
  stack.push(num);
}
const pop = stack => {
  if (stack.length === 0) return -1;
  return stack.pop();
}
const size = stack => stack.length;
const empty = stack => stack.length === 0 ? 1 : 0;
const top = stack => {
  if (stack.length === 0) return -1;
  return stack[stack.length-1];
}

for (let i = 0; i < n; i++) {
  if (cmd[i].includes('push')) {
    let num = Number(cmd[i].split(' ')[1]);
    push(stack, num);
  } else if (cmd[i] === 'pop') {
    ans += pop(stack) + '\n';
  } else if (cmd[i] === 'size') {
    ans += size(stack) + '\n';
  } else if (cmd[i] === 'empty') {
    ans += empty(stack) + '\n';
  } else {
    ans += top(stack) + '\n';
  }
}

console.log(ans);