const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const [a, b] = require("fs").readFileSync("input.txt").toString().trim().split(" ").map(i=>parseInt(i));
// 유클리드 호제법

let i = a;
let j = b;

while (i % j !== 0) {
    let n = i % j;
    if (n !== 0) {
        i = j;
        j = n;
    }
}
console.log(j)
console.log(a*b/j)