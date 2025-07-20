// function* generator(): Generator<number, void, unknown> {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// const iter = generator();

// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

// function normalArray() {
//   const result: number[] = [];

//   for (let i = 0; i <= 1000; i++) {
//     result.push(i);
//   }
//   return result;
// }

// // console.log(normalArray());

// function* generatorNumbers() {
//   for (let i = 0; i <= 1000; i++) {
//     yield i;
//   }
// }

// const gen = generatorNumbers();

// for (const num of generatorNumbers()) {
//   console.log(num);
// }

// function* generator(condition: boolean) {
//   yield 1;

//   if (condition) {
//     yield 2;
//   }
//   yield 3;
// }

// const gen = generator(false);

// for (const num of gen) {
//   console.log(num);
// }

// function* conditionalGenerator(max: number) {
//   for (let i = 1; i <= max; i++) {
//     if (i % 2 === 0) {
//       yield i;
//     }
//   }
// }

// const gen = conditionalGenerator(1000);

// let count = 0;
// for (const num of gen) {
//   console.log(num);
//   count++;
//   if (count >= 10) break;
// }

// function* twoWayGenerator(): Generator<string, void, string> {
//   const input = yield "사자의 다리 갯수는?";
//   yield `받은 답변: ${input}`;
// }

// const gen = twoWayGenerator();
// console.log(gen.next());
// console.log(gen.next("4개"));
// console.log(gen.next());

// function* simpleGenerator() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// const gen = simpleGenerator();
// for (const value of gen) {
//   console.log(value);
// }

// for (const value of gen) {
//   console.log(value);
// }

// function* naturals() {
//   let n = 1;
//   while (true) {
//     yield n++;
//   }
// }

// const gen = naturals();

// let count = 0;
// for (const natural of gen) {
//   console.log(natural);
//   count++;
//   if (count >= 5) break;
// }

// function* test1() {
//   yield 1;
//   yield [2, 3];
//   yield 4;
// }

// function* test2() {
//   yield 1;
//   yield* [2, 3];
//   yield 4;
// }

// // const gen = test1();
// const gen2 = test2();

// // console.log(gen.next());
// // console.log(gen.next());
// console.log(gen2.next());
// console.log(gen2.next());
// console.log(gen2.next());
// console.log(gen2.next());

function* reverse(array) {
  let idx = array.length;
  while (--idx >= 0) {
    console.log(`idx: ${idx}, value: ${array[idx]}`);

    yield array[idx];
  }
}

const rev = reverse(["a", "b", "c"]);

for (const item of rev) {
  console.log(item);
}
