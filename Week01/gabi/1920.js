const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const nArr = input[1].split(' ').map(Number).sort((a, b) => a-b);
const m = parseInt(input[2]);
const mArr = input[3].split(' ').map(Number);

let ans = '';

function binarySearch(arr, num) {
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor((left + right) / 2);
  while (left <= right) {  
    if (num < arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
    mid = Math.floor((left + right) / 2);
  }
  return arr[mid] === num ? 1 : 0;
}

for (let i = 0; i < m; i++) {
  ans += binarySearch(nArr, mArr[i])+'\n';
}

console.log(ans);