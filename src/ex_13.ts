function total(arr: number[]) {
  let sum = 0;

  arr.forEach((item) => {
    sum += item;
  });

  return sum;
}

console.log(total([1, 2, 3])); // 6
