πΒ **WEEK1 STUDY**

*Space Complexity* in JS

- Most primitives (`booleans`, `numbers`, `undefined`, `null`) are **constant space**
- `String` require **O(n)** space (where *n* is the string length)
- *Reference types* are generallly **O(n)**, where n is the length (for `arrays`) or the number of keys (for `object`)

*Binary Search (μ΄μ§νμ)*

- νλ²μ νλμ ν­λͺ©λ§ μ κ±°νλ κ²λ³΄λ€ ν¨μ¬ λΉ λ₯΄λ€.
- νμΈμ ν  λλ§λ€ λ¨μ ν­λͺ©μ μ λ°μ μμ¨ μ μλ€.
- μ‘°κ±΄ : μ΄μ§νμμ `μ λ ¬λ λ°°μ΄μ λμμΌλ‘λ§ μλ`νλ―λ‘ λ°μ΄ν°κ° μ λ ¬λμ΄ μμ΄μΌ νλ€.
- `λΆν  μ λ³΅` (Dividing and Conquering) : λ°°μ΄μ λ λΆλΆμΌλ‘ λλλ€ β μ€κ°μ μ μ ννκ³  μ°Ύλ κ°μ΄ μ€κ°μ μ κΈ°μ€μΌλ‘ μ’μΈ‘κ³Ό μ°μΈ‘ μ λ° μ€ μ΄λμͺ½μ μλμ§ νμΈ
- λ°°μ΄μ νμν  λ μ€κ°μ  (halfway point)λ₯Ό μ ν β λ§μ½ μ°Ύλ μμκ° μ€κ°μ λ³΄λ€ μμΌλ©΄ λ·λΆλΆμ κ³ λ €νμ§ μμλ λλ€.
- **code**
    
    ```jsx
    function binarySearch(arr, element) {
      let start = 0;
      let end = arr.length - 1;
      let middle = Math.floor((start + end) / 2);
      while (arr[middle] !== element && start <= end) {
        if (element < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
      }
      return arr[middle] === element ? middle : -1;
    }
    ```
    
- Big O
    - Worst and Average Case : `O(log n)`
        - 16κ°μ μμ β 4λ¨κ³ νμ
        - 32κ°μ μμ β 5λ¨κ³ νμ
    - Best Case : O(1)
        - μ μΌ μ²μμΌλ‘ μ νν μ€κ°κ° = μ°Ύλ κ° μΌλ

*Stack (μ€ν)*

- νμμ μΆ (LIFO)
- μ€νμ νννλ λ°©λ² : λ°°μ΄ or λ¨μΌ μ°κ²° λ¦¬μ€νΈ
- λ°°μ΄
    - `push()` / `pop()` : λ°°μ΄μ λ§¨ λ€μλΆν° μΆκ° & μ κ±°
    - `shift()` / `unshift()` : λ°°μ΄μ μμμλΆν° μΆκ° & μ κ±° β μ’μ§ μμ λ°©λ² : μμ μμλ₯Ό μΆκ°νλ©΄ λλ¨Έμ§ μμλ€μ μ λΆ μλ‘μ΄ μΈλ±μ€λ₯Ό μ£Όμ΄μΌ νκΈ° λλ¬Έμ λͺ¨λ  μμκ° λ°λ €λλ€.
    - κ°λ¨ν κ²½μ°μλ§ μ¬μ©. λ°μ΄ν° ν¬κΈ°κ° ν° κ²½μ°λ λ¨μΌ μ°κ²° λ¦¬μ€νΈλ₯Ό μ°λ κ²μ΄ λ«λ€.
- λ¨μΌ μ°κ²° λ¦¬μ€νΈ
    - λ¦¬μ€νΈμ λ§¨ μμμ μΆκ°μ μ κ±°
    - code
    
    ```jsx
    class Node {
      constructor(value) {
        this.value = value;
        this.next = null;
      }
    }
    
    class Stack {
        constructor(){
            this.first = null;
            this.last = null;
            this.size = 0;
        }
        push(value){
            let newNode = new Node(value);
            // λΈλκ° μλμ§ μλμ§ νμΈ
            if(!this.first){
                this.first = newNode;
                this.last = newNode;
            }
            // λΈλκ° νλμ΄μ μλ€λ©΄
            else {
                let temp = this.first;
                this.first = newNode;
                this.first.next = temp;
            }
            return ++this.size;
        }
        pop(){
            // λΈλκ° μλμ§ νμΈ
            if(!this.first) return null;
            let temp = this.first;
            // λ¦¬μ€νΈμ λΈλκ° 1κ° μλμ§ νμΈ
            if(this.first === this.last) this.last = null;
            this.first = this.first.next;
            this.size--;
            return temp.value;
        }
    }
    ```
    
- Big O
    - insertion : O(1)
    - removal : O(1)
    - Searching : O(n)
    - Access : O(n)

*Queue (ν)*

- FIFO (μ μμ μΆ)
- λ°°μ΄
    - unshift() / pop()
    - push() / shift()
    - Big(O) : O(n)
- λ¨μΌ μ°κ²° λ¦¬μ€νΈ
    - λ¦¬μ€νΈμ λ§¨ λ€μ μΆκ° / λ§¨ μ μ κ±°
- Big(O)
    - μ½μκ³Ό μ κ±°μμ O(1)μ κ°μ ΈμΌ νλ€.
    - λ°°μ΄μ μ¬μ©ν  κ²½μ° O(n)
    - insertion : O(1)
    - removal : O(1)