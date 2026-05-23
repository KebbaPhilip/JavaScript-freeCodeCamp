function findLongestWordLength(sentence) {
  if (sentence.trim() === "") {
    return 0;
  }

  const words = sentence.trim().split(" ");
  let count = 0;

  for (const word of words) {
    if (word !== "") {
      if (word.length > count) {
        count = word.length;
      }
    }
  }

  return count;
}

let longestLength = findLongestWordLength(
  "The quick brown fox jumped over the lazy dog",
);
console.log(`Longest Word Length: ${longestLength}`);

longestLength = findLongestWordLength(
  "A journey of a thousand miles begins with a single step",
);
console.log(`Longest Word Length: ${longestLength}`);
