function largestNum(nums) {
  let largestNum = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > largestNum) {
      largestNum = nums[i];
    }
  }
  return largestNum;
}
//comment
console.log(largestNum([3, 3, 6, 1])); //return 6
