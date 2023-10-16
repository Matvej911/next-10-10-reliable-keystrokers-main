function fiveCharactersOrFewerOnly(arr: string[]) {
  let short = arr.filter((str) => str.length <= 5);
  short.sort((a, b) => a.length - b.length);
  return short;
}
console.log(
  fiveCharactersOrFewerOnly(["", "6", "by", "family", "eaten", "camping"])
); // test
console.log(
  fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])
); // ["by", "dog", "wolf", "eaten"]
