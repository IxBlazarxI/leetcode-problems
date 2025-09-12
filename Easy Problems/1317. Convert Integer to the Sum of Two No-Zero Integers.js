/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
  subString = "0";
  for (let i = 1; i <= n; i++) {
    let j = n - i;
    if (!i.toString().includes(subString) && !j.toString().includes(subString)) {
      return [i, j];
    }
  }
};

console.log(getNoZeroIntegers(5));
