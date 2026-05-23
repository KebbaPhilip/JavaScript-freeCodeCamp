function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);

  const index = arr.findIndex((value) => {
    return value >= num;
  });

  return index === -1 ? arr.length : index;
}

console.log(getIndexToIns([1, 2, 3, 4], 1.5));
console.log(getIndexToIns([20, 3, 5], 19));
