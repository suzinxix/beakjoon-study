const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync("input.txt").toString().trim().split("\n");
input.shift();

function solution(arr) {
    const answer = arr.map((v) => v.split(" "));
    answer.sort((a,b)=>{
      if(a[0] === b[0]) return a[1] - b[1]
      return a[0] - b[0]
    })
    return answer.map(v=>v.join(" ")).join("\n");
  }
  
  console.log(solution(input));
