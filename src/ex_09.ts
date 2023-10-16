let arr = [1, 2, 2]; // => 1^2 + 2^2 + 2^2 = 9.
const sumOfSquares = arr.reduce((sum, num) => sum + Math.pow(num, 2), 0);

console.log(sumOfSquares);
