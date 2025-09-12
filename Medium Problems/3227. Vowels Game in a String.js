/**
 * @param {string} s
 * @return {boolean}
 */
var doesAliceWin = function(s) {
  for (let i = 0; i < s.length; i++) {
    if (s.includes("a") || s.includes("e") || s.includes("i") || s.includes("o") || s.includes("u")) {
      return true;
    }
  }    
  return false;
};
