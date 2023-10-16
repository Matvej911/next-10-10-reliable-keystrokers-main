const countLetters = function (string: string): Record<string, number> {
  const result: Record<string, number> = {};

  string.split("").forEach((letter) => {
    if (result[letter]) {
      result[letter]++;
    } else {
      result[letter] = 1;
    }
  });

  console.log(result);
  return result;
};

countLetters("abbcccddddeeeee"); // => {a:1, b:2, c:3, d:4, e:5}
