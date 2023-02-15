📚 **WEEK1 STUDY**

*Space Complexity* in JS

- Most primitives (`booleans`, `numbers`, `undefined`, `null`) are **constant space**
- `String` require **O(n)** space (where *n* is the string length)
- *Reference types* are generallly **O(n)**, where n is the length (for `arrays`) or the number of keys (for `object`)

*Binary Search (이진탐색)*

- 한번에 하나의 항목만 제거하는 것보다 훨씬 빠르다.
- 확인을 할 때마다 남은 항목의 절반을 없앨 수 있다.
- 조건 : 이진탐색은 `정렬된 배열을 대상으로만 작동`하므로 데이터가 정렬되어 있어야 한다.
- `분할 정복` (Dividing and Conquering) : 배열을 두 부분으로 나눈다 → 중간점을 선택하고 찾는 값이 중간점을 기준으로 좌측과 우측 절반 중 어느쪽에 있는지 확인
- 배열을 탐색할 때 중간점 (halfway point)를 선택 → 만약 찾는 요소가 중간점보다 작으면 뒷부분은 고려하지 않아도 된다.
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
        - 16개의 요소 → 4단계 필요
        - 32개의 요소 → 5단계 필요
    - Best Case : O(1)
        - 제일 처음으로 선택한 중간값 = 찾는 값 일때

*Stack (스택)*

- 후입선출 (LIFO)
- 스택을 표현하는 방법 : 배열 or 단일 연결 리스트
- 배열
    - `push()` / `pop()` : 배열의 맨 뒤에부터 추가 & 제거
    - `shift()` / `unshift()` : 배열의 앞에서부터 추가 & 제거 → 좋지 않은 방법 : 앞에 요소를 추가하면 나머지 요소들에 전부 새로운 인덱스를 주어야 하기 때문에 모든 요소가 밀려난다.
    - 간단한 경우에만 사용. 데이터 크기가 큰 경우는 단일 연결 리스트를 쓰는 것이 낫다.
- 단일 연결 리스트
    - 리스트의 맨 앞에서 추가와 제거
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
            // 노드가 있는지 없는지 확인
            if(!this.first){
                this.first = newNode;
                this.last = newNode;
            }
            // 노드가 하나이상 있다면
            else {
                let temp = this.first;
                this.first = newNode;
                this.first.next = temp;
            }
            return ++this.size;
        }
        pop(){
            // 노드가 있는지 확인
            if(!this.first) return null;
            let temp = this.first;
            // 리스트에 노드가 1개 있는지 확인
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

*Queue (큐)*

- FIFO (선입선출)
- 배열
    - unshift() / pop()
    - push() / shift()
    - Big(O) : O(n)
- 단일 연결 리스트
    - 리스트의 맨 뒤에 추가 / 맨 앞 제거
- Big(O)
    - 삽입과 제거에서 O(1)을 가져야 한다.
    - 배열을 사용할 경우 O(n)
    - insertion : O(1)
    - removal : O(1)