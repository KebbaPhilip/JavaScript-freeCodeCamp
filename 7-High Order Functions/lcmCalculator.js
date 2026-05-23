function smallestCommons(arr) {
  arr.sort((a, b) => a - b);

  let min = arr[0];
  let max = arr[1];

  function isDivisible(num) {
    for (let i = min; i <= max; i++) {
      if (num % i !== 0) {
        return false;
      }
    }
    return true;
  }

  let multiple = max;

  while (true) {
    if (isDivisible(multiple)) {
      return multiple;
    }
    multiple += max;
  }
}
