let inputArray = [4, 3, 9, 7, 2, 1];
function processArray(arr: number[]) {
  return arr.map((num) => {
    const squareRoot = Math.sqrt(num);
    return Number.isInteger(squareRoot) ? squareRoot : num * num;
  });
}
const processedArray = processArray(inputArray);
console.log(processedArray);
