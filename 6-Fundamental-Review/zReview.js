let arr = [1, 2, 3, 4, 5];
console.log(arr.toString());

let obj = { name: "John", age: 30 };
console.log(obj.toString());

function createLargeArray() {
  let largeArray = new Array(1000000);
  return function () {
    console.log(largeArray.length);
  };
}

let printArrayLength = createLargeArray();
printArrayLength();

function outer(x) {
  return function (y) {
    return x + y;
  };
}

let add5 = outer(5);
console.log(add5(3));
