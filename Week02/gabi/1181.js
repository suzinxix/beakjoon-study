const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const arr = [...new Set(input.slice(1))];

arr.sort((a, b) => {
  if (a.length !== b.length) {
    return a.length - b.length;
  } else return a > b ? 1 : -1;
});

console.log(arr.join('\n'));