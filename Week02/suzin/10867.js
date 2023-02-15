const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const [N, input] = fs.readFileSync("input.txt").toString().trim().split("\n");

function solution(str) {
  const arr = str.split(" ");
  let answer = [...new Set(arr)];
  return answer.sort((a, b) => a - b).join(" ");
}

console.log(solution(input));
