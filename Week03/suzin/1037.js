const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync("input.txt").toString().trim().split("\n");
const arr = input[1].split(" ").sort((a, b) => a - b);

function solution(nums) {
  const first = Number(nums[0]);
  const last = Number(nums[nums.length - 1]);
  return nums.length >= 2 ? (first * last) : (first * last);
}
console.log(solution(arr));