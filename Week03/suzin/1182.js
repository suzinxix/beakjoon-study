const fs = require("fs");
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const [N, S, ...input] = fs.readFileSync("input.txt").toString().trim().split(/\s+/).map(v => +v);

function solution(N, S, arr){
    let answer = 0;
    const recursion = (i, sum) => {
        if(i === N) return;
        sum += arr[i];
        if(sum === S) answer++;
        recursion(i + 1, sum);
        recursion(i+1, sum - arr[i]);
    }
    recursion(0,0);
    return answer;
}

console.log(solution(N, S, input));