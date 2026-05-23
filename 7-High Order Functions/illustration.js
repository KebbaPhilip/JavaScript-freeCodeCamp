// function operateOnArray(arr, operation) {
//   let result = [];

//   for (i = 0; i < arr.length; i++) {
//     result.push(operation(arr[i]));
//   }

//   return result;
// }

// function addTwo(x) {
//   return x + 2;
// }

// let numbers = [1, 3, 5, 6, 8];

// let plusTwo = operateOnArray(numbers, addTwo);
// console.log(plusTwo);

function multiplyBy(factor) {
  return function (number) {
    return number * factor;
  };
}

let double = multiplyBy(2);
let triple = multiplyBy(3);

let result = double(5);
let final = triple(4);

console.log(result); // 10
console.log(final); // 15
