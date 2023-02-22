const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);

let visited = new Array(n+1).fill(0);
let cnt = 0;

const isPromising = (c) => {
  for (let i = 0; i < c; i++) {
    if (visited[i] === visited[c] || Math.abs(visited[c] - visited[i]) === Math.abs(c - i)) {
      return false;
    }
  }
  return true;
}

const nQueen = (num) => {
  if (num === n) {
    cnt++;
    return;
  }
  for (let i = 0; i < n; i++) {
    visited[num] = i;
    if (isPromising(num)) {
      nQueen(num + 1);
    }
  }
}

nQueen(0);
console.log(cnt);