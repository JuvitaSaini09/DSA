const factorialOfNumber = (n) => {
  if (n === 1 || n === 0) return 1;
  return n * factorialOfNumber(n - 1);
};

console.log(factorialOfNumber(5)); // Output: 120
console.log(factorialOfNumber(0)); // Output: 1
console.log(factorialOfNumber(1)); // Output: 1
