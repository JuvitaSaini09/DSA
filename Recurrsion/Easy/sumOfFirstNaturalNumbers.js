function sumOfFirstNaturalNumbers(n) {
  if (n <= 0) return n;
  return sumOfFirstNaturalNumbers(n - 1) + n;
}

console.log(sumOfFirstNaturalNumbers(3));
// Output: 6

console.log(sumOfFirstNaturalNumbers(10));
// Output: 55
