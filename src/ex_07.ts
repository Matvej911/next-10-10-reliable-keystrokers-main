// => 1 + 7 + 12 = 20

let arr = [1, -4, 7, 12];
let positiveNumbers = arr.filter(num => num > 0);

let sum = 0;

positiveNumbers.forEach(item => {
  sum += item;
});

console.log(sum); 
