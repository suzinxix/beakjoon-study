const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const n = Number(input[0]);
const k = Number(input[1]);

let queue = [];
let answer = [];

for (let i = 0; i < n; i++) {
  queue.push(i + 1);
}

while (queue.length) {
  for (let i = 0; i < k - 1; i++) {
    queue.push(queue.shift());
  }
  answer.push(queue.shift());
}

console.log('<' + answer.join(', ') +  '>')