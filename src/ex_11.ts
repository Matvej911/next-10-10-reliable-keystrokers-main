function arr(num: number) {
  return Array.from(Array(num).keys());
}
const arr1 = arr(5);
console.log(arr1); // [0, 1, 2, 3, 4]
