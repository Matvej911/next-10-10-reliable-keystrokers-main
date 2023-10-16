const shiftLetters = function (string: string) {
  const shiftedString = string
    .split("")
    .map((char) => {
      if (/[a-z]/.test(char)) {
        const shiftedCharCode = char.charCodeAt(0) + 1;

        return String.fromCharCode(
          shiftedCharCode > 122 ? 97 : shiftedCharCode
        );
      }

      return char;
    })
    .join("");
  console.log(shiftedString);

  return shiftedString;
};

shiftLetters("hello"); // => 'ifmmp'
shiftLetters("abcxyz"); // => "bcdyza"
