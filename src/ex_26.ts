let arr = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];

function countSheeps(arr: boolean[]) {
  let presentSheep = arr.filter((item) => item === true);
  return presentSheep.length;
}
const sheepCount = countSheeps(arr);
console.log(sheepCount);
