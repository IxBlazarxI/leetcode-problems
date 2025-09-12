/**
 * @param {string} s
 * @return {string}
 */

// a = 97, A = 65
// e = 101, E = 69
// i = 105, I = 73
// o = 111, O = 79
// u = 117, 85

var sortVowels = function(s) {
    let unsortedVowels = [];
    for (let i = 0; i <= s.length; i++) {
        if (s.charCodeAt(i) == 97 || s.charCodeAt(i) == 101 || s.charCodeAt(i) == 105 || s.charCodeAt(i) == 111 || s.charCodeAt(i) == 117 || s.charCodeAt(i) == 65 || s.charCodeAt(i) == 69 || s.charCodeAt(i) == 73 || s.charCodeAt(i) == 79 || s.charCodeAt(i) == 85) {
            unsortedVowels.push(s.charCodeAt(i));
        }
    }
    // console.log(unsortedVowels);
    let sortedVowels = unsortedVowels.sort((a, b) => b - a);
    // console.log(sortedVowels);

    let str = s.split('');

    for (let i = 0; i < s.length; i++) {
        if (s.charCodeAt(i) == 97 || s.charCodeAt(i) == 101 || s.charCodeAt(i) == 105 || s.charCodeAt(i) == 111 || s.charCodeAt(i) == 117 || s.charCodeAt(i) == 65 || s.charCodeAt(i) == 69 || s.charCodeAt(i) == 73 || s.charCodeAt(i) == 79 || s.charCodeAt(i) == 85) {
            str[i] = String.fromCharCode(sortedVowels.pop());
        }
    }
    return str.join("");
};
