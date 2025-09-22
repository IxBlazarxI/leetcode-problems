/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
  const frequency = {};
  for (const item of nums) {
    if (frequency[item]) {
      frequency[item]++;
    } else {
      frequency[item] = 1;
    }
  }
  let max = 0;
  let count = 0; 
  for (let i = 0; i < nums.length; i++) {
    if (frequency[nums[i]] > max) {
      max = frequency[nums[i]];
      count = 1;
    } else if (frequency[nums[i]] === max) {
      count++;
    }
  }
  return count;
};
