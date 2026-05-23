const getSum = (x, y) => {
  return x + y;
};

console.log(getSum(5, 10)); // Output: 15

const calculateTotal = (amount, taxRate = 0.05) => {
  return amount + amount * taxRate;
};

console.log(calculateTotal(100));

const sum = (num1, num2) => num1 + num2;

console.log(sum(3, 7)); // Output: 10

function greet() {
  const developer = "Jessica";
  console.log("Hello there!");
}

// console.log(developer);

function exampleFunction() {
  return "Hello";
  return "World!";
}

console.log(exampleFunction());

const developer = "Jessica";

function greet() {
  console.log("Hello, " + developer);
}

greet();

const add = (num1, num2) => num1 + num2;
console.log(add(0, 0) + 10);

const example = (param1, param2) => param1 + param2;
console.log(example(3, "Something"));

const sum1 = (num1, num2) => num1 + num2;
console.log(sum1(0, 0) + num2);

const divideTwoNumbers = (num1, num2) => num1 / num2;
console.log(divideTwoNumbers(3, 0));
