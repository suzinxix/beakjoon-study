### π WEEK03 STUDY

#### μλΌν μ€νλ€μ€μ μ²΄ (μμ κ΅¬νκΈ°)
```javascript
let nums = [];
let n = Math.max(...arr)  // κ΅¬νκ³ μ νλ μμμ λ²μ

for (let i=2; i<=n; i++) {
  nums[i]=i;
}
nums[1] = 0;  // 1μ μμκ° μλ
for (let i=2; i<=sqrt(n); i++) {
  if (nums[i] === 0) continue;
  for (let j=i*i; j<=n; j += i) {
    nums[j]=0;
  }
}
// nums μμ μ€ κ°μ΄ 0μ΄ μλ κ²λ€μ΄ μμ
``` 

#### μ ν΄λ¦¬λ νΈμ λ² (μ΅λκ³΅μ½μμ μ΅μκ³΅λ°°μ)
##### μ΅λκ³΅μ½μ GCD (Greatest Common Divisot)
+ a % bκ° 0μ΄λ©΄ 0μ΄ μ΅λκ³΅μ½μμ΄κ³ , μλλΌλ©΄ bμ a%b κ°μ΄ λλμ΄ λ¨μ΄μ§ λκΉμ§ λλ
##### μ΅μκ³΅λ°°μ LCM (Least Common Multiple)
+ aμ bλ₯Ό κ³±ν κ°μ aμ bμ μ΅λκ³΅μ½μλ‘ λλ


```javascript
const GCD = (a, b) => {
  return (a % b === 0) ? b : GCD(b, a % b);
}
const LCM = (a, b) => {
  return a * b / GCD(a, b);
}
```
