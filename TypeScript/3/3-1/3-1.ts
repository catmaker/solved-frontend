// 1. 좌표 (x, y) 를 나타내는 튜플
let position: [number, number] = [10, 20];

// 2. 이름, 나이, 활성상태를 나타내는 튜플
let userInfo: [string, number, boolean] = ["김대종", 28, true];

// 3. RGB 색상값을 나타내는 튜플
let color: [number, number, number] = [255, 127, 0];

// 4. 이 튜플에서 값을 어떻게 꺼내 쓸까?
let point: [number, number] = [100, 200];

let pointPop1: number = point[0];
let pointPop2: number = point[1];

let [x, y]: [number, number] = point;
