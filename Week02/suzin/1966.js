const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync("input.txt").toString().trim().split("\n");
let [n, ...arr] = input;
arr = arr.map((v) => v.split(" ").map((v) => +v));

function solution(arr) {
  let answer = "";
  for (let i = 0; i < arr.length; i += 2) {
    let location = arr[i][1];
    let count = 0;
    const items = arr[i + 1];
    while (true) {
      let max = Math.max(...items);
      let item = items.shift();
      if (item === max) {
        count++;
        if (location === 0) {
          answer += count + "\n";
          break;
        }
      } else {
        items.push(item);
      }
      if (location === 0) {
        location = items.length - 1;
      } else {
        location--;
      }
    }
  }
  return answer;
}

console.log(solution(arr));
