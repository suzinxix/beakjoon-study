### 📚 WEEK03 STUDY

#### 에라토스테네스의 체 (소수 구하기)
```javascript
let nums = [];
let n = Math.max(...arr)  // 구하고자 하는 소수의 범위

for (let i=2; i<=n; i++) {
  nums[i]=i;
}
nums[1] = 0;  // 1은 소수가 아님
for (let i=2; i<=sqrt(n); i++) {
  if (nums[i] === 0) continue;
  for (let j=i*i; j<=n; j += i) {
    nums[j]=0;
  }
}
// nums 요소 중 값이 0이 아닌 것들이 소수
``` 

#### 유클리드 호제법 (최대공약수와 최소공배수)
##### 최대공약수 GCD (Greatest Common Divisot)
+ a % b가 0이면 0이 최대공약수이고, 아니라면 b와 a%b 값이 나누어 떨어질 때까지 나눔
##### 최소공배수 LCM (Least Common Multiple)
+ a와 b를 곱한 값을 a와 b의 최대공약수로 나눔


```javascript
const GCD = (a, b) => {
  return (a % b === 0) ? b : GCD(b, a % b);
}
const LCM = (a, b) => {
  return a * b / GCD(a, b);
}
```
