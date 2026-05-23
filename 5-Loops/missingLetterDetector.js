function fearNotLetter(string) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < string.length - 1; i++) {
    let currentIndex = alphabet.indexOf(string[i]);
    let nextIndex = alphabet.indexOf(string[i + 1]);

    // if the letters are not consecutive
    if (nextIndex !== currentIndex + 1) {
      return alphabet[currentIndex + 1];
    }
  }

  return undefined;
}

console.log(fearNotLetter("abce")); // d
