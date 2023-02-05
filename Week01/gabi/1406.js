const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[1]);
const cmd = input.slice(2);

let leftStack = [...input[0]];
let rightStack = [];
let answer = '';

for (let i = 0; i < n; i++) {
  if (cmd[i].includes('P')) {
    let char = cmd[i].split(' ')[1];
    leftStack.push(char);
  } else if (cmd[i] === 'L') {
    if (leftStack.length) rightStack.push(leftStack.pop());
  } else if (cmd[i] === 'D') {
    if (rightStack.length) leftStack.push(rightStack.pop());
  } else {
    if (leftStack.length) leftStack.pop();
  }
}

console.log(leftStack.concat(rightStack.reverse()).join(''));