const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
let tc = [];
let idx = 1;
let answer = [];

for (let i = 0; i < n; i++) {
  tc.push([input[idx], input[idx + 1], input[idx + 2]])
  idx += 3;
}

for (let i = 0; i < n; i++) {
  let [p, n, arr] = [tc[i][0], tc[i][1], JSON.parse(tc[i][2])];
  let startIdx = 0, endIdx = n - 1;
  let isReverse = false;
  let isError = false;

  for (let i of p) {
    if (i === 'R') {
      isReverse = !isReverse;
    } else {
      if (startIdx > endIdx) {
        isError = true;
        break;
      }
      if (isReverse) {
        endIdx--;
      } else {
        startIdx++;
      }
    }
  }
  arr = arr.slice(startIdx, endIdx + 1);
  answer += (isError ? 'error' : isReverse ? JSON.stringify(arr.reverse()) : JSON.stringify(arr)) + '\n';
}
console.log(answer);