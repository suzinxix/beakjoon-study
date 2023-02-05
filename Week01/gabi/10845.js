const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const cmd = input.slice(1);

const queue = [];
let ans = '';

const push = (queue, num) => {
  queue.push(num);
}
const pop = queue => {
  if (queue.length === 0) return -1;
  return queue.shift();
}
const size = queue => queue.length;
const empty = queue => queue.length === 0 ? 1 : 0;
const front = queue => {
  if (queue.length === 0) return -1;
  return queue[0];
}
const back = queue => {
  if (queue.length === 0) return -1;
  return queue[queue.length-1];
}

for (let i = 0; i < n; i++) {
  if (cmd[i].includes('push')) {
    let num = Number(cmd[i].split(' ')[1]);
    push(queue, num);
  } else if (cmd[i] === 'pop') {
    ans += pop(queue) + '\n';
  } else if (cmd[i] === 'size') {
    ans += size(queue) + '\n';
  } else if (cmd[i] === 'empty') {
    ans += empty(queue) + '\n';
  } else if (cmd[i] === 'front') {
    ans += front(queue) + '\n';
  } else {
    ans += back(queue) + '\n';
  }
}

console.log(ans);