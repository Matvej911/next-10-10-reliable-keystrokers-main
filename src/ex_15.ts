function fiveAndGreaterOnly(arr: number[]) {
  let greaterthanfive = arr.filter((num) => num > 5);

  return greaterthanfive;
}
console.log(fiveAndGreaterOnly([13, -7, 5, 0])); /// [13]// test
console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]
