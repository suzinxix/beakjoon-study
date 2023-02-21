const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const a = Number(input[0]);
const b = Number(input[1]);
let ans = '';

const GCD = (a, b) => {
  return (a % b === 0) ? b : GCD(b, a % b);
}
const LCM = (a, b) => {
  return a * b / GCD(a, b);
}

ans = GCD(a, b) + '\n' + LCM(a, b);
console.log(ans);