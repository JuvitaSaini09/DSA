//my solution
function sumOfAllNumbers(arr) {
  if (arr.length < 0) return 0;
  let i = arr.length - 1;
  return arr[i] + sumOfAllNumbers(arr.slice(0, i));
}

//chat gpt solution
function sumOfAllNumbers(arr) {
  if (arr.length < 0) return 0;
  return arr.pop() + sumOfAllNumbers(arr);
}

console.log(sumOfAllNumbers([1, 2, 3])); // output: 6
console.log(sumOfAllNumbers([1, 2, 3, 4, 5])); // output: 15
