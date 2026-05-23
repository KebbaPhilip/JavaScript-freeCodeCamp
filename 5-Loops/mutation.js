function mutation(arr) {
  // Convert both strings to lowercase
  let first = arr[0].toLowerCase();
  let second = arr[1].toLowerCase();

  // Loop through each character in the second string
  for (let i = 0; i < second.length; i++) {
    if (!first.includes(second[i])) {
      return false; // Return false if any letter is missing
    }
  }

  return true; // All letters are present
}

// Example tests
console.log(mutation(["hello", "hey"])); // false
console.log(mutation(["hello", "Hello"])); // true
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])); // true
console.log(mutation(["Mary", "Army"])); // true
console.log(mutation(["Mary", "Aarmy"])); // true
console.log(mutation(["Alien", "line"])); // true
console.log(mutation(["floor", "for"])); // true
console.log(mutation(["hello", "neo"])); // false
console.log(mutation(["voodoo", "no"])); // false
console.log(mutation(["ate", "date"])); // false
console.log(mutation(["Tiger", "Zebra"])); // false
console.log(mutation(["Noel", "Ole"])); // true
