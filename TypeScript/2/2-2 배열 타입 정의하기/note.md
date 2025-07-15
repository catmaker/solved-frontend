💡 추가 지식
두 가지 배열 표기법:

```typescript
Array<number>;
Array<number | string>;
Array<User>;
```

```typescript
number[]
(number | string)[]
User[]
```

Union 타입 배열에서 주의할 점

```typescript
// ✅ 올바른 방법
(number | string)[] // 배열의 각 요소가 number 또는 string
Array<number | string> // 동일한 의미

// ❌ 잘못된 방법
number | string[] // number 또는 string 배열 (전혀 다른 의미)
```
