### ๐ WEEK2 STUDY

#### ์ฐ๊ฒฐ ๋ฆฌ์คํธ
+ ๋ฌธ์์ด, ์ซ์ ๋ฑ ์ํ๋ ๋ฐ์ดํฐ๋ฅผ ์ ์ฅํ๋ ์๋ฃ๊ตฌ์กฐ (JS ๋ด์ฅ array์์ ์ฐจ์ด์ : idx ์ ๋ฌด)
+ ๋ค์์ ๋ธ๋๋ค๋ก ๊ตฌ์ฑ๋๊ณ , ๊ฐ ๋ธ๋๋ ํ๋์ ๋ฐ์ดํฐ ์๋ฆฌ๋จผํธ ์ ์ฅ
+ ๊ฐ ๋ธ๋๋ค next ํฌ์ธํฐ๋ฅผ ํตํด ์ฐ๊ฒฐ๋์ด ์์ (๊ฐ ๋ธ๋๋ค์ ๋ค์ ๋ธ๋์ ์ ๋ณด๋ฅผ ์ ์ฅํ๊ณ  ์์ด์ผ ํ๊ณ , ๋ค์ ๋ธ๋ ์์ ๊ฒฝ์ฐ null ์ ์ฅ)
```
head: linked list์ ์์ ๋ธ๋
tail: linked list์ ๋ง์ง๋ง ๋ธ๋
length: linked list์ ๊ธธ์ด
```
โ๏ธ head ๋ธ๋๊ฐ ์ด๋์๋์ง ์๋ฉด, ๊ทธ ๋ธ๋๋ก ๋ค์ ๋ธ๋ ์์๋ด๋ ๋ฐฉ์์ผ๋ก ์งํํด์ ๋ง์ง๋ง ๋ธ๋๊น์ง ์ ๊ทผ

#### ๋จ์ผ ์ฐ๊ฒฐ ๋ฆฌ์คํธ
+ ๊ฐ ๋ธ๋๊ฐ ๋ค์ ๋ธ๋๋ก ์ค์ง ๋จ์ผ ๋ฐฉํฅ์ผ๋ก๋ง ์ฐ๊ฒฐ๋ ์ฐ๊ฒฐ ๋ฆฌ์คํธ
+ ๋ธ๋: value๋ก ๋ถ๋ฆฌ๋ ๋จ์ผ ๋ฐ์ดํฐ ํญ๋ชฉ๊ณผ ๋ค์ ๋ธ๋์ ๋ํ ์ฐธ์กฐ ์ ๋ณด์ธ next ์ ์ฅ

```javascript
class Node {
  constructor(val) {
    this.val = val; 
    this.next = null; // ์ฒ์์๋ ์์ง ๋ค์ ๋ธ๋๊ฐ ์๊ธฐ ๋๋ฌธ์ null๋ก ์ด๊ธฐํ
  }
}

class SinglyLinkedList {
  constructor() {
    // head, tail ํฌ์ธํฐ์ length ์ด๊ธฐํ
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}
```

