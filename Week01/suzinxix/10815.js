const fs = require("fs");
const { isReadable } = require("stream");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");
const [N, A, M, B] = input.map(v => v.split(" "));
const arr = new Set(A);
const answer = B.map(v => arr.has(v) ? 1 : 0);
console.log(answer.join(" "));