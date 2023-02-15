const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const tc = input.slice(1);

let ans = '';
const VPS = (test) => {
  let stack = [];
  for (let i = 0; i < test.length; i++) {
    if (test[i] === '(') {
      stack.push(test[i]);
    } else {
      if (stack.length) stack.pop();
      else return 'NO';
    }
  }
  return stack.length ? 'NO' : 'YES';
}

tc.map((test) => {
  ans += VPS(test) + '\n';
})
console.log(ans);