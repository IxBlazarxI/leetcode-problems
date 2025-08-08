/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    // A mapping function to map all Roman numerals to their corresponding integer values.
    var map = {
        'I' : 1, 'V' : 5, 'X' : 10, 'L' : 50, 'C' : 100, 'D' : 500, 'M' : 1000,
    }
    // Initializing number to 0. 
    let number = 0;
    
    // For loop to iterate through the string.
    for (i = 0; i < s.length; i++) {
        // If current number has the value less than the next number, subtract.
        // Else, add both numbers.
        if (map[s[i]] < map[s[i + 1]]) {
            number -= map[s[i]];
        } else {
            number += map[s[i]];
        }
    }
    return number
};
