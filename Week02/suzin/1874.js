const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const [n, ...sequence] = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

function solution(numbers, n) {
  const stack = [];
  let answer = "";
  let count = 1;

  for (let i = 0; i < n; i++) {
    const number = numbers.shift();
    while (count <= number) {
      stack.push(count++);
      answer += "+\n";
    }
    const poped = stack.pop();
    if (poped != number) {
      return "NO";
    }
    answer += "-\n";
  }
  return answer;
}

console.log(solution(sequence, n));
