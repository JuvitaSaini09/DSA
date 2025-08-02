function sumOfAllNumbers(arr) {
  if (arr.length === 0) return 0;
  let i = arr.length - 1;
  let currentSum = arr[i] % 2 === 0 ? 0 : arr[i];
  return currentSum + sumOfAllNumbers(arr.slice(0, i));
}

console.log(sumOfAllNumbers([1, 2, 3])); // Output: 4

console.log(sumOfAllNumbers([1, 2, 3, 4, 5])); // Output: 9
