const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

function solution(input) {
  for (let i = 1; i <= input[0]; i++) {
    let stack = [];
    let answer = "YES";
    let len = input[i].length;
    const arr = input[i];
    for (let j = 0; j < len; j++) {
      if (arr[j] === "(") {
        stack.push(arr[j]);
      } else {
        if (!stack.pop()) {
          answer = "NO";
          break;
        }
      }
    }
    if (stack.length !== 0) answer = "NO";

    console.log(answer);
  }
}
solution(input)
// 빈배열.pop() : undefined
// undefined : false
