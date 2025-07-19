/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let result = nums[0];
  for (let i = 0; i < nums.length; i++) {
    let currentSum = 0;
    for (let j = i; j < nums.length; j++) {
      currentSum = currentSum + nums[j];
      result = Math.max(result, currentSum);
    }
  }
  return result;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Output: 6
console.log(maxSubArray([1])); // Output: 1
