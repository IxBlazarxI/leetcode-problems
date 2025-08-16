/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    let max = "";
    for (let i = 0; i < num.length - 2; i++) {
        if (num[i] === num[i + 1] && num[i + 1] === num[i + 2]) {
            let nums = num[i] + num[i + 1] + num[i + 2];
            if (nums > max) {
                max = nums;
            }
        }
    }
    return max;
};

let num = "12124211111999";
console.log(largestGoodInteger(num));
