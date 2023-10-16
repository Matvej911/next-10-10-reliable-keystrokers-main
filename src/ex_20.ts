function flatten(
  arrays: (string | boolean | number)[][]
): (string | boolean | number)[] {
  // Use concat and apply to merge the nested arrays into a single array
  return arrays.flat(1);
}

var arrays = [["1", "2", "3"], [true], [4, 5, 6]];

console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];
