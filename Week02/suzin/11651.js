const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync("input.txt").toString().trim().split("\n");
input.shift();
const arr = input.map((x) => x.split(" "));

function solution(arr) {
  let answer = "";
  arr
    .sort((a, b) => {
      if (a[1] !== b[1]) {
        return a[1] - b[1];
      } else return a[0] - b[0];
    })
    .forEach((x) => (answer += `${x[0]} ${x[1]}\n`));
    return answer;
}

console.log(solution(arr));
