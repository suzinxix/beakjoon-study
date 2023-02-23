const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const [N, ...input] = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => +v);

function recursion(n) {
  if (n === 1) return 1; // 1
  if (n === 2) return 2; // 1+1, 2
  if (n === 3) return 4; // 1+1+1+1, 2+1, 1+2, 3

  return recursion(n - 1) + recursion(n - 2) + recursion(n - 3);
}

input.forEach((num) => console.log(recursion(num)));
