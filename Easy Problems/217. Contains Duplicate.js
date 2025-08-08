/**
 * @param {number[]} nums
 * @return {boolean}
 */

/** 
 * Start from the starting index.
 * For that index, iterate through the entire array and check whether its equal to something.
 * If it is, return true.
 * If its not, go to the next index, and repeat.
 * If you reach the end of the array and not find any duplicates, return false.
 */

var containsDuplicate = function(nums) {
    for (i = 0; i < nums.length; i++) {
        for (j = i + 1; j < nums.length; j++) {
            if (nums[i] == nums[j]) {
                return true;
            }
        }      
    }    
    return false;
};

// The above solution works, but its super slow, and the time complexity is O(n^2) because its iterating the entire array for each element in the array.

var containsDuplicate = function(nums) {
    const thisSet = new Set();
    let size = 0;
    for (i = 0; i < nums.length; i++) {
        thisSet.add(nums[i]);
        if (thisSet.size === size) {
            return true;
        }
    size = thisSet.size;   
    }
    return false;
};
