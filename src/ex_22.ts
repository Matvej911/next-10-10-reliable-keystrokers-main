const swapCase = function (string: string) {
  const words = string.split(" ");

  const swappedWords = words.map((word, index) => {
    if (index % 2 === 0) {
      return word.toUpperCase();
    } else {
      return word.toLowerCase();
    }
  });

  const result = swappedWords.join(" ");
  console.log(result);
};

swapCase("hey gurl, lets javascript together sometime");
