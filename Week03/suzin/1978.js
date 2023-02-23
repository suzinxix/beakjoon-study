const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync("input.txt").toString().trim().split("\n");
input.shift();
const arr = input[0].split(" ").map((v) => +v);

function isPrime(num) {
  if (num == 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
function solution(arr) {
    return arr.filter((v) => isPrime(v)).length;
  }
console.log(solution(arr));
