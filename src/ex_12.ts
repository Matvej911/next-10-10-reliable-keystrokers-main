let numbers = "348597"; // => [7,9,5,8,4,3]

function processArray(arr: string) {
  return arr
    .split("")
    .reverse()
    .map((num) => Number(num));
}
const processedArray = processArray(numbers);
console.log(processedArray);
