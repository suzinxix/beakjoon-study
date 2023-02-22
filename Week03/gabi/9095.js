const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const t = Number(input[0]);
const nums = input.slice(1).map(Number);

let ans = '';
const dp = (num) => {
  if (num === 1) return 1;
  if (num === 2) return 2;
  if (num === 3) return 4;
  return dp(num - 1) + dp(num - 2) + dp(num - 3);
}

nums.map((num) => (
  ans += dp(num) + '\n'
))
console.log(ans);