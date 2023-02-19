const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let tc = [];
for (let i = 0; i < input.length - 1; i++) {
  tc.push(input[i]);
}

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

let ans = '';
for (let i = 0; i < tc.length; i++) {
  let k = Number(tc[i].split(' ')[0]);
  let s = tc[i].split(' ').slice(1).map(Number);
  let result = getCombinations(s, 6);
  result.map((e) => (
    ans += e.join(' ')+'\n'
  ))
  ans += '\n';
}

console.log(ans);