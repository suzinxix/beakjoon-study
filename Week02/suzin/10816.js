const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

// 처음에 배열 이용해서 반복문 돌려서 품 -> 시간초과! -> Map 자료형을 이용해서

function solution(input) {
  const [N, ncards, M, mcards] = input.map((x) => x.split(" "));
  const map = new Map();
  let answer = "";
  ncards.forEach((v) => {
    if (map.has(v)) map.set(v, map.get(v) + 1);
    else map.set(v, 1);
  });
  mcards.forEach((v) => {
    if (map.has(v)) answer += map.get(v) + " ";
    else answer += 0 + " ";
  });
  return answer;
}

console.log(solution(input));