const fs = require("fs");
const { isReadable } = require("stream");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [N, A, M, B] = input.map(v => v.split(" "));
const arr = new Set(A);
// Set.has() : Set 객체에 주어진 요소가 존재하는지 판단해 true, false 반환
const result = B.map(v => arr.has(v) ? 1 : 0);
console.log(result.join('\n'));
