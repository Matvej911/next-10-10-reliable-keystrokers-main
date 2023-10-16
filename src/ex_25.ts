const isPresent = function (string: string, target: string) {
  let splited = string.split("");
  let foundChars = splited.filter((char) => char === target);
  let result = foundChars.length > 0;
  console.log(result);
  result;
};

isPresent("abcd", "b"); // => true
isPresent("efghi", "a"); // => false
