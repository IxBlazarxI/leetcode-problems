/**
 * @param {number[]} nums
 * @return {number[]}
 */
var replaceNonCoprimes = function(nums) {
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

  let resultStack = [];
  for (let i = 0; i < nums.length; i++) {
    resultStack.push(nums[i]);
    while (resultStack.length > 1) {
      let a = resultStack[resultStack.length - 1];
      let b = resultStack[resultStack.length - 2];
      let g = gcd(a, b);
      if (g > 1) {
        let lcm = (a * b) / g;
        resultStack.pop();
        resultStack.pop();
        resultStack.push(lcm);
      } else {
        break;
      }
    }
  }
  return resultStack;
};

