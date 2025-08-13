/**
 * @param {number} n
 * @return {boolean}
 */

// Loop approach

var isPowerOfThree = function(n) {
    if (n <= 0) {
        return false;
    }
    while (n % 3 == 0) {
        n = n / 3;
    }
    if (n == 1) {
        return true;
    }
    return false;
};

// Using log function, if x is an integer, return true.

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
console.log(isPowerOfThree(729));
console.log(isPowerOfThree(2187));
console.log(isPowerOfThree(45));
