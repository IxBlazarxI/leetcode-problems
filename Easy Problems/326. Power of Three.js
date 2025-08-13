/**
 * @param {number} n
 * @return {boolean}
 */

var isPowerOfThree = function(n) {
    if (n <= 0) {
        return false;
    }
    while (n % 3 == 0) {
        n /= 3;
    }
    if (n == 1) {
        return true;
    }
    return false;
};

var isPowerOfThree = function(n) {
    if (n <= 0) {
        return false;
    }
    const logValue = (Math.log(n) / Math.log(3));
    if (3 ** Math.round(logValue) === n) {
        return true;
    }
    return false;
};

console.log(isPowerOfThree(27));
console.log(isPowerOfThree(81));
console.log(isPowerOfThree(243));
console.log(isPowerOfThree(45));


