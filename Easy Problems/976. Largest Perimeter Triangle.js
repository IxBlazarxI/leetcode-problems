/**
 * @param {number[]} nums
 * @return {number}
 */
//var largestPerimeter = function(nums) {
//  nums.sort((a, b) => a - b);
//  let n = nums.length;
//  let max = 0;
//  for (let i = 0; i < n - 2; i++) {
//    let area = 0;
//    if (nums[i] + nums[i + 1] < nums[i + 2]) {
//      continue;
//    } else {
//      if (nums[i] + nums[i + 1] > nums[i + 2]) {
//        area = Math.max(max, nums[i] + nums[i + 1] + nums[i + 2]);
//        if (area > max) {
//          max = area;
//        }
//      }
//    }
//  }
//  return max;
//};

var largestPerimeter = function(nums) {
  nums.sort((a, b) => b - a);
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] < nums[i + 1] + nums[i + 2]) {
      return nums[i] + nums[i + 1] + nums[i + 2];
    }
  }
  return 0;
}

let nums = [1,2,2,4,18,8];
console.log(largestPerimeter(nums));
