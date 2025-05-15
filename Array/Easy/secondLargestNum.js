nums = [8, 8, 7, 6, 5];

function fineSecondLargest(nums) {
  let firstLargestNum = nums[0];
  let secondLargestNum = nums[1];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > firstLargestNum) {
      let firstLargestNum = nums[i];
      let secondLargestNum = firstLargestNum;
    }

    if (firstLargestNum === secondLargestNum && nums[i] < secondLargestNum)
      secondLargestNum = nums[i];
  }
  return secondLargestNum;
}

console.log(fineSecondLargest(nums));
