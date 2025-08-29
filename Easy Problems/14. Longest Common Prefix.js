/**
 * @param {string[]} strs
 * @return {string}
 */
let strs = ["flower", "flow", "flight"];
var longestCommonPrefix = function(strs) {
    res = "";
    if (strs.length <= 1) {
        return strs[0];
    } else {
        for (let i = 0; i < strs[0].length; i++) {
            for (let j = 1; j < strs.length; j++) {
                if (strs[0][i] !== strs[j][i]) {
                    return res;
                }
            }
            res += strs[0][i];
        }
    }
    return res;
};

console.log(longestCommonPrefix(strs));
