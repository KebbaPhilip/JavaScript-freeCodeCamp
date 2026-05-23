function diffArray(arr1, arr2) {
  const uniqueArr1 = arr1.filter((item) => {
    return !arr2.includes(item);
  });

  const uniqueArr2 = arr2.filter((item) => {
    return !arr1.includes(item);
  });

  return uniqueArr1.concat(uniqueArr2);
}

console.log(
  diffArray(["diamond", "stick", "apple"], ["stick", "emerald", "bread"]),
);
