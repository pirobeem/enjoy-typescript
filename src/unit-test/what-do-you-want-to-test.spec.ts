// 0以上の数値を足して、その答えを返す関数
function plus(a: number, b: number) {
  if (a < 0 || b < 0) {
    throw Error("a or b is less than 0");
  }
  return a + b;
}

test("plus function test 1", () => {
  // data
  const a = 1;
  const b = 1;

  // exec
  const result = plus(a, b);

  // assert
  expect(result).toBe(2);
});

// describe.skip("plus function", () => {
//   test("1 + 1 = 2", () => {
//     // data
//     const a = 1;
//     const b = 1;

//     // exec
//     const result = plus(a, b);

//     // assert
//     expect(result).toBe(2);
//   });

//   test("1 + 2 = 3", () => {
//     // data
//     const a = 1;
//     const b = 2;

//     // exec
//     const result = plus(a, b);

//     // assert
//     expect(result).toBe(3);
//   });
// });
