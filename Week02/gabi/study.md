### 📚 WEEK2 STUDY

#### 연결 리스트
+ 문자열, 숫자 등 원하는 데이터를 저장하는 자료구조 (JS 내장 array와의 차이점: idx 유무)
+ 다수의 노드들로 구성되고, 각 노드는 하나의 데이터 엘리먼트 저장
+ 각 노드들 next 포인터를 통해 연결되어 있음 (각 노드들은 다음 노드의 정보를 저장하고 있어야 하고, 다음 노드 없을 경우 null 저장)
```
head: linked list의 시작 노드
tail: linked list의 마지막 노드
length: linked list의 길이
```
❗️ head 노드가 어디있는지 알면, 그 노드로 다음 노드 알아내는 방식으로 진행해서 마지막 노드까지 접근

#### 단일 연결 리스트
+ 각 노드가 다음 노드로 오직 단일 방향으로만 연결된 연결 리스트
+ 노드: value로 불리는 단일 데이터 항목과 다음 노드에 대한 참조 정보인 next 저장

```javascript
class Node {
  constructor(val) {
    this.val = val; 
    this.next = null; // 처음에는 아직 다음 노드가 없기 때문에 null로 초기화
  }
}

class SinglyLinkedList {
  constructor() {
    // head, tail 포인터와 length 초기화
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}
```

**[push 메서드]**
+ 연결리스트 맨 마지막에 요소 추가 후 자신을 리턴
``` javascript
push(val) {
  let newNode = new Node(val);
  // head가 null이라면 처음 삽입한 값이므로 head와 tail이 newNode 가리키게
  // 깂이 존재하면 next와 tail이 newNode 가리키게
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
**[pop 메서드]**
+ 연결리스트 맨 마지막 요소를 제거 후 반환
``` javascript
pop() {
  if (!this.head) return undefined;
  let current = this.head;
  let newTail = current;
  while (current.next) {
    // newTail은 항상 current가 이전에 가리키던 것으로 설정
    newTail = current;
    current = current.next;
  }
  this.tail = newTail;
  this.tail.next = null;  // 새로 설정된 tail의 next를 null로 설정함으로써 마지막 값이라는 걸 알려줌
  this.length--;
  if (this.length === 0) {
    this.head = null;
    this.tail = null;
  }
  return current;
}
```
**[shift 메서드]**
+ 연결리스트 맨 앞 요소를 제거 후 반환
``` javascript
// 연결리스트 맨 앞 요소 제거 후 반환 (head가 그 다음 노드 가리키게 함)
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
**[unshift 메서드]**
+ 연결리스트 맨 앞 요소 추가 후 자신을 반환
``` javascript
// 연결리스트 맨 앞에 요소 추가 (head가 입력 값을 가리키게 함)
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
**[get 메서드]**
+ 인덱스에 위치하는 값 반환
``` javascript
// 인덱스 혹은 위치 의미하는 수를 인자로 받아 주어진 위치에 있는 노드 반환
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
**[set 메서드]**
+ 원하는 위치 값 변경 후 true 반환 or 노드 찾지 못했을 경우 false 반환
``` javascript
// get 메서드로 해당 위치 값 찾고 있으면 값 업데이트
set(idx, val) {
  let foundNode = this.get(idx);
  if (foundNode) {
    foundNode.val = val;
    return true;
  }
  return false;
}
```
**[insert 메서드]**
+ idx 위치에 val 값 삽입
``` javascript
// idx 위치에 값 삽입
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
  // get 메서드로 idx-1에 위치한 노드 찾기
  let newNode = new Node(val);
  let prev = this.get(idx - 1);
  let tmp = prev.next;
  prev.next = newNode;
  newNode.next = tmp;
  this.length++;
  return true;
}
```
**[remove 메서드]**
+  해당 idx 값 삭제
``` javascript
// 해당 idx 값 삭제
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
**[reverse 메서드]**
+ 노드 순서가 역으로 연결되도록 연결리스트 뒤집기
+ 리스트를 따라가면서 순서를 계속 역으로 바꿔 나가야 함
``` javascript
// 리스트 뒤집기
reverse() {
  // head와 tail 교환
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
