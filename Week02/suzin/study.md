📚 **WEEK1 STUDY**

*Map 자료형*

- 키-값 쌍인 집합
    - 객체의 key : string / map의 key : 다양한 자료형 가능
    - 객체보다 Map이 더 선호됨
- 삽입 순서 기억
- 키는 오직 단 하나만 존재

- `const map = new Map()`: map 생성
- `map.set(key, value)` : key-value 저장
- `map.get(key)` : key에 해당하는 값 반환, 존재하지 않으면 undefined 반환
- `map.has(key)` : key가 존재하면 true, 존재하지 않으면 false 반환
- `map.delete(key)` : key에 해당하는 값 삭제
- `map.clear()`: 모든 요소 제거
- `map.size` : 요소의 개수 반환

- map.set() → map 자기자신 반환 → 체이닝 가능
    
    ex) `map.set(’1’, a).set(’2’,b).set(’3’,c)`
    

- `map.keys()` : 각 요소의 키를 모은 이터러블 객체 반환
- `map.values()` : 각 요소의 값을 모은 이터러블 객체 반환
- `map.entries()` : 키-값 쌍의 이터러블 객체 반환
- `map.forEach()` : 삽입 순서에 따라 객체 각 키/값 쌍당 한 번씩 제공된 함수를 실행