**[push ๋ฉ์๋]**
+ ์ฐ๊ฒฐ๋ฆฌ์คํธ ๋งจ ๋ง์ง๋ง์ ์์ ์ถ๊ฐ ํ ์์ ์ ๋ฆฌํด
``` javascript
push(val) {
  let newNode = new Node(val);
  // head๊ฐ null์ด๋ผ๋ฉด ์ฒ์ ์ฝ์ํ ๊ฐ์ด๋ฏ๋ก head์ tail์ด newNode ๊ฐ๋ฆฌํค๊ฒ
  // ๊น์ด ์กด์ฌํ๋ฉด next์ tail์ด newNode ๊ฐ๋ฆฌํค๊ฒ
  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
    this.tail = newNode;
  }
  this.length++;
  return this;
}
```
**[pop ๋ฉ์๋]**
+ ์ฐ๊ฒฐ๋ฆฌ์คํธ ๋งจ ๋ง์ง๋ง ์์๋ฅผ ์ ๊ฑฐ ํ ๋ฐํ
``` javascript
pop() {
  if (!this.head) return undefined;
  let current = this.head;
  let newTail = current;
  while (current.next) {
    // newTail์ ํญ์ current๊ฐ ์ด์ ์ ๊ฐ๋ฆฌํค๋ ๊ฒ์ผ๋ก ์ค์ 
    newTail = current;
    current = current.next;
  }
  this.tail = newTail;
  this.tail.next = null;  // ์๋ก ์ค์ ๋ tail์ next๋ฅผ null๋ก ์ค์ ํจ์ผ๋ก์จ ๋ง์ง๋ง ๊ฐ์ด๋ผ๋ ๊ฑธ ์๋ ค์ค
  this.length--;
  if (this.length === 0) {
    this.head = null;
    this.tail = null;
  }
  return current;
}
```
**[shift ๋ฉ์๋]**
+ ์ฐ๊ฒฐ๋ฆฌ์คํธ ๋งจ ์ ์์๋ฅผ ์ ๊ฑฐ ํ ๋ฐํ
``` javascript
// ์ฐ๊ฒฐ๋ฆฌ์คํธ ๋งจ ์ ์์ ์ ๊ฑฐ ํ ๋ฐํ (head๊ฐ ๊ทธ ๋ค์ ๋ธ๋ ๊ฐ๋ฆฌํค๊ฒ ํจ)
shift() {
  if (!this.head) return undefined;
  let currentHead = this.head;
  this.head = currentHead.next;
  this.length--;
  if (this.length === 0) {
    this.tail = null;
  }
  return currentHead;
}
```
**[unshift ๋ฉ์๋]**
+ ์ฐ๊ฒฐ๋ฆฌ์คํธ ๋งจ ์ ์์ ์ถ๊ฐ ํ ์์ ์ ๋ฐํ
``` javascript
// ์ฐ๊ฒฐ๋ฆฌ์คํธ ๋งจ ์์ ์์ ์ถ๊ฐ (head๊ฐ ์๋ ฅ ๊ฐ์ ๊ฐ๋ฆฌํค๊ฒ ํจ)
unshift(val) {
  let newNode = new Node(val);
  if (!this.head) {
  this.head = newNode
  this.tail = this.head;
  }
  else {
    newNode.next = this.head;
    this.head = newNode;
  }
  this.length++;
  return this;
}
```
**[get ๋ฉ์๋]**
+ ์ธ๋ฑ์ค์ ์์นํ๋ ๊ฐ ๋ฐํ
``` javascript
// ์ธ๋ฑ์ค ํน์ ์์น ์๋ฏธํ๋ ์๋ฅผ ์ธ์๋ก ๋ฐ์ ์ฃผ์ด์ง ์์น์ ์๋ ๋ธ๋ ๋ฐํ
get(idx) {
  if (idx < 0 || idx >= this.length) return null;
  let counter = 0;
  let current = this.head;
  while (counter !== idx) {
    current = current.next;
    counter++;
  }
  return current;
}
```
**[set ๋ฉ์๋]**
+ ์ํ๋ ์์น ๊ฐ ๋ณ๊ฒฝ ํ true ๋ฐํ or ๋ธ๋ ์ฐพ์ง ๋ชปํ์ ๊ฒฝ์ฐ false ๋ฐํ
``` javascript
// get ๋ฉ์๋๋ก ํด๋น ์์น ๊ฐ ์ฐพ๊ณ  ์์ผ๋ฉด ๊ฐ ์๋ฐ์ดํธ
set(idx, val) {
  let foundNode = this.get(idx);
  if (foundNode) {
    foundNode.val = val;
    return true;
  }
  return false;
}
```
**[insert ๋ฉ์๋]**
+ idx ์์น์ val ๊ฐ ์ฝ์
``` javascript
// idx ์์น์ ๊ฐ ์ฝ์
insert(idx, val) {
  if (idx < 0 || idx > this.length) return false;
  if (idx === this.length) {
    this.push(val);
    return true;
  }
  if (idx === 0) {
    this.unshift(val);
    return true;
  }
  // get ๋ฉ์๋๋ก idx-1์ ์์นํ ๋ธ๋ ์ฐพ๊ธฐ
  let newNode = new Node(val);
  let prev = this.get(idx - 1);
  let tmp = prev.next;
  prev.next = newNode;
  newNode.next = tmp;
  this.length++;
  return true;
}
```
**[remove ๋ฉ์๋]**
+  ํด๋น idx ๊ฐ ์ญ์ 
``` javascript
// ํด๋น idx ๊ฐ ์ญ์ 
remove(idx) {
  if (idx < 0 || idx === this.length) return undefined;
  if (idx === 0) return this.shift();
  if (idx === this.length) return this.pop();

  let prev = this.get(idx - 1)
  let removed = prev.next;
  prev.next = removed.next;
  this.length--;
  return removed;
}
```
**[reverse ๋ฉ์๋]**
+ ๋ธ๋ ์์๊ฐ ์ญ์ผ๋ก ์ฐ๊ฒฐ๋๋๋ก ์ฐ๊ฒฐ๋ฆฌ์คํธ ๋ค์ง๊ธฐ
+ ๋ฆฌ์คํธ๋ฅผ ๋ฐ๋ผ๊ฐ๋ฉด์ ์์๋ฅผ ๊ณ์ ์ญ์ผ๋ก ๋ฐ๊ฟ ๋๊ฐ์ผ ํจ
``` javascript
// ๋ฆฌ์คํธ ๋ค์ง๊ธฐ
reverse() {
  // head์ tail ๊ตํ
  let node = this.head;
  this.head = this.tail;
  this.tail = node;
  
  let next;
  let prev = null;
  for (let i = 0; i < this.length; i++) {
    next = node.next;
    node.next = prev;
    prev = node;
    node = next;
  }
  return this;
}
```
