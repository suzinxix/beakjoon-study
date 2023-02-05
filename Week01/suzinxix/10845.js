const fs = require("fs");
const { off } = require("process");
const { isReadable } = require("stream");
const { isGeneratorFunction } = require("util/types");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");
const num = input.shift();

function solution(arr, num) {
  let queue = [];
  let answer = [];
  for (let i = 0; i < num; i++) {
    if (arr[i].startsWith("push")) {
      const temp = arr[i].split(" ");
      queue.push(+temp[1]);
    } else if (arr[i] === "front") {
      answer.push(queue.length ? queue[0]: -1);
    } else if (arr[i] === "back") {
      answer.push(queue.length ? queue[queue.length-1] : -1);
    } else if (arr[i] === "size") {
      answer.push(queue.length);
    } else if (arr[i] === "empty") {
      answer.push(queue.length ? 0 : 1);
    } else if (arr[i] === "pop") {
      answer.push(queue.length ? queue.shift() : -1);
    }
  }
  return answer;
}
console.log(solution(input, num).join("\n"));
