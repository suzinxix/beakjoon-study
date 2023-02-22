let fs = require("fs");
// TODO: ("/dev/stdin")
let input = fs.readFileSync("input.txt").toString().trim().split("\n");

input.pop();
input = input.map((v) => v.split(" ").map(Number));

let answer = "";
let K;
let S;

input.forEach((x) => {
  [K, ...S] = x;
  dfs(0, []);
  answer += "\n";
});

function dfs(L, pick) {
  if (pick.length === 6) {
    answer += `${pick.join(" ")}\n`;
    return;
  }
  for (let i = L; i < K; i++) {
    dfs(i + 1, [...pick, S[i]]);
  }
}

console.log(answer);