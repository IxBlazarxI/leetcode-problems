/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const mergedArr = nums1.concat(nums2);
  const sortedArr = mergedArr.sort((a, b) => a - b);
  if (sortedArr.length % 2 === 0) {
    let mid = Math.floor(sortedArr.length / 2);
    return (sortedArr[mid] + sortedArr[mid - 1]) / 2;
  } else {
    let mid = Math.floor(sortedArr.length / 2);
    return sortedArr[mid];
  }
};

let numArr1 = [1, 2, 3, 4, 5];
let numArr2 = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
console.log(findMedianSortedArrays(numArr1, numArr2));
