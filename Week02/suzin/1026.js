const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const [N, A, B] = input.map((v) => v.split(" ").map((v) => +v));

// 풀이
function solution(len, arr1, arr2) {
  const a = arr1.sort((a, b) => a - b);
  const b = arr2.sort((a, b) => b - a);
  let sum = 0;
  for (let i = 0; i < len; i++) {
    const temp = a[i] * b[i];
    sum += temp;
  }
  return sum;
}

console.log(solution(N, A, B));
