/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function(nums) {
  if (nums.length == 1) {
    return nums[0];
  }

  let newNums = [];
  while (nums.length > 1) {
    for (let i = 0; i < nums.length - 1; i++) {
      newNums.push((nums[i] + nums[i + 1]) % 10);
    }
    nums = newNums;
    newNums = [];
  }
  return nums[0];
};

let nums = [1, 2, 3, 4, 5];
console.log(triangularSum(nums));
