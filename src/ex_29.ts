let arr = [
  "sheep",
  "sheep",
  "sheep",
  "sheep",
  "sheep",
  "wolf",
  "sheep",
  "sheep",
];
function warnTheSheep(arr: string[]) {
  const index = arr.findIndex((animal) => animal === "wolf");
  if (index === arr.length - 1) {
    console.log("Pls go away and stop eating my sheep");
  } else {
    console.log(
      `Oi! Sheep number ${
        arr.length - 1 - index
      }! You are about to be eaten by a wolf!`
    );
  }
}

warnTheSheep(arr);
