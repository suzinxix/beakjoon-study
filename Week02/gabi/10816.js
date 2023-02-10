const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const nArr = input[1].split(' ').map(Number);
const mArr = input[3].split(' ').map(Number);

let cardMap = new Map();
let answer = '';

nArr.map((num) => {
  if (cardMap.has(num)) cardMap.set(num, cardMap.get(num) + 1);
  else cardMap.set(num, 1);
})

mArr.map((num) => {
  answer += (cardMap.get(num) || 0) + ' ';
})

console.log(answer);