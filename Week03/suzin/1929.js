const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const input = fs.readFileSync("input.txt").toString().trim();
const [n, m] = input.split(" ").map(v => +v);

const prime = { 1: true };

for (let i = 2; i <= Math.ceil(Math.sqrt(m)); i++) {
   if (prime[i]) {
      continue;
   }

   for (let j = i ** 2; j <= m; j += i) {      
      prime[j] = true;
   }
}

const results = [];

for (let i = n; i <= m; i++) {
    if (!prime[i]) {
        results.push(i);
    }
}

console.log(results.join("\n"));