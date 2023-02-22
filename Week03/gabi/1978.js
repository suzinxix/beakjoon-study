const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);
let len = Math.max(...arr);

let nums = [];
for (let i = 2; i <= len; i++) {
  nums[i] = i;
}
for (let i = 2; i <= Math.sqrt(len); i++) {
  if (nums[i] === 0) continue;
  for (let j = i * i; j <= len; j +=i ) {
    nums[j] = 0;
  }
}
console.log(nums.filter((num) => arr.includes(num)).length);