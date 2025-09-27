/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let stringNum = x.toString().split('').reverse().join('');
    let string = x.toString();
    let ans = (stringNum == string) ? true : false
    return ans;
};
