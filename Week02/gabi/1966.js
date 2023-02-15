const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
let idx = 1;
let tc = [];
let ans = '';

for (let i = 0; i < n; i++) {
  tc.push([input[idx], input[idx + 1]])
  idx += 2;
}

for (let i = 0; i < n; i++) {
  let [n, m] = tc[i][0].split(' ').map(Number);
  let importance = tc[i][1].split(' ').map(Number);
  let cnt = 1;
  while (true) {
    const num = importance.shift();
    if (Math.max(...importance) <= num && m === 0) {
      ans += cnt+'\n';
      break;
    } else if (Math.max(...importance) > num && m === 0) {
      importance.push(num);
      m = importance.length - 1;
    } else if (Math.max(...importance) > num) {
      importance.push(num);
      m -= 1;
    } else if (Math.max(...importance) <= num) {
      cnt++;
      m -= 1;
    }
  }
}

console.log(ans);