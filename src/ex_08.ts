let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]; // [10, -65].
let positiveNumbers = arr.filter((num) => num > 0);
let negativeNumbers = arr.filter((num) => num < 0);

let countOfPositiveNumbers = positiveNumbers.length;

let sumNegat = 0;

negativeNumbers.forEach((item) => {
  sumNegat += item;
});

let emptyArray = [];
emptyArray.push(countOfPositiveNumbers, sumNegat);
console.log(emptyArray);
