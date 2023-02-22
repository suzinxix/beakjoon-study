const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, s] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

const getCombinations = (arr, num) => {
  let answer = [];
  let comb = [...Array(num)].fill(0);
  backTracking(answer, comb, arr, num, 0, 0);
  return answer;
}

const backTracking = (answer, comb, arr, num, idx, start) => {
  if (idx === num) {
    return answer.push([...comb]);
  }
  for (let i = start; i < arr.length; i++) {
    comb[idx] = arr[i];
    backTracking(answer, comb, arr, num, idx + 1, i + 1);
  }
}

let cnt = 0;
for (let i = 1; i <= n; i++) {
  let combArr = getCombinations(arr, i);
  combArr.map((arr) => (
    (arr.reduce((prev, curr) => prev + curr, 0) === s) && cnt++
  ))
}
console.log(cnt);