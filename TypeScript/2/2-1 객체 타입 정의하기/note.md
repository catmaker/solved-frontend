💡 추가 지식
배열 타입 두 가지 방법:
hobbies: string[]; // 방법 1
hobbies: Array<string>; // 방법 2

### 선택적 속성의 활용

```typescript
const user3: User = {
  name: "kim",
  age: 30,
  email: undefined, // 명시적으로 undefined 할당
  hobbies: [], // 빈 배열도 가능
  isStudent: false,
};
```
