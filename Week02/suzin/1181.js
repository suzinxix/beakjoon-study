const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync("input.txt").toString().trim().split("\n");
input.shift();

function solution(arr){
    // 중복제거
    const answer = Array.from(new Set(arr));
    // 사전순 정렬 -> 글자수 정렬
    answer.sort().sort((a,b) => a.length - b.length);
    return answer.join('\n');
}

console.log(solution(input))