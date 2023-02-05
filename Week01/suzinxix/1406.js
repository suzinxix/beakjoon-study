const fs = require("fs");
const { resourceUsage } = require("process");
const { isReadable } = require("stream");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

// 첫번째 시도로 cursor를 인덱스로 표현해 풀었는데 시간초과 -> cursor를 stack으로 표현

const [str, M] = input.splice(0, 2);
const lStack = str.split(""); // 문자열을 lstack에 집어넣는다.
const rStack = [];

function solution(lStack, rStack, input, len) {
  for (let i = 0; i < len; i++) {
    if(input[i] === "L" && lStack.length){
        rStack.push(lStack.pop());
        
    }
    else if(input[i] === "D" && rStack.length){
        lStack.push(rStack.pop());
        
    }
    else if(input[i] === "B" && lStack.length){
        lStack.pop();
        
    }
    else if(input[i].startsWith("P")){
        const [command, value] = input[i].split(" ");
        lStack.push(value);
        
    }
  }
  return lStack.concat(rStack.reverse());
}

console.log(solution(lStack, rStack, input, M).join(""));
