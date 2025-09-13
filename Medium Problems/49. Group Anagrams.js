/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  if (strs.length < 1) {
    return "";
  }    
  let res = [];
  for (let i = 0; i < strs.length; i++) {
    let str = strs;
    for (let j = 1; j < strs.length; j++) {
      if (strs[i] == str[j].split("").sort().join("")) {
        res.push(strs[i]);
      }
    }
  }
  console.log(res);

};

strings = ["eat", "tea", "tan", "ate", "nat", "bat"];
groupAnagrams(strings);
