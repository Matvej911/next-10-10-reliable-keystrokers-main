function findNeedle(str: string[]) {
  const foundIndex = str.indexOf("needle");
  if (foundIndex === -1) {
    console.log("needle not found");
    return;
  }
  console.log(`found the needle at position ${foundIndex}`);
  return foundIndex;
}

findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]); // should return "found the needle at position 5"
findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "adfr", "randomJunk"]); // should return "needle not found"
