const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1).map((e) => e.split(' ').map(Number));
let answer = '';

arr.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] > b[0] ? 1 : -1
  } else return a[1] > b[1] ? 1 : -1
})

arr.map((nums) => (
  answer += nums.join(' ') + '\n'
))

console.log(answer);