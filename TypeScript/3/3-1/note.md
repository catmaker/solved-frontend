💡 추가 지식

```ts
let point: [number, number] = [100, 200];

// 방법 1: 인덱스 방식
let pointPop1: number = point[0];
let pointPop2: number = point[1];

// 방법 2: 구조 분해 할당
let [x, y] = point;
console.log(x); // 100
console.log(y); // 200

// 방법 3: 타입까지 명시
let [x2, y2]: [number, number] = point;
```
