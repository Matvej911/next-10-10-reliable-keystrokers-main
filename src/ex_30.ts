function monkeyCount(n: number) {
  const result = Array.from({ length: n }, (_, index) => index + 1);
  console.log(result);
}
monkeyCount(10); // => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
monkeyCount(1); // => [1]
