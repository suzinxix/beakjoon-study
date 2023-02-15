const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const [N, K] = fs.readFileSync("input.txt").toString().trim().split(" ");

function solution(n, k) {
  const queue = [];
  let answer = "<";
  let count = 1;
  for (let i = 0; i < n; i += 1) queue.push(i + 1);
  while (queue.length) {
    const item = queue.shift();
    if (count % k === 0) {
      queue.length ? (answer += item + ", ") : (answer += item + ">");
    } else {
      queue.push(item);
    }
    count += 1;
  }

  return answer;
}
console.log(solution(N, K));
