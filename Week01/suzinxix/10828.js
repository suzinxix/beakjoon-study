const fs = require("fs");
const { off } = require("process");
const { isReadable } = require("stream");
const { isGeneratorFunction } = require("util/types");

const input = fs.readFileSync("./input.txt").toString().trim().split("\n");
const num = input.shift();

function solution(arr, num) {
  let stack = [];
  let answer = [];
  for (let i = 0; i < num; i++) {
    if (arr[i].startsWith("push")) {
        const temp = arr[i].split(" ");
        stack.push(+temp[1]);
      } else if (arr[i] === "top") {
        answer.push(stack.length? stack[stack.length - 1] : -1);
      } else if (arr[i] === "size") {
        answer.push(stack.length);
      } else if (arr[i] === "empty") {
        answer.push(stack.length ? 0 : 1);
      } else if (arr[i] === "pop") {
        answer.push(stack.length ? stack.pop() : -1);
      }
    }
  return answer;
}
console.log(solution(input, num).join("\n"));
