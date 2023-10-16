function evensOnly(arr: number[]) {
  let evens = arr.filter((num) => num % 2 === 0);
  return evens;
}
console.log(evensOnly([0, 1, 8, 100, -4])); /// [ 0, 8, 100, -4 ] test
console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]
