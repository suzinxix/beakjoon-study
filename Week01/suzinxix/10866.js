const fs = require("fs");
const { off } = require("process");
const { isReadable } = require("stream");
const { isGeneratorFunction } = require("util/types");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");
const num = input.shift();

// deque : 양쪽 끝에서 삽입과 삭제가 가능한 자료구조 (stack과 deque를 합친 형태)

function solution(arr, num) {
  const deque = [];
  const answer = [];
  for (let i = 0; i < num; i++) {
    if (arr[i].startsWith("push_front")) {
      const temp = arr[i].split(" ");
      deque.unshift(+temp[1]);
    } 
    else if (arr[i].startsWith("push_back")) {
      const temp = arr[i].split(" ");
      deque.push(+temp[1]);
    } 
    else if (arr[i] === "pop_front") {
      answer.push(deque.length ? deque.shift() : -1);
    } 
    else if (arr[i] === "pop_back") {
      answer.push(deque.length ? deque.pop() : -1);
    } 
    else if (arr[i] === "size") {
      answer.push(deque.length);
    } 
    else if (arr[i] === "empty") {
      answer.push(deque.length ? 0 : 1);
    } 
    else if (arr[i] === "front") {
      answer.push(deque.length ? deque[0] : -1);
    } 
    else if (arr[i] === "back") {
      answer.push(deque.length ? deque[deque.length - 1] : -1);
    }
  }
  return answer;
}
console.log(solution(input, num).join("\n"));
