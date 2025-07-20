# Iterator 학습 노트

## 제너레이터 기본 실습

### 기본 문법

```typescript
function* generator(): Generator<number, void, unknown> {
  yield 1;
  yield 2;
  yield 3;
}

const iter = generator();
```

### 실행 결과

```typescript
console.log(iter.next()); // { value: 1, done: false }
console.log(iter.next()); // { value: 2, done: false }
console.log(iter.next()); // { value: 3, done: false }
console.log(iter.next()); // { value: undefined, done: true }
```

### 핵심 발견

- 제너레이터는 **필요할 때만 하나씩** 값을 만들어줌
- 메모리에 모든 값을 한번에 올리지 않음
- `done: true`가 되면 더 이상 값이 없음

## 메모리 효율성 실습

### 일반 함수 vs 제너레이터

```typescript
// 일반 함수 - 모든 값을 메모리에 저장
function normalArray() {
  const result: number[] = [];
  for (let i = 0; i <= 1000; i++) {
    result.push(i);
  }
  return result;
}

// 제너레이터 - 필요할 때만 하나씩 생성
function* generatorNumbers() {
  for (let i = 0; i <= 1000; i++) {
    yield i;
  }
}
```

### 편리한 사용법

```typescript
// for...of 루프로 간편하게 사용
for (const num of generatorNumbers()) {
  console.log(num); // 0부터 1000까지 출력
}
```

### 컴파일 주의사항

- `--target es2015` 또는 `--downlevelIteration` 플래그 필요

## 조건부 제너레이터 실습

### 조건에 따른 yield

```typescript
function* generator(condition: boolean) {
  yield 1;
  if (condition) {
    yield 2;
  }
  yield 3;
}

// generator(true): 1, 2, 3
// generator(false): 1, 3
```

### 복잡한 조건 처리

```typescript
function* conditionalGenerator(max: number) {
  for (let i = 1; i <= max; i++) {
    if (i % 2 === 0) {
      // 짝수만
      yield i;
    }
  }
}

// 필요한 만큼만 가져오기
let count = 0;
for (const num of conditionalGenerator(1000)) {
  console.log(num); // 2, 4, 6, 8, 10...
  if (++count >= 10) break; // 10개만
}
```

### 핵심 장점

- **지연 계산**: 필요할 때만 계산
- **메모리 효율**: 전체를 저장하지 않음
- **중간 중단**: 원하는 만큼만 처리 가능

## 양방향 통신 실습

### 타입 에러 해결

```typescript
// ❌ 에러: 'yield' 식은 암시적으로 'any' 형식
function* twoWayGenerator() {
  const input = yield "첫 번째 질문";
  yield `받은 답변: ${input}`;
}

// ✅ 해결: Generator 타입 명시
function* twoWayGenerator(): Generator<string, void, string> {
  const input = yield "첫 번째 질문";
  yield `받은 답변: ${input}`;
}
```

### Generator 타입 설명

```typescript
Generator<YieldType, ReturnType, NextType>;
```

- `YieldType`: yield로 반환하는 값의 타입
- `ReturnType`: return으로 반환하는 값의 타입
- `NextType`: next()로 전달받는 값의 타입

### 양방향 통신 사용법

```typescript
function* twoWayGenerator(): Generator<string, void, string> {
  const input = yield "사자의 다리 갯수는?";
  yield `받은 답변: ${input}`;
}

const gen = twoWayGenerator();
console.log(gen.next()); // { value: '사자의 다리 갯수는?', done: false }
console.log(gen.next("4개")); // { value: '받은 답변: 4개', done: false }
console.log(gen.next()); // { value: undefined, done: true }
```

### 핵심 포인트

- 첫 번째 `next()`는 값을 전달하지 않음
- 두 번째 `next(value)`부터 값이 yield 표현식으로 전달됨
- 제너레이터가 사용자와 대화할 수 있음

## 제너레이터 재사용 불가능 실습

### 일회용 특성

```typescript
function* simpleGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = simpleGenerator();

// 첫 번째 사용
for (const value of gen) {
  console.log(value); // 1, 2, 3 출력
}

// 두 번째 사용 (같은 gen)
for (const value of gen) {
  console.log("두 번째:", value); // 아무것도 출력 안됨!
}
```

### 해결 방법

```typescript
// 새로운 제너레이터 객체 생성
const gen2 = simpleGenerator();
for (const value of gen2) {
  console.log("새로운 gen:", value); // 1, 2, 3 출력
}
```

### 핵심 포인트

- 제너레이터는 **일회용**
- 재사용하려면 새로운 객체 생성 필요

## 무한 제너레이터 실습

### naturals 제너레이터

```typescript
function* naturals() {
  let n = 1;
  while (true) {
    yield n++; // 무한히 자연수 생성
  }
}

const gen = naturals();
let count = 0;
for (const natural of gen) {
  console.log(natural); // 1, 2, 3, 4, 5
  count++;
  if (count >= 5) break; // 필요한 만큼만 사용
}
```

### 핵심 포인트

- `while(true)`로 무한 루프 생성
- 제너레이터는 무한으로 두고, 사용할 때 제한
- 메모리 효율적: 필요한 만큼만 계산

## yield\* 키워드 실습

### yield vs yield\* 차이

```typescript
function* test1() {
  yield 1;
  yield [2, 3]; // 배열 자체를 반환
  yield 4;
}
// 결과: 1, [2, 3], 4

function* test2() {
  yield 1;
  yield* [2, 3]; // 배열을 펼쳐서 각각 반환
  yield 4;
}
// 결과: 1, 2, 3, 4
```

### 핵심 포인트

- `yield`: 값 자체를 반환
- `yield*`: 이터러블을 펼쳐서 각각 반환 (위임)

## reverse 제너레이터 실습

### 배열 뒤집기 구현

```typescript
function* reverse(array) {
  let idx = array.length; // 3
  while (--idx >= 0) {
    // 2, 1, 0 순서로 접근
    yield array[idx];
  }
}

const rev = reverse(["A", "B", "C"]);
for (const item of rev) {
  console.log(item); // C, B, A 순서로 출력
}
```

### 동작 원리

- `idx = array.length` (3)에서 시작
- `--idx`로 먼저 1을 빼고 사용: 2, 1, 0
- 뒤에서부터 앞으로 접근하여 배열 뒤집기
