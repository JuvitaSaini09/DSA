// Given an array arr[], the task is to reverse the array. Reversing an array means rearranging the elements such that the first element becomes the last, the second element becomes second last and so on.

// Examples:

// Input: arr[] = {1, 4, 3, 2, 6, 5}
// Output: {5, 6, 2, 3, 4, 1}
// Explanation: The first element 1 moves to last position, the second element 4 moves to second-last and so on.

// Input: arr[] = {4, 5, 1, 2}
// Output: {2, 1, 5, 4}
// Explanation: The first element 4 moves to last position, the second element 5 moves to second last and so on.

function arrayReverse(arr) {
  let reversedArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArray.push(arr[i]);
  }
  return reversedArray;
}

// when you want memory efficiency and you're okay with modifying the array (this is how Array.prototype.reverse() works in JavaScript
function arrayReverse2(arr) {
  //half iteratea and swap
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]]; // ES6 destructuring assignment
    left++;
    right--;
  }
  return arr;
}

console.log(arrayReverse([1, 4, 3, 2, 6, 5]));
