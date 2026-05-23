function steamrollArray(arr) {
  const result = [];

  function flatten(value) {
    if (Array.isArray(value)) {
      for (let item of value) {
        flatten(item);
      }
    } else {
      result.push(value);
    }
  }

  for (let item of arr) {
    flatten(item);
  }

  return result;
}
