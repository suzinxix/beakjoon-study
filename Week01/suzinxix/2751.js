const fs = require("fs");
const { isReadable } = require("stream");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n").map((v) => +v);
input.shift();
const arr = new Set(input);
const answer = [...arr].sort((a, b) => a - b);
console.log(answer.join("\n"));
