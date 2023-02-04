const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const cmd = input.slice(1);

const deque = [];
let ans = '';

const push_front = (deque, num) => {
  deque.unshift(num);
}
const push_back = (deque, num) => {
  deque.push(num);
}
const pop_front = deque => {
  if (deque.length === 0) return -1;
  return deque.shift();
}
const pop_back = deque => {
  if (deque.length === 0) return -1;
  return deque.pop();
}
const size = deque => deque.length;
const empty = deque => deque.length === 0 ? 1 : 0;
const front = deque => {
  if (deque.length === 0) return -1;
  return deque[0];
}
const back = deque => {
  if (deque.length === 0) return -1;
  return deque[deque.length-1];
}

for (let i = 0; i < n; i++) {
  if (cmd[i].includes('push_front')) {
    let num = Number(cmd[i].split(' ')[1]);
    push_front(deque, num);
  } else if (cmd[i].includes('push_back')) {
    let num = Number(cmd[i].split(' ')[1]);
    push_back(deque, num);
  } else if (cmd[i] === 'pop_front') {
    ans += pop_front(deque) + '\n';
  } else if (cmd[i] === 'pop_back') {
    ans += pop_back(deque) + '\n';
  } else if (cmd[i] === 'size') {
    ans += size(deque) + '\n';
  } else if (cmd[i] === 'empty') {
    ans += empty(deque) + '\n';
  } else if (cmd[i] === 'front') {
    ans += front(deque) + '\n';
  } else {
    ans += back(deque) + '\n';
  }
}

console.log(ans